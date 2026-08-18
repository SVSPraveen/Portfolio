'use client';

import { useEffect, useState, useRef } from 'react';

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
  const scrollRef = useRef<HTMLDivElement>(null);

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
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchContributions();
  }, []);

  useEffect(() => {
    if (data && scrollRef.current) {
      // On narrow viewports, auto-scroll to the far right so the latest contributions are immediately visible
      scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
    }
  }, [data]);

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
      <div className="w-full max-w-5xl mx-auto p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cardBorder shadow-sm animate-pulse">
        <div className="h-6 bg-bgAlt rounded w-48 mb-6 mx-auto"></div>
        <div className="h-[120px] bg-bgAlt rounded-xl w-full"></div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="w-full max-w-5xl mx-auto p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-cardBorder shadow-sm text-center">
        <p className="text-textSecondary text-sm font-medium">GitHub activity is temporarily unavailable</p>
      </div>
    );
  }

  // Flatten, deduplicate, and sort all dates chronologically (YYYY-MM-DD)
  const uniqueDaysMap = new Map<string, number>();
  data.weeks.forEach((w) => {
    w.contributionDays.forEach((d) => {
      if (d.date) {
        uniqueDaysMap.set(d.date, d.contributionCount);
      }
    });
  });

  const sortedDates = Array.from(uniqueDaysMap.keys()).sort((a, b) => a.localeCompare(b));

  let maxCount = 1;
  sortedDates.forEach((date) => {
    const count = uniqueDaysMap.get(date) || 0;
    if (count > maxCount) maxCount = count;
  });

  const sortedWeeks: Week[] = [];
  for (let i = 0; i < sortedDates.length; i += 7) {
    const weekDays = sortedDates.slice(i, i + 7).map((date) => ({
      date,
      contributionCount: uniqueDaysMap.get(date) || 0,
    }));
    sortedWeeks.push({ contributionDays: weekDays });
  }

  return (
    <div className="w-full max-w-5xl mx-auto p-5 sm:p-6 md:p-8 rounded-2xl bg-white/70 backdrop-blur-md border border-cardBorder shadow-sm flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-cardBorder/60 pb-4">
        <div>
          <h3 className="text-lg font-bold text-textPrimary text-center sm:text-left">
            GitHub Contribution Heatmap
          </h3>
          <p className="text-xs text-textSecondary text-center sm:text-left">
            Live 365-day public commit calendar fetched directly from @SVSPraveen
          </p>
        </div>
        <div className="px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold whitespace-nowrap">
          {data.totalContributions} Contributions in Last Year
        </div>
      </div>

      {/* Heatmap Grid — full width, no-scrollbar, centered on desktop, scrollable & latest-first on mobile */}
      <div 
        ref={scrollRef}
        className="overflow-x-auto no-scrollbar py-2 w-full flex justify-start md:justify-center"
      >
        <div className="flex gap-[3px] sm:gap-1 min-w-max">
          {sortedWeeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-[3px] sm:gap-1">
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  className="w-[11px] h-[11px] sm:w-3 sm:h-3 rounded-[2px] sm:rounded-sm transition-transform hover:scale-125 cursor-pointer"
                  style={{ backgroundColor: getColor(day.contributionCount, maxCount) }}
                  title={`${day.contributionCount} contributions on ${day.date}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend & Hint Footer */}
      <div className="flex flex-wrap items-center justify-between text-xs text-textSecondary pt-3 border-t border-cardBorder/60 gap-3">
        <span className="font-medium">💡 Hover over any box to view exact date &amp; commit count</span>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px]">Less</span>
          <div className="w-3 h-3 rounded-sm border border-cardBorder/40" style={{ backgroundColor: '#F3F1FA' }} title="No contributions" />
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(168, 85, 247, 0.25)' }} title="1-3 contributions" />
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(168, 85, 247, 0.5)' }} title="4-7 contributions" />
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(168, 85, 247, 0.75)' }} title="8-12 contributions" />
          <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: '#A855F7' }} title="13+ contributions" />
          <span className="text-[11px]">More</span>
        </div>
      </div>
    </div>
  );
}

