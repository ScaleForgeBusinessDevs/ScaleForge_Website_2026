import type { Metadata } from "next";
import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";
import BiLoader from "@/components/BiLoader";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const akira = localFont({
  src: "../fonts/Akira-Expanded-Bold.otf",
  variable: "--font-akira",
  display: "swap",
});

const turismo = localFont({
  src: "../fonts/Turismo-Bold.otf",
  variable: "--font-turismo",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://scaleforgewebdev.vercel.app"),
  title: "ScaleForge - Building Business and Automating Workflows",
  description:
    "ScaleForge lets modern teams build, automate and monitor powerful workflows from one visual workspace.",
  icons: {
    icon: "/Assets/favicon_SF.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ScaleForge",
    "url": "https://scaleforgewebdev.vercel.app",
    "logo": "https://scaleforgewebdev.vercel.app/Assets/favicon_SF.png",
    "sameAs": [
      "https://www.linkedin.com/in/shahood-saleem/",
      "https://x.com/scaleforge",
      "https://www.linkedin.com/in/ruhan-bhaleshah-aa50761b3"
    ]
  };

  const profSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ScaleForge",
    "image": "https://scaleforgewebdev.vercel.app/Assets/favicon_SF.png",
    "url": "https://scaleforgewebdev.vercel.app",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Karachi",
      "addressCountry": "PK"
    },
    "serviceType": [
      "Web Design",
      "Web Development",
      "SEO",
      "AI Automation",
      "Content Creation"
    ],
    "areaServed": [
      { "@type": "Country", "name": "US" },
      { "@type": "Country", "name": "EU" },
      { "@type": "Country", "name": "AU" },
      { "@type": "Country", "name": "PK" }
    ]
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${akira.variable} ${turismo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#08080a] text-white font-sans" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profSchema) }}
        />
        <SmoothScroll />
        <BiLoader />
        <Navbar />
        <main className="flex-1 min-w-0">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
