"use client";

import { useRef } from "react";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";

export default function Reveal({
  children,
  className = "",
  delay = 0,
  y = 28,
  stagger = false,
  staggerAmount = 0.12,
  as = "div",
}) {
  const ref = useRef(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const targets = stagger ? Array.from(el.children) : el;

      // Apply hidden state via JS only after mount — content is visible by default
      // so it stays readable if GSAP fails or is slow to execute.
      (targets instanceof Element ? [targets] : Array.from(targets)).forEach(
        (t) => {
          t.classList.add("gsap-will-reveal");
        },
      );

      // Promote to compositor layer before GSAP reads geometry — prevents forced reflow
      el.style.willChange = "transform, opacity";

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
            onComplete: () => {
              // Release compositor layer after animation — reduces memory
              el.style.willChange = "auto";
              (targets instanceof Element
                ? [targets]
                : Array.from(targets)
              ).forEach((t) => {
                t.classList.remove("gsap-will-reveal");
              });
            },
          });
        },
      });
    },
    { scope: ref },
  );

  const Comp = as;
  return (
    <Comp ref={ref} className={className}>
      {children}
    </Comp>
  );
}
