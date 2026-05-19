import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Cog, Globe2, FlaskConical, Package } from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import heroImg from "@/assets/hero-plant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pack-Wise — Pharmaceutical Operations from Production to Packaging" },
      {
        name: "description",
        content:
          "Scale pharma sales, engineer turnkey production plants, and secure compliant global supply chains with Pack-Wise.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Pharmaceutical production facility"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
          <div className="absolute inset-0 hex-grid opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="max-w-3xl">
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              Optimizing Pharmaceutical Operations from{" "}
              <span className="text-bio">Production to Packaging.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
              We help pharma manufacturers scale sales, engineer turnkey production plants,
              and secure bulletproof global supply chains.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-bio px-6 py-3.5 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/20 transition-all"
              >
                Partner With Us
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white hover:bg-white/5 hover:border-white/50 transition-all"
              >
                Our Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Sector Focus Split */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Who We Serve"
          title="Two pillars of the pharmaceutical industrial economy."
          subtitle="From brand-side commercialization to packaging-grade manufacturing — Pack-Wise operates at the intersection where pharma scales."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <SectorCard
            icon={<FlaskConical size={22} />}
            tag="01 — Brand Side"
            title="Pharmaceutical Brands & Laboratories"
            body="Scale commercial reach, expand into regulated markets, and structure operations to meet enterprise growth without compromising on GMP integrity."
          />
          <SectorCard
            icon={<Package size={22} />}
            tag="02 — Manufacturing Side"
            title="Specialized Pharma Packaging Manufacturers"
            body="Producers of polymer bottles, film bags, blister foils, and primary pharma packaging — connected to qualified buyers and engineered for compliance throughput."
          />
        </div>
      </section>

      {/* Core Value Prop */}
      <section className="bg-navy text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            dark
            eyebrow="Why Pack-Wise"
            title="Compliance, precision, and speed — engineered as one operating standard."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <ValueCard
              icon={<ShieldCheck size={22} />}
              title="Absolute Regulatory Compliance"
              body="GMP, ICH, FDA, and EMA frameworks embedded into every brief — zero shortcuts, zero exposure."
            />
            <ValueCard
              icon={<Cog size={22} />}
              title="Engineering Precision"
              body="Plant layouts, validation protocols, and equipment selection executed with industrial-grade rigor."
            />
            <ValueCard
              icon={<Globe2 size={22} />}
              title="Rapid Market Commercialization"
              body="Distribution networks and supply integrations that move qualified product from line to market in record cycles."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-canvas">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-tight">
            Ready to engineer your next pharmaceutical milestone?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            All briefs are reviewed under strict confidentiality within 24 business hours.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3.5 text-sm font-semibold text-navy-foreground hover:bg-navy-deep transition-all"
            >
              Request a Consultation
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function SectorCard({
  icon, tag, title, body,
}: { icon: React.ReactNode; tag: string; title: string; body: string }) {
  return (
    <div className="group relative rounded-xl border border-border bg-card p-8 md:p-10 hover:border-navy/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-300">
      <div className="flex items-center gap-3">
        <span className="hex-clip flex h-10 w-11 items-center justify-center bg-navy text-bio">
          {icon}
        </span>
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {tag}
        </span>
      </div>
      <h3 className="mt-6 font-display text-2xl md:text-3xl font-semibold text-navy leading-tight">
        {title}
      </h3>
      <p className="mt-4 text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function ValueCard({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm hover:border-bio/40 hover:bg-white/[0.06] transition-all duration-300">
      <span className="hex-clip flex h-10 w-11 items-center justify-center bg-bio text-navy">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-white/65 leading-relaxed">{body}</p>
    </div>
  );
}
