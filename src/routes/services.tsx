import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, Hero } from "@/components/site/blocks";

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
      { property: "og:url", content: "https://pack-wise.in/services" },
      { name: "twitter:title", content: "Pharmaceutical Packaging Services | Pack-Wise" },
      {
        name: "twitter:description",
        content:
          "Explore Pack-Wise pharmaceutical packaging services including regulatory compliance, sourcing, artwork coordination, and cost optimization for global pharma brands.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pack-wise.in/services" }],
  }),
  component: ServicesPage,
});

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

function ServicesPage() {
  return (
    <>
      <Hero
        eyebrow="Services"
        title="Advisory across the full route to market."
        subtitle="Six connected services that take suppliers from first account approach through to full qualification with regulated pharmaceutical customers."
        titleMaxWidth="16ch"
      />

      <section>
        <div className="mx-auto max-w-[1000px] px-6 py-[clamp(48px,7vw,88px)] md:px-12">
          {services.map((s, i) => (
            <div
              key={s.n}
              className={`flex flex-wrap items-start gap-[clamp(20px,3vw,44px)] py-8 ${
                i < services.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <span className="min-w-[56px] flex-none font-display text-[clamp(28px,4vw,44px)] font-bold leading-none text-[#E1DE9A]">
                {s.n}
              </span>
              <div className="flex-[1_1_300px]">
                <h2 className="mb-3 font-display text-[clamp(20px,2.4vw,26px)] font-semibold leading-tight text-navy">
                  {s.title}
                </h2>
                <p className="max-w-[62ch] text-base leading-[1.7] text-foreground">{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Discuss your requirement."
        subtitle="Send a brief and receive a confidential review within 24 business hours."
      />
    </>
  );
}
