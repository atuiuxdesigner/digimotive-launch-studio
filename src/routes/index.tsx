import { createFileRoute } from "@tanstack/react-router";
import logoMark from "@/assets/logo.svg";

// Configuration constants
const PHONE_NUMBER = "+919834540456";
const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/digimo_tech?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==",
  facebook: "https://www.facebook.com/profile.php?id=61592978980298",
  twitter: "https://twitter.com",
  linkedin: "https://www.linkedin.com/in/digimotive-technologies-237221429/",
} as const;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Digimotive — Coming Soon" },
      {
        name: "description",
        content: "Digimotive, your Pune-based digital growth partner, is almost ready to help your brand dominate the digital landscape.",
      },
      { property: "og:title", content: "Digimotive — Coming Soon" },
      {
        property: "og:description",
        content: "We're crafting something extraordinary. Digimotive — your Pune-based digital growth partner — is almost ready.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-20">
          {/* Logo + Brand */}
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-gray-900">
              <img src={logoMark} alt="" aria-hidden="true" className="h-5 w-5" />
            </div>
            <span className="font-display text-[22px] font-bold uppercase leading-none tracking-[0.04em] text-gray-900">
              Digimotive
            </span>
          </div>

          {/* Call Now CTA */}
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 rounded-full bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            aria-label={`Call ${PHONE_NUMBER}`}
          >
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
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex min-h-[calc(100vh-64px)] items-center justify-center overflow-hidden bg-white py-20">
        {/* Ambient Orb Background */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform"
        >
          <div className="h-[600px] w-[600px] rounded-full bg-gradient-to-br from-purple-300/30 via-purple-200/20 to-transparent blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold uppercase tracking-wider" style={{ backgroundColor: "rgba(90, 79, 255, 0.08)", color: "#5A4FFF" }}>
            <span>🚀</span>
            <span>Launching Soon • Stay Tuned</span>
          </div>

          {/* Main Headline */}
          <div className="mb-2 flex flex-col items-center gap-0">
            <h1 className="font-display max-w-3xl text-[76px] font-bold leading-[1.1] tracking-tight text-gray-900">
              We are coming{" "}
              <span style={{ color: "#5A4FFF" }}>soon</span>
            </h1>
          </div>

          {/* Decorative Underline */}
          <div className="mb-8 h-1 w-40 rounded bg-purple-500" style={{ backgroundColor: "#5A4FFF" }} />

          {/* Supporting Paragraph */}
          <p className="mb-12 max-w-[700px] text-[20px] leading-[1.6] text-gray-700">
            We're crafting something extraordinary. Digimotive — your Pune-based digital growth partner — is almost ready to help your brand dominate the digital landscape.
          </p>

          {/* Status Pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-gray-900"
            style={{
              backgroundColor: "white",
              border: "1px solid rgba(90, 79, 255, 0.2)",
            }}
          >
            <span
              className="inline-block h-2 w-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#5A4FFF" }}
              aria-hidden="true"
            />
            Website Under Development
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-20 py-8 text-white">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex items-center justify-between">
            {/* Left: Logo + Copyright */}
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-[10px] bg-white">
                <img src={logoMark} alt="" aria-hidden="true" className="h-5 w-5 invert" />
              </div>
              <span className="font-display text-sm font-bold uppercase tracking-[0.04em]">
                Digimotive <span className="font-sans font-normal text-white/60">| © 2026</span>
              </span>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-white/10"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
                  <path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" stroke="none" fill="currentColor" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-white/10"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-white/10"
                aria-label="Twitter/X"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.694l-5.245-6.856-6.009 6.856h-3.315l7.775-8.933L.424 2.25h6.852l4.776 6.316 5.392-6.316z" />
                </svg>
              </a>

              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg transition-colors hover:bg-white/10"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
