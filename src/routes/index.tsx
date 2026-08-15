import { createFileRoute } from "@tanstack/react-router";

import orb from "@/assets/orb.svg";
import pulse from "@/assets/pulse.svg";
import logoMark from "@/assets/logo.svg";
import phoneIcon from "@/assets/phone.svg";
import instagramIcon from "@/assets/instagram.svg";
import facebookIcon from "@/assets/facebook.svg";
import twitterIcon from "@/assets/twitter.svg";
import linkedinIcon from "@/assets/linkedin.svg";

/** Change this to the real business number (E.164 recommended). */
const PHONE_NUMBER = "+910000000000";

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
          "Digimotive, your Pune-based digital growth partner, is launching soon. Our website is under development — call us to start early.",
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
    <div className="flex min-h-screen flex-col bg-white">
      <header className="flex h-[65px] shrink-0 items-center justify-between border-b border-black/[0.06] bg-white px-6 md:px-10 lg:px-20">
        <a href="/" className="flex min-w-0 items-center gap-3" aria-label="Digimotive home">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-[10px] bg-[#0B0F19]">
            <img src={logoMark} alt="" aria-hidden="true" className="h-[24.5px] w-[27px]" />
          </span>
          <span className="font-display truncate text-[18px] leading-none tracking-[0.02em] text-[#0B0F19] sm:text-[22px]">
            DIGIMOTIVE
          </span>
        </a>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex shrink-0 items-center gap-2 rounded-[30px] bg-[#0B0F19] px-4 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#5A4FFF] sm:px-6"
        >
          <img src={phoneIcon} alt="" aria-hidden="true" className="h-3.5 w-3.5" />
          Call Now
        </a>
      </header>

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-6 py-20 md:px-10 lg:px-20">
        <img
          src={orb}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[700px] w-[700px] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-100"
        />
        <div className="relative flex w-full max-w-[800px] flex-col items-center gap-8">
          <p className="rounded-[100px] bg-[#5A4FFF]/[0.08] px-4 py-1.5 text-[13px] font-bold tracking-[3px] text-[#5A4FFF]">
            LAUNCHING SOON • STAY TUNED
          </p>

          <div className="flex flex-col items-center gap-2">
            <h1 className="font-display text-center text-[44px] leading-[1.1] tracking-[-1.1px] text-[#0B0F19] sm:text-[56px] lg:text-[76px] lg:tracking-[-1.9px]">
              We are coming <span className="text-[#5A4FFF]">soon</span>
            </h1>
            <span
              aria-hidden="true"
              className="h-1 w-[120px] rounded-[2px] bg-[#5A4FFF] lg:w-[160px]"
            />
          </div>

          <p className="max-w-[700px] text-center text-[17px] leading-[1.6] text-[#6B7280] sm:text-[20px]">
            We're crafting something extraordinary. Digimotive — your Pune-based digital growth
            partner — is almost ready to help your brand dominate the digital landscape.
          </p>

          <p className="flex items-center gap-2 rounded-[100px] border border-[#5A4FFF]/20 bg-white px-5 py-2.5 text-[14px] font-medium text-[#0B0F19]">
            <img src={pulse} alt="" aria-hidden="true" className="h-2 w-2 animate-pulse" />
            Website Under Development
          </p>
        </div>
      </main>

      <footer className="flex flex-col items-center gap-4 bg-[#0B0F19] px-6 py-8 sm:flex-row sm:justify-between md:px-10 lg:px-20">
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