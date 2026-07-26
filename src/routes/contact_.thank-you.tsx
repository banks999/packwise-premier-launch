import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact_/thank-you")({
  head: () => ({
    meta: [
      { title: "Brief Received | Pack-Wise" },
      {
        name: "description",
        content: "Your Pack-Wise project brief has been received and is being reviewed under NDA.",
      },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: ThankYouPage,
});

function ThankYouPage() {
  return (
    <section className="flex min-h-[70vh] items-center bg-slate-canvas">
      <div className="mx-auto max-w-[640px] px-6 py-24 text-center md:px-12">
        <span className="mx-auto mb-7 block h-[3px] w-14 bg-bio" />
        <h1 className="font-display text-[clamp(28px,3.6vw,40px)] font-bold tracking-[-0.01em] text-navy">
          Brief received.
        </h1>
        <p className="mx-auto mb-9 mt-4 max-w-[48ch] text-base leading-relaxed text-foreground md:text-lg">
          Thank you. An executive advisor will review your brief under NDA and respond within 24
          business hours.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-lg bg-bio px-7 py-3.5 font-display text-sm font-semibold text-navy ring-1 ring-inset ring-navy/20 transition-all duration-200 ease-[cubic-bezier(.34,1.56,.64,1)] hover:-translate-y-0.5 hover:scale-[1.012] hover:shadow-[0_10px_22px_rgba(28,42,68,0.28)]"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
