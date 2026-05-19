import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { TrendingUp, Building2, Network, ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Core Pharmaceutical Capabilities | Pack-Wise" },
      {
        name: "description",
        content:
          "Commercial acceleration, turnkey plant engineering, and global supply chain integration for pharmaceutical operators.",
      },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    icon: <TrendingUp size={22} />,
    title: "B2B Commercialization & Sales Acceleration",
    body: "We help pharma brands rapidly expand distribution, optimize commercial strategies, and maximize global market penetration with operator-grade execution.",
    bullets: [
      "Distribution network mapping and qualification",
      "Regulated market entry playbooks (EU, MENA, Asia)",
      "Commercial pricing and tender optimization",
      "Strategic partner identification and brokerage",
    ],
  },
  {
    n: "02",
    icon: <Building2 size={22} />,
    title: "Turnkey Plant Engineering & Setup",
    body: "Full-scale operational design, regulatory-compliant facility setup, and end-to-end pharmaceutical plant execution — delivered under one accountability line.",
    bullets: [
      "Concept design through commissioning",
      "GMP, EU Annex 1, and FDA-aligned layouts",
      "Equipment selection, sourcing, and validation",
      "Documentation packages and audit readiness",
    ],
  },
  {
    n: "03",
    icon: <Network size={22} />,
    title: "Global Supply Chain Integration",
    body: "Connecting pharma companies with premium, certified raw material suppliers and high-grade packaging manufacturers for polymer bottles, film bags, and blister foils.",
    bullets: [
      "Qualified supplier identification and audit",
      "Primary packaging sourcing (polymer, foil, film)",
      "Multi-region supply resilience architecture",
      "Long-term commercial framework negotiation",
    ],
  },
];

function ServicesPage() {
  return (
    <>
      <section className="bg-navy-deep text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bio">
              Our Capabilities
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Three core practices.{" "}
              <span className="text-bio">One operating standard.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">
              Pack-Wise engagements integrate commercial, engineering, and supply
              chain disciplines into a single, accountable mandate.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32 space-y-6">
        {services.map((s) => (
          <article
            key={s.n}
            className="group relative rounded-2xl border border-border bg-card p-8 md:p-12 hover:border-navy hover:shadow-2xl hover:shadow-navy/10 hover:-translate-y-1 transition-all duration-300"
          >
            <div className="grid gap-10 md:grid-cols-[1fr_1.5fr]">
              <div>
                <div className="flex items-center gap-3">
                  <span className="hex-clip flex h-12 w-14 items-center justify-center bg-navy text-bio">
                    {s.icon}
                  </span>
                  <span className="font-display text-3xl font-semibold text-bio-foreground/30">
                    {s.n}
                  </span>
                </div>
                <h2 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-navy leading-tight">
                  {s.title}
                </h2>
              </div>
              <div>
                <p className="text-foreground/75 text-base md:text-lg leading-relaxed">{s.body}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/80">
                      <Check size={16} className="mt-0.5 shrink-0 text-navy" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}

        <div className="pt-10 text-center">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-bio px-6 py-3.5 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/30 transition-all"
          >
            Submit a Confidential Brief
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
