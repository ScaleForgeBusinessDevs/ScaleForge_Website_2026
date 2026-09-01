import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";
import {
  Crosshair,
  ClipboardList,
  Activity,
  FileBarChart,
  Layers,
  Check,
  Quote,
} from "lucide-react";

export const metadata = {
  title: "Motion Analysis & Time and Motion Study | ScaleForge",
  description:
    "ScaleForge delivers digital time and motion studies to eliminate workflow inefficiency, optimize workforce activity, and increase throughput.",
  alternates: {
    canonical: "https://scalesforge.site/services/motion-analysis",
    languages: {
      "en": "https://scalesforge.site/services/motion-analysis",
      "x-default": "https://scalesforge.site/services/motion-analysis"
    }
  },
  keywords: ["Time and Motion Study","Motion Analysis","Operations Efficiency Consulting","Workplace Productivity","Throughput Optimization"],
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
    title:
      "Motion Analysis & Time and Motion Study | ScaleForge",
    description:
      "ScaleForge delivers digital time and motion studies to eliminate workflow inefficiency, optimize workforce activity, and increase throughput.",
    url: "https://scalesforge.site/services/motion-analysis",
    siteName: "ScaleForge",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Motion Analysis & Time and Motion Study | ScaleForge",
    description:
      "ScaleForge delivers digital time and motion studies to eliminate workflow inefficiency, optimize workforce activity, and increase throughput.",
    images: ["/og-image.png"],
  },
};

