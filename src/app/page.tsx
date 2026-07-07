import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "ScaleForge - Building Business and Automating Workflows",
  description:
    "ScaleForge lets modern teams build, automate and monitor powerful workflows from one visual workspace.",
  alternates: {
    canonical: "https://scaleforgewebdev.vercel.app/",
  },
  openGraph: {
    title: "ScaleForge - Building Business and Automating Workflows",
    description:
      "ScaleForge lets modern teams build, automate and monitor powerful workflows from one visual workspace.",
    url: "https://scaleforgewebdev.vercel.app/",
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
    title: "ScaleForge - Building Business and Automating Workflows",
    description:
      "ScaleForge lets modern teams build, automate and monitor powerful workflows from one visual workspace.",
    images: ["/og-image.png"],
  },
};

export default function Home() {
  return (
    <>
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
