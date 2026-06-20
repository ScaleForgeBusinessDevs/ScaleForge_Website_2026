# PageSpeed Audit — Fix Report
**Site:** https://scaleforgewebdev.vercel.app/
**Audited:** Jun 20, 2026, 10:29 PM GMT+5 · Lighthouse 13.4.0 · Desktop emulation

## Scores
| Category | Score |
|---|---|
| Performance | **56** 🔴 |
| Accessibility | 95 🟡 |
| Best Practices | 100 🟢 |
| SEO | 100 🟢 |
| Agentic Browsing | 2/3 🟡 |

**Core metrics:** FCP 0.3s ✅ · LCP 0.6s ✅ · TBT **21,050ms** 🔴🔴🔴 · CLS 0.124 🟡 · Speed Index 5.3s 🔴

The FCP/LCP numbers look great, but TBT is catastrophic — the page paints fast then locks up the main thread for 20+ seconds. That's the #1 thing dragging Performance to 56. Fix that first; everything else is secondary.

---

## P0 — Critical: Main-thread blocking (TBT 21,050ms)

**Diagnosis:** "Minimize main-thread work" shows **34.4s** total main-thread time, of which **33,554ms is bucketed as "Other"** (not Script Evaluation, not Style/Layout — i.e. not normal page-load JS work). Script Evaluation itself is only 432ms. **20 long tasks** were found.

This pattern (huge "Other" bucket, tiny Script Evaluation) usually means one of:
- A `setInterval`/`setTimeout`/polling loop, animation loop, or analytics/tracking script running continuously after load
- A third-party script (chat widget, analytics, font loader) doing synchronous work in a loop
- A dev-only tool (HMR, devtools overlay, React DevTools profiler hook) accidentally shipped to production
- An infinite or runaway re-render loop in a client component

**Action items for Claude Code:**
1. Open Chrome DevTools → Performance panel, record a trace of page load + 5s idle, and find what's actually running during the "Other" time. Don't guess — profile it.
2. Audit every `useEffect`, `setInterval`, polling hook, or analytics snippet for unbounded loops or missing cleanup/dependency arrays.
3. Check for any debug/profiling code, console logging in loops, or dev tooling that leaked into the production build (`next build` output).
4. Check third-party scripts loaded on this page (chat widgets, analytics, font scripts) — temporarily remove each one and re-test to isolate the culprit.
5. Re-run PageSpeed Insights after each fix to confirm TBT is dropping before moving to lower-priority items.

---

## P1 — High: Unused & legacy JavaScript (~190 KiB wasted)

**Reduce unused JavaScript — est. savings 176 KiB**
| Chunk | Transferred | Unused |
|---|---|---|
| `chunks/3f2wnthue_xqh.js` | 128.5 KiB | **128.5 KiB (100% unused)** |
| `chunks/2ejk_26znfoeu.js` | 63.8 KiB | 26.1 KiB |
| `chunks/2fxsaem6yj_s0.js` | 45.4 KiB | 21.4 KiB |

`3f2wnthue_xqh.js` is being shipped but **entirely unused** on this page — that's a strong signal of a component/library imported globally (e.g. in `_app`/root layout) that's only needed on one route. Find what's in that chunk and:
- Dynamic-import it (`next/dynamic`) so it only loads on the pages that need it, or
- Remove it if it's dead code (unused library, leftover component).

**Legacy JavaScript — est. savings 14 KiB**
`chunks/3rj05fpby3zro.js` ships polyfills for: `Array.prototype.at`, `flat`, `flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimStart/trimEnd`. All Baseline-supported in every modern browser.
- Action: check `browserslist`/`.browserslistrc` (or `next.config.js` target). Remove legacy browser targets so the build doesn't transpile/polyfill these. If using Next.js, this is usually a build target config, not manual polyfill code.

**Reduce unused CSS — est. savings 13.2 KiB**
`/bi/bootstrap-icons.css` ships 13.4 KiB, of which **13.2 KiB is unused** — basically the whole icon font.
- Action: identify which icons are actually used on the page and either (a) swap to inline SVG for just those icons, or (b) use a tree-shakeable icon import (e.g. `react-bootstrap-icons` per-icon imports) instead of the full CSS icon font.

