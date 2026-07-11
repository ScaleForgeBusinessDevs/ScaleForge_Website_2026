import Reveal from "./Reveal";
import { LOGOS } from "./LogoMarks";

export default function LogoStrip() {
  return (
    <section className="border-y border-white/[0.06] bg-[#08080a] py-12">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal>
          <p className="mb-8 text-center font-accent text-[10.5px] uppercase tracking-[0.16em] text-white/35">
            Compatible with Your Existing Work Stack
          </p>
        </Reveal>
        <Reveal
          stagger
          staggerAmount={0.06}
          className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6"
        >
          {LOGOS.map(({ name, Mark }) => (
            <span key={name} className="flex items-center gap-2.5 text-[15px] font-medium tracking-tight text-white/30 transition-colors hover:text-white/55">
              <Mark className="h-6 w-6" />
              {name}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
