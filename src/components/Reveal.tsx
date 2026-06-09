"use client";

import { useRef, ReactNode } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Stagger reveal of direct children instead of the wrapper as a whole */
  stagger?: boolean;
  staggerAmount?: number;
  as?: "div" | "section";
}

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  stagger = false,
  staggerAmount = 0.12,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const targets = stagger ? Array.from(el.children) : el;

      gsap.set(targets, { opacity: 0, y });

      ScrollTrigger.create({
        trigger: el,
        start: "top 85%",
        once: true,
        onEnter: () => {
          gsap.to(targets, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            delay,
            ease: "power3.out",
            stagger: stagger ? staggerAmount : 0,
          });
        },
      });
    },
    { scope: ref }
  );

  const Comp = as;
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
