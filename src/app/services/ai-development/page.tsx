import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "AI Development & Automation Services | ScaleForge",
  description:
    "Build AI automation that scrapes leads, runs cold-calling agents, and publishes social content 24/7. ScaleForge builds with n8n, Make, Vapi, and Zapier.",
};

const CAPABILITIES = [
  {
    icon: "bi-magnet",
    title: "Lead Generation Automation",
    body: "Automatically scrape, enrich, qualify, and deliver high-intent leads directly into your CRM — without touching a spreadsheet.",
  },
  {
    icon: "bi-telephone-outbound",
    title: "AI Cold Calling Agents",
    body: "Deploy Vapi-powered AI voice agents that call your lead list, handle objections, and book qualified appointments into your calendar — 24/7.",
  },
  {
    icon: "bi-share",
    title: "Social Media Automation",
    body: "Generate, schedule, and publish branded content across Instagram, LinkedIn, X, and TikTok on a fully automated publishing pipeline.",
  },
  {
    icon: "bi-stars",
    title: "AI Content Generation",
    body: "Automatically produce SEO blog posts, email sequences, and ad copy from a single brief using structured AI pipelines built in n8n or Make.com.",
  },
  {
    icon: "bi-diagram-3",
    title: "Workflow & CRM Automation",
    body: "Connect your entire business stack — Notion, Google Sheets, HubSpot, Slack — into one seamless automated data pipeline with zero manual input.",
  },
  {
    icon: "bi-robot",
    title: "Custom AI Agents & Chatbots",
    body: "Build bespoke AI agents trained on your business data to handle customer queries, internal requests, and support tickets autonomously.",
  },
];

const LEAD_GEN_STEPS = [
  { title: "Target Identification", body: "Define your ICP by industry, company size, location, and job title inside a Notion database." },
  { title: "Data Scraping", body: "n8n automatically scrapes LinkedIn, Google Maps, or Apollo for matching prospects." },
  { title: "Enrichment", body: "Each lead is enriched with verified email, phone, and company revenue data via API." },
  { title: "Qualification", body: "AI scores and filters leads against your criteria — only hot prospects make the cut." },
  { title: "CRM Delivery", body: "Qualified leads land in your Google Sheets CRM with automated follow-up sequences triggered." },
];

const LEAD_GEN_STATS = [
  { value: "500+", label: "Leads Scraped / Day" },
  { value: "< 5s", label: "Per Lead Enriched" },
  { value: "0", label: "Manual Hours Required" },
  { value: "24/7", label: "Pipeline Runs" },
];

const COLD_CALL_STEPS = [
  { title: "Lead List Input", body: "Your Google Sheets lead list triggers the Vapi calling queue automatically at your configured time windows." },
  { title: "AI Dials & Speaks", body: "Vapi's real-time voice agent calls each number, introduces your business, and engages in natural two-way conversation." },
  { title: "Handles Objections", body: "The AI is trained on your specific sales script and handles common objections, pricing questions, and follow-up requests." },
  { title: "Books & Logs", body: "Qualified prospects are booked into your calendar via Calendly. Every call outcome is logged back to Google Sheets instantly." },
];

const VAPI_REPLACES = [
  "Hiring & training SDR staff",
  "Manual CRM call logging",
  "Follow-up reminder systems",
  "Call recording & summarizing",
  "Calendar booking back-and-forth",
  "After-hours lead follow-up",
];

const SOCIAL_STEPS = [
  { title: "Content Brief", body: "Drop a topic or keyword into your Notion content database. This triggers the automation instantly." },
  { title: "AI Generates", body: "n8n calls an AI model to write platform-specific captions, hashtag sets, and image prompts." },
  { title: "Images Created", body: "AI image generation produces branded visuals aligned with your color palette and style guide." },
  { title: "Auto-Published", body: "Make.com schedules and publishes to all connected platforms at your peak engagement windows." },
];

const PLATFORMS = ["Instagram", "LinkedIn", "X (Twitter)", "TikTok", "Facebook", "YouTube Shorts", "Pinterest"];

const TECH_STACK = [
  { name: "n8n", body: "Self-hosted workflow automation platform for complex, custom multi-step AI pipelines with full data control." },
  { name: "Make.com", body: "Visual drag-and-drop automation builder for connecting 1,000+ apps without writing a line of code." },
  { name: "Zapier", body: "Rapid business app integrations to bridge your existing tools with automated triggers and actions." },
  { name: "Vapi", body: "AI voice agent infrastructure for building and deploying real-time phone call automation at scale." },
  { name: "Notion", body: "Central workspace and lightweight CMS that feeds content briefs, lead data, and task queues into automations." },
  { name: "Google Sheets", body: "Real-time data backbone for tracking leads, call outcomes, content calendars, and performance metrics." },
];

