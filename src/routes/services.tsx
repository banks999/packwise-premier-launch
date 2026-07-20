import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  Layers,
  ShieldCheck,
  Network,
  PenLine,
  TrendingDown,
  ClipboardList,
  ArrowRight,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Pharmaceutical Packaging Services | Pack-Wise" },
      {
        name: "description",
        content:
          "Explore Pack-Wise pharmaceutical packaging services including regulatory compliance, sourcing, artwork coordination, and cost optimization for global pharma brands.",
      },
      {
        name: "keywords",
        content:
          "pharmaceutical packaging services, pharma packaging compliance, packaging sourcing, artwork and labeling compliance, packaging cost optimization",
      },
      { property: "og:title", content: "Pharmaceutical Packaging Services | Pack-Wise" },
      {
        property: "og:description",
        content:
          "Explore Pack-Wise pharmaceutical packaging services including regulatory compliance, sourcing, artwork coordination, and cost optimization for global pharma brands.",
      },
      { property: "og:url", content: "https://pack-wise.com/services" },
      { name: "twitter:title", content: "Pharmaceutical Packaging Services | Pack-Wise" },
      {
        name: "twitter:description",
        content:
          "Explore Pack-Wise pharmaceutical packaging services including regulatory compliance, sourcing, artwork coordination, and cost optimization for global pharma brands.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pack-wise.com/services" }],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    icon: <Layers size={22} />,
    title: "Packaging Strategy & Development",
    body: "Robust, market-ready packaging strategies from concept to format.",
    bullets: [
      "Primary & secondary packaging design",
      "Material compatibility and stability guidance",
      "Sustainable packaging alternatives",
      "Format optimization for manufacturing",
    ],
  },
  {
    n: "02",
    icon: <ShieldCheck size={22} />,
    title: "Regulatory Compliance Support",
    body: "Compliance support for FDA, EMA, and global markets.",
    bullets: [
      "USFDA, EMA, and global market compliance",
      "Serialization and Track & Trace implementation",
      "Child-resistant and senior-friendly formats",
      "Tamper-evident packaging solutions",
    ],
  },
  {
    n: "03",
    icon: <Network size={22} />,
    title: "Vendor Sourcing & Management",
    body: "Pre-qualified supplier sourcing and qualification management.",
    bullets: [
      "Supplier identification and qualification",
      "Rigid plastics, glass, and flexible films",
      "Quality audits and corrective action (CAPA)",
      "Contract negotiation and terms",
    ],
  },
  {
    n: "04",
    icon: <PenLine size={22} />,
    title: "Artwork & Design Coordination",
    body: "Artwork lifecycle management for compliant brand expression.",
    bullets: [
      "Regulatory-compliant artwork creation",
      "Leaflets, IFUs, and Medication Guides",
      "Labeling control and version management",
      "Print proofing and color consistency",
    ],
  },
  {
    n: "05",
    icon: <TrendingDown size={22} />,
    title: "Cost Optimization",
    body: "Targeted packaging cost reductions without quality loss.",
    bullets: [
      "Packaging spend and value analysis",
      "Material downgauging and right-sizing",
      "Supply base consolidation",
      "Logistics and palletization efficiency",
    ],
  },
  {
    n: "06",
    icon: <ClipboardList size={22} />,
    title: "Project Management",
    body: "Rapid, coordinated delivery from concept to launch.",
    bullets: [
      "Cross-functional team leadership",
      "Timeline and milestone tracking",
      "Risk identification and mitigation",
      "Launch readiness and commercial rollout",
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
              Six core practices. <span className="text-bio">One operating standard.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-white/70 text-lg leading-relaxed">
              Pack-Wise engagements integrate strategic development, compliance, and supply chain
              disciplines into a single, accountable mandate.
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
            className="inline-flex items-center gap-2 rounded-md bg-bio px-7 py-4 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/30 transition-all"
          >
            Schedule a Consultation
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
