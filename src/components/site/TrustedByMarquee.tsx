const companies = [
  "PHARMA CORP",
  "BIO-MED",
  "GLOBAL HEALTH",
  "APEX LABS",
  "SYNTHESIS",
];

export function TrustedByMarquee() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6">
      {companies.map((name) => (
        <span
          key={name}
          className="text-lg font-display font-semibold text-white/80 whitespace-nowrap"
        >
          {name}
        </span>
      ))}
    </div>
  );
}