const BUILD_PROCESS = [
  { title: "Discovery & Audit", body: "We map every manual workflow in your business, identify automation opportunities, and prioritize by ROI impact." },
  { title: "Stack Selection", body: "We choose the right combination of tools (n8n, Make, Zapier, Vapi) based on your budget, data sensitivity, and scale needs." },
  { title: "Build & Integrate", body: "We connect your systems, build the automation flows, and wire up AI agents with live testing across all edge cases." },
  { title: "Test & Optimize", body: "Every workflow is stress-tested across real data volumes. We fix failures, tune AI prompts, and optimize trigger logic." },
  { title: "Hand-off & Monitor", body: "We deliver full documentation, train your team, and provide ongoing monitoring to keep automations running perfectly." },
];

const FAQS = [
  {
    q: "What is AI automation and how does it save my business time?",
    a: "AI automation uses tools like n8n, Make, and Zapier to connect your business apps and trigger actions automatically. Instead of your team copying data between systems, scheduling social posts, or following up with leads manually, the automation does it 24/7 without input. The result: 6+ recovered hours per employee per week and dramatically faster response times.",
  },
  {
    q: "Do I need technical knowledge to use the automations you build?",
    a: "No. Every automation we build is designed to run silently in the background. You interact with familiar tools — Google Sheets, Notion, your CRM — exactly as you do today. The automation happens behind the scenes. We also deliver full documentation and a training session so your team understands what's running and how.",
  },
  {
    q: "How does Vapi AI cold calling work?",
    a: "Vapi is an AI voice infrastructure that lets us build voice agents capable of holding real-time conversations over phone calls. We train the agent on your sales script, configure objection handling, connect it to your lead list and calendar, and deploy it. The agent calls leads, qualifies them, and books appointments — at a fraction of the cost of human SDRs.",
  },
  {
    q: "How quickly can you build and deploy an automation?",
    a: "Most automations are deployed within 2 to 4 weeks. Simpler workflows (lead enrichment, social scheduling) can be live in under 10 business days. Complex multi-system orchestrations (full CRM automation, voice agent deployment) typically take 3 to 4 weeks including testing and hand-off.",
  },
  {
    q: "Is my business data safe with self-hosted tools like n8n?",
    a: "Yes — and that's precisely why we offer self-hosted n8n as the default for sensitive workflows. Your data never leaves your infrastructure. For clients with lower compliance demands, we deploy on managed n8n cloud, Make.com, or Zapier depending on the use case.",
  },
  {
    q: "What does ongoing maintenance look like?",
    a: "After hand-off, you have two options: take full ownership and run the automations yourself, or retain ScaleForge on a monthly maintenance plan for monitoring, updates, and expansions. Most clients start with maintenance for the first 90 days and then transition to full ownership once their team is fluent.",
  },
];

