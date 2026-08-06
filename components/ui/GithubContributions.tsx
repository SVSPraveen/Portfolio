'use client';

import { useEffect, useState } from 'react';

type ContributionDay = {
  contributionCount: number;
  date: string;
};

type Week = {
  contributionDays: ContributionDay[];
};

type ContributionData = {
  totalContributions: number;
  weeks: Week[];
};

export default function GithubContributions() {
  const [data, setData] = useState<ContributionData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchContributions() {
      try {
        const res = await fetch('/api/github-contributions');
        if (!res.ok) {
          throw new Error('Failed to fetch');
        }
        const json = await res.json();
        if (json.error) {
          throw new Error(json.error);
        }
        setData(json);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  const getColor = (count: number, maxCount: number) => {
    if (count === 0) return '#F3F1FA'; // bgAlt roughly
    
    const ratio = Math.min(count / Math.max(maxCount, 1), 1);
    
    // Scale from light violet to accentPurple (#A855F7)
    if (ratio < 0.25) return 'rgba(168, 85, 247, 0.25)';
    if (ratio < 0.5) return 'rgba(168, 85, 247, 0.5)';
    if (ratio < 0.75) return 'rgba(168, 85, 247, 0.75)';
    return '#A855F7';
  };

  if (loading) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cardBorder shadow-sm animate-pulse">
        <div className="h-6 bg-bgAlt rounded w-48 mb-6 mx-auto"></div>
        <div className="h-[120px] bg-bgAlt rounded-xl w-full"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cardBorder shadow-sm text-center">
        <p className="text-textSecondary text-sm font-medium">GitHub activity is temporarily unavailable</p>
      </div>
    );
  }

  let maxCount = 1;
  data.weeks.forEach(week => {
    week.contributionDays.forEach(day => {
      if (day.contributionCount > maxCount) {
        maxCount = day.contributionCount;
      }
    });
  });

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cardBorder shadow-sm">
      <h3 className="text-center text-lg font-semibold text-textPrimary mb-6">
        {data.totalContributions} contributions in the last year
      </h3>
      <div className="overflow-x-auto pb-2 flex justify-center">
        <div className="flex gap-1 min-w-max">
          {data.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: getColor(day.contributionCount, maxCount) }}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