---

## P2 — Medium: Layout shift & font loading (CLS 0.124)

**Font display — est. savings 200ms**
`fonts/bootstrap-icons.woff2` has no `font-display` strategy set, which can block/shift text.
- Action: set `font-display: swap` (or `optional`) on this font-face declaration.

**Layout shift culprits — CLS contribution 0.124 (entire CLS score)**
The shifting element is the hero heading:
> `Building Online Presence For Businesses Around the Globe...` inside `<div class="relative mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 ...">`

Caused by two web fonts loading in and reflowing text:
- `83afe278b6a6bb3c-s.p.2bn3s6zvc0dyp.woff2`
- `Akira_Exp….p.1d9zclmfmrn3z.otf`

- Action: add `font-display: swap` + **font metric overrides** (e.g. via `next/font` if using Next.js, which auto-generates fallback metrics) for both fonts so the fallback font occupies the same space as the final font, eliminating the reflow. If not already using `next/font`, migrate these two custom fonts to it — that's the cleanest fix for this exact issue.

**Forced reflow** (lower impact, ~218ms total)
JS is reading layout properties (e.g. `offsetWidth`) right after a DOM/style change, forcing a synchronous reflow.
- Files: `chunks/2ejk_26znfoeu.js:2:1408` (59ms), `chunks/2fxsaem6yj_s0.js` (44ms + 14ms at two locations), plus 101ms unattributed.
- Action: find the geometry reads in these chunks and batch them — read all layout values first, then write/mutate DOM, instead of interleaving reads and writes.

---

## P3 — Accessibility (95 → fix for full score)

**1. Contrast failures** — multiple footer text elements use `text-white/40` and `text-white/35` on a `#08080a` background, which doesn't meet contrast minimums. Affected elements (all inside `<footer class="border-t border-white/[0.06] bg-[#08080a] pb-10 pt-20">`):
- Tagline paragraph (`text-white/40`)
- Newsletter blurb (`text-white/40`)
- All footer nav links: Home, Solutions, About, Pricing, Blog, Contact, AI Development, Web Design, Web Development, SEO, Content Creation, Privacy Policy, Terms of Service (`text-white/40`)
- Copyright line (`text-white/35`)

- Action: bump these to at least `white/60`–`white/70` (test against WCAG AA 4.5:1 for body text, 3:1 for large text) against `#08080a`.

**2. Heading order** — an `<h4>` is used in the Navigation section without the preceding heading levels (h1→h2→h3) being present in sequence.
- Action: review the footer/nav heading hierarchy and renumber so levels aren't skipped (e.g. use `h2`/`h3` consistently or restructure with proper nesting). Visual size can stay the same via CSS class — just fix the semantic tag.

---

## P4 — Minor / good practice

- **Render-blocking CSS** (~20ms savings): `chunks/1i2es9qly6_4m.css` (13.2 KiB) blocks initial render. Consider inlining critical CSS or deferring non-critical styles.
- **Missing source maps** for large first-party JS chunks — add source maps to the production build for easier future debugging (flagged under Best Practices, currently non-blocking since BP score is 100).
- **Agentic Browsing (2/3)** — currently failing because of the same CLS 0.124 issue above. Fixing the layout shift in P2 should resolve this category too.

---

## Suggested fix order for Claude Code
1. **P0** — Profile and kill the 33.5s "Other" main-thread time (this alone could take Performance from 56 into the 80s+).
2. **P1** — Code-split the 100%-unused `3f2wnthue_xqh.js` chunk; fix browserslist to drop legacy polyfills; replace bootstrap-icons CSS with per-icon imports.
3. **P2** — Migrate the two custom fonts to `next/font` (or add `font-display: swap` + size-adjust fallbacks manually) to kill the CLS.
4. **P3** — Bump footer text opacity for contrast; fix heading levels in nav.
5. **P4** — Inline/defer the render-blocking CSS, add source maps.

Re-run PageSpeed Insights after each phase — TBT should be the first number to watch since it's the biggest lever on the Performance score.