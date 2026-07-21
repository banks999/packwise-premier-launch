import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/logo.webp";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact Us" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/95 border-b border-border/60"
          : "backdrop-blur-md bg-background/85"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group">
          <img src={logoImg} alt="Pack-Wise" className="h-10 w-auto" />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="text-sm font-medium text-foreground/80 hover:text-navy transition-colors data-[status=active]:text-navy data-[status=active]:font-semibold"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-md bg-bio px-4 py-2.5 text-sm font-semibold text-navy ring-1 ring-navy/10 hover:bg-bio/90 hover:shadow-lg hover:shadow-bio/30 transition-all"
          >
            Schedule a Consultation
          </Link>
        </div>

        <button
          ref={toggleRef}
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 text-navy"
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
          className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl px-6 py-4 space-y-3"
        >
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={closeMenu}
              className="block text-sm font-medium text-foreground/80 hover:text-navy transition-colors py-1.5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="block text-center rounded-md bg-bio px-4 py-2.5 text-sm font-semibold text-navy hover:bg-bio/90 transition-colors"
          >
            Schedule a Consultation
          </Link>
        </div>
      )}
    </header>
  );
}
