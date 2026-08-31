import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/Header";

import logoMark from "@/assets/logo.svg";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import heroPortrait from "@/assets/hero-portrait.jpg.asset.json";
import uxResearch from "@/assets/ux-research.jpg.asset.json";
import uiDesign from "@/assets/ui-design.jpg.asset.json";
import productStrategy from "@/assets/product-strategy.jpg.asset.json";
import interactionDesign from "@/assets/interaction-design.jpg.asset.json";

const MARQUEE_WORDS = ["RESEARCH", "PROTOTYPE", "DESIGN", "VALIDATE", "LAUNCH"] as const;

const SERVICES = [
  {
    title: "UX Research",
    copy: "Deep user interviews, journey mapping, and competitive analysis to uncover real opportunities.",
    image: uxResearch.url,
  },
  {
    title: "UI Design",
    copy: "Crafting beautiful, consistent interfaces with scalable design systems and pixel-perfect detail.",
    image: uiDesign.url,
  },
  {
    title: "Product Strategy",
    copy: "Aligning business goals with user needs through roadmaps, OKRs, and prioritization frameworks.",
    image: productStrategy.url,
  },
  {
    title: "Interaction Design",
    copy: "Prototyping motion, micro-interactions, and flows that feel intuitive and delightful.",
    image: interactionDesign.url,
  },
] as const;

const PROCESS = [
  {
    step: "01 / Discover",
    title: "Research & Discovery",
    copy: "We immerse ourselves in your world—stakeholder interviews, user research, and market analysis—to build a shared understanding before a single pixel is placed.",
  },
  {
    step: "02 / Define",
    title: "Strategy & Framing",
    copy: "We synthesize findings into clear problems, information architecture, and service blueprints that align business goals with user needs.",
  },
  {
    step: "03 / Design",
    title: "Design & Prototype",
    copy: "From low-fidelity wireframes to high-fidelity prototypes, we iterate rapidly and validate every decision with real users along the way.",
  },
  {
    step: "04 / Deliver",
    title: "Handoff & Launch",
    copy: "We partner closely with engineering through detailed specs, design systems, and QA support to ensure a flawless launch.",
  },
] as const;

