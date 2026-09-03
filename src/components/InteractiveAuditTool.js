"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Sparkles,
  Shield,
  Zap,
  Search,
  Smartphone,
  RefreshCw,
  Gauge,
} from "lucide-react";

// Shown while Google runs Lighthouse. These describe what the audit covers,
// not steps we are performing ourselves.
const PROGRESS_NOTES = [
  "Sending your URL to Google PageSpeed Insights",
  "Google is loading your page on a simulated mobile device",
  "Measuring Core Web Vitals: LCP, CLS and Total Blocking Time",
  "Checking crawlability, titles, descriptions and link text",
  "Scoring accessibility and browser best practices",
  "Almost there. Large pages can take up to a minute",
];

const SCORE_CARDS = [
  { key: "performance", label: "Performance", Icon: Zap, tone: "text-amber-400" },
  { key: "seo", label: "Technical SEO", Icon: Search, tone: "text-[#a5aef0]" },
  { key: "mobile", label: "Accessibility", Icon: Smartphone, tone: "text-emerald-400" },
  { key: "bestPractices", label: "Best Practices", Icon: Shield, tone: "text-sky-400" },
];

function scoreTone(value) {
  if (typeof value !== "number") return "border-white/15 bg-white/[0.04] text-white/60";
  if (value >= 90) return "border-emerald-500/40 bg-emerald-500/10 text-emerald-400";
  if (value >= 50) return "border-amber-500/40 bg-amber-500/10 text-amber-400";
  return "border-rose-500/40 bg-rose-500/10 text-rose-400";
}

function verdict(value) {
  if (typeof value !== "number") return "Google could not score this page";
  if (value >= 90) return "Good. Only small gains left";
  if (value >= 50) return "Moderate. Clear gaps to close";
  return "Poor. Fix these before spending on traffic";
}

