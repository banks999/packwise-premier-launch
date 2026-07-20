import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, Loader2, Phone } from "lucide-react";
import logoImg from "@/assets/logo-light.webp";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pack-Wise | Pharmaceutical Packaging Consulting" },
      {
        name: "description",
        content:
          "Contact Pack-Wise for confidential pharmaceutical packaging consulting, regulatory compliance support, and packaging sourcing brief reviews within 24 business hours.",
      },
      {
        name: "keywords",
        content:
          "pharmaceutical packaging consulting contact, pharma packaging compliance inquiry, packaging sourcing consultant contact",
      },
      { property: "og:title", content: "Contact Pack-Wise | Pharmaceutical Packaging Consulting" },
      {
        property: "og:description",
        content:
          "Contact Pack-Wise for confidential pharmaceutical packaging consulting, regulatory compliance support, and packaging sourcing brief reviews within 24 business hours.",
      },
      { property: "og:url", content: "https://pack-wise.com/contact" },
      { name: "twitter:title", content: "Contact Pack-Wise | Pharmaceutical Packaging Consulting" },
      {
        name: "twitter:description",
        content:
          "Contact Pack-Wise for confidential pharmaceutical packaging consulting, regulatory compliance support, and packaging sourcing brief reviews within 24 business hours.",
      },
    ],
    links: [{ rel: "canonical", href: "https://pack-wise.com/contact" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          mainEntity: {
            "@type": "Organization",
            name: "Pack-Wise",
            url: "https://pack-wise.com/",
            logo: "https://pack-wise.com/logo.png",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "customer support",
              telephone: "+1 640-203-0743",
              email: "info@pack-wise.in",
            },
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

const web3FormsAccessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? "";

const schema = z.object({
  fullName: z.string().trim().min(2, "Full name required").max(100),
  email: z.string().trim().email("Valid corporate email required").max(255),
  company: z.string().trim().min(2, "Company name required").max(150),
  sector: z.enum(["Pharma Manufacturer", "Packaging Producer", "Other"], {
    message: "Select a sector",
  }),
  brief: z.string().trim().min(20, "Provide at least 20 characters").max(2000),
});

function ContactPage() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
    sector: "" as "" | "Pharma Manufacturer" | "Packaging Producer" | "Other",
    brief: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) => {
    setForm((f) => ({ ...f, [k]: v }));
    // Clear error for field when user starts typing
    if (errors[k]) setErrors((e) => ({ ...e, [k]: "" }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);

    if (!parsed.success) {
      const newErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        if (issue.path[0]) newErrors[issue.path[0].toString()] = issue.message;
      });
      setErrors(newErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    setErrors({});
    if (!web3FormsAccessKey) {
      toast.error(
        "Form is not configured yet. Add VITE_WEB3FORMS_ACCESS_KEY to the environment file.",
      );
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: web3FormsAccessKey,
          subject: `New Project Brief from ${form.company}`,
          from_name: form.fullName,
          email: form.email,
          company: form.company,
          sector: form.sector,
          message: form.brief,
        }),
      });

      if (!res.ok) throw new Error("Submission failed");

      toast.success("Brief received", {
        description: "An executive advisor will respond within 24 business hours.",
      });
      setForm({ fullName: "", email: "", company: "", sector: "", brief: "" });
    } catch {
      toast.error("Something went wrong. Please check your connection and retry.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-canvas">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          {/* Left: corporate info */}
          <div className="rounded-2xl bg-navy-deep text-navy-foreground p-10 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 hex-grid opacity-40" />
            <div className="relative">
              <img src={logoImg} alt="Pack-Wise" className="h-10 w-auto" />
              <h1 className="mt-8 font-display text-3xl md:text-4xl font-semibold leading-tight">
                Connect with an Executive Advisor.
              </h1>
              <p className="mt-5 text-white/70 leading-relaxed">
                Confidential brief reviews within 24 business hours.
              </p>

              <div className="mt-12 space-y-6">
                <InfoRow
                  icon={<Phone size={18} />}
                  label="USA"
                  value="+1 640-203-0743"
                  href="tel:+16402030743"
                />
                <InfoRow
                  icon={<Phone size={18} />}
                  label="India"
                  value="+91 9820 924862"
                  href="tel:+919820924862"
                />
                <InfoRow
                  icon={<Mail size={18} />}
                  label="Email"
                  value="info@pack-wise.in"
                  href="mailto:info@pack-wise.in"
                />
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={onSubmit}
            className="rounded-2xl bg-card border border-border p-8 md:p-10 space-y-5"
          >
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Submit a Brief</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                All fields required. Reviewed under NDA.
              </p>
            </div>

            <Field label="Full Name" error={errors.fullName}>
              <input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                maxLength={100}
                className={inputCls(!!errors.fullName)}
                placeholder="Dr. Jane Doe"
              />
            </Field>

            <Field label="Corporate Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={255}
                className={inputCls(!!errors.email)}
                placeholder="j.doe@company.com"
              />
            </Field>

            <Field label="Company Name" error={errors.company}>
              <input
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                maxLength={150}
                className={inputCls(!!errors.company)}
                placeholder="Acme Pharmaceuticals"
              />
            </Field>

            <Field label="Sector" error={errors.sector}>
              <select
                value={form.sector}
                onChange={(e) => update("sector", e.target.value as typeof form.sector)}
                className={inputCls(!!errors.sector) + " appearance-none bg-white"}
              >
                <option value="">Select a sector…</option>
                <option>Pharma Manufacturer</option>
                <option>Packaging Producer</option>
                <option>Other</option>
              </select>
            </Field>

            <Field label="Project Brief" error={errors.brief}>
              <textarea
                value={form.brief}
                onChange={(e) => update("brief", e.target.value)}
                maxLength={2000}
                rows={5}
                className={inputCls(!!errors.brief) + " resize-none"}
                placeholder="Describe scope, timeline, and key constraints…"
              />
            </Field>

            <button
              type="submit"
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-bio px-6 py-3.5 text-sm font-semibold text-navy hover:bg-bio/90 hover:shadow-xl hover:shadow-bio/30 disabled:opacity-70 disabled:cursor-not-allowed transition-all"
            >
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  Processing Request...
                </>
              ) : (
                "Submit Confidential Brief"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

const inputCls = (hasError: boolean) =>
  `w-full rounded-md border ${
    hasError
      ? "border-destructive/60 bg-destructive/5 focus:ring-destructive/20"
      : "border-input bg-background focus:ring-navy/20"
  } px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-navy focus:ring-2`;

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex justify-between items-baseline">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
          {label}
        </span>
        {error && <span className="text-xs font-medium text-destructive">{error}</span>}
      </div>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="hex-clip flex h-10 w-11 shrink-0 items-center justify-center bg-bio/15 text-bio">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-bio/80">{label}</div>
        <div className="mt-1 text-white/90">
          {href ? (
            <a href={href} className="hover:text-bio transition-colors">
              {value}
            </a>
          ) : (
            value
          )}
        </div>
      </div>
    </div>
  );
}
