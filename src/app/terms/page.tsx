import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Terms of Service | ScaleForge",
  description:
    "Terms governing the use of ScaleForge's website and services — engagement terms, payment, IP, liability, and governing law.",
};

const TOC = [
  { id: "agreement", label: "Agreement to Terms" },
  { id: "services", label: "Services We Provide" },
  { id: "engagements", label: "Engagements & Contracts" },
  { id: "payment", label: "Payment Terms" },
  { id: "refunds", label: "Refund & Cancellation" },
  { id: "ip", label: "Intellectual Property" },
  { id: "confidentiality", label: "Confidentiality" },
  { id: "warranties", label: "Warranties & Disclaimers" },
  { id: "liability", label: "Limitation of Liability" },
  { id: "indemnification", label: "Indemnification" },
  { id: "disputes", label: "Dispute Resolution" },
  { id: "termination", label: "Termination" },
  { id: "changes", label: "Changes to Terms" },
  { id: "contact-terms", label: "Contact" },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="ml-1 mt-3 space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-white/30" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-[#08080a] pb-12 pt-40 lg:pb-16 lg:pt-48">
        <div className="bg-grid-dark bg-grid-fade pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <Reveal>
            <h1 className="mt-5 text-[clamp(1.8rem,4vw,2.8rem)] font-display font-normal leading-[1.14] text-white">
              Terms of Service
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

              <section id="agreement">
                <h2 className="mb-4 text-[20px] font-medium text-white">1. Agreement to Terms</h2>
                <p>
                  These Terms of Service (&quot;Terms&quot;) govern your use of the ScaleForge website (scaleforge.com) and
                  our services. By accessing the Site or engaging ScaleForge for services, you agree to be bound by
                  these Terms. If you do not agree, do not use the Site or our services.
                </p>
              </section>

              <section id="services">
                <h2 className="mb-4 text-[20px] font-medium text-white">2. Services We Provide</h2>
                <p className="mb-2">ScaleForge offers digital agency services including but not limited to:</p>
                <BulletList items={[
                  "AI Development & Automation",
                  "Web Design",
                  "Web Development (Next.js, React)",
                  "Search Engine Optimization (SEO)",
                  "Content Creation & Copywriting",
                ]} />
                <p className="mt-4">
                  Specific service scope, deliverables, and timelines for each engagement are defined in a separate
                  engagement contract or Statement of Work (&quot;SOW&quot;) signed by both parties.
                </p>
              </section>

              <section id="engagements">
                <h2 className="mb-4 text-[20px] font-medium text-white">3. Engagements and Contracts</h2>
                <p className="mb-2">
                  All client engagements require a signed contract or SOW prior to work commencing. The contract
                  specifies:
                </p>
                <BulletList items={[
                  "Scope of work",
                  "Deliverables",
                  "Timeline and milestones",
                  "Payment schedule",
                  "Revisions policy",
                  "Termination conditions",
                ]} />
                <p className="mt-4">These Terms apply in addition to and alongside any engagement contract.</p>
              </section>

              <section id="payment">
                <h2 className="mb-4 text-[20px] font-medium text-white">4. Payment Terms</h2>
                <BulletList items={[
                  "Project-based engagements: Payment is structured in milestones, typically 30% deposit, 30% mid-build, 40% on delivery, unless otherwise agreed in the contract.",
                  "Monthly retainers: Billed at the start of each calendar month.",
                  "Accepted methods: Wire transfer, Stripe (card), Wise, Payoneer, Upwork or Contra escrow.",
                  "Currency: All prices are in USD unless otherwise specified.",
                  "Late payment: Invoices overdue by more than 14 days may result in pause of services until cleared.",
                ]} />
              </section>

              <section id="refunds">
                <h2 className="mb-4 text-[20px] font-medium text-white">5. Refund and Cancellation Policy</h2>
                <BulletList items={[
                  "Project-based work: 30-day satisfaction guarantee on the first milestone. If the initial design or build does not meet expectations and ScaleForge cannot resolve the issue within reasonable revisions, the deposit is refunded.",
                  "Monthly retainers: No long-term contracts. Cancellation requires 30 days' written notice. Already-billed months are not refunded; future months are stopped.",
                  "Mid-project cancellation: If a project is cancelled mid-build by the client, ScaleForge bills for work completed to date. Already-paid milestones are not refunded for completed work.",
                ]} />
              </section>

              <section id="ip">
                <h2 className="mb-4 text-[20px] font-medium text-white">6. Intellectual Property</h2>
                <BulletList items={[
                  "Client ownership: Upon full payment, the client owns all final deliverables produced specifically for them (code, designs, content). ScaleForge retains the right to display the work in portfolios and case studies unless the client requests confidentiality in writing.",
                  "ScaleForge IP: Methodologies, frameworks, internal tooling, and pre-existing assets remain ScaleForge property. Licenses to use them within the deliverable are granted as part of the engagement.",
                  "Third-party assets: Stock photos, fonts, plugins, and licensed software remain the property of their respective owners. Clients are responsible for ongoing license costs after handover.",
                ]} />
              </section>

              <section id="confidentiality">
                <h2 className="mb-4 text-[20px] font-medium text-white">7. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential information shared during an engagement private.
                  Confidential information includes business strategy, financial data, customer lists, technical
                  specifications, and any information marked confidential at the time of sharing. This obligation
                  survives termination of the engagement.
                </p>
              </section>

              <section id="warranties">
                <h2 className="mb-4 text-[20px] font-medium text-white">8. Warranties and Disclaimers</h2>
                <p className="mb-3">
                  ScaleForge warrants that services will be performed with reasonable skill and care. We do not
                  warrant:
                </p>
                <BulletList items={[
                  "Specific business outcomes (e.g., guaranteed revenue, traffic, or rankings)",
                  "That the Site or deliverables will be uninterrupted or error-free",
                  "Third-party services (hosting providers, APIs, payment processors) will function without disruption",
                ]} />
                <p className="mt-4 text-[13.5px] uppercase tracking-wide text-white/40">
                  THE SITE AND SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND
                  EXCEPT AS EXPRESSLY STATED.
                </p>
              </section>

              <section id="liability">
                <h2 className="mb-4 text-[20px] font-medium text-white">9. Limitation of Liability</h2>
                <p>
                  To the maximum extent permitted by law, ScaleForge&apos;s total liability for any claim arising from
                  these Terms or an engagement is limited to the total fees paid by the client to ScaleForge in the
                  6 months preceding the claim. In no event shall ScaleForge be liable for indirect, consequential,
                  incidental, or punitive damages.
                </p>
              </section>

              <section id="indemnification">
                <h2 className="mb-4 text-[20px] font-medium text-white">10. Indemnification</h2>
                <p className="mb-2">
                  The client agrees to indemnify and hold ScaleForge harmless from any third-party claim arising
                  from:
                </p>
                <BulletList items={[
                  "Content provided by the client (including IP infringement, defamation)",
                  "Client's use of deliverables outside the agreed scope",
                  "Client's violation of applicable laws",
                ]} />
              </section>

              <section id="disputes">
                <h2 className="mb-4 text-[20px] font-medium text-white">11. Dispute Resolution and Governing Law</h2>
                <p>
                  These Terms are governed by the laws of the Islamic Republic of Pakistan. Any dispute arising
                  shall first be resolved through good-faith negotiation. If unresolved within 60 days, disputes
                  will be settled by arbitration in Karachi, Pakistan, in accordance with the Arbitration Act, 1940.
                </p>
                <p className="mt-4">
                  For international clients, both parties may agree in writing to alternative dispute resolution
                  venues (e.g., London arbitration, Singapore arbitration) on a per-contract basis.
                </p>
              </section>

              <section id="termination">
                <h2 className="mb-4 text-[20px] font-medium text-white">12. Termination</h2>
                <p className="mb-2">
                  ScaleForge or the client may terminate an engagement with 30 days&apos; written notice for any reason.
                  Either party may terminate immediately for material breach (non-payment, IP infringement, gross
                  negligence) after 14 days&apos; notice and failure to cure.
                </p>
                <p className="mb-2">Upon termination:</p>
                <BulletList items={[
                  "Outstanding invoices for work completed are due immediately",
                  "Confidentiality and IP obligations survive",
                  "Final deliverables completed and paid for are transferred to the client",
                ]} />
              </section>

              <section id="changes">
                <h2 className="mb-4 text-[20px] font-medium text-white">13. Changes to These Terms</h2>
                <p>
                  We may update these Terms from time to time. Material changes will be posted on this page with an
                  updated &quot;Last Updated&quot; date. Continued use of the Site or services after changes constitutes
                  acceptance.
                </p>
              </section>

              <section id="contact-terms">
                <h2 className="mb-4 text-[20px] font-medium text-white">14. Contact</h2>
                <p className="mb-3">For questions about these Terms:</p>
                <div className="rounded-2xl border border-white/[0.07] bg-[#101013] p-5">
                  <p><strong className="text-white/70">Email:</strong>{" "}
                    <a href="mailto:scaleforgebusinessdev@gmail.com" className="text-white/65 underline decoration-white/20 hover:text-white">scaleforgebusinessdev@gmail.com</a>
                  </p>
                  <p className="mt-1.5"><strong className="text-white/70">Postal:</strong> ScaleForge, Karachi, Pakistan</p>
                  <p className="mt-1.5"><strong className="text-white/70">Legal lead:</strong> Shahood Saleem (CEO)</p>
                </div>
              </section>

              {/* Footer cross-links */}
              <p className="border-t border-white/[0.06] pt-8 text-[13px] italic text-white/30">
                Questions about this document?{" "}
                <a href="mailto:scaleforgebusinessdev@gmail.com" className="underline decoration-white/20 hover:text-white/50">Email us</a>{" "}
                or{" "}
                <Link href="/contact" className="underline decoration-white/20 hover:text-white/50">book a call</Link>
                . See also our{" "}
                <Link href="/privacy" className="underline decoration-white/20 hover:text-white/50">Privacy Policy</Link>
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
