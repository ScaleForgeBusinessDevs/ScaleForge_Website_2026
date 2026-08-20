import localFont from "next/font/local";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import SmoothScroll from "@/components/SmoothScroll";
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
  src: [
    {
      path: "../fonts/Akira-Expanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Akira-Expanded-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-akira",
  display: "swap",
});

const turismo = localFont({
  src: [
    {
      path: "../fonts/Turismo-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Turismo-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-turismo",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://scalesforge.site"),
  title: "ScaleForge - Building Business and Automating Workflows",
  description:
    "ScaleForge lets modern teams build, automate and monitor powerful workflows from one visual workspace.",
  icons: {
    icon: "/Assets/favicon_SF.png",
  },
  verification: {
    google: "NLRphgBON1vMYVwxagvtYH9VUO05BYE-Airp18EV9PY",
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "x-default": "/"
    },
    media: {
      "only screen and (max-width: 640px)": "/"
    }
  },
  keywords: [
    "ScaleForge",
    "Web Design Agency",
    "Next.js Web Development Services",
    "Search Engine Optimization",
    "SEO Services",
    "AI Automation Workflows",
    "Startup Advisory",
    "Supply Chain Management Software",
    "Time and Motion Study Consultant",
    "Content Creation Agency"
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "ScaleForge",
    "url": "https://scalesforge.site",
    "logo": "https://scalesforge.site/Assets/favicon_SF.png",
    "foundingDate": "2024",
    "description": "ScaleForge is a premier digital agency building high-performance websites, custom AI automations, and growth-driven SEO & content strategies.",
    "email": "scaleforgebusinessdev@gmail.com",
    "founder": [
      {
        "@type": "Person",
        "name": "Shahood Saleem",
        "jobTitle": "CEO & Founder"
      },
      {
        "@type": "Person",
        "name": "Ruhan Bhaleshah",
        "jobTitle": "Partner & Technical Lead"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/shahood-saleem/",
      "https://x.com/scaleforge",
      "https://www.linkedin.com/in/ruhan-bhaleshah-aa50761b3"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "scaleforgebusinessdev@gmail.com",
      "availableLanguage": ["English"]
    }
  };

  const profSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "ScaleForge",
    "image": "https://scalesforge.site/Assets/favicon_SF.png",
    "url": "https://scalesforge.site",
    "priceRange": "$1,200 – $8,000+",
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
      "Content Creation",
      "Startup Advisory",
      "Social Media Branding",
      "Supply Chain Management",
      "Motion Analysis"
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
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className="min-h-full flex flex-col bg-[#08080a] text-white font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profSchema) }}
        />

        <SmoothScroll />
        <Navbar />
        <main className="flex-1 min-w-0">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
