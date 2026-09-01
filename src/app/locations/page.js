import Link from "next/link";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { getAllLocations } from "@/lib/programmaticSeo";
import { ArrowRight, MapPin, Building, Users } from "lucide-react";

export const metadata = {
  title: "US Metro Locations & Local Market Directory | ScaleForge",
  description:
    "Explore ScaleForge's local digital growth and Next.js engineering footprint across 44 major US metropolitan markets, from Houston and Austin to New York and San Francisco.",
  alternates: {
    canonical: "https://scalesforge.site/locations",
  },
  openGraph: {
    title: "US Metro Locations & Local Market Directory | ScaleForge",
    description:
      "Explore ScaleForge's local digital growth and Next.js engineering footprint across 44 major US metropolitan markets.",
    url: "https://scalesforge.site/locations",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function LocationsIndexPage() {
  const locations = getAllLocations();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://scalesforge.site",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://scalesforge.site/locations",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <section className="relative overflow-hidden bg-[#08080a] pb-24 pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(94,106,210,0.15),rgba(255,255,255,0))]" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="font-accent text-[10px] uppercase tracking-[0.2em] text-[#a5aef0]">
              National Footprint
            </span>
            <h1 className="mt-5 text-[clamp(2.1rem,5vw,3.6rem)] font-display font-normal leading-[1.12] text-white">
              Local SEO & Web Engineering Across 44 US Metros
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/60">
              We help local commercial operators, medical practices, law firms, and tech startups dominate page one in their regional markets.
            </p>
          </Reveal>

          {/* Locations Grid */}
          <Reveal stagger className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <Link
                key={loc.code}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#0d0d12] p-6 transition-all duration-300 hover:border-[#5e6ad2]/50 hover:bg-[#12121a]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 text-[10px] font-mono font-semibold text-[#a5aef0]">
                      {loc.code}
                    </span>
                    <span className="text-[11px] text-white/40">{loc.population} Metro</span>
                  </div>

                  <h2 className="mt-4 text-[18px] font-medium text-white group-hover:text-[#a5aef0] transition-colors">
                    {loc.city}, {loc.stateCode}
                  </h2>

                  <p className="mt-2 text-[12.5px] leading-relaxed text-white/50 line-clamp-2">
                    {loc.economicHub}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11.5px] text-white/40">
                  <span>View Metro Hub</span>
                  <span className="text-[#a5aef0] group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <CTASection
        title="Looking for Regional Market Domination?"
        body="Learn how our programmatic local SEO architecture and high-velocity web development put your business in front of high-intent buyers in your city."
        primaryCta={{ label: "Book Strategy Call", href: "/contact" }}
        secondaryCta={{ label: "Instant Website Audit", href: "/audit" }}
      />
    </>
  );
}
