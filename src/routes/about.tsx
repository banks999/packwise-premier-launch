import { createFileRoute } from "@tanstack/react-router";
import { Container, CtaBand, Eyebrow, Hero } from "@/components/site/blocks";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pack-Wise | Pharmaceutical Packaging Consultant" },
      {
        name: "description",
        content:
          "Meet Kundanraj Shah, Founder & CEO of Pack-Wise, with 32+ years of pharmaceutical packaging expertise, FDA and EU GMP experience, and global operational insight.",
      },
      {
        name: "keywords",
        content:
          "pharmaceutical packaging consultant, pharma packaging expertise, FDA packaging compliance, EU GMP packaging support",
      },
      { property: "og:title", content: "About Pack-Wise | Pharmaceutical Packaging Consultant" },
      {
        property: "og:description",
        content:
          "Meet Kundanraj Shah, Founder & CEO of Pack-Wise, with 32+ years of pharmaceutical packaging expertise, FDA and EU GMP experience, and global operational insight.",
      },
      { property: "og:url", content: "https://pack-wise.in/about" },
      { name: "twitter:title", content: "About Pack-Wise | Pharmaceutical Packaging Consultant" },
      {
        name: "twitter:description",
        content:
          "Meet Kundanraj Shah, Founder & CEO of Pack-Wise, with 32+ years of pharmaceutical packaging expertise, FDA and EU GMP experience, and global operational insight.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pack-wise.in/about" }],
  }),
  component: AboutPage,
});

const experience = [
  "Over 32 years of operating experience in pharmaceutical packaging across manufacturing, quality, and commercial functions.",
  "Direct experience establishing a fully compliant manufacturing and warehousing operation in the United States.",
  "Established relationships across pharmaceutical and nutraceutical companies in the US and India.",
  "Working knowledge of both supplier capability and customer qualification requirements.",
  "Senior-level involvement on every engagement.",
];

function AboutPage() {
  return (
    <>
      <Hero
        eyebrow="About Us"
        title="A specialist partner for pharmaceutical packaging."
        subtitle="Pack-Wise brings three decades of hands-on industry experience to packaging manufacturers and contract packagers entering regulated markets."
      />

      {/* Positioning */}
      <section>
        <Container className="flex flex-wrap gap-[clamp(36px,5vw,72px)] py-[clamp(56px,8vw,96px)]">
          <div className="min-w-[260px] flex-1 basis-[300px]">
            <Eyebrow className="mb-[22px]">Our Positioning</Eyebrow>
            <h2 className="font-display text-[clamp(24px,3vw,34px)] font-bold leading-tight tracking-[-0.01em] text-navy">
              Built around the realities of regulated supply.
            </h2>
          </div>
          <div className="min-w-[300px] flex-[1.4_1_360px]">
            <p className="mb-[22px] text-[17px] leading-[1.7] text-foreground">
              Pack-Wise is a business development and consulting firm serving the pharmaceutical and
              nutraceutical packaging sector. We work with packaging manufacturers and contract
              packagers to expand their customer base, establish supply into regulated markets, and
              strengthen the technical and regulatory capabilities their customers require.
            </p>
            <p className="text-[17px] leading-[1.7] text-foreground">
              Every engagement combines commercial market development with a working understanding of
              the quality, regulatory, and operational standards pharmaceutical customers expect — so
              suppliers are positioned not only to reach new accounts, but to qualify and retain them.
            </p>
          </div>
        </Container>
      </section>

      {/* Founder + experience */}
      <section className="border-y border-border bg-slate-canvas">
        <Container className="flex flex-wrap gap-[clamp(36px,5vw,64px)] py-[clamp(56px,8vw,96px)]">
          <div className="min-w-[280px] flex-1 basis-[300px] bg-navy p-[clamp(34px,4vw,48px)]">
            <span className="font-display text-xs font-semibold uppercase tracking-[0.2em] text-bio">
              Founder &amp; CEO
            </span>
            <h2 className="mb-5 mt-4 font-display text-[clamp(28px,3.2vw,36px)] font-bold text-white">
              Kundanraj Shah
            </h2>
            <p className="mb-[18px] text-base leading-[1.7] text-[#C6CCD6]">
              Over 32 years in the pharmaceutical packaging industry, including five years
              establishing and operating a compliant manufacturing and warehousing facility in New
              Jersey, USA.
            </p>
            <p className="text-base leading-[1.7] text-[#C6CCD6]">
              That operating background — spanning manufacturing, quality, and commercial functions —
              informs a practical, senior-led approach to every client engagement.
            </p>
          </div>
          <div className="min-w-[300px] flex-1 basis-[320px]">
            <Eyebrow className="mb-7">Experience</Eyebrow>
            <div className="flex flex-col gap-[18px]">
              {experience.map((e) => (
                <div key={e} className="flex items-start gap-4">
                  <span className="mt-[7px] block h-2.5 w-2.5 flex-none bg-bio" />
                  <p className="text-[15.5px] leading-relaxed text-[#3A4150]">{e}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Work directly with the founder."
        subtitle="Every brief is reviewed at senior level, under NDA."
      />
    </>
  );
}
