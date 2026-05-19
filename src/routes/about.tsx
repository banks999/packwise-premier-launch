import { createFileRoute } from "@tanstack/react-router";
import { SectionHeader } from "@/components/site/SectionHeader";
import { ShieldCheck, Network, Wrench } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pack-Wise — Pharmaceutical Operations Expertise" },
      {
        name: "description",
        content:
          "Decades of expertise navigating pharmaceutical regulatory landscapes and scaling industrial plant operations.",
      },
    ],
  }),
  component: AboutPage,
});

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
              Built by operators who have engineered pharma plants and{" "}
              <span className="text-bio">scaled regulated markets.</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Executive Vision */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Executive Vision" title="A consulting practice forged inside the industry it serves." />
        <div className="mt-10 space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
          <p>
            Pack-Wise was founded on a simple operational truth: pharmaceutical
            growth is not a marketing exercise — it is a regulatory, engineering,
            and supply chain exercise executed under continuous audit. Our senior
            advisory bench has spent decades inside GMP plants, on commissioning
            floors, and at the negotiation table with sovereign regulators across
            the EU, MENA, and emerging Asian markets.
          </p>
          <p>
            We exist for one reason: to compress the distance between a
            pharmaceutical brand's ambition and the validated, compliant
            infrastructure required to realize it. Every engagement is treated as a
            mission-critical brief — confidential, structured, and outcome-bound.
          </p>
          <p>
            Whether the mandate is a turnkey plant erection, a strategic
            commercial expansion, or the integration of a certified packaging
            supplier into an existing supply chain — we deliver with the
            discipline of operators, not the abstraction of strategists.
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
                body: "GMP, ICH, FDA, and EMA frameworks are non-negotiable baselines — not aspirational targets.",
              },
              {
                icon: <Network size={22} />,
                title: "Global Supply Chain Resilience",
                body: "Multi-sourced, qualification-audited supplier networks engineered to survive geopolitical disruption.",
              },
              {
                icon: <Wrench size={22} />,
                title: "Turnkey Engineering Excellence",
                body: "End-to-end plant execution — concept, design, commissioning, validation — delivered under one accountability line.",
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

      {/* Founder's Story */}
      <section className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <SectionHeader eyebrow="Founder's Story" title="The conviction behind Pack-Wise." />
        <div className="mt-14 grid gap-12 lg:grid-cols-[280px_1fr] items-start">
          {/* Founder profile card */}
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-navy/90 to-navy-deep hex-grid relative overflow-hidden">
              <div className="absolute bottom-4 left-4">
                <span className="hex-clip inline-flex h-10 w-11 items-center justify-center bg-bio text-navy font-display font-semibold text-sm">
                  KS
                </span>
              </div>
            </div>
            <div className="mt-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-bio-foreground/60">Founder & CEO</div>
              <h3 className="mt-1.5 font-display text-xl font-semibold text-navy">Kundanraj Shah</h3>
              <p className="text-sm text-muted-foreground">Pack-Wise</p>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-6 text-base md:text-lg text-foreground/80 leading-relaxed">
            <p className="italic text-muted-foreground border-l-2 border-bio pl-5">
              {/* TODO: Add founder quote here */}
              "Add founder quote here."
            </p>
            <p>
              {/* TODO: Replace with Kundanraj Shah's story */}
              Founder's story coming soon.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
