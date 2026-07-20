const companies = ["PHARMA CORP", "BIO-MED", "GLOBAL HEALTH", "APEX LABS", "SYNTHESIS"];

export function TrustedByMarquee() {
  return (
    <div className="overflow-hidden">
      <ul className="flex w-max animate-marquee-right items-center gap-x-12 px-6">
        {[...companies, ...companies].map((name, i) => (
          <li
            key={`${name}-${i}`}
            className="text-lg font-display font-semibold text-white/80 whitespace-nowrap"
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
}
