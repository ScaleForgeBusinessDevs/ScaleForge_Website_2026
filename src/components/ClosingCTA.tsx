import Reveal from "./Reveal";
import DashboardMockup from "./DashboardMockup";

export default function ClosingCTA() {
  return (
    <section className="relative overflow-hidden bg-[#08080a] py-28 lg:py-36">
      {/* <div
        className="bg-grid-fade pointer-events-none absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url(/Assets/n8n.jpg)" }}
        aria-hidden
      /> */}

      <div className="relative mx-auto max-w-[1440px] px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="text-[clamp(2rem,4.6vw,3.25rem)] font-display font-normal tracking-normal leading-[1.1] text-white">
            Ready to Scale?
          </h2>
          <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/45">
            Join the teams already running their operations on ScaleForge — set
            up your first workflow in minutes.
          </p>
        </Reveal>

        <Reveal className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="rounded-full border border-white/15 px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white/80 transition-colors hover:border-white/30 hover:text-white"
          >
            View Pricing
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full bg-[#2563eb] px-6 py-3 font-accent text-[12px] uppercase tracking-[0.12em] text-white transition-transform hover:scale-[1.03]"
          >
            Contact Us
            <i className="bi bi-arrow-right" aria-hidden />
          </a>
        </Reveal>

        <Reveal className="relative mx-auto mt-16 max-w-4xl">
          <DashboardMockup />
          <div className="pointer-events-none absolute inset-x-12 -bottom-10 -z-10 h-24 rounded-full bg-white/10 blur-3xl" />
        </Reveal>
      </div>
    </section>
  );
}
