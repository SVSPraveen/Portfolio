import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverGlow?: boolean;
  accentColor?: string;
}

export default function Card({ children, className = "", hoverGlow = false, accentColor }: CardProps) {
  const glowStyle = hoverGlow && accentColor
    ? { "--glow-color": accentColor } as React.CSSProperties
    : {};

  return (
    <div
      className={`glass rounded-3xl p-6 relative overflow-hidden transition-all duration-300 ${hoverGlow ? "hover:-translate-y-1" : ""} ${className}`}
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        ...glowStyle,
      }}
    >
      {children}
    </div>
  );
}
