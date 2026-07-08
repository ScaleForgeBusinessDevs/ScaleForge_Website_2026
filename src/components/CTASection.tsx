import Reveal from "./Reveal";
import { ArrowRight } from "lucide-react";

interface CtaLink {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export default function CTASection({ title, body, primaryCta, secondaryCta }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#08080a] py-28 lg:py-36">
      <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.6vw,3.25rem)] font-display font-normal tracking-normal leading-[1.1] text-white">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/45">{body}</p>
        </Reveal>

        <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={secondaryCta.href}
            className="rounded-full border border-white/15 px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            {secondaryCta.label}
          </a>
          <a
            href={primaryCta.href}
            className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
          >
            {primaryCta.label}
            <ArrowRight size={14} aria-hidden />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