export default function InteractiveAuditTool({ defaultIndustry = "" }) {
  const [url, setUrl] = useState("");
  const [industry] = useState(defaultIndustry || "General Business");
  const [email, setEmail] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [noteIndex, setNoteIndex] = useState(0);
  const [auditResult, setAuditResult] = useState(null);
  const [auditError, setAuditError] = useState("");
  const [emailState, setEmailState] = useState("idle");
  const [emailError, setEmailError] = useState("");
  const noteTimer = useRef(null);

  useEffect(() => () => clearInterval(noteTimer.current), []);

  const handleRunAudit = async (e) => {
    e.preventDefault();
    if (!url.trim() || isScanning) return;

    setIsScanning(true);
    setAuditResult(null);
    setAuditError("");
    setEmailState("idle");
    setEmailError("");
    setNoteIndex(0);

    clearInterval(noteTimer.current);
    noteTimer.current = setInterval(() => {
      setNoteIndex((i) => Math.min(i + 1, PROGRESS_NOTES.length - 1));
    }, 6000);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setAuditError(data?.error || "The audit could not be completed.");
      } else {
        setAuditResult(data);
      }
    } catch {
      setAuditError("Could not reach the audit service. Check your connection and try again.");
    } finally {
      clearInterval(noteTimer.current);
      setIsScanning(false);
    }
  };

  const handleEmailReport = async (e) => {
    e.preventDefault();
    if (!email.trim() || emailState === "sending" || !auditResult) return;

    setEmailState("sending");
    setEmailError("");
    try {
      const res = await fetch("/api/audit/report", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          industry,
          targetUrl: auditResult.targetUrl,
          overallScore: auditResult.overallScore,
          scores: auditResult.scores,
          findings: auditResult.findings,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setEmailError(data?.error || "Could not send the request.");
        setEmailState("idle");
      } else {
        setEmailState("sent");
      }
    } catch {
      setEmailError("Could not reach the server. Try again.");
      setEmailState("idle");
    }
  };

  const fetchedTime = auditResult?.fetchedAt
    ? new Date(auditResult.fetchedAt).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <div className="w-full rounded-3xl border border-white/[0.12] bg-[#0c0c10]/95 p-6 shadow-2xl backdrop-blur-2xl sm:p-10">
      {/* Tool Header */}
      <div className="text-center">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5e6ad2]/30 bg-[#5e6ad2]/10 px-3.5 py-1 text-[11px] font-medium text-[#a5aef0]">
          <Sparkles size={13} aria-hidden />
          Live Google PageSpeed Audit
        </span>
        <h3 className="mt-4 text-[clamp(1.5rem,3.2vw,2.2rem)] font-display font-normal text-white">
          Scan Your Website for Free
        </h3>
        <p className="mx-auto mt-2.5 max-w-xl text-[14px] leading-relaxed text-white/55">
          Enter your website address. We run it through the Google PageSpeed
          Insights API on a simulated mobile device and show you the real
          Lighthouse scores for speed, SEO, accessibility and best practices.
        </p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleRunAudit} className="mt-8">
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="relative flex-1">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-white/35"
              size={18}
              aria-hidden
            />
            <label htmlFor="audit-url" className="sr-only">
              Website address
            </label>
            <input
              id="audit-url"
              name="url"
              type="text"
              inputMode="url"
              autoComplete="url"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="e.g. yourbusiness.com"
              disabled={isScanning}
              className="w-full rounded-full border border-white/[0.12] bg-white/[0.04] py-3.5 pl-12 pr-4 text-[16px] text-white placeholder:text-white/30 outline-none transition-colors focus:border-[#5e6ad2] focus:bg-white/[0.07] sm:text-[14px]"
            />
          </div>
          <button
            type="submit"
            disabled={isScanning || !url.trim()}
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-[#2563eb] px-7 py-3.5 font-accent text-[12px] uppercase tracking-[0.12em] text-white transition-all hover:bg-[#1d4ed8] hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
          >
            {isScanning ? (
              <>
                <RefreshCw size={15} className="animate-spin" aria-hidden />
                Analysing
              </>
            ) : (
              <>
                Run Free Audit
                <ArrowRight size={15} aria-hidden />
              </>
            )}
          </button>
        </div>
      </form>

      {/* Live region so screen readers hear progress, errors and completion */}
      <div aria-live="polite" className="sr-only">
        {isScanning ? PROGRESS_NOTES[noteIndex] : auditError || (auditResult ? "Audit complete" : "")}
      </div>

      {/* Scanning Progress State */}
      {isScanning && (
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2563eb]/20 text-[#2563eb]">
            <RefreshCw size={22} className="animate-spin" aria-hidden />
          </div>
          <p className="mt-4 text-[14px] font-medium text-white">
            Google is auditing your page
          </p>
          <p className="mt-1 text-[12.5px] text-[#a5aef0]">{PROGRESS_NOTES[noteIndex]}</p>
          <div className="mx-auto mt-5 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#2563eb] to-[#5e6ad2] transition-all duration-700"
              style={{ width: `${((noteIndex + 1) / PROGRESS_NOTES.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Error State */}
      {auditError && !isScanning && (
        <div className="mt-8 flex items-start gap-3 rounded-2xl border border-rose-500/30 bg-rose-500/[0.08] p-5">
          <XCircle size={18} className="mt-0.5 shrink-0 text-rose-400" aria-hidden />
          <div>
            <p className="text-[13.5px] font-medium text-white">Audit could not run</p>
            <p className="mt-1 text-[12.5px] leading-relaxed text-white/60">{auditError}</p>
          </div>
        </div>
      )}

      {/* Audit Result Display */}
      {auditResult && !isScanning && (
        <div className="mt-8 space-y-6">
          {/* Top Score Banner */}
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/[0.12] bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-6 sm:flex-row sm:items-center sm:p-8">
            <div className="min-w-0">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                Audit target
              </span>
              <h4 className="mt-1 truncate text-[20px] font-medium text-white">
                {auditResult.cleanHost}
              </h4>
              <p className="mt-1 text-[12px] text-white/50">
                {fetchedTime ? `Measured at ${fetchedTime}` : "Measured"} • Google
                Lighthouse {auditResult.lighthouseVersion || ""} • Mobile
              </p>
            </div>

            <div className="flex w-full items-center gap-4 sm:w-auto">
              <div className="min-w-0 flex-1 text-left sm:flex-none sm:text-right">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-white/40">
                  Weighted score
                </p>
                <p className="text-[12px] text-white/60">{verdict(auditResult.overallScore)}</p>
              </div>
              <div
                className={`flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border text-center ${scoreTone(auditResult.overallScore)}`}
              >
                <span className="font-display text-[26px] font-normal leading-none">
                  {auditResult.overallScore ?? "?"}
                </span>
                <span className="text-[9px] uppercase tracking-wider opacity-70">/ 100</span>
              </div>
            </div>
          </div>

          {/* Breakdown Score Cards */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {SCORE_CARDS.map(({ key, label, Icon, tone }) => (
              <div
                key={key}
                className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-4 text-center"
              >
                <span className="flex items-center justify-center gap-1 text-[11px] text-white/50">
                  <Icon size={13} className={tone} aria-hidden /> {label}
                </span>
                <p className="mt-2 font-display text-[20px] text-white">
                  {typeof auditResult.scores?.[key] === "number"
                    ? auditResult.scores[key]
                    : "n/a"}
                </p>
              </div>
            ))}
          </div>

          {/* Real-user field data, only when Chrome has enough traffic on record */}
          {auditResult.fieldData &&
            (auditResult.fieldData.lcpMs ||
              auditResult.fieldData.cls !== null ||
              auditResult.fieldData.inpMs) && (
              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
                <h5 className="flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-white/80">
                  <Gauge size={14} className="text-[#a5aef0]" aria-hidden />
                  Real Chrome user data (last 28 days)
                </h5>
                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {auditResult.fieldData.lcpMs ? (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <p className="text-[11px] uppercase tracking-wider text-white/40">LCP</p>
                      <p className="mt-1 text-[15px] text-white">
                        {(auditResult.fieldData.lcpMs / 1000).toFixed(2)}s
                      </p>
                    </div>
                  ) : null}
                  {auditResult.fieldData.cls !== null ? (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <p className="text-[11px] uppercase tracking-wider text-white/40">CLS</p>
                      <p className="mt-1 text-[15px] text-white">
                        {auditResult.fieldData.cls.toFixed(3)}
                      </p>
                    </div>
                  ) : null}
                  {auditResult.fieldData.inpMs ? (
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
                      <p className="text-[11px] uppercase tracking-wider text-white/40">INP</p>
                      <p className="mt-1 text-[15px] text-white">
                        {auditResult.fieldData.inpMs}ms
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            )}

          {/* Key Findings List */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6">
            <h5 className="text-[13px] font-semibold uppercase tracking-wider text-white/80">
              What Lighthouse found
            </h5>
            <p className="mt-1 text-[12px] text-white/45">
              {auditResult.passedCount} of {auditResult.totalCount} checks passed.
              Problems are listed first.
            </p>
            <div className="mt-4 divide-y divide-white/[0.06]">
              {auditResult.findings.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 py-3.5 first:pt-0 last:pb-0">
                  <span className="mt-0.5 shrink-0">
                    {item.status === "pass" ? (
                      <CheckCircle2 size={18} className="text-emerald-400" aria-hidden />
                    ) : item.status === "warn" ? (
                      <AlertTriangle size={18} className="text-amber-400" aria-hidden />
                    ) : (
                      <XCircle size={18} className="text-rose-400" aria-hidden />
                    )}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[13.5px] font-medium text-white">
                      {item.title}
                      {item.value ? (
                        <span className="ml-2 text-[12px] font-normal text-white/45">
                          {item.value}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-0.5 text-[12px] leading-relaxed text-white/50">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-5 text-[11px] leading-relaxed text-white/35">
              Scores come from the Google PageSpeed Insights API running
              Lighthouse against a simulated mobile device. A single run varies by
              a few points between tests.
            </p>
          </div>

          {/* Email Capture */}
          <div className="rounded-2xl border border-[#5e6ad2]/30 bg-[#5e6ad2]/[0.08] p-6 text-center sm:p-8">
            <h5 className="text-[16px] font-medium text-white">
              Want a human to read this report?
            </h5>
            <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-white/60">
              Leave your email and our team reviews {auditResult.cleanHost} by
              hand, then sends back a prioritised fix list with the code changes
              each item needs.
            </p>

            {emailState === "sent" ? (
              <div className="mt-5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3 text-[13px] text-emerald-300">
                Request received. Our team will reply to {email} within 4 business hours.
              </div>
            ) : (
              <form
                onSubmit={handleEmailReport}
                className="mx-auto mt-5 flex max-w-md flex-col gap-2.5 sm:flex-row"
              >
                <label htmlFor="audit-email" className="sr-only">
                  Work email
                </label>
                <input
                  id="audit-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  disabled={emailState === "sending"}
                  className="min-h-[44px] flex-1 rounded-full border border-white/[0.15] bg-white/[0.05] px-4 py-2.5 text-[16px] text-white placeholder:text-white/35 outline-none focus:border-[#5e6ad2] disabled:opacity-60 sm:text-[13px]"
                />
                <button
                  type="submit"
                  disabled={emailState === "sending"}
                  className="min-h-[44px] rounded-full bg-white px-6 py-2.5 font-accent text-[11px] uppercase tracking-[0.12em] text-[#08080a] transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
                >
                  {emailState === "sending" ? "Sending" : "Request Review"}
                </button>
              </form>
            )}

            {emailError ? (
              <p className="mt-3 text-[12px] text-rose-300">{emailError}</p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
