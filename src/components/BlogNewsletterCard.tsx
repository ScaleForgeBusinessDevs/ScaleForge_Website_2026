"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

export default function BlogNewsletterCard() {
  return (
    <div className="flex flex-col rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
      <Mail size={28} className="text-white/20" aria-hidden />
      <h3 className="mt-4 text-[16px] font-medium text-white">Get Weekly Insights Delivered to Your Inbox</h3>
      <p className="mt-2 text-[13px] leading-relaxed text-white/45">
        One actionable tip per week covering Next.js, AI automation, local SEO, or conversion copy. No spam. No
        filler. Unsubscribe with one click.
      </p>
      <form className="mt-5 flex flex-col gap-2.5" onSubmit={(e) => e.preventDefault()}>
        <input
          type="email"
          placeholder="Your email address"
          className="w-full rounded-full border border-white/[0.1] bg-white/[0.03] px-4 py-3 text-[13px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-white/25"
        />
        <button
          type="submit"
          className="rounded-full bg-[#2563eb] px-5 py-3 font-accent text-[11px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.02]"
        >
          Subscribe for Free
        </button>
      </form>
      <p className="mt-3 text-[11px] italic text-white/30">
        We will never sell your email. Read our{" "}
        <Link href="/privacy" className="underline decoration-white/20 hover:text-white/50">
          Privacy Policy
        </Link>
        .
      </p>
    </div>
  );
}
