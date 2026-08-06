import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
  const username = process.env.GITHUB_USERNAME || 'SVSPraveen';

  try {
    const res = await fetch(`https://github.com/users/${username}/contributions`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      },
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error(`GitHub page fetch failed with status ${res.status}`);
    }

    const html = await res.text();

    // 1. Extract total contributions
    let totalContributions = 0;
    const totalMatch = html.match(/([0-9,]+)\s+contributions\s+in the last year/i);
    if (totalMatch) {
      totalContributions = parseInt(totalMatch[1].replace(/,/g, ''), 10);
    }

    // 2. Parse tooltips by element ID (for="contribution-day-component-...")
    const idToCount = new Map<string, number>();
    const tooltipRegex = /<tool-tip[^>]*for="([^"]+)"[^>]*>([\s\S]*?)<\/tool-tip>/gi;
    let tMatch;
    while ((tMatch = tooltipRegex.exec(html)) !== null) {
      const id = tMatch[1];
      const text = tMatch[2].trim();
      if (!text.toLowerCase().includes('no contributions')) {
        const countMatch = text.match(/([0-9,]+)\s+contribution/i);
        if (countMatch) {
          idToCount.set(id, parseInt(countMatch[1].replace(/,/g, ''), 10));
        }
      }
    }

    // 3. Parse all <td> elements with data-date
    const tdRegex = /<td[^>]*data-date="([0-9]{4}-[0-9]{2}-[0-9]{2})"[^>]*>/gi;
    const daysMap = new Map<string, number>();
    let tdMatch;

    while ((tdMatch = tdRegex.exec(html)) !== null) {
      const fullTdTag = tdMatch[0];
      const date = tdMatch[1];

      const idMatch = fullTdTag.match(/id="([^"]+)"/i);
      const id = idMatch ? idMatch[1] : '';

      let count = 0;
      if (id && idToCount.has(id)) {
        count = idToCount.get(id)!;
      } else {
        const levelMatch = fullTdTag.match(/data-level="([0-4])"/i);
        if (levelMatch && levelMatch[1] !== '0') {
          count = parseInt(levelMatch[1], 10);
        }
      }

      daysMap.set(date, count);
    }

    // Convert map to sorted days array
    const days: { date: string; contributionCount: number }[] = [];
    Array.from(daysMap.keys())
      .sort((a, b) => a.localeCompare(b))
      .forEach((date) => {
        days.push({ date, contributionCount: daysMap.get(date) || 0 });
      });

    // 4. Group days into 7-day calendar columns
    const weeks: { contributionDays: { date: string; contributionCount: number }[] }[] = [];
    for (let i = 0; i < days.length; i += 7) {
      weeks.push({
        contributionDays: days.slice(i, i + 7),
      });
    }

    return NextResponse.json({
      totalContributions,
      weeks,
    });
  } catch (error) {
    console.error('Error fetching public GitHub contributions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch public GitHub contributions.' },
      { status: 500 }
    );
  }
}
