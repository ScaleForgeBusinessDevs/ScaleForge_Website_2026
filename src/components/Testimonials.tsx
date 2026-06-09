import Reveal from "./Reveal";

const SMALL_QUOTES = [
  { quote: "ScaleForge strengthened our automation infrastructure and enabled consistent monitoring across all workflows.", name: "Ethan Walker", role: "Operations Lead" },
  { quote: "ScaleForge streamlined our automation workflows and gave our team real-time visibility across every execution layer.", name: "Maira Alvarez", role: "Automation Manager" },
  { quote: "ScaleForge simplified our automation processes and provided complete insight into every workflow execution.", name: "Priya Shah", role: "Product Operations" },
];

export default function Testimonials() {
  return (
    <section className="bg-[#08080a] py-24 lg:py-32">
      <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-display font-normal tracking-normal leading-[1.12] text-white">
            Trusted by Modern Teams
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-white/45">
            Real teams, automated workflows, and visual control — see how
            modern teams run on ScaleForge.
          </p>
        </Reveal>

        <Reveal className="mt-14 grid grid-cols-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-[#101013] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative h-64 lg:h-auto">
            <div
              className="absolute inset-0 bg-[#1c1c20]"
              style={{
                backgroundImage:
                  "radial-gradient(120% 100% at 30% 20%, rgba(255,255,255,0.16) 0%, transparent 55%), radial-gradient(100% 100% at 80% 90%, rgba(255,255,255,0.07) 0%, transparent 60%)",
              }}
            />
          </div>
          <div className="flex flex-col justify-center gap-6 p-8 lg:p-12">
            <span className="text-[34px] leading-none text-white/20">&ldquo;</span>
            <blockquote className="text-[19px] leading-relaxed text-white/75">
              ScaleForge enabled us to automate repetitive workflows across
              multiple teams while maintaining complete operational visibility
              and structured control.
            </blockquote>
            <div>
              <p className="text-[14px] font-medium text-white">Daniel Carter</p>
              <p className="text-[13px] text-white/40">Head of Operations, Brightline</p>
            </div>
          </div>
        </Reveal>

        <Reveal stagger className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {SMALL_QUOTES.map((q) => (
            <figure key={q.name} className="flex flex-col gap-6 rounded-2xl border border-white/[0.07] bg-[#101013] p-7">
              <blockquote className="text-[14px] leading-relaxed text-white/55">&ldquo;{q.quote}&rdquo;</blockquote>
              <figcaption className="mt-auto flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/[0.06] text-[12px] font-medium text-white/50">
                  {q.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-[13px] font-medium text-white">{q.name}</p>
                  <p className="text-[12px] text-white/35">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
