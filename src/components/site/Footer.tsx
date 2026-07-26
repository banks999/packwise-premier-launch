import { Link } from "@tanstack/react-router";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-[1180px] px-6 pb-10 pt-14 md:px-12 md:pt-[72px]">
        <div className="flex flex-wrap items-start justify-between gap-7">
          <div>
            <div className="font-display text-2xl font-bold tracking-[-0.01em] text-white">
              Pack-Wise
            </div>
            <div className="mt-2.5 font-display text-[11.5px] font-semibold uppercase tracking-[0.24em] text-bio">
              Packaging that performs
            </div>
          </div>
          <nav className="flex flex-wrap gap-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="font-display text-sm font-medium text-[#C6CCD6] transition-colors hover:text-bio"
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="relative my-8 h-px bg-white/15">
          <span className="absolute left-0 top-0 -mt-px h-[3px] w-12 bg-bio" />
        </div>

        <div className="flex flex-wrap items-center gap-x-[22px] gap-y-2.5 text-sm text-[#C6CCD6]">
          <a href="mailto:info@pack-wise.in" className="transition-colors hover:text-bio">
            info@pack-wise.in
          </a>
          <span className="text-bio">·</span>
          <span>USA +1 640 203 0743</span>
          <span className="text-bio">·</span>
          <span>India +91 98209 24862</span>
          <span className="text-bio">·</span>
          <a href="https://www.pack-wise.in" className="transition-colors hover:text-bio">
            www.pack-wise.in
          </a>
        </div>
      </div>
    </footer>
  );
}
