import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { CtaButton } from "./blocks";

// Served from /public as a static asset (referenced by URL, not imported).
const logoImg = "/logo-packwise.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

const navLinkCls =
  "font-display text-sm font-medium text-navy py-1 border-b-2 border-transparent hover:border-bio data-[status=active]:border-bio transition-colors";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  // Body scroll lock, Escape-to-close, and a focus trap while the mobile
  // menu is open.
  useEffect(() => {
    if (!open || !menuRef.current) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const getFocusable = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      );

    getFocusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;

      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background">
      <div className="mx-auto flex min-h-[78px] max-w-[1280px] 2xl:max-w-[1536px] flex-wrap items-center justify-between gap-5 px-6 md:px-12">
        <Link to="/" className="flex flex-col items-start gap-px py-3">
          <img src={logoImg} alt="Pack-Wise" width={210} height={71} className="block h-[71px] w-[210px]" />
          <span className="-mt-[15px] whitespace-nowrap pl-[66px] font-display text-[10.5px] font-semibold uppercase leading-tight tracking-[0.2em] text-[#B7A53A]">
            Packaging that performs
          </span>
        </Link>

        <nav className="hidden items-center gap-[clamp(14px,2.4vw,34px)] md:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} className={navLinkCls}>
              {l.label}
            </Link>
          ))}
          <CtaButton className="px-[22px] py-3 text-[13.5px]" />
        </nav>

        <button
          ref={toggleRef}
          onClick={() => setOpen((o) => !o)}
          className="p-2 text-navy md:hidden"
          aria-label={open ? "Close menu" : "Menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div
          ref={menuRef}
          id="mobile-menu"
          className="space-y-3 border-t border-border bg-background px-6 py-4 md:hidden"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className="block py-1.5 font-display text-sm font-medium text-navy"
            >
              {l.label}
            </Link>
          ))}
          <CtaButton className="w-full" />
        </div>
      )}
    </header>
  );
}
