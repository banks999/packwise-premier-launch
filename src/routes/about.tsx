import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ShieldCheck, Network, Wrench, Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pack-Wise — Founder & Leadership" },
      {
        name: "description",
        content:
          "Meet Kundanraj Shah, Founder & CEO of Pack-Wise, with over 32 years of experience in the primary pharmaceutical packaging industry.",
      },
    ],
  }),
  component: AboutPage,
});

const achievements = [
  "Scaled business revenues from $X Mn to $Y Mn within X years through strategic customer acquisition and market expansion",
  "Successfully developed and managed relationships with top-tier pharmaceutical companies, including [Client Name 1], [Client Name 2], [Client Name 3]",
  "Led the execution of X+ large-scale packaging projects, ensuring compliance with USFDA, EU GMP, and global regulatory standards",
  "Played a pivotal role in setting up / expanding manufacturing facilities, optimizing cost, quality, and delivery timelines",
  "Introduced innovative packaging solutions that improved efficiency, reduced costs, and enhanced product integrity",
  "Built and mentored high-performing teams, driving consistent business and operational growth",
];

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy-deep text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-40" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-36">
          <div className="max-w-4xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bio">
              About Pack-Wise
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.05]">
              Built on 32 years of pharmaceutical packaging expertise and{" "}
              <span className="text-bio">global operational insight.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Executive Vision */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Our Mission" title="Bridging compliance, functionality, and brand excellence." />
        <div className="mt-10 space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p>
            Pack-Wise is a specialized consultancy dedicated to supporting pharmaceutical companies in
            developing, optimizing, and delivering high-quality packaging solutions that meet global
            regulatory standards. With a deep understanding of the pharmaceutical industry, we bridge
            the gap between compliance, functionality, and brand excellence.
          </p>
          <p>
            Our goal is to help our clients navigate the complexities of pharmaceutical packaging while
            ensuring efficiency, cost-effectiveness, and market readiness. Every engagement is treated
            as a mission-critical brief — confidential, structured, and outcome-bound.
          </p>
        </div>
      </section>

      {/* Operational Pillars */}
      <section className="bg-slate-canvas border-y border-border">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <SectionHeader eyebrow="Operational Pillars" title="Three commitments that govern every Pack-Wise engagement." />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <ShieldCheck size={22} />,
                title: "Uncompromising Regulatory Compliance",
                body: "FDA, EU GMP, and global serialization frameworks are non-negotiable baselines — embedded at every stage.",
              },
              {
                icon: <Network size={22} />,
                title: "Global Vendor Network",
                body: "Multi-sourced, qualification-audited supplier networks for bottles, closures, glass, and printed componentry.",
              },
              {
                icon: <Wrench size={22} />,
                title: "End-to-End Execution",
                body: "From packaging strategy through vendor management and cost optimization — delivered under one accountability line.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-xl bg-card border border-border p-8 hover:border-navy/40 hover:shadow-lg hover:shadow-navy/5 transition-all">
                <span className="hex-clip flex h-10 w-11 items-center justify-center bg-navy text-bio">
                  {p.icon}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-navy">{p.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Executive Profile: Founder & CEO */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Founder & Leadership" title="The expertise behind Pack-Wise." />
        <div className="mt-14 grid gap-12 lg:grid-cols-[300px_1fr] items-start">

          {/* Profile Card */}
          <div className="rounded-xl border border-border bg-card p-6 lg:sticky lg:top-8">
            <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-navy/90 to-navy-deep hex-grid relative overflow-hidden">
              <div className="absolute bottom-4 left-4">
                <span className="hex-clip inline-flex h-10 w-11 items-center justify-center bg-bio text-navy font-display font-semibold text-sm">
                  KS
                </span>
              </div>
            </div>
            <div className="mt-5 space-y-1">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Founder & CEO</div>
              <h3 className="font-display text-xl font-semibold text-navy">Kundanraj Shah</h3>
              <p className="text-sm text-muted-foreground">Pack-Wise Consulting</p>
            </div>
            <div className="mt-5 pt-5 border-t border-border space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-bio flex-shrink-0" />
                32+ Years Industry Experience
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-bio flex-shrink-0" />
                5 Years US Market Experience
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-bio flex-shrink-0" />
                USFDA & EU GMP Compliance
              </div>
            </div>
          </div>

          {/* Bio & Achievements */}
          <div>
            <div className="space-y-5 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                Kundanraj Shah brings over <strong className="text-foreground font-semibold">32 years of extensive experience</strong> in the
                primary packaging industry, including 5 years of professional experience in the United States.
                His deep industry expertise and global exposure enable him to deliver strategic, high-impact
                solutions tailored to pharmaceutical clients.
              </p>
              <p>
                Over the course of his career, he has consistently driven business growth, operational
                excellence, and customer success across leading packaging organizations.
              </p>
            </div>

            <div className="mt-10">
              <h4 className="font-display text-xl font-semibold text-navy">Key Achievements</h4>
              <ul className="mt-6 space-y-4">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-bio/20 text-navy">
                      <Check size={13} strokeWidth={2.5} />
                    </span>
                    <span className="text-sm md:text-base text-foreground/75 leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 text-base md:text-lg text-foreground/80 leading-relaxed">
              <p>
                Following his last leadership assignment, he identified a critical gap in the industry —
                pharmaceutical companies needed smarter, more reliable, and solution-driven packaging support.
                Driven by this vision, he founded <strong className="text-foreground font-semibold">PACK-WISE</strong>, a consultancy dedicated to
                delivering end-to-end, innovative packaging solutions for pharmaceutical companies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Strategic Vision */}
      <section className="bg-navy-deep text-navy-foreground relative overflow-hidden">
        <div className="absolute inset-0 hex-grid opacity-30" />
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-bio">
            Strategic Vision
          </span>
          <div className="mt-8 relative">
            <span
              aria-hidden="true"
              className="absolute -top-6 left-1/2 -translate-x-1/2 font-display text-8xl leading-none text-bio/20 select-none"
            >
              "
            </span>
            <blockquote className="relative font-display text-2xl md:text-3xl lg:text-4xl font-semibold leading-[1.25] text-navy-foreground">
              To be a trusted partner for pharmaceutical companies worldwide, delivering packaging
              solutions that ensure{" "}
              <span className="text-bio">patient safety, regulatory excellence, and brand impact.</span>
            </blockquote>
            <span
              aria-hidden="true"
              className="absolute -bottom-10 left-1/2 -translate-x-1/2 font-display text-8xl leading-none text-bio/20 select-none rotate-180"
            >
              "
            </span>
          </div>
          <p className="mt-16 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            — Kundanraj Shah, Founder & CEO, Pack-Wise
          </p>
        </div>
      </section>
    </>
  );
}
