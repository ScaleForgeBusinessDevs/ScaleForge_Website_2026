"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ── Nav pages ─────────────────────────────────────────────────────────────────
const PAGES = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

// ── Industries ────────────────────────────────────────────────────────────────
const INDUSTRIES = [
  "Accounting & CPA Firms",
  "Auto Repair & Mechanics",
  "Bicycle Shops & Retailers",
  "Construction & Contractors",
  "Dental Practices",
  "E-Commerce & Online Brands",
  "Financial Advisors",
  "Fitness & Gyms",
  "Healthcare & Clinics",
  "HVAC & Home Services",
  "Insurance Agencies",
  "Law Firms & Attorneys",
  "Manufacturing & B2B",
  "Medical Spas & Aesthetics",
  "Plumbing Companies",
  "Property Management",
  "Real Estate",
  "Restaurant & Food Service",
  "Staffing & Recruiting",
  "Technology & SaaS",
];

// ── Location abbreviations ────────────────────────────────────────────────────
const LOCATIONS = [
  "HOU", "ATX", "DTX", "SF", "MIA", "CHI", "NYC", "DC", "LA", "ATL", "BOS", "DEN", "BNA",
  "PHL", "PHX", "SAT", "SAN", "SEA", "CLT", "IND", "SJC", "CMH", "PDX", "LAS", "MEM",
  "BAL", "MKE", "ABQ", "TUC", "FRE", "SAC", "MCI", "MCO", "CLE", "PIT", "CIN", "TPA",
  "STL", "RIC", "RDU", "SLC", "PVD", "ORF", "TUL",
];

// ── Contact cards ─────────────────────────────────────────────────────────────
const CONTACT = [
  {
    id: "email",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 7l10 7 10-7" />
      </svg>
    ),
    label: "EMAIL",
    value: "scaleforgebusinessdev@gmail.com",
    href: "mailto:scaleforgebusinessdev@gmail.com",
  },
  {
    id: "phone",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.8 19.8 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.8 19.8 0 01.02 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
    label: "PHONE",
    value: "Talk to our Team",
    href: "/contact",
  },
  {
    id: "address",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "ADDRESS",
    value: "4803 Westpark Dr Ste 304B, Houston, TX 77063",
    href: "https://maps.google.com/?q=4803+Westpark+Dr+Ste+304B+Houston+TX+77063",
  },
  {
    id: "linkedin",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    label: "LINKEDIN",
    value: "ScaleForge",
    href: "https://www.linkedin.com/company/scale-forge-web-devs",
  },
];

// ── Component ─────────────────────────────────────────────────────────────────
export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/studio") || pathname.startsWith("/portal"))
    return null;

  return (
    <footer className="border-t border-white/[0.06] bg-[#08080a] pb-10 pt-16">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">

        {/* ── Top three-column row ── */}
        <div className="grid grid-cols-1 gap-12 border-b border-white/[0.06] pb-14 lg:grid-cols-[1.4fr_0.7fr_1.4fr] lg:gap-10">

          {/* Col 1 – Brand */}
          <div>
            <Link
              href="/"
              aria-label="ScaleForge Home"
              className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-white"
            >
              <img
                src="/Assets/favicon_SF.png"
                alt=""
                className="h-7 w-7 object-contain"
              />
              ScaleForge
            </Link>
            <p className="mt-1 text-[10px] font-semibold tracking-[0.18em] text-white/40 uppercase">
              Digital Growth Studio
            </p>
            <p className="mt-4 max-w-[300px] text-[13.5px] leading-relaxed text-white/55">
              ScaleForge is a digital growth studio helping startups, SMEs, and
              scaling businesses build better websites, sharper content, and
              smarter AI-powered workflows.
            </p>
          </div>

          {/* Col 2 – Pages */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-white/85 uppercase mb-5">
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {PAGES.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-[13.5px] text-white/55 transition-colors hover:text-white/80"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Get in Touch */}
          <div>
            <p className="text-[11px] font-semibold tracking-[0.16em] text-white/85 uppercase mb-5">
              Get in Touch
            </p>
            <div className="flex flex-col gap-3">
              {CONTACT.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3.5 rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-3 transition-colors hover:border-[#5e6ad2]/30 hover:bg-white/[0.05]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5e6ad2]/15 text-[#8b96e8] group-hover:bg-[#5e6ad2]/25 transition-colors">
                    {item.icon}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[10px] font-semibold tracking-[0.14em] text-white/40 uppercase">
                      {item.label}
                    </p>
                    <p className="truncate text-[13px] text-white/70 group-hover:text-white/90 transition-colors">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Industries row ── */}
        <div className="border-b border-white/[0.06] py-8">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-white/85 uppercase">
            Industries
          </p>
          <div className="flex flex-wrap gap-y-2">
            {INDUSTRIES.map((ind, i) => (
              <span key={ind} className="text-[12.5px] text-white/45">
                {ind}
                {i < INDUSTRIES.length - 1 && (
                  <span className="mx-2.5 text-white/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ── Locations row ── */}
        <div className="border-b border-white/[0.06] py-8">
          <p className="mb-4 text-[10px] font-semibold tracking-[0.18em] text-white/85 uppercase">
            Locations
          </p>
          <div className="flex flex-wrap gap-y-2">
            {LOCATIONS.map((loc, i) => (
              <span key={loc} className="text-[12.5px] text-white/45">
                {loc}
                {i < LOCATIONS.length - 1 && (
                  <span className="mx-2 text-white/20">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="flex flex-col items-start justify-between gap-4 pt-8 sm:flex-row sm:items-center">
          <p className="text-[12.5px] text-white/45">
            © {new Date().getFullYear()} ScaleForge. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[12.5px] text-white/40">
            <Link href="/privacy" className="hover:text-white/65 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="hover:text-white/65 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