export default function MotionAnalysisPage() {

const STATS = [
  { value: "18%", label: "Avg. Productivity Gain" },
  { value: "3×", label: "Faster Than Manual Studies" },
  { value: "±2%", label: "Measurement Accuracy" },
  { value: "100%", label: "Digital & Paperless" }
];

const OFFERINGS = [
  { title: "Digital Time Studies", body: "Precision time capture across every task element using digital tools — replacing stopwatch-and-clipboard with structured data collection that is faster, more accurate, and instantly analysable.", icon: Activity },
  { title: "Motion & Workflow Mapping", body: "Spaghetti diagrams, process flow maps, and value-stream mapping of physical and digital workflows to visualise exactly where time, movement, and effort are being wasted.", icon: Layers },
  { title: "Efficiency Benchmarking", body: "We establish performance baselines and compare them against industry standards, best-in-class benchmarks, and internal variance to identify your highest-ROI improvement targets.", icon: Crosshair },
  { title: "Work Sampling Studies", body: "Statistical sampling of workforce activity across shifts to determine the ratio of productive, semi-productive, and non-productive time without continuous observation.", icon: ClipboardList },
  { title: "Digital Reports & Dashboards", body: "Comprehensive digital study reports with interactive charts, standard time calculations, efficiency ratings, and prioritised improvement recommendations — ready to share with leadership.", icon: FileBarChart },
];

const PROCESS = [
  { title: "Scope & Planning", body: "We define the study scope: which tasks, work centres, departments, or shifts to analyse, the level of elemental detail required, and the observation period." },
  { title: "Observation & Data Capture", body: "Our analysts conduct structured observations using digital time study software — capturing elemental times, activity classifications, and performance ratings in real time." },
  { title: "Data Validation", body: "Captured data is checked for statistical reliability, outliers are flagged and reviewed, and performance ratings are normalised to a consistent observer baseline." },
  { title: "Analysis & Benchmarking", body: "We calculate standard times, efficiency percentages, and utilisation rates, then benchmark against your internal best performers and industry reference data." },
  { title: "Report & Recommendations", body: "We deliver a full digital study report, improvement priority matrix, and a 90-day implementation roadmap with projected throughput and cost impact." },
];

const STANDARDS = [
  "Full digital time study with structured element breakdown",
  "Workflow and motion mapping with annotated diagrams",
  "Standard time calculations and performance ratings",
  "Efficiency benchmarking against industry norms",
  "Prioritised improvement opportunity report",
  "Executive summary deck and implementation roadmap",
];

const FAQS = [
  { q: "What is a time and motion study and how is it used?", a: "A time and motion study is a structured methodology for measuring how long each element of a work task takes and how people physically move to perform it. The data is used to calculate standard times, identify inefficiency, reduce unnecessary motion, and set evidence-based productivity targets. Originally developed by Frederick Taylor and Frank Gilbreth, modern digital time and motion studies are significantly faster and more accurate than the original clipboard-based approach." },
  { q: "What industries benefit most from motion analysis?", a: "Manufacturing, warehousing and logistics, assembly operations, healthcare patient-care workflows, construction site operations, retail back-of-house processes, and call centre workflows all show strong ROI from time and motion studies. Any operation where human labour is a significant cost driver and work is at least partially repeatable is a candidate." },
  { q: "How long does a typical time and motion study take?", a: "Study duration depends on the number of tasks, shifts, and work centres in scope. A focused single-department study typically takes 1–2 weeks of observation followed by 1 week of analysis and reporting. Multi-site or cross-functional studies covering multiple departments can run 4–8 weeks. We always begin with a scoping call to produce a precise timeline estimate." },
  { q: "How do you handle worker union or staff concerns?", a: "We always recommend transparent communication with the workforce before a study begins. Research consistently shows that workers who understand the purpose of a study — improving workflows, not replacing jobs — produce more representative data and are more receptive to the resulting changes. We can provide a communication template for your team." },
  { q: "Do you help with implementing the recommendations?", a: "Yes. Our standard engagement includes a 90-day improvement roadmap with specific recommendations, projected gains, and implementation sequencing. We can also be retained to support the change management process: running kaizen workshops, training team leaders on the new standard methods, and re-measuring post-implementation to quantify actual gains achieved." }
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
            "name": "Motion Analysis & Time and Motion Study",
            "item": "https://scalesforge.site/services/motion-analysis"
        }
    ]
};
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Motion Analysis & Time and Motion Study",
    "description": "ScaleForge delivers digital time and motion studies to eliminate workflow inefficiency, optimize workforce activity, and increase throughput.",
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
        eyebrow="MOTION ANALYSIS"
        title="Eliminate Wasted Motion. Recover Hidden Capacity."
        subhead="ScaleForge conducts digital time and motion studies that identify exactly where your workforce time goes — and precisely how to get more output from the same headcount."
        primaryCta={{
          label: "Book a Free Study Scoping Call",
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
              &ldquo;Studies consistently show that 25–40% of time in a typical
              manufacturing or logistics operation is non-value-adding. A
              rigorous motion study recovers most of it.&rdquo;
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[14.5px] leading-relaxed text-white/60">
              Most operational improvement initiatives fail because they target
              symptoms — adding headcount, extending shifts, or investing in
              automation — without first understanding exactly how current time
              and motion is allocated. A time and motion study gives you the
              diagnostic data to make changes that actually work.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Study Capabilities
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              We combine industrial engineering methodology with modern digital
              tools to deliver studies that are faster, more accurate, and more
              actionable than traditional approaches.
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
                Every Study Includes
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
                We don&apos;t just hand you a spreadsheet. Every study ends with
                a specific, sequenced, costed improvement roadmap — so your
                operations team knows exactly what to do on Monday morning.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Study Process */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Our Study Process
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
        heading="Time & Motion Study FAQs"
        questions={FAQS}
      />

      <CTASection
        title="Ready to Find Out Where Your Time Really Goes?"
        body="Book a free 30-minute study scoping call. We'll identify the highest-impact operations to study, estimate the productivity gain potential, and outline exactly what a study would involve for your team."
        primaryCta={{
          label: "Book a Free Study Scoping Call",
          href: "https://cal.com/shahood-saleem-gbzisb/30min",
        }}
        secondaryCta={{ label: "View All Services", href: "/services" }}
      />
    </>
  );
}
