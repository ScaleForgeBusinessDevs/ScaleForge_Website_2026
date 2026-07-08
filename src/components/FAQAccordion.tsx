"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  eyebrow?: string;
  heading: string;
  subhead?: string;
  questions: FAQItem[];
}

export default function FAQAccordion({ eyebrow, heading, subhead, questions }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((item) => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a,
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
            {heading}
          </h2>
          {subhead && <p className="mt-4 text-[15px] leading-relaxed text-white/45">{subhead}</p>}
        </Reveal>

        <Reveal className="mt-14 divide-y divide-white/[0.07] border-y border-white/[0.07]">
          {questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-[15px] font-medium text-white/85">{item.q}</span>
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
                    <p className="pb-6 max-w-xl text-[14px] leading-relaxed text-white/45">{item.a}</p>
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
