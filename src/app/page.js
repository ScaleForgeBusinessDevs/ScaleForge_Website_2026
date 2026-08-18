import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import PlatformFeatures from "@/components/PlatformFeatures";
import Metrics from "@/components/Metrics";
import Capabilities from "@/components/Capabilities";
import AutomationLimits from "@/components/AutomationLimits";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Insights from "@/components/Insights";
import ClosingCTA from "@/components/ClosingCTA";

export const metadata = {
  title: "ScaleForge | Premier Web, SEO & AI Agency",
  description:
    "ScaleForge is a premier digital agency building high-performance websites, custom AI automations, and growth-driven SEO & content strategies.",
  alternates: {
    canonical: "https://scalesforge.site/",
    languages: {
      "en": "https://scalesforge.site/",
      "x-default": "https://scalesforge.site/"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/"
    }
  },
  openGraph: {
    title: "ScaleForge | Premier Web, SEO & AI Agency",
    description:
      "ScaleForge is a premier digital agency building high-performance websites, custom AI automations, and growth-driven SEO & content strategies.",
    url: "https://scalesforge.site/",
    siteName: "ScaleForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleForge | Premier Web, SEO & AI Agency",
    description:
      "ScaleForge is a premier digital agency building high-performance websites, custom AI automations, and growth-driven SEO & content strategies.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "ScaleForge",
      "url": "https://scalesforge.site",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://scalesforge.site/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      "name": ["Services", "Projects", "Blog", "Pricing", "About", "Contact"],
      "url": [
        "https://scalesforge.site/services",
        "https://scalesforge.site/projects",
        "https://scalesforge.site/blog",
        "https://scalesforge.site/pricing",
        "https://scalesforge.site/about",
        "https://scalesforge.site/contact"
      ]
    }
  ];

  return (
    <>
      {homeSchemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <Hero />
      <LogoStrip />
      <PlatformFeatures />
      <Metrics />
      <Capabilities />
      <AutomationLimits />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Insights />
      <ClosingCTA />
    </>
  );
}
