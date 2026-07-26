import { createFileRoute } from "@tanstack/react-router";
import { Container, CtaBand, CtaButton, Eyebrow, Hero } from "@/components/site/blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pharmaceutical Packaging Consulting | Pack-Wise" },
      {
        name: "description",
        content:
          "Pack-Wise provides pharmaceutical packaging consulting, regulatory compliance support, packaging sourcing, and cost optimization for global pharma companies.",
      },
      {
        name: "keywords",
        content:
          "pharmaceutical packaging consulting, pharma packaging compliance, packaging sourcing consultant, packaging vendor management",
      },
      { property: "og:title", content: "Pharmaceutical Packaging Consulting | Pack-Wise" },
      {
        property: "og:description",
        content:
          "Pack-Wise provides pharmaceutical packaging consulting, regulatory compliance support, packaging sourcing, and cost optimization for global pharma companies.",
      },
      { property: "og:url", content: "https://pack-wise.in/" },
      { name: "twitter:title", content: "Pharmaceutical Packaging Consulting | Pack-Wise" },
      {
        name: "twitter:description",
        content:
          "Pack-Wise provides pharmaceutical packaging consulting, regulatory compliance support, packaging sourcing, and cost optimization for global pharma companies.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pack-wise.in/" }],
  }),
  component: HomePage,
});

const audience = [
  {
    title: "Primary packaging manufacturers",
    body: "HDPE and PET bottles, PP closures, and glass containers.",
  },
  {
    title: "Printed and secondary packaging",
    body: "Leaflets, labels, inserts, outserts, IML, and mono cartons.",
  },
  {
    title: "Contract packaging organizations",
    body: "Co-packers serving pharmaceutical and nutraceutical brands.",
  },
  {
    title: "Serialization and track-and-trace",
    body: "Providers of serialization and track-and-trace capabilities.",
  },
];

const services = [
  {
    n: "01",
    title: "Business Development & Market Expansion",
    body: "Identification, approach, and development of pharmaceutical and nutraceutical accounts across the US and Indian markets, supported by three decades of established industry relationships.",
  },
  {
    n: "02",
    title: "Regulated-Market Entry",
    body: "Advisory and execution support for suppliers establishing supply into the United States and other regulated markets, including buyer qualification requirements and route-to-market planning.",
  },
  {
    n: "03",
    title: "Regulatory & Compliance Advisory",
    body: "Guidance on the filings and certifications required to supply regulated customers, including US DMF, cGMP, and market-specific approvals.",
  },
  {
    n: "04",
    title: "Product & Technical Development",
    body: "Support in developing packaging products, formats, and specifications aligned to target-customer requirements.",
  },
  {
    n: "05",
    title: "Operations & Capacity Advisory",
    body: "Support in scaling production capacity, cost structure, and supply reliability to meet larger regulated accounts.",
  },
  {
    n: "06",
    title: "Customer Qualification & Audit Readiness",
    body: "Preparing suppliers to meet the quality-system and audit standards expected by pharmaceutical customers.",
  },
];

const whyPoints = [
  "Over 32 years of operating experience in pharmaceutical packaging across manufacturing, quality, and commercial functions.",
  "Direct experience establishing a fully compliant manufacturing and warehousing operation in the United States.",
  "Established relationships across pharmaceutical and nutraceutical companies in the US and India.",
  "Working knowledge of both supplier capability and customer qualification requirements.",
  "Senior-level involvement on every engagement.",
];

function HomePage() {
  return (
    <>
      <Hero
        eyebrow="Pharmaceutical Packaging · Consulting"
        title="Business development and consulting for the pharmaceutical packaging industry."
        subtitle="We help packaging manufacturers and contract packagers expand their customer base and enter regulated markets."
        titleMaxWidth="17ch"
      >
        <CtaButton />
      </Hero>

      {/* Intro statement */}
      <section>
        <div className="mx-auto max-w-[900px] px-6 py-[clamp(56px,8vw,96px)] text-center md:px-12">
          <span className="mb-7 inline-block h-[3px] w-14 bg-bio" />
          <p className="font-display text-[clamp(19px,2.4vw,26px)] font-normal leading-[1.55] text-navy">
            Pack-Wise is a business development and consulting firm serving the pharmaceutical and
            nutraceutical packaging sector. We work with packaging manufacturers and contract
            packagers to expand their customer base, establish supply into regulated markets, and
            strengthen the technical and regulatory capabilities their customers require.
          </p>
        </div>
      </section>

      {/* Who we work with */}
      <section className="border-y border-border bg-slate-canvas">
        <Container className="py-[clamp(56px,8vw,96px)]">
          <Eyebrow className="mb-9">Who we work with</Eyebrow>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(248px,1fr))] gap-[22px]">
            {audience.map((a) => (
              <div
                key={a.title}
                className="flex flex-col gap-3.5 border border-border bg-card p-[26px] pt-[30px]"
              >
                <span className="block h-1 w-[34px] bg-bio" />
                <h3 className="font-display text-lg font-semibold leading-snug text-navy">
                  {a.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-foreground">{a.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* What we do */}
      <section>
        <Container className="py-[clamp(56px,8vw,96px)]">
          <Eyebrow className="mb-3">Services</Eyebrow>
          <h2 className="mb-11 font-display text-[clamp(26px,3.4vw,38px)] font-bold tracking-[-0.01em] text-navy">
            What we do
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-px border border-border bg-border">
            {services.map((s) => (
              <div key={s.n} className="flex flex-col gap-3 bg-card p-8">
                <span className="font-display text-[13px] font-bold tracking-[0.1em] text-[#B9B24E]">
                  {s.n}
                </span>
                <h3 className="font-display text-[19px] font-semibold leading-snug text-navy">
                  {s.title}
                </h3>
                <p className="text-[14.5px] leading-relaxed text-foreground">{s.body}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Pack-Wise + Founder */}
      <section className="border-y border-border bg-slate-canvas">
        <Container className="flex flex-wrap gap-[clamp(36px,5vw,64px)] py-[clamp(56px,8vw,96px)]">
          <div className="min-w-[300px] flex-[2_1_340px]">
            <Eyebrow className="mb-8">Why Pack-Wise</Eyebrow>
            <div className="flex flex-col gap-5">
              {whyPoints.map((p) => (
                <div key={p} className="flex items-start gap-4">
                  <span className="mt-[7px] block h-2.5 w-2.5 flex-none bg-bio" />
                  <p className="text-base leading-relaxed text-[#3A4150]">{p}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="min-w-[270px] flex-[1_1_280px] border-l-4 border-bio bg-border p-[clamp(30px,3vw,40px)]">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Founder &amp; CEO
            </span>
            <h3 className="mb-[18px] mt-3.5 font-display text-[26px] font-bold text-navy">
              Kundanraj Shah
            </h3>
            <p className="text-[15.5px] leading-[1.7] text-foreground">
              Over 32 years in the pharmaceutical packaging industry, including five years
              establishing and operating a compliant manufacturing and warehousing facility in New
              Jersey, USA.
            </p>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ready to expand into new markets?"
        subtitle="Schedule a confidential consultation with an executive advisor."
      />
    </>
  );
}
