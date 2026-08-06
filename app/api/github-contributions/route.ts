import { NextResponse } from 'next/server';

const query = `
  query($userName:String!) {
    user(login: $userName){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`;

export async function GET() {
  const token = process.env.GITHUB_TOKEN;
  const username = process.env.GITHUB_USERNAME;

  if (!token || !username) {
    return NextResponse.json(
      { error: 'GitHub credentials are not configured.' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: username },
      }),
      // Revalidate frequently or never? Cache mostly for a few hours if wanted,
      // but standard fetch is fine. Next 14 handles caching nicely.
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      throw new Error(`GitHub API error: ${res.status} ${res.statusText}`);
    }

    const json = await res.json();
    if (json.errors) {
      throw new Error(json.errors[0]?.message || 'GraphQL Error');
    }

    const calendar = json.data.user.contributionsCollection.contributionCalendar;
    return NextResponse.json({
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    });
  } catch (error) {
    console.error('Error fetching GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch GitHub contributions.' },
      { status: 500 }
    );
  }
}
