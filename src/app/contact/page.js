import Reveal from "@/components/Reveal";
import { ShaderAnimation } from "@/components/ShaderAnimationLazy";
import FAQAccordion from "@/components/FAQAccordion";
import ContactForm from "@/components/ContactForm";
import NewsletterForm from "@/components/NewsletterForm";
import { Mail, MessageCircle } from "lucide-react";
import { LinkedinIcon } from "@/components/BrandIcons";

export const metadata = {
  title: "Contact ScaleForge | Book a Call or Send a Message",
  description:
    "Get in touch with ScaleForge. Email, WhatsApp, LinkedIn, or book a free 30-minute strategy call. Responses within 4 business hours.",
  alternates: {
    canonical: "https://scalesforge.site/contact",
    languages: {
      "en": "https://scalesforge.site/contact",
      "x-default": "https://scalesforge.site/contact"
    },
    media: {
      "only screen and (max-width: 640px)": "https://scalesforge.site/contact"
    }
  },
  keywords: ["Contact ScaleForge", "Hire Digital Agency", "Book Tech Audit", "Cal.com Audit ScaleForge", "Web Development Quote"],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  openGraph: {
    title: "Contact ScaleForge | Book a Call or Send a Message",
    description:
      "Get in touch with ScaleForge. Email, WhatsApp, LinkedIn, or book a free 30-minute strategy call. Responses within 4 business hours.",
    url: "https://scalesforge.site/contact",
    siteName: "ScaleForge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact ScaleForge | Book a Call or Send a Message",
    description:
      "Get in touch with ScaleForge. Email, WhatsApp, LinkedIn, or book a free 30-minute strategy call. Responses within 4 business hours.",
    images: ["/og-image.png"],
  },
};

const CONTACT_FAQS = [
  {
    q: "How quickly do you respond?",
    a: "We respond to every inbound message within 4 business hours during our working window. Messages received outside business hours are answered the following business morning.",
  },
  {
    q: "Do I need to have a project fully scoped before reaching out?",
    a: "No. Some of our best engagements start with a vague idea and a few real constraints. The first call exists to scope and clarify — bring whatever you have.",
  },
  {
    q: "What's the best channel for urgent matters?",
    a: "WhatsApp is fastest for time-sensitive matters. Email is best for substantive briefs that need attachments or back-and-forth. The form is best if you want a structured starting point.",
  },
  {
    q: "Do you take on small projects?",
    a: "Yes. Our Starter tiers are specifically designed for small businesses and solo founders. If a project is below the Starter scope (< $1,000), we'll usually refer you to a freelancer we trust rather than overcharge.",
  },
  {
    q: "What if we're not the right fit?",
    a: "We'll tell you. We have a network of trusted designers, developers, and agencies we refer to when our skill set or capacity isn't the right match. No run-around.",
  },
];

const getWhatsAppUrl = () => {
  const rawNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923000000000";
  const sanitizedNumber = rawNumber.replace(/\D/g, "");
  return `https://wa.me/${sanitizedNumber}`;
};

const DIRECT_CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "scaleforgebusinessdev@gmail.com",
    href: "mailto:scaleforgebusinessdev@gmail.com",
    note: "Best for detailed briefs",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "WhatsApp Us",
    href: getWhatsAppUrl(),
    note: "Fastest for urgent matters",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "@scaleforge",
    href: "https://linkedin.com/company/scaleforge",
    note: "For partnerships & press",
  },
];

const OFFICE_TILES = [
  { label: "Client Base", value: "USA" },
  { label: "Time zone", value: "PKT (UTC +5)" },
  { label: "Working hours", value: "Mon–Fri, flexible US / EU / AU coverage" },
];

