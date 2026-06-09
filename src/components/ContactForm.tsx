"use client";

import { useState } from "react";

const SERVICES = [
  "AI Automation",
  "Web Design",
  "Web Development",
  "SEO",
  "Content",
  "Not sure yet",
];

const BUDGETS = [
  "< $2k",
  "$2k–$5k",
  "$5k–$10k",
  "$10k+",
  "Monthly retainer",
  "Not sure yet",
];

const TIMELINES = ["ASAP", "Within a month", "1–3 months", "Just exploring"];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");

  function toggleService(s: string) {
    setSelectedServices((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    // Placeholder: replace with actual form submission (API route / Formspree / EmailJS)
    await new Promise((r) => setTimeout(r, 1000));
    setFormState("success");
  }

  if (formState === "success") {
    return (
      <div className="flex min-h-[320px] flex-col items-center justify-center gap-4 rounded-2xl border border-white/[0.07] bg-[#101013] p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#6fcf8e]/30 bg-[#6fcf8e]/10">
          <i className="bi bi-check2 text-[24px] text-[#6fcf8e]" aria-hidden />
        </span>
        <h3 className="text-[20px] font-medium text-white">Message Sent!</h3>
        <p className="max-w-xs text-[14px] leading-relaxed text-white/45">
          We&apos;ll read it within 4 business hours and get back to you with sharper questions and a proposed call time.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
            Full Name <span className="text-[#e8633a]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Shahood Saleem"
            className="rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/25"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
            Email <span className="text-[#e8633a]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="hello@company.com"
            className="rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/25"
          />
        </div>
      </div>

      {/* Company */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="company" className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
          Company / Website <span className="text-white/20">(optional)</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="acme.com"
          className="rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/25"
        />
      </div>

      {/* Services multi-select chips */}
      <div className="flex flex-col gap-2">
        <p className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
          What are you interested in? <span className="text-[#e8633a]">*</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => toggleService(s)}
              className={`rounded-full border px-3.5 py-2 font-accent text-[10.5px] uppercase tracking-[0.1em] transition-colors ${
                selectedServices.includes(s)
                  ? "border-[#e8633a]/40 bg-[#e8633a]/10 text-[#e8633a]"
                  : "border-white/[0.09] text-white/40 hover:border-white/20 hover:text-white/65"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Budget + Timeline */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="budget" className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
            Budget Range <span className="text-white/20">(optional)</span>
          </label>
          <select
            id="budget"
            name="budget"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="rounded-xl border border-white/[0.09] bg-[#101013] px-4 py-3 text-[14px] text-white/70 outline-none transition-colors focus:border-white/25"
          >
            <option value="" disabled>Select a range</option>
            {BUDGETS.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="timeline" className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
            Timeline <span className="text-white/20">(optional)</span>
          </label>
          <select
            id="timeline"
            name="timeline"
            value={timeline}
            onChange={(e) => setTimeline(e.target.value)}
            className="rounded-xl border border-white/[0.09] bg-[#101013] px-4 py-3 text-[14px] text-white/70 outline-none transition-colors focus:border-white/25"
          >
            <option value="" disabled>Select a timeline</option>
            {TIMELINES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/40">
          Tell us about your project <span className="text-[#e8633a]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={50}
          rows={5}
          placeholder="Describe what you're building, what's not working, or what you want to achieve..."
          className="rounded-xl border border-white/[0.09] bg-white/[0.03] px-4 py-3 text-[14px] text-white placeholder:text-white/25 outline-none transition-colors focus:border-white/25 resize-none leading-relaxed"
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={formState === "submitting"}
          className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-7 py-3.5 font-accent text-[11px] uppercase tracking-[0.14em] text-white transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {formState === "submitting" ? (
            <>
              <span className="h-3.5 w-3.5 animate-spin rounded-full border border-[#08080a]/30 border-t-[#08080a]" />
              Sending…
            </>
          ) : (
            <>
              Send Message
              <i className="bi bi-arrow-right" aria-hidden />
            </>
          )}
        </button>
        <p className="mt-3 text-[12px] italic text-white/30">
          We typically respond within 4 business hours during our working window (Mon–Fri, flexible coverage across US/EU/AU time zones).
        </p>
      </div>
    </form>
  );
}
