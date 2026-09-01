import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  BarChart2,
  TrendingUp,
  Package,
  Truck,
  GitBranch,
  Check,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Supply Chain Software & Sales Forecasting | ScaleForge",
  description:
    "ScaleForge builds custom supply chain software with AI sales forecasting, inventory optimization, and supplier analytics purpose-built for your operations.",
  alternates: {
    canonical: "https://scalesforge.site/services/supply-chain-management",
    languages: {
      "en": "https://scalesforge.site/services/supply-chain-management",
      "x-default": "https://scalesforge.site/services/supply-chain-management"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/services/supply-chain-management"
    }
  },
  keywords: ["Supply Chain Software","Sales Forecasting Models","Inventory Optimization System","ERP Custom Integration","SAP Dynamics Odoo API"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Supply Chain Software & Sales Forecasting | ScaleForge",
    description:
      "ScaleForge builds custom supply chain software with AI sales forecasting, inventory optimization, and supplier analytics purpose-built for your operations.",
    url: "https://scalesforge.site/services/supply-chain-management",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Supply Chain Software & Sales Forecasting | ScaleForge",
    description:
      "ScaleForge builds custom supply chain software with AI sales forecasting, inventory optimization, and supplier analytics purpose-built for your operations.",
    images: ["/og-image.png"],
  },
};