export default function ContactPage() {
  const calUrl =
    process.env.NEXT_PUBLIC_CAL_URL ?? "https://cal.com/scaleforge";

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "ScaleForge",
      "url": "https://scalesforge.site",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer support",
        "email": "scaleforgebusinessdev@gmail.com",
        "url": "https://scalesforge.site/contact"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090a]">
        <div className="pointer-events-none absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        <div className="pointer-events-none absolute inset-0 z-[1] bg-[#08090a]/80" />
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0 z-[2]" />
        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-16 pt-32 lg:px-10 lg:pt-28">
          <Reveal className="max-w-2xl">
            <h1 className="mt-6 text-[clamp(2.1rem,5.4vw,3.5rem)] font-display font-normal leading-[1.14] text-white">
              Let&apos;s Talk About What You&apos;re Building
            </h1>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
              Whether you have a fully-scoped project or a half-formed idea,
              we&apos;d like to hear about it. Pick whichever channel works best
              for you below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form + Right Column */}
      <section className="bg-[#08080a] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_340px]">
            {/* Form */}
            <Reveal>
              <ContactForm />
            </Reveal>

            {/* What happens next */}
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-7 lg:sticky lg:top-32">
                <h3 className="text-[16px] font-medium text-white">
                  What happens next?
                </h3>
                <ol className="mt-5 flex flex-col gap-5">
                  {[
                    "We read your message within 4 business hours.",
                    "We respond with sharper questions and propose a 30-minute call.",
                    "On the call, we figure out whether (and how) we can help.",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] font-accent text-[11px] text-white/50">
                        {i + 1}
                      </span>
                      <p className="pt-0.5 text-[13.5px] leading-relaxed text-white/50">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
                <p className="mt-6 border-t border-white/[0.06] pt-5 text-[12px] italic leading-relaxed text-white/30">
                  No sales pitches. No follow-up spam. If we&apos;re not the
                  right fit, we&apos;ll tell you and point you somewhere better.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Direct Channels */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mb-10">
            <h2 className="mt-4 text-[clamp(1.5rem,2.8vw,2rem)] font-display font-normal text-white">
              Prefer Something More Direct?
            </h2>
          </Reveal>

          <Reveal
            stagger
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {DIRECT_CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  ch.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="group flex flex-col gap-3 rounded-2xl border border-white/[0.07] bg-[#101013] p-6 transition-colors hover:border-white/15"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[18px] text-white/50 transition-colors group-hover:text-white/75">
                  <ch.icon size={18} aria-hidden />
                </span>
                <div>
                  <p className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/35">
                    {ch.label}
                  </p>
                  <p className="mt-0.5 text-[14px] font-medium text-white">
                    {ch.value}
                  </p>
                  <p className="mt-1 text-[12px] text-white/35">{ch.note}</p>
                </div>
              </a>
            ))}
          </Reveal>
        </div>
      </section>


      {/* Office Info */}
      <section className="border-y border-white/[0.06] bg-[#0c0c0f] py-16 lg:py-20">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal className="mb-10">
            <h2 className="mt-4 text-[clamp(1.5rem,2.8vw,2rem)] font-display font-normal text-white">
              Global Reach - Remote-First
            </h2>
            <p className="mt-3 max-w-xl text-[14.5px] leading-relaxed text-white/60">
              ScaleForge operates remote-first with team members working across
              multiple time zones. While we don&apos;t host walk-ins, we&apos;re
              happy to meet clients in person when projects require it.
            </p>
          </Reveal>

          <Reveal stagger className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {OFFICE_TILES.map((tile) => (
              <div
                key={tile.label}
                className="rounded-2xl border border-white/[0.07] bg-[#101013] p-6"
              >
                <p className="font-accent text-[10px] uppercase tracking-[0.12em] text-white/35">
                  {tile.label}
                </p>
                <p className="mt-2 text-[15px] font-medium text-white">
                  {tile.value}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <FAQAccordion
        eyebrow="CLARITY"
        heading="Contact FAQs"
        questions={CONTACT_FAQS}
      />

      {/* Closing — Newsletter */}
      <section className="relative overflow-hidden bg-[#08080a] py-20 lg:py-24">
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[620px] px-6 lg:px-10">
          <Reveal className="text-center">
            <h2 className="text-[clamp(1.6rem,3vw,2.2rem)] font-display font-normal leading-[1.12] text-white">
              Still Not Sure?
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-white/60">
              If you&apos;re not ready to fill out a form or book a call but
              want to keep ScaleForge on your radar, our weekly newsletter
              delivers one actionable insight per week — no spam.
            </p>
            <NewsletterForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
