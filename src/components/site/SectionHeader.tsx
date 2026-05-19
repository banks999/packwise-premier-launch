export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <div className={`flex items-center gap-2 ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-1.5 w-1.5 hex-clip bg-bio" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
            {eyebrow}
          </span>
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-navy leading-[1.05]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