const FOOTER_COLUMNS = [
  {
    heading: "Sitemap",
    links: [
      { label: "Services", href: "#services" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Socials",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/digi_motive_technologies?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
      },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/digimotive-technologies-237221429/" },
      { label: "Twitter / X", href: "https://x.com" },
      { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61592978980298" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
] as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digimotive — Global UX/UI Design Agency" },
      {
        name: "description",
        content:
          "Digimotive is a global UX/UI design agency crafting human-centered digital experiences — research, UI design, product strategy, and interaction design.",
      },
      { property: "og:title", content: "Digimotive — Global UX/UI Design Agency" },
      {
        property: "og:description",
        content:
          "We help brands achieve their goals through design that reaches millions of people globally.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div id="top" className="min-h-screen bg-surface font-sans text-white">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroBg.url}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-ink/70" />

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-6 py-20 md:px-10 lg:grid-cols-[1fr_530px] lg:gap-16 lg:px-20 lg:py-28">
          <div>
            <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-white/55">
              Global UX/UI Design Agency
            </p>
            <h1 className="font-display mt-6 text-[44px] font-extrabold uppercase leading-[1.03] tracking-[-0.02em] text-white sm:text-[62px] lg:text-[80px]">
              Designing human-centered digital experiences
            </h1>
            <p className="mt-8 max-w-[460px] text-[17px] leading-[1.6] text-white/70">
              We help brands achieve their goals through design that reaches millions of people
              globally.
            </p>
            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-brand px-9 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-brand-foreground transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
          </div>

          <img
            src={heroPortrait.url}
            alt="Sunlit studio interior with a wooden ladder"
            className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[560px]"
            loading="lazy"
          />
        </div>
      </section>

      {/* Outlined marquee band */}
      <section aria-hidden="true" className="overflow-hidden border-y border-white/5 bg-ink py-10">
        <div className="animate-marquee flex w-max items-center gap-10 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-10">
              {MARQUEE_WORDS.map((word) => (
                <span
                  key={`${copy}-${word}`}
                  className="font-display text-outline flex items-center gap-10 text-[64px] font-extrabold uppercase leading-none lg:text-[110px]"
                >
                  {word}
                  <span className="h-[3px] w-[70px] bg-white/25 lg:w-[110px]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-surface py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <h2 className="font-display text-[40px] font-extrabold uppercase leading-none tracking-[-0.02em] lg:text-[56px]">
              Our Services
            </h2>
            <p className="max-w-[280px] text-[15px] leading-[1.6] text-white/60">
              End-to-end design capabilities for ambitious products.
            </p>
          </div>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((service) => (
              <article key={service.title}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-[200px] w-full object-cover"
                  loading="lazy"
                />
                <h3 className="mt-6 text-[20px] font-bold text-white">{service.title}</h3>
                <p className="mt-3 text-[14px] leading-[1.6] text-white/60">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="about" className="bg-surface pb-24 lg:pb-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <h2 className="font-display text-[40px] font-extrabold uppercase leading-none tracking-[-0.02em] lg:text-[56px]">
            Our Process
          </h2>

          <div className="mt-16 flex flex-col">
            {PROCESS.map((item) => (
              <div
                key={item.step}
                className="grid gap-4 border-t border-white/10 py-10 lg:grid-cols-[280px_1fr] lg:gap-8"
              >
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-brand">
                  {item.step}
                </p>
                <div className="max-w-[680px]">
                  <h3 className="text-[26px] font-bold text-white lg:text-[30px]">{item.title}</h3>
                  <p className="mt-4 text-[16px] leading-[1.6] text-white/60">{item.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="bg-brand py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <h2 className="font-display max-w-[720px] text-[48px] font-extrabold uppercase leading-[1.02] tracking-[-0.02em] text-brand-foreground lg:text-[86px]">
            Let's create something remarkable
          </h2>
          <p className="mt-10 max-w-[560px] text-[17px] leading-[1.6] text-brand-foreground/80">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help you
            achieve your goals.
          </p>
          <a
            href="tel:+919834540456"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ink px-9 py-4 text-[13px] font-bold uppercase tracking-[0.1em] text-white transition-transform hover:scale-[1.03]"
          >
            Start a project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-ink pt-24">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
          <div className="grid gap-12 lg:grid-cols-[1fr_repeat(3,220px)]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-white">
                  <img
                    src={logoMark}
                    alt=""
                    aria-hidden="true"
                    className="h-[19px] w-[21px] invert"
                  />
                </span>
                <span className="font-display text-[22px] font-extrabold uppercase leading-none tracking-[0.12em] text-white">
                  Digimotive
                </span>
              </div>
              <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-white/60">
                A global UX/UI design agency dedicated to crafting human-centered digital
                experiences that drive real results.
              </p>
            </div>

            {FOOTER_COLUMNS.map((column) => (
              <div key={column.heading}>
                <h3 className="text-[12px] font-bold uppercase tracking-[0.18em] text-white">
                  {column.heading}
                </h3>
                <ul className="mt-6 flex flex-col gap-4">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-[15px] text-white/60 transition-colors hover:text-brand"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-20 flex flex-col gap-3 border-t border-white/10 py-8 text-[12px] uppercase tracking-[0.16em] text-white/45 sm:flex-row sm:justify-between">
            <p>© 2026 Digimotive Technologies. All rights reserved.</p>
            <p>Pune, India</p>
          </div>

          <div
            aria-hidden="true"
            className="flex select-none items-center gap-8 overflow-hidden pt-10"
          >
            <span className="grid h-[110px] w-[110px] shrink-0 place-items-center rounded-[28px] bg-white/10 lg:h-[170px] lg:w-[170px] lg:rounded-[40px]">
              <img
                src={logoMark}
                alt=""
                className="h-[70px] w-[78px] opacity-25 lg:h-[104px] lg:w-[116px]"
              />
            </span>
            <span className="font-display text-[90px] font-extrabold uppercase leading-none tracking-[0.02em] text-white/10 lg:text-[190px]">
              Digimotive
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
