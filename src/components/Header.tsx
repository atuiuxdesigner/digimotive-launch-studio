import * as React from "react";

import logoMark from "@/assets/logo.svg";
import phoneIcon from "@/assets/phone.svg";
import whatsappIcon from "@/assets/whatsapp.svg";

/** Contact destination links. */
const CALLING_HREF = "tel:+919834540456";
const WHATSAPP_HREF = "https://wa.me/919623880889";

export function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const menuRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onClick);
    };
  }, [menuOpen]);

  return (
    <header className="relative z-20 flex h-[65px] shrink-0 items-center justify-between border-b border-white/10 px-6 md:px-10 lg:px-20">
      <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Digimotive home">
        <span className="liquid-glass grid h-10 w-10 shrink-0 place-items-center rounded-[10px]">
          <img src={logoMark} alt="" aria-hidden="true" className="h-[24.5px] w-[27px]" />
        </span>
        <span className="font-display truncate text-[18px] leading-none tracking-[0.02em] text-white sm:text-[22px]">
          DIGIMOTIVE
        </span>
      </a>

      {/* Desktop CTAs */}
      <div className="hidden shrink-0 items-center gap-3 md:flex">
        <a
          href={CALLING_HREF}
          className="liquid-glass flex shrink-0 items-center gap-2 rounded-[30px] px-5 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-6"
        >
          <img src={phoneIcon} alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert" />
          Call
        </a>
        <a
          href={WHATSAPP_HREF}
          target="_blank"
          rel="noreferrer"
          className="liquid-glass flex shrink-0 items-center gap-2 rounded-[30px] px-5 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white lg:px-6"
        >
          <img src={whatsappIcon} alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert" />
          WhatsApp
        </a>
      </div>

      {/* Mobile hamburger */}
      <div ref={menuRef} className="relative md:hidden">
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-contact-menu"
          aria-label={menuOpen ? "Close contact menu" : "Open contact menu"}
          className="liquid-glass grid h-11 w-11 shrink-0 place-items-center rounded-[12px] text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>

        {menuOpen && (
          <div
            id="mobile-contact-menu"
            className="animate-fade-rise absolute right-0 top-[calc(100%+12px)] flex w-[180px] flex-col gap-3 rounded-[20px] border border-white/10 bg-[#001a26]/95 p-3 shadow-2xl backdrop-blur-xl"
          >
            <a
              href={CALLING_HREF}
              onClick={() => setMenuOpen(false)}
              className="liquid-glass flex items-center gap-3 rounded-[16px] px-4 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <img src={phoneIcon} alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert" />
              Call
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="liquid-glass flex items-center gap-3 rounded-[16px] px-4 py-3 text-[15px] font-semibold text-white transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <img src={whatsappIcon} alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert" />
              WhatsApp
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
