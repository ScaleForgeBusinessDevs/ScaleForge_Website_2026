"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import NeatBackground from "./NeatBackground";

export default function Hero() {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(".hero-line", { opacity: 0, y: 36 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12, delay: 0.25 })
        .fromTo(".hero-sub", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, "-=0.5")
        .fromTo(".hero-cta", { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, stagger: 0.1 }, "-=0.45");
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
          <span className="hero-line block">For Businesses Around the Globe</span>
        </h1>

        <p className="hero-sub mx-auto mt-6 max-w-lg text-balance text-[15.5px] leading-relaxed text-white/45">
          Creating Websites, Content and AI Automations While Scaling Businesses Using SEO , PPC and Meta Marketing
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="hero-cta rounded-full border border-white/15 px-6 py-3 text-[14px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            View Pricing
          </a>
          <a
            href="#"
            className="hero-cta inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
          >
            Contact Us
            <i className="bi bi-arrow-right" aria-hidden />
          </a>
        </div>
      </div>
    </section>
  );
}
