"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import NeatBackground from "./NeatBackground";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const els = root.current?.querySelectorAll<HTMLElement>(".hero-line, .hero-sub, .hero-cta");
      if (!els?.length) return;

      // Promote compositor layers before GSAP reads geometry — prevents forced reflow
      els.forEach((el) => { el.style.willChange = "transform, opacity"; });

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: () => {
          els.forEach((el) => { el.style.willChange = "auto"; });
        },
      });

      // Hide elements immediately before animating — not before JS loads.
      // Content was visible by default; GSAP takes over only now.
      tl.set(".hero-line, .hero-sub, .hero-cta", { opacity: 0, y: 0 })
        .to(".hero-line", { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.1 })
        .to(".hero-sub", { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .to(".hero-cta", { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.45");
    },
    { scope: root }
  );


  return (
    <section
      id="top"
      ref={root}
      className="relative flex min-h-[100vh] items-center overflow-hidden bg-[#08080a] py-32"
    >
      <NeatBackground className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-gradient-to-b from-white/[0.05] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-[#08080a]" />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 text-center lg:px-10">
        <h1 className="mx-auto max-w-6xl text-[clamp(1.9rem,6vw,3rem)] font-display font-normal tracking-normal leading-[1.1] text-white">
          <span className="hero-line block">Building Online Presence</span>
          {" "}
          <span className="hero-line block">For Businesses Around the Globe</span>
        </h1>

        <p className="hero-sub mx-auto mt-6 max-w-lg text-balance text-[15.5px] leading-relaxed text-white/45">
          Creating Websites, Content and AI Automations While Scaling Businesses Using SEO, PPC and Meta Marketing
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/pricing"
            className="hero-cta rounded-full border border-white/15 px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            View Pricing
          </a>
          <a
            href="/contact"
            className="hero-cta inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
          >
            Contact Us
            <ArrowRight size={14} aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
