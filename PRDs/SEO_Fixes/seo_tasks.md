# SEO Audit Fixes Checklist

Here is the checklist of SEO issues identified in the Semrush Site Audit, separated into codebase fixes (sorted from easiest to hardest) and external fixes.

## Codebase Fixes (Easiest to Hardest)

- [ ] **1. Missing `llms.txt` file (Notice)**
  - **Issue:** The site is missing an `llms.txt` file.
  - **Fix:** Create an `llms.txt` file in the `public` directory to provide information to AI crawlers.
- [ ] **2. Link with no anchor text (Notice)**
  - **Issue:** The `/blog/how-seo-works` page has a link to the homepage (`/`) with empty or naked anchor text.
  - **Fix:** Add an `aria-label` or descriptive text inside the `<a>` tag.
- [ ] **3. Broken External Link (Warning)**
  - **Issue:** The `/contact` page has a WhatsApp link (`https://wa.me/...`) returning a 429 (Too Many Requests) status code.
  - **Fix:** Verify the link format (this is likely a false positive due to WhatsApp rate-limiting the crawler, but it's worth double-checking).
- [ ] **4. Duplicate Title Tags, Meta Descriptions, & Content (Errors)**
  - **Issue:** The `/blog` and `/blog?type=case-studies` URLs are being flagged as duplicates of each other.
  - **Fix:** Implement a `<link rel="canonical" ... />` tag pointing to the base `/blog` page, or dynamically update the `<title>` and `<meta>` tags based on the search parameters.
- [ ] **5. Long Title Tags (Warning)**
  - **Issue:** 32 pages (mostly blog posts) have titles exceeding 70 characters (e.g., "How the Right SEO Agency Can Transform Your Business in 2026 | ScaleForge Blog").
  - **Fix:** Update the metadata template in Next.js to truncate titles, or rewrite the blog titles to be more concise.
- [ ] **6. Multiple `<h1>` Tags (Notice)**
  - **Issue:** 28 pages contain more than one `<h1>` tag.
  - **Fix:** Audit the global layout, markdown renderer, and page components to ensure only the main page title uses `<h1>`. Change secondary headings to `<h2>` or `<h3>`.
- [ ] **7. Low Word Count & Content Optimization (Warning / Notice)**
  - **Issue:** The `Projects` page (116 words) and the `Zero Organic Traction...` blog post (199 words) have too few words.
  - **Fix:** Write and add more descriptive, high-quality text content to these pages to bring them over the 200-word threshold.
- [ ] **8. Low Text-to-HTML Ratio (Warning)**
  - **Issue:** 49 pages have a text-to-HTML ratio of 10% or less (too much code compared to readable text).
  - **Fix:** Refactor React components to reduce DOM depth (remove unnecessary wrapper `<div>`s) and increase the amount of readable text on pages.

## External / Infrastructure Fixes (Vercel / Domain)

These issues are not related to the codebase directly and need to be fixed in your hosting provider's dashboard (e.g., Vercel).

- [ ] **1. Incorrect Certificate Name (Error)**
  - **Issue:** The `www` subdomain (`https://www.scaleforgewebdev.vercel.app`) has an SSL certificate mismatch.
  - **Fix:** Log into the Vercel dashboard and check the domain settings. Ensure the SSL certificate covers the `www` subdomain properly, or enforce a strict redirect from the `www` subdomain to the apex domain.
- [ ] **2. No SNI Support (Warning)**
  - **Issue:** Server Name Indication (SNI) is flagged as unsupported for a subdomain.
  - **Fix:** This is typically handled by Vercel automatically. Resolving the SSL certificate mismatch above will likely fix this warning as well.
