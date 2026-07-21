import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";

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
    <section className="bg-navy-deep text-navy-foreground relative overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute inset-0 hex-grid opacity-40" />
      <div className="relative mx-auto max-w-3xl px-6 py-24 md:py-32 text-center">
        <span className="hex-clip inline-flex h-14 w-16 items-center justify-center bg-bio text-navy">
          <CheckCircle2 size={26} />
        </span>
        <h1 className="mt-8 font-display text-3xl md:text-5xl font-semibold leading-tight">
          Brief Received.
        </h1>
        <p className="mt-5 max-w-xl mx-auto text-base md:text-lg text-white/70 leading-relaxed">
          Your project brief has been received and will be reviewed under NDA. An executive advisor
          will respond within 24 business hours.
        </p>
        <div className="mt-10">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-bio px-7 py-4 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/20 transition-all"
          >
            Return Home
          </Link>
        </div>
      </div>
    </section>
  );
}
