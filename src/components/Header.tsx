import * as React from "react";

import logoMark from "@/assets/logo.svg";

const NAV_LINKS = [
  { label: "SERVICES", href: "#services" },
  { label: "ABOUT", href: "#about" },
  { label: "CONTACT", href: "#contact" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink">
      <div className="mx-auto flex h-[68px] max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-20">
        <div className="flex min-w-0 items-center gap-6">
          <a href="#top" className="flex min-w-0 items-center gap-3" aria-label="Digimotive home">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-white">
              <img
                src={logoMark}
                alt=""
                aria-hidden="true"
                className="h-[19px] w-[21px] invert"
              />
            </span>
            <span className="font-display truncate text-[20px] font-extrabold uppercase leading-none tracking-[0.12em] text-white sm:text-[23px]">
              Digimotive
            </span>
          </a>

          <span className="hidden items-center gap-2 lg:flex">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-white/55">
              Available for projects
            </span>
          </span>
        </div>

        <nav className="hidden items-center gap-10 md:flex" aria-label="Main">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 transition-colors hover:text-brand"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="hidden shrink-0 rounded-full bg-brand px-6 py-3 text-[12px] font-bold uppercase tracking-[0.1em] text-brand-foreground transition-transform hover:scale-[1.03] md:inline-flex"
        >
          Get in touch
        </a>

        {/* Mobile menu */}
        <div ref={menuRef} className="relative md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-[12px] border border-white/15 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>

          {menuOpen && (
            <div
              id="mobile-nav"
              className="absolute right-0 top-[calc(100%+12px)] flex w-[200px] flex-col gap-1 rounded-[16px] border border-white/10 bg-surface p-3 shadow-2xl"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-[10px] px-3 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-white/85 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 rounded-full bg-brand px-4 py-2.5 text-center text-[12px] font-bold uppercase tracking-[0.1em] text-brand-foreground"
              >
                Get in touch
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
