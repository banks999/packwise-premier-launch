import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

/** Eyebrow: bio-yellow bar + uppercase tracked label. The one recurring accent mark. */
export function Eyebrow({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="block h-4 w-1 flex-none bg-bio" />
      <span className="font-display text-[12.5px] font-semibold uppercase tracking-[0.2em] text-navy">
        {children}
      </span>
    </div>
  );
}

/** Primary "Schedule a Consultation" CTA — the single funnel button, styled once. */
export function CtaButton({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to="/contact"
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-bio px-8 py-4 font-display text-[15px] font-semibold text-navy ring-1 ring-inset ring-navy/20",
        "transition-all duration-200 ease-[cubic-bezier(.34,1.56,.64,1)]",
        "hover:-translate-y-0.5 hover:scale-[1.012] hover:shadow-[0_12px_26px_rgba(28,42,68,0.3)]",
        className,
      )}
    >
      {children ?? "Schedule a Consultation"}
    </Link>
  );
}

/** Hero band: faint world map washed out by a left-to-right white gradient. */
export function Hero({
  eyebrow,
  title,
  subtitle,
  titleMaxWidth = "18ch",
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  titleMaxWidth?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden border-b border-border md:min-h-[640px]">
      <div className="absolute inset-0 bg-[url('/world-map.jpg')] bg-cover bg-center opacity-90" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg,rgba(255,255,255,0.88) 0%,rgba(255,255,255,0.48) 44%,rgba(255,255,255,0.08) 100%)",
        }}
      />
      <Container className="relative w-full py-[clamp(56px,8vw,104px)]">
        <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        <h1
          className="font-display text-[clamp(30px,4.4vw,52px)] font-bold leading-[1.1] tracking-[-0.015em] text-navy"
          style={{ maxWidth: titleMaxWidth }}
        >
          {title}
        </h1>
        <p className="mt-6 max-w-[56ch] text-[clamp(16px,2vw,20px)] leading-relaxed text-foreground">
          {subtitle}
        </p>
        {children ? <div className="mt-9">{children}</div> : null}
      </Container>
    </section>
  );
}

/** Navy full-bleed CTA band used at the foot of Home / About / Services. */
export function CtaBand({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <section className="bg-navy">
      <div className="mx-auto max-w-[1280px] 2xl:max-w-[1536px] px-6 py-24 text-center md:px-12 md:py-28">
        <span className="mx-auto mb-7 block h-[3px] w-14 bg-bio" />
        <h2 className="font-display text-[clamp(1.625rem,3.6vw,2.5rem)] font-bold leading-tight tracking-[-0.01em] text-white">
          {title}
        </h2>
        <p className="mx-auto mb-9 mt-4 max-w-[52ch] text-[clamp(0.9375rem,1.8vw,1.125rem)] leading-relaxed text-[#B7BECB]">
          {subtitle}
        </p>
        <CtaButton />
      </div>
    </section>
  );
}

/** Shared page container. Design uses a 1180px max width with fluid gutters. */
export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[1280px] 2xl:max-w-[1536px] px-6 md:px-12", className)}>{children}</div>
  );
}
