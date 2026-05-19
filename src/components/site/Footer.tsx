import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground relative overflow-hidden">
      <div className="absolute inset-0 hex-grid opacity-50 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5">
              <span className="hex-clip flex h-10 w-11 items-center justify-center bg-bio text-navy font-display font-bold text-sm">
                PW
              </span>
              <span className="font-display text-xl font-semibold tracking-tight">
                Pack-Wise
              </span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Engineering pharmaceutical operations from production to global distribution.
            </p>
          </div>

          <FooterCol title="Company" items={[
            { label: "About Us", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Contact Us", to: "/contact" },
          ]} />

          <FooterCol title="Capabilities" items={[
            { label: "Commercialization", to: "/services" },
            { label: "Plant Engineering", to: "/services" },
            { label: "Supply Chain", to: "/services" },
          ]} />

          <div>
            <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-bio/90">
              Headquarters
            </h4>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              executive@pack-wise.com<br />
              Pharma Quarter — Confidential Briefs Only
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Pack-Wise Consulting. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-bio">Privacy</a>
            <a href="#" className="hover:text-bio">Compliance</a>
            <a href="#" className="hover:text-bio">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="font-display text-sm font-semibold tracking-wide uppercase text-bio/90">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="text-sm text-white/60 hover:text-white transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