function StepFlow({ steps }: { steps: { title: string; body: string }[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, i) => (
        <div key={step.title} className="flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-[#101013] p-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-accent text-[12px] text-white/60">
            {i + 1}
          </span>
          <h3 className="text-[14.5px] font-medium text-white">{step.title}</h3>
          <p className="text-[12.5px] leading-relaxed text-white/45">{step.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function AIDevelopmentPage() {
  return (
    <>
      <PageHero
        eyebrow="AI AUTOMATION"
        title="AI Systems That Scale Your Business on Autopilot"
        subhead="We build bespoke automation workflows using n8n, Make.com, Zapier, Vapi, Notion, and Google Sheets to eliminate repetitive work, generate leads, and publish content — while you focus on growing your business."
        primaryCta={{ label: "Book a Free Automation Audit", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Examples Below", href: "#examples" }}
      />

      {/* The Reality */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1200px] px-6 text-center lg:px-10">
          <Reveal className="flex flex-col items-center">
            <p className="mx-auto mt-7 max-w-6xl text-[clamp(1.2rem,5vw,1.8rem)] font-normal leading-[1.3] text-white">
              &ldquo;Businesses that automate repetitive tasks recover an average of 6+ hours per employee per week —
              and reduce lead response time by up to 80%.&rdquo;
            </p>
            <p className="mx-auto mt-7 max-w-xl text-[14.5px] font-inter leading-relaxed text-white/45">
              Every hour your team spends copying data, chasing leads, or manually posting content is an hour not
              spent closing deals, building relationships, or scaling your offer. We close that gap with custom-built
              automation that runs while your team sleeps.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Core Automation Capabilities
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.07} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((cap) => (
              <div key={cap.title} className="flex flex-col gap-4 rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70">
                  <i className={`bi ${cap.icon} text-[16px]`} aria-hidden />
                </span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">{cap.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/45">{cap.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Example Flow 1 — Lead Generation */}
      <section id="examples" className="scroll-mt-28 border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Automated Lead Generation
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              A fully hands-off pipeline that finds, enriches, qualifies, and delivers ready-to-contact leads — built
              on n8n and Google Sheets.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <StepFlow steps={LEAD_GEN_STEPS} />
          </Reveal>

          <Reveal stagger className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {LEAD_GEN_STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-5 py-6 text-center">
                <p className="text-[24px] font-bold tracking-[-0.01em] text-white">{stat.value}</p>
                <p className="mt-2 text-[10.5px] uppercase leading-snug tracking-[0.08em] text-white/40">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Example Flow 2 — AI Cold Calling with Vapi */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              AI Cold Calling with Vapi
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              A Vapi-powered voice agent dials your lead list, holds natural conversations, handles objections, and
              books qualified appointments — completely autonomously.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {COLD_CALL_STEPS.map((step, i) => (
                <div key={step.title} className="flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-[#101013] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-accent text-[12px] text-white/60">
                    {i + 1}
                  </span>
                  <h3 className="text-[14.5px] font-medium text-white">{step.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-white/45">{step.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
              <p className="font-accent text-[10px] uppercase tracking-[0.18em] text-white/40">What Vapi Replaces</p>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {VAPI_REPLACES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 rounded-md border border-white/[0.06] bg-white/[0.015] px-3.5 py-2.5 text-[12.5px] leading-relaxed text-white/55">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#e8633a]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-2xl border border-white/20 bg-[#101013] p-10 text-center shadow-[0_40px_120px_-50px_rgba(255,255,255,0.25)]">
              <p className="text-[40px] font-bold tracking-[-0.02em] text-white">80%</p>
              <p className="text-[12px] uppercase leading-snug tracking-[0.1em] text-white/45">Reduction in SDR Cost</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Example Flow 3 — Social Media Autopilot */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Social Media on Autopilot
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/45">
              From a single content brief in Notion to published posts across Instagram, LinkedIn, X, and TikTok —
              without touching a scheduling tool.
            </p>
          </Reveal>

          <Reveal className="mt-14">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {SOCIAL_STEPS.map((step, i) => (
                <div key={step.title} className="flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-[#101013] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 font-accent text-[12px] text-white/60">
                    {i + 1}
                  </span>
                  <h3 className="text-[14.5px] font-medium text-white">{step.title}</h3>
                  <p className="text-[12.5px] leading-relaxed text-white/45">{step.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal stagger staggerAmount={0.04} className="mt-8 flex flex-wrap justify-center gap-3">
            {PLATFORMS.map((platform) => (
              <span key={platform} className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-2.5 text-[13px] text-white/55">
                {platform}
              </span>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-[#08080a] py-24 lg:py-32">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              Tools We Build With
            </h2>
          </Reveal>

          <Reveal stagger staggerAmount={0.07} className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((tool) => (
              <div key={tool.name} className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
                <h3 className="text-[16px] font-medium text-white">{tool.name}</h3>
                <p className="mt-2 text-[13px] leading-relaxed text-white/45">{tool.body}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Build Process */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-24 lg:py-32">
        <div className="mx-auto max-w-[860px] px-6 lg:px-10">
          <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <h2 className="mt-5 text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
              How We Build Your Automation
            </h2>
          </Reveal>

          <Reveal className="mt-14 flex flex-col">
            {BUILD_PROCESS.map((step, i) => (
              <div key={step.title} className="flex gap-6 border-t border-white/[0.07] py-6 first:border-t-0">
                <span className="font-accent text-[13px] text-white/30">0{i + 1}</span>
                <div>
                  <h3 className="text-[15px] font-medium text-white">{step.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/45">{step.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <FAQAccordion eyebrow="CLARITY" heading="AI Automation FAQs" questions={FAQS} />

      <CTASection
        title="Ready to Automate Your Business?"
        body="Book a free 30-minute automation audit. We'll identify the highest-ROI workflows in your business and outline exactly what we can build for you — no commitment, no obligation."
        primaryCta={{ label: "Book a Free Automation Audit", href: "https://cal.com/shahood-saleem-gbzisb/30min" }}
        secondaryCta={{ label: "See Pricing", href: "/pricing#ai-development" }}
      />
    </>
  );
}
