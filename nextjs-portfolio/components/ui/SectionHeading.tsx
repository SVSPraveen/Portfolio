interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({ title, subtitle, centered = true }: SectionHeadingProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{title}</h2>
      <div
        className={`h-1 w-20 rounded-full ${centered ? "mx-auto" : ""}`}
        style={{ background: "linear-gradient(90deg, #00d4ff, #7b2fff)" }}
      />
      {subtitle && (
        <p className={`mt-4 text-gray-400 max-w-2xl ${centered ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  );
}
