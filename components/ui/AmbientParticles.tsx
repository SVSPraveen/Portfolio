'use client';

import { useMemo } from 'react';

export default function AmbientParticles() {
  const particles = useMemo(() => {
    return Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      size: Math.random() * 6 + 3, // 3px to 9px bubbles
      left: Math.random() * 100, // 0% to 100% left
      top: Math.random() * 100, // 0% to 100% top
      color: ['#6366F1', '#8B5CF6', '#A855F7', '#EC4899'][i % 4],
      duration: Math.random() * 10 + 8, // 8s to 18s
      delay: Math.random() * 6, // 0s to 6s
      opacity: Math.random() * 0.35 + 0.2, // 0.2 to 0.55
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[-20] overflow-hidden w-full h-full select-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-float-particle pointer-events-none"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            top: `${p.top}%`,
            backgroundColor: p.color,
            opacity: p.opacity * 0.7, // Subtle, non-distracting ambient opacity
            boxShadow: `0 0 8px ${p.color}`,
            // @ts-expect-error Custom CSS variable for animation
            '--duration': `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
