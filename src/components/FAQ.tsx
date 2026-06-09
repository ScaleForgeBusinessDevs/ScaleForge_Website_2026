"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const QUESTIONS = [
  {
    q: "Is my data secure?",
    a: "Yes. All data is encrypted in transit and at rest, and access is governed by role-based permissions and detailed audit logs.",
  },
  {
    q: "Is there a free trial available?",
    a: "Every plan starts with a 14-day free trial — no credit card required, with full access to core automation features.",
  },
  {
    q: "Which tools can I integrate with?",
    a: "ScaleForge connects with 200+ platforms including CRMs, communication tools, payment processors, and data warehouses.",
  },
  {
    q: "What is a virtual automation workspace?",
    a: "A dedicated environment where your team builds, tests and runs workflows together — with shared visibility and version history.",
  },
  {
    q: "How does the AI Suggestions feature work?",
    a: "ScaleForge analyzes your workflow patterns and execution history to recommend optimizations, flag risks, and suggest new automations.",
  },
  {
    q: "Do I need coding experience to use the platform?",
    a: "No. ScaleForge is built around a visual, drag-and-drop workflow builder — though advanced users can extend flows with custom code.",
  },
  {
    q: "What makes this different from traditional tools?",
    a: "ScaleForge combines visual building, real-time monitoring and AI-driven intelligence in one workspace — instead of stitching tools together.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <div className="mx-auto max-w-[860px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            Automation, Explained
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">
            Everything you need to know about managing, automating, and
            scaling visual workflows with confidence.
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
                  <span className="text-[15px] font-medium text-white/85">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/15 text-[13px] text-white/60 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <i className="bi bi-plus-lg" aria-hidden />
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
