"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    q: "How long does a typical project take?",
    a: "A custom web design and development project takes between 4 to 8 weeks. Custom AI automation pipelines and SEO integrations typically deploy within 3 to 6 weeks, depending on system complexity.",
  },
  {
    q: "What is included in a monthly retainer vs. a one-off project?",
    a: "One-off projects cover defined deliverables like website redesigns or custom tool development. Monthly retainers (e.g., for SEO, Content, and AI monitoring) provide continuous optimization, routine maintenance, and ongoing strategy updates.",
  },
  {
    q: "How does the project revision process work?",
    a: "We work in collaborative milestone stages. For design work, we offer up to 3 rounds of structural revisions during the Figma design phase before moving into development, ensuring you sign off on the exact visual layout first.",
  },
  {
    q: "What if I need custom development outside your standard services?",
    a: "We build custom integrations, data pipelines, and software systems regularly. During our initial scoping call, we will map out your exact system requirements and propose a tailored technical solution.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. While we are based globally, we work with ambitious businesses, venture-backed startups, and remote teams across the US, UK, Europe, and Asia. Communication is managed asynchronously via Slack and Loom updates.",
  },
  {
    q: "How do we monitor campaign performance and results?",
    a: "We set up live performance dashboards for all retainer clients. You can track search engine visibility, PageSpeed scores, and conversion metrics in real-time, backed by monthly strategy syncs.",
  },
  {
    q: "What's the process for getting started?",
    a: "You can select a starter package on our Pricing page or book a discovery call. We'll audit your current digital channels, align on deliverables, and kick off the project within 3 business days of signing.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: QUESTIONS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/60">
            Have questions about our process, packages, or technical
            capabilities? Find answers here or get in touch.
          </p>
        </Reveal>

        <Reveal className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-white/85">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-[13px] text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <Plus size={14} aria-hidden />
                  </span>
                </button>
                <div
                  className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="min-h-0 overflow-hidden">
                    <p className="pb-6 max-w-xl text-[14px] leading-relaxed text-white/60">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
