import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/logo-light.webp";

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

          <FooterCol
            title="Company"
            items={[
              { label: "About Us", to: "/about" },
              { label: "Services", to: "/services" },
              { label: "Contact Us", to: "/contact" },
            ]}
          />

          <FooterCol
            title="Capabilities"
            items={[
              { label: "Packaging Strategy", to: "/services" },
              { label: "Regulatory Compliance", to: "/services" },
              { label: "Vendor Sourcing", to: "/services" },
            ]}
          />

          <div>
            <h4 className="text-xs font-semibold tracking-[0.18em] uppercase text-bio/90">
              Headquarters
            </h4>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              <a href="mailto:info@pack-wise.in" className="hover:text-bio transition-colors">
                info@pack-wise.in
              </a>
              <br />
              USA:{" "}
              <a href="tel:+16402030743" className="hover:text-bio transition-colors">
                +1 640-203-0743
              </a>
              <br />
              India:{" "}
              <a href="tel:+919820924862" className="hover:text-bio transition-colors">
                +91 9820 924862
              </a>
            </p>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} Pack-Wise Consulting. All rights reserved.</p>
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