export default function SupplyChainManagementPage() {

const STATS = [
  { value: "23%", label: "Avg. Inventory Cost Reduction" },
  { value: "94%", label: "Forecast Accuracy at 30 Days" },
  { value: "2×", label: "Faster Procurement Decisions" },
  { value: "0", label: "Manual Data Transfers Required" }
];

const OFFERINGS = [
  { title: "AI-Powered Sales Forecasting", body: "Machine learning models trained on your historical sales data, seasonality patterns, and external signals to produce accurate demand forecasts at SKU, category, and regional levels.", icon: TrendingUp },
  { title: "Inventory Optimisation", body: "Automated reorder point calculations, safety stock modelling, and dead-stock alerts that prevent both stockouts and costly overstock situations across your warehouse network.", icon: Package },
  { title: "Supplier & Procurement Analytics", body: "Real-time dashboards tracking supplier lead times, fill rates, and cost variance — so you can renegotiate from a position of data and identify single-source risks before they become crises.", icon: Truck },
  { title: "ERP & Systems Integration", body: "Seamless two-way integrations with SAP, Oracle, Microsoft Dynamics, Odoo, and custom ERP systems — your forecast data flows automatically without manual re-entry.", icon: GitBranch },
  { title: "Executive Reporting Dashboards", body: "Role-specific dashboards for operations managers, finance teams, and C-suite — showing the KPIs each stakeholder needs without the noise they don't.", icon: BarChart2 }
];

const PROCESS = [
  { title: "Operations Audit", body: "We map your current supply chain workflows, data sources, pain points, and the specific forecasting and reporting gaps costing you money today." },
  { title: "Data Architecture", body: "We design the data model connecting your sales history, inventory levels, supplier records, and external market signals into a unified forecasting layer." },
  { title: "Model Development", body: "We build and train demand forecasting models — statistical, ML, or hybrid — tuned to your category dynamics and validated against held-out historical data." },
  { title: "Software Build", body: "We develop the custom application layer: dashboards, alert systems, automated reports, and ERP sync pipelines, all built in your preferred technology stack." },
  { title: "Deployment & Training", body: "We deploy to production, train your team on the system, and monitor forecast accuracy and system stability for the first 90 days post-launch." }
];

const STANDARDS = [
  "Custom demand forecasting models built on your data",
  "Automated reorder and safety stock calculations",
  "Real-time supplier performance scorecards",
  "Full ERP and data warehouse integration",
  "Role-based access and executive dashboards",
  "Ongoing model retraining and accuracy monitoring"
];

const FAQS = [
  { q: "What data do you need to build a forecasting model?", a: "At minimum, 12–24 months of historical sales data at SKU or product category level. Better models come with additional signals: promotional calendars, seasonality flags, supplier lead times, and external data like economic indicators or web traffic. We conduct a data audit at the start of every engagement to assess what you have and what we can supplement." },
  { q: "Can you integrate with our existing ERP system?", a: "Yes. We have integration experience with SAP, Oracle NetSuite, Microsoft Dynamics 365, Odoo, and custom-built ERP systems. For systems without a native API, we build ETL pipelines to extract, transform, and sync data on a scheduled basis. Integration complexity and timeline depends on your system's API maturity." },
  { q: "How accurate are the sales forecasts?", a: "Accuracy varies by industry and data quality, but our models typically achieve 85–96% accuracy at the 30-day horizon for established product lines with 18+ months of clean historical data. New products, highly seasonal categories, and markets with significant external volatility will have wider confidence intervals, which we model explicitly." },
  { q: "Do we need a data team to maintain the system?", a: "No. We build systems designed to be maintained by operations or finance teams without data science backgrounds. Models are retrained automatically on a scheduled basis. You receive clear accuracy reports and drift alerts so you always know when a model needs attention — and we handle the retraining under a maintenance contract." },
  { q: "How long does a full build take?", a: "A standard forecasting platform with 2–3 integrations and a dashboard layer typically takes 8–14 weeks from kickoff to production. More complex deployments with multiple warehouses, international data sources, or legacy ERP systems can run 16–24 weeks. We always start with a scoped MVP delivered in the first 4 weeks so your team can validate the approach early." }
];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://scalesforge.site"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Services",
            "item": "https://scalesforge.site/services"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Supply Chain Management Software",
            "item": "https://scalesforge.site/services/supply-chain-management"
        }
    ]
};
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Supply Chain Management Software",
    "description": "ScaleForge builds custom supply chain software with AI sales forecasting, inventory optimization, and supplier analytics purpose-built for your operations.",
    "brand": {
        "@type": "Brand",
        "name": "ScaleForge"
    },
    "offers": {
        "@type": "AggregateOffer",
        "priceCurrency": "USD",
        "lowPrice": "1200",
        "highPrice": "8000",
        "offerCount": "3"
    }
};

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />

      <PageHero
        eyebrow="SUPPLY CHAIN"
        title="Custom Software That Forecasts Demand and Cuts Waste"
        subhead="ScaleForge builds purpose-built supply chain management platforms with AI-powered sales forecasting, real-time inventory intelligence, and supplier analytics — replacing spreadsheets with systems that actually scale."
        primaryCta={{
          label: "Book a Free Operations Review",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
        stats={STATS}
      />

      {/* Stat Section */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 text-center lg:px-10">
          <Reveal className="flex flex-col items-center">
            <p className="mx-auto mt-7 text-[clamp(1.4rem,3vw,1.9rem)] font-display font-normal leading-[1.3] text-white">
              &ldquo;Companies with advanced supply chain capabilities achieve
              15% lower supply chain costs, 50% less inventory holdings, and 3×
              faster cash-to-cash cycles.&rdquo;
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[14.5px] leading-relaxed text-white/60">
              Most mid-market businesses still forecast demand in Excel and
              track inventory in disconnected spreadsheets. The gap between
              where they are and where a custom platform could take them is
              measured in seven figures of recoverable annual margin.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Platform Capabilities
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              Every module is purpose-built for your operations — not a generic
              SaaS platform forced to fit your workflow.
            </p>
          </Reveal>

          <Reveal
            stagger
            staggerAmount={0.07}
            className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {OFFERINGS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#101013] p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                  <item.icon size={16} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/60">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* What's Included */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-start">
            <Reveal>
              <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
                Every Build Includes
              </h2>
              <ul className="mt-8 space-y-3">
                {STANDARDS.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[14px] leading-relaxed text-white/55"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-white/15 text-[10px] text-white/60">
                      <Check size={10} aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="rounded-2xl border border-white/[0.07] bg-[#101013] p-8">
              <Quote size={24} className="text-white/20" aria-hidden />
              <p className="mt-3 text-[15px] italic leading-relaxed text-white/65">
                We don&apos;t sell you a generic SaaS licence with 80% of
                features you&apos;ll never use. We build exactly what your
                supply chain needs — nothing more, nothing less.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Build Process */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Build Process
            </h2>
          </Reveal>

          <Reveal className="mt-14 flex flex-col">
            {PROCESS.map((step, i) => (
              <div
                key={step.title}
                className="flex gap-6 border-t border-white/[0.07] py-6 first:border-t-0"
              >
                <span className="font-accent text-[13px] text-white/30">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQAccordion
        eyebrow="CLARITY"
        heading="Supply Chain Software FAQs"
        questions={FAQS}
      />

      <CTASection
        title="Ready to Replace Spreadsheets with a Platform That Scales?"
        body="Book a free 30-minute operations review. We'll map your current supply chain data flows, identify your biggest forecasting gaps, and outline what a custom system would look like for your business."
        primaryCta={{
          label: "Book a Free Operations Review",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
