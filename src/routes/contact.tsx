import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Mail, MapPin, ShieldCheck, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Pack-Wise — Executive Advisory" },
      {
        name: "description",
        content:
          "Connect with a Pack-Wise executive advisor. Confidential review within 24 business hours.",
      },
    ],
  }),
  component: ContactPage,
});

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
  const [loading, setLoading] = useState(false);

  const update = <K extends keyof typeof form>(k: K, v: (typeof form)[K]) =>
    setForm((f) => ({ ...f, [k]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 1200));
      toast.success("Brief received", {
        description: "An executive advisor will respond within 24 business hours.",
      });
      setForm({ fullName: "", email: "", company: "", sector: "", brief: "" });
    } catch {
      toast.error("Something went wrong. Please retry.");
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
              <span className="hex-clip inline-flex h-14 w-16 items-center justify-center bg-bio text-navy font-display font-bold text-lg">
                PW
              </span>
              <h1 className="mt-8 font-display text-3xl md:text-4xl font-semibold leading-tight">
                Connect with an Executive Advisor.
              </h1>
              <p className="mt-5 text-white/70 leading-relaxed">
                We review all manufacturing and commercial briefs within 24
                business hours under strict confidential evaluation.
              </p>

              <div className="mt-12 space-y-6">
                <InfoRow icon={<Mail size={18} />} label="Secure Corporate Email" value="executive@pack-wise.com" />
                <InfoRow icon={<MapPin size={18} />} label="Headquarters" value="Pharma Quarter — by appointment" />
                <InfoRow icon={<ShieldCheck size={18} />} label="Confidentiality" value="NDA available on request" />
              </div>
            </div>
          </div>

          {/* Right: form */}
          <form onSubmit={onSubmit} className="rounded-2xl bg-card border border-border p-8 md:p-10 space-y-5">
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy">Submit a Brief</h2>
              <p className="mt-1.5 text-sm text-muted-foreground">All fields required. Reviewed under NDA.</p>
            </div>

            <Field label="Full Name">
              <input
                value={form.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                maxLength={100}
                className={inputCls}
                placeholder="Dr. Jane Doe"
              />
            </Field>

            <Field label="Corporate Email">
              <input
                type="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                maxLength={255}
                className={inputCls}
                placeholder="j.doe@company.com"
              />
            </Field>

            <Field label="Company Name">
              <input
                value={form.company}
                onChange={(e) => update("company", e.target.value)}
                maxLength={150}
                className={inputCls}
                placeholder="Acme Pharmaceuticals"
              />
            </Field>

            <Field label="Sector">
              <select
                value={form.sector}
                onChange={(e) => update("sector", e.target.value as typeof form.sector)}
                className={inputCls + " appearance-none bg-white"}
              >
                <option value="">Select a sector…</option>
                <option>Pharma Manufacturer</option>
                <option>Packaging Producer</option>
                <option>Other</option>
              </select>
            </Field>

            <Field label="Project Brief">
              <textarea
                value={form.brief}
                onChange={(e) => update("brief", e.target.value)}
                maxLength={2000}
                rows={5}
                className={inputCls + " resize-none"}
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

const inputCls =
  "w-full rounded-md border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-all focus:border-navy focus:ring-2 focus:ring-navy/20";

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-xs font-semibold uppercase tracking-wider text-navy/70">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function InfoRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <span className="hex-clip flex h-10 w-11 shrink-0 items-center justify-center bg-bio/15 text-bio">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-bio/80">{label}</div>
        <div className="mt-1 text-white/90">{value}</div>
      </div>
    </div>
  );
}
