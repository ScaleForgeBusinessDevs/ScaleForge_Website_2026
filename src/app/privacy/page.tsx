import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | ScaleForge",
  description:
    "ScaleForge's Privacy Policy — how we collect, use, and protect your data when you visit our site or engage our services.",
};

const TOC = [
  { id: "intro", label: "Introduction" },
  { id: "collect", label: "Information We Collect" },
  { id: "use", label: "How We Use Information" },
  { id: "sharing", label: "Sharing & Third Parties" },
  { id: "cookies", label: "Cookies & Tracking" },
  { id: "retention", label: "Data Retention" },
  { id: "rights", label: "Your Rights" },
  { id: "security", label: "Data Security" },
  { id: "transfers", label: "International Transfers" },
  { id: "children", label: "Children's Privacy" },
  { id: "changes", label: "Changes to Policy" },
  { id: "contact-privacy", label: "Contact" },
];

export default function PrivacyPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#08080a] pb-12 pt-40 lg:pb-16 lg:pt-48">
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <h1 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-display font-normal leading-[1.14] text-white">
              Privacy Policy
            </h1>
            <p className="mt-2 text-[14px] text-white/35">Last updated: June 9, 2026</p>
            <p className="mt-3 text-[14px] leading-relaxed text-white/45">
              Questions about this document? Contact us at{" "}
              <a href="mailto:scaleforgebusinessdev@gmail.com" className="text-white/65 underline decoration-white/20 hover:text-white">
                scaleforgebusinessdev@gmail.com
              </a>{" "}
              or via the{" "}
              <Link href="/contact" className="text-white/65 underline decoration-white/20 hover:text-white">
                contact page
              </Link>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* Body */}
      <section className="bg-[#08080a] py-12 lg:py-16">
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_220px]">
            {/* Main Content */}
            <div className="max-w-[720px] space-y-12 text-[15px] leading-[1.75] text-white/55">

              <section id="intro">
                <h2 className="mb-4 text-[20px] font-medium text-white">1. Introduction</h2>
                <p>
                  ScaleForge (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy. This Privacy Policy explains how we
                  collect, use, share, and protect your personal information when you visit scaleforge.com (the
                  &quot;Site&quot;) or engage our services.
                </p>
                <p className="mt-4">
                  This policy applies to all visitors, leads, and clients. By using the Site, you consent to the
                  practices described here.
                </p>
              </section>

              <section id="collect">
                <h2 className="mb-4 text-[20px] font-medium text-white">2. Information We Collect</h2>
                <h3 className="mb-2 text-[16px] font-medium text-white/80">Information you provide directly:</h3>
                <ul className="ml-1 mt-2 space-y-2">
                  {[
                    "Name, email, company, and details you submit via contact forms",
                    "Communications you send us (email, chat, call recordings if applicable)",
                    "Project briefs, files, and access credentials you share for service delivery",
                    "Payment information (processed by third-party providers — see Section 4)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <h3 className="mb-2 mt-5 text-[16px] font-medium text-white/80">Information we collect automatically:</h3>
                <ul className="ml-1 mt-2 space-y-2">
                  {[
                    "IP address, browser type, device type",
                    "Pages visited, time on page, referrer",
                    "Cookies and similar tracking technologies (see Section 5)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="use">
                <h2 className="mb-4 text-[20px] font-medium text-white">3. How We Use Information</h2>
                <p className="mb-3">We process your information for the following purposes:</p>
                <ul className="ml-1 space-y-2">
                  {[
                    "Responding to inquiries and providing requested services",
                    "Delivering, maintaining, and improving our services",
                    "Sending newsletter communications (only if you've opted in)",
                    "Analyzing site usage to improve experience",
                    "Complying with legal obligations and enforcing our terms",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="sharing">
                <h2 className="mb-4 text-[20px] font-medium text-white">4. Sharing &amp; Third Parties</h2>
                <p className="mb-3">We do not sell your personal information. We share it only with:</p>
                <ul className="ml-1 space-y-2">
                  {[
                    "Service providers assisting our operations (e.g., Stripe for payments, Sanity for content storage, Vercel for hosting, email tools)",
                    "Legal authorities when required by law",
                    "Successor entities in the event of a merger, acquisition, or asset sale",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  A summary list of subprocessors is available on request via{" "}
                  <a href="mailto:scaleforgebusinessdev@gmail.com" className="text-white/65 underline decoration-white/20 hover:text-white">
                    scaleforgebusinessdev@gmail.com
                  </a>
                  .
                </p>
              </section>

              <section id="cookies">
                <h2 className="mb-4 text-[20px] font-medium text-white">5. Cookies &amp; Tracking</h2>
                <p className="mb-3">We use cookies and similar technologies to:</p>
                <ul className="ml-1 space-y-2">
                  {[
                    "Remember your preferences",
                    "Analyze how the Site is used (e.g., Google Analytics or Plausible)",
                    "Power chat and booking widgets where applicable",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  You can disable cookies via your browser settings, though some Site features may not function
                  without them.
                </p>
              </section>

              <section id="retention">
                <h2 className="mb-4 text-[20px] font-medium text-white">6. Data Retention</h2>
                <p className="mb-3">
                  We retain personal data for as long as needed to provide services, comply with legal obligations,
                  resolve disputes, and enforce agreements. Typically:
                </p>
                <ul className="ml-1 space-y-2">
                  {[
                    "Active client data: retained throughout engagement + 7 years for tax records",
                    "Lead data (no engagement): retained for 24 months unless deletion is requested",
                    "Newsletter subscribers: retained until unsubscribed",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section id="rights">
                <h2 className="mb-4 text-[20px] font-medium text-white">7. Your Rights</h2>
                <p className="mb-3">
                  Depending on your jurisdiction (GDPR for EU residents, CCPA for California residents, similar
                  protections elsewhere), you have the right to:
                </p>
                <ul className="ml-1 space-y-2">
                  {[
                    "Access the personal data we hold about you",
                    "Correct inaccurate data",
                    "Request deletion of your data (\"right to be forgotten\")",
                    "Object to or restrict processing",
                    "Data portability (receive your data in a structured format)",
                    "Withdraw consent at any time",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-4">
                  To exercise these rights, email{" "}
                  <a href="mailto:scaleforgebusinessdev@gmail.com" className="text-white/65 underline decoration-white/20 hover:text-white">
                    scaleforgebusinessdev@gmail.com
                  </a>
                  . We respond within 30 days.
                </p>
              </section>

              <section id="security">
                <h2 className="mb-4 text-[20px] font-medium text-white">8. Data Security</h2>
                <p>
                  We use industry-standard security measures including HTTPS encryption, access controls, secure
                  storage with reputable providers (Vercel, Sanity, Google), and minimum-necessary data collection.
                  No system is 100% secure; in the unlikely event of a breach affecting your data, we&apos;ll notify you
                  per applicable law.
                </p>
              </section>

              <section id="transfers">
                <h2 className="mb-4 text-[20px] font-medium text-white">9. International Data Transfers</h2>
                <p>
                  ScaleForge operates from Pakistan. By using our services, you understand and agree that your data
                  may be transferred to, stored in, and processed in countries outside your country of residence,
                  including Pakistan, the United States, and the European Union. We rely on standard contractual
                  safeguards for international transfers.
                </p>
              </section>

              <section id="children">
                <h2 className="mb-4 text-[20px] font-medium text-white">10. Children&apos;s Privacy</h2>
                <p>
                  Our services are not directed at individuals under 13 years of age. We do not knowingly collect
                  personal information from children. If you believe we have collected information from a child,
                  contact{" "}
                  <a href="mailto:scaleforgebusinessdev@gmail.com" className="text-white/65 underline decoration-white/20 hover:text-white">
                    scaleforgebusinessdev@gmail.com
                  </a>{" "}
                  so we can delete it.
                </p>
              </section>

              <section id="changes">
                <h2 className="mb-4 text-[20px] font-medium text-white">11. Changes to This Policy</h2>
                <p>
                  We may update this policy from time to time. Material changes will be posted on this page with an
                  updated &quot;Last Updated&quot; date. For significant changes, we&apos;ll attempt to notify active clients and
                  newsletter subscribers by email.
                </p>
              </section>

              <section id="contact-privacy">
                <h2 className="mb-4 text-[20px] font-medium text-white">12. Contact</h2>
                <p className="mb-3">
                  For questions about this Privacy Policy or to exercise your privacy rights, contact:
                </p>
                <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-5">
                  <p><strong className="text-white/70">Email:</strong>{" "}
                    <a href="mailto:scaleforgebusinessdev@gmail.com" className="text-white/65 underline decoration-white/20 hover:text-white">scaleforgebusinessdev@gmail.com</a>
                  </p>
                  <p className="mt-1.5"><strong className="text-white/70">Postal:</strong> ScaleForge, Karachi, Pakistan</p>
                  <p className="mt-1.5"><strong className="text-white/70">Privacy lead:</strong> Ruhan Bhaleshah (CTO)</p>
                </div>
              </section>

              {/* Footer cross-links */}
              <p className="border-t border-white/[0.06] pt-8 text-[13px] italic text-white/30">
                Questions about this document?{" "}
                <a href="mailto:scaleforgebusinessdev@gmail.com" className="underline decoration-white/20 hover:text-white/50">Email us</a>{" "}
                or{" "}
                <Link href="/contact" className="underline decoration-white/20 hover:text-white/50">book a call</Link>
                . See also our{" "}
                <Link href="/terms" className="underline decoration-white/20 hover:text-white/50">Terms of Service</Link>
                .
              </p>
            </div>

            {/* Sticky TOC sidebar */}
            <aside className="hidden lg:block">
              <nav className="sticky top-28 flex flex-col gap-1">
                <p className="mb-3 font-accent text-[10px] uppercase tracking-[0.14em] text-white/30">Contents</p>
                {TOC.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="rounded-lg px-3 py-1.5 text-[12.5px] text-white/35 transition-colors hover:bg-white/[0.04] hover:text-white/65"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
