import { createFileRoute } from "@tanstack/react-router";

import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import linkedin from "@/assets/linkedin.svg";
import logoMark from "@/assets/logo.svg";
import orb from "@/assets/orb.svg";
import phone from "@/assets/phone.svg";
import pulse from "@/assets/pulse.svg";
import twitter from "@/assets/twitter.svg";

const PHONE_NUMBER = "+919834540456";
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/digimo_tech?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/profile.php?id=61592978980298",
  twitter: "https://x.com",
  linkedin: "https://www.linkedin.com/in/digimotive-technologies-237221429/",
} as const;

const SOCIAL_ITEMS = [
  { href: SOCIAL_LINKS.instagram, src: instagram, alt: "Instagram", label: "Instagram" },
  { href: SOCIAL_LINKS.facebook, src: facebook, alt: "Facebook", label: "Facebook" },
  { href: SOCIAL_LINKS.twitter, src: twitter, alt: "Twitter", label: "X / Twitter" },
  { href: SOCIAL_LINKS.linkedin, src: linkedin, alt: "LinkedIn", label: "LinkedIn" },
] as const;

const displayFont = {
  fontFamily: '"Nova Round", "Arial Rounded MT Bold", sans-serif',
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digimotive — Launching Soon" },
      {
        name: "description",
        content: "Digimotive, your Pune-based digital growth partner. Launching soon.",
      },
      { property: "og:title", content: "Digimotive — Launching Soon" },
      {
        property: "og:description",
        content: "We're crafting something extraordinary. Digimotive is almost ready to help your brand dominate the digital landscape.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-white text-[#0b0f19] antialiased">
      <header className="border-b border-[#0b0f19]/10 bg-white">
        <div className="mx-auto flex h-[65px] max-w-[1440px] items-center justify-between px-5 md:px-10 lg:px-20">
          <div className="flex items-center gap-4">
            <div className="grid h-10 w-10 place-items-center rounded-[12px] bg-[#0b0f19]">
              <img src={logoMark} alt="" aria-hidden="true" className="h-[18px] w-[18px]" />
            </div>
            <div className="text-[22px] font-normal uppercase text-[#0b0f19]" style={displayFont}>
              DIGIMOTIVE
            </div>
          </div>

          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full bg-[#0b0f19] px-6 py-3 text-[15px] font-semibold text-white transition-opacity hover:opacity-90"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
            <img src={phone} alt="" aria-hidden="true" className="h-4 w-4" />
            <span>Call Now</span>
          </a>
        </div>
      </header>

      <main className="relative overflow-hidden bg-white">
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={orb} alt="" className="h-[420px] w-[420px] md:h-[520px] md:w-[520px]" />
        </div>

        <section className="relative mx-auto flex min-h-[calc(100vh-65px)] max-w-[800px] flex-col items-center justify-center gap-8 px-6 pb-16 pt-10 text-center md:gap-10">
          <div className="inline-flex items-center justify-center rounded-full border border-[#5a4fff]/10 bg-[#5a4fff]/8 px-4 py-1.5 text-[13px] font-bold uppercase tracking-[3px] text-[#5a4fff]">
            LAUNCHING SOON • STAY TUNED
          </div>

          <h1
            className="max-w-[760px] text-[52px] font-normal leading-[1.1] tracking-[-1.9px] text-[#0b0f19] md:text-[76px]"
            style={displayFont}
          >
            We are coming <span className="text-[#5a4fff]">soon</span>
          </h1>

          <div className="h-1 w-40 rounded-full bg-[#5a4fff]" aria-hidden="true" />

          <p className="max-w-[700px] text-[18px] leading-[1.6] text-[#6b7280] md:text-[20px]">
            We&apos;re crafting something extraordinary. Digimotive — your Pune-based digital growth partner — is almost ready to help your brand dominate the digital landscape.
          </p>

          <div className="inline-flex items-center gap-3 rounded-full border border-[#5a4fff]/20 bg-white px-5 py-2.5 shadow-[0_0_0_1px_rgba(90,79,255,0.2)]">
            <img src={pulse} alt="" aria-hidden="true" className="h-2 w-2" />
            <span className="text-[14px] font-medium text-[#0b0f19]">Website Under Development</span>
          </div>
        </section>
      </main>

      <footer className="bg-[#0b0f19]">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-8 md:px-10 lg:px-20">
          <div className="flex items-center gap-3">
            <span className="text-[20px] uppercase text-white" style={displayFont}>
              DIGIMOTIVE
            </span>
            <span className="text-[14px] text-white/60">| © 2026</span>
          </div>

          <div className="flex items-center gap-4">
            {SOCIAL_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="grid h-9 w-9 place-items-center rounded-[18px] border border-white/10 bg-white/5 transition-colors hover:bg-white/10"
              >
                <img src={item.src} alt="" aria-hidden="true" className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
