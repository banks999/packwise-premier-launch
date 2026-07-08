const companies = [
  "PHARMA CORP",
  "BIO-MED",
  "GLOBAL HEALTH",
  "APEX LABS",
  "SYNTHESIS",
];

function MarqueeTrack() {
  return (
    <>
      {companies.map((name) => (
        <span
          key={name}
          className="shrink-0 text-xl font-display font-bold text-white whitespace-nowrap"
        >
          {name}
        </span>
      ))}
    </>
  );
}

export function TrustedByMarquee() {
  return (
    <div className="relative overflow-hidden opacity-50 grayscale mix-blend-luminosity">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-navy-deep to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-navy-deep to-transparent"
      />

      <div className="flex w-max animate-marquee-right motion-reduce:animate-none">
        <div className="flex shrink-0 items-center gap-12 md:gap-16 px-6 md:px-8">
          <MarqueeTrack />
        </div>
        <div className="flex shrink-0 items-center gap-12 md:gap-16 px-6 md:px-8" aria-hidden>
          <MarqueeTrack />
        </div>
      </div>
    </div>
  );
}
