import Reveal from "./Reveal";

const TESTIMONIALS = [
  {
    initials: "LcR",
    name: "Luxury Car Rental",
    role: "CEO",
    quote:
      "One of the most corporative and active team of developers and SEO experts we have worked with yet.",
    industry: "Car Rental Company — Malaysia",
  },
  {
    initials: "DT",
    name: "Daniel Torres",
    role: "Founder & CEO",
    quote:
      "From Figma to fully deployed in under two weeks. The speed and attention to brand detail was unlike anything we experienced with previous agencies.",
    industry: "Real Estate Agency — USA",
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-[#f5a623]" viewBox="0 0 20 20" aria-hidden>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.062 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      {/* Background image */}
      <img
        src="/Assets/Testimonials.webp"
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-[#08090a]/78" />

      <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal leading-[1.12] tracking-normal text-white">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">
            Real results, real feedback — from the founders and operators who&apos;ve worked with us.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8"
        >
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col gap-5 rounded-2xl border border-white/[0.09] bg-[#08090a]/70 p-8 backdrop-blur-md"
            >
              {/* Avatar + name */}
              <figcaption className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2563eb]/20 text-[13px] font-semibold text-[#2563eb]">
                  {t.initials}
                </span>
                <div>
                  <p className="text-[14px] font-semibold text-white">{t.name}</p>
                  <p className="text-[12px] text-white/40">{t.role}</p>
                </div>
              </figcaption>

              {/* Stars */}
              <Stars />

              {/* Quote */}
              <blockquote className="text-[15px] leading-relaxed text-white/70">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Industry */}
              <p className="mt-auto text-[10px] uppercase tracking-[0.15em] text-white/25">
                {t.industry}
              </p>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
