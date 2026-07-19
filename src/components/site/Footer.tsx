import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo-light.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-navy-foreground relative">
      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[2fr_1fr_1fr_1.5fr]">
          <div>
            <img src={logoImg} alt="Pack-Wise" className="h-9 w-auto" />
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Where pharmaceutical expertise meets operational execution.
            </p>
          </div>

          <FooterCol title="Company" items={[
            { label: "About Us", to: "/about" },
            { label: "Services", to: "/services" },
            { label: "Contact Us", to: "/contact" },
          ]} />

          <FooterCol title="Capabilities" items={[
            { label: "Packaging Strategy", to: "/services" },
            { label: "Regulatory Compliance", to: "/services" },
            { label: "Vendor Sourcing", to: "/services" },
          ]} />

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-bio/90">
              Headquarters
            </h4>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              kundanshah73@gmail.com<br />
              USA: +1 640-203-0743<br />
              India: +91 9820 924862
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
      <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-bio/90">{title}</h4>
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
