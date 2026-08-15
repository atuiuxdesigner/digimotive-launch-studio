import { useState, useRef, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";

import pulse from "@/assets/pulse.svg";
import logoMark from "@/assets/logo.svg";
import phoneIcon from "@/assets/phone.svg";
import whatsappIcon from "@/assets/whatsapp.svg";
import instagramIcon from "@/assets/instagram.svg";
import facebookIcon from "@/assets/facebook.svg";
import twitterIcon from "@/assets/twitter.svg";
import linkedinIcon from "@/assets/linkedin.svg";

/** Visible numbers and destination links. Easy to update. */
const CALLING_NUMBER = "+91 9834540456";
const CALLING_HREF = "tel:+919834540456";
const WHATSAPP_NUMBER = "91  9623880889";
const WHATSAPP_HREF = "https://wa.me/919623880889";

/** Fullscreen looping background video. */
const BACKGROUND_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4";

const SOCIAL_LINKS = [
  { name: "Instagram", href: "#", icon: instagramIcon },
  { name: "Facebook", href: "#", icon: facebookIcon },
  { name: "X", href: "#", icon: twitterIcon },
  { name: "LinkedIn", href: "#", icon: linkedinIcon },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digimotive — Launching Soon | Pune Digital Growth Partner" },
      {
        name: "description",
        content:
          "Digimotive, your Pune-based digital growth partner, is launching soon. Call or WhatsApp us to start early.",
      },
      { property: "og:title", content: "Digimotive — Launching Soon" },
      {
        property: "og:description",
        content:
          "We're crafting something extraordinary. Digimotive, your Pune-based digital growth partner, is almost ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ComingSoon,
});

function ComingSoon() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#001a26]">
      <video
        className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
        src={BACKGROUND_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
        tabIndex={-1}
      />

      <header className="relative z-10 flex h-[65px] shrink-0 items-center justify-between border-b border-white/10 px-6 md:px-10 lg:px-20">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Digimotive home">
          <span className="liquid-glass grid h-10 w-10 shrink-0 place-items-center rounded-[10px]">
            <img src={logoMark} alt="" aria-hidden="true" className="h-[24.5px] w-[27px]" />
          </span>
          <span className="font-display truncate text-[18px] leading-none tracking-[0.02em] text-white sm:text-[22px]">
            DIGIMOTIVE
          </span>
        </a>
        <ContactDropdown />
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-6 py-20 md:px-10 lg:px-20">
        <div className="relative flex w-full max-w-[800px] flex-col items-center gap-8">
          <p className="liquid-glass animate-fade-rise rounded-[100px] px-4 py-1.5 text-[13px] font-bold tracking-[3px] text-white/90">
            LAUNCHING SOON • STAY TUNED
          </p>

          <div className="animate-fade-rise flex flex-col items-center gap-2">
            <h1 className="font-display text-center text-[44px] leading-[1.1] tracking-[-1.1px] text-white sm:text-[56px] lg:text-[76px] lg:tracking-[-1.9px]">
              We are coming <span className="text-white/60">soon</span>
            </h1>
            <span
              aria-hidden="true"
              className="h-1 w-[120px] rounded-[2px] bg-white/70 lg:w-[160px]"
            />
          </div>

          <p className="animate-fade-rise-delay max-w-[700px] text-center text-[17px] leading-[1.6] text-white/70 sm:text-[20px]">
            We're crafting something extraordinary. Digimotive — your Pune-based digital growth
            partner — is almost ready to help your brand dominate the digital landscape.
          </p>

          <p className="liquid-glass animate-fade-rise-delay-2 flex items-center gap-2 rounded-[100px] px-5 py-2.5 text-[14px] font-medium text-white">
            <img src={pulse} alt="" aria-hidden="true" className="h-2 w-2 animate-pulse" />
            Website Under Development
          </p>
        </div>
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-4 border-t border-white/10 px-6 py-8 sm:flex-row sm:justify-between md:px-10 lg:px-20">
        <p className="flex items-center gap-2">
          <span className="font-display text-[20px] leading-none text-white">DIGIMOTIVE</span>
          <span className="text-[14px] text-white/60">| © 2026</span>
        </p>
        <ul className="flex items-center gap-3">
          {SOCIAL_LINKS.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                aria-label={social.name}
                className="grid h-9 w-9 place-items-center rounded-[18px] bg-white/[0.08] transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FFF]"
              >
                <img src={social.icon} alt="" aria-hidden="true" className="h-4 w-4" />
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </div>
  );
}

function ContactDropdown() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div ref={containerRef} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-controls="contact-menu"
        className="flex shrink-0 items-center gap-2 rounded-[30px] bg-[#0B0F19] px-4 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FFF] sm:px-6"
      >
        <img src={phoneIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
        Call Now
      </button>

      {open && (
        <div
          id="contact-menu"
          role="menu"
          aria-label="Contact options"
          className="absolute right-0 top-[calc(100%+10px)] z-50 w-[260px] overflow-hidden rounded-[18px] border border-black/[0.06] bg-white p-2 shadow-[0_12px_40px_rgba(0,0,0,0.12)]"
        >
          <a
            href={CALLING_HREF}
            role="menuitem"
            className="flex items-center gap-3 rounded-[14px] px-3 py-3 transition-colors hover:bg-[#5A4FFF]/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FFF]"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#5A4FFF]/[0.08]">
              <img src={phoneIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[13px] font-semibold text-[#0B0F19]">Call</span>
              <span className="truncate text-[14px] font-medium text-[#6B7280]">{CALLING_NUMBER}</span>
            </span>
          </a>
          <a
            href={WHATSAPP_HREF}
            role="menuitem"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-[14px] px-3 py-3 transition-colors hover:bg-[#5A4FFF]/[0.08] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FFF]"
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25D366]/[0.10]">
              <img src={whatsappIcon} alt="" aria-hidden="true" className="h-4 w-4" />
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="text-[13px] font-semibold text-[#0B0F19]">WhatsApp</span>
              <span className="truncate text-[14px] font-medium text-[#6B7280]">{WHATSAPP_NUMBER}</span>
            </span>
          </a>
        </div>
      )}
    </div>
  );
}
