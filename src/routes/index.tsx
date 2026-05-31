import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight, ShieldCheck, Globe2, Network, Layers, PenLine,
  TrendingDown, ClipboardList, Package, FileText, Tag, Lock,
  Target, Sliders, Zap,
} from "lucide-react";
import { SectionHeader } from "@/components/site/SectionHeader";
import heroImg from "@/assets/hero-plant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pack-Wise — Pharmaceutical Packaging Consulting" },
      {
        name: "description",
        content:
          "We help pharmaceutical companies streamline packaging sourcing, ensure regulatory compliance, and optimize costs through a reliable global vendor network.",
      },
    ],
  }),
  component: HomePage,
});

const consultingServices = [
  {
    icon: <Layers size={22} />,
    title: "Packaging Strategy & Development",
    body: "Tailored designs meeting strict product requirements and regulatory guidelines.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Regulatory Compliance Support",
    body: "Guaranteed adherence to FDA, EU, and global labelling/serialization standards.",
  },
  {
    icon: <Network size={22} />,
    title: "Vendor Sourcing & Management",
    body: "Direct access to trusted manufacturers for bottles, closures, glass, and leaflets.",
  },
  {
    icon: <PenLine size={22} />,
    title: "Artwork & Design Coordination",
    body: "Market-ready packaging designs aligning branding with regulatory needs.",
  },
  {
    icon: <TrendingDown size={22} />,
    title: "Cost Optimization",
    body: "Proven strategies to reduce expenses without compromising quality.",
  },
  {
    icon: <ClipboardList size={22} />,
    title: "Project Management",
    body: "Seamless stakeholder coordination ensuring rapid concept-to-commercialization execution.",
  },
];

const materialExpertise = [
  {
    icon: <Package size={22} />,
    title: "Rigid Formats",
    body: "HDPE bottles, PP closures, medical devices and glass bottles.",
  },
  {
    icon: <FileText size={22} />,
    title: "Printed Componentry",
    body: "Folding cartons, packaging kits, and pressure-sensitive labels.",
  },
  {
    icon: <Tag size={22} />,
    title: "Regulatory Print",
    body: "Shrink sleeves, IML, digital labels, and leaflets/booklets (IFUs, Med Guides).",
  },
  {
    icon: <Lock size={22} />,
    title: "Supply Chain Security",
    body: "Serialization and track-and-trace readiness for global markets.",
  },
];

const differentiators = [
  {
    icon: <Target size={22} />,
    title: "100% Industry-Focused",
    body: "Entirely dedicated to pharmaceutical packaging complexities.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Compliance-Driven",
    body: "Quality and regulatory alignment embedded in every step.",
  },
  {
    icon: <Globe2 size={22} />,
    title: "Global Perspective",
    body: "Deep operational experience across US, EU, and emerging markets.",
  },
  {
    icon: <Sliders size={22} />,
    title: "Flexible & Client-Centric",
    body: "Customized consulting models scaled to your exact project needs.",
  },
  {
    icon: <Zap size={22} />,
    title: "Speed & Reliability",
    body: "Optimized workflows built to accelerate your market timeline safely.",
  },
];

function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <section className="relative isolate overflow-hidden bg-navy-deep text-navy-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Pharmaceutical packaging facility"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/90 to-navy-deep/40" />
          <div className="absolute inset-0 hex-grid opacity-40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.18em] text-bio">
              Pack-Wise — Packaging That Performs.
            </span>
            <h1 className="mt-5 font-display text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.02] tracking-tight">
              Pharma Packaging Consulting That Drives{" "}
              <span className="text-bio">Compliance & Efficiency.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-base md:text-lg text-white/70 leading-relaxed">
              We help pharmaceutical companies streamline packaging sourcing, ensure regulatory compliance,
              and optimize costs through a reliable global vendor network.
            </p>
            <div className="mt-10">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-md bg-bio px-7 py-4 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/20 transition-all"
              >
                Schedule a Consultation
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trusted By Strip */}
        <div className="relative border-t border-white/10 bg-navy-deep py-8 text-center z-10">
          <p className="text-xs font-semibold uppercase tracking-wider text-white/40 mb-6">Trusted by leading pharmaceutical manufacturers</p>
          <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale mix-blend-luminosity pb-4">
            <div className="text-xl font-display font-bold text-white">PHARMA CORP</div>
            <div className="text-xl font-display font-bold text-white">BIO-MED</div>
            <div className="text-xl font-display font-bold text-white">GLOBAL HEALTH</div>
            <div className="text-xl font-display font-bold text-white">APEX LABS</div>
            <div className="text-xl font-display font-bold text-white">SYNTHESIS</div>
          </div>
        </div>
      </section>

      {/* 2. Corporate Overview */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Who We Are"
          title="A specialized consultancy built for pharmaceutical packaging excellence."
        />
        <p className="mt-8 text-base md:text-lg text-foreground/80 leading-relaxed">
          Pack-Wise is a specialized consultancy dedicated to supporting pharmaceutical companies in developing,
          optimizing, and delivering high-quality packaging solutions that meet global regulatory standards.
          With a deep understanding of the pharmaceutical industry, we bridge the gap between compliance,
          functionality, and brand excellence. Our goal is to help our clients navigate the complexities of
          pharmaceutical packaging while ensuring efficiency, cost-effectiveness, and market readiness.
        </p>
      </section>

      {/* 3. Core Consulting Services */}
      <section className="bg-slate-canvas border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="Core Services"
            title="End-to-end consulting across the entire packaging lifecycle."
            subtitle="We provide comprehensive support from strategy through commercialization, with every engagement tailored to your exact requirements."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {consultingServices.map((s) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} body={s.body} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Technical & Material Expertise */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader
          eyebrow="Technical Expertise"
          title="Hands-on expertise across highly regulated formats."
          subtitle="We bring deep material knowledge and compliance fluency to the most demanding pharmaceutical packaging requirements."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {materialExpertise.map((m) => (
            <ExpertiseCard key={m.title} icon={m.icon} title={m.title} body={m.body} />
          ))}
        </div>
      </section>

      {/* 5. Strategic Differentiators */}
      <section className="bg-slate-canvas border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader
            eyebrow="Why Choose Us"
            title="Five reasons pharma companies trust Pack-Wise."
            align="center"
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((d) => (
              <DifferentiatorCard key={d.title} icon={d.icon} title={d.title} body={d.body} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-semibold text-navy leading-tight">
            Ready to optimize your pharmaceutical packaging?
          </h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            All briefs are reviewed under strict confidentiality within 24 business hours.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-md bg-bio px-7 py-4 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/20 transition-all"
            >
              Schedule a Consultation
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceCard({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-7 hover:border-navy/40 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300">
      <span className="hex-clip flex h-10 w-11 items-center justify-center bg-navy text-bio">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function ExpertiseCard({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-card p-7 hover:border-navy/40 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300">
      <span className="hex-clip flex h-10 w-11 items-center justify-center bg-navy text-bio">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}

function DifferentiatorCard({
  icon, title, body,
}: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-border bg-white p-8 hover:border-navy/30 hover:shadow-lg hover:shadow-navy/5 transition-all duration-300">
      <span className="hex-clip flex h-10 w-11 items-center justify-center bg-bio text-navy">
        {icon}
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy">{title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
    </div>
  );
}
