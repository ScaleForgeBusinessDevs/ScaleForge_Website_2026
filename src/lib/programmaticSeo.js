import industriesData from "@/data/industries.json";
import locationsData from "@/data/locations.json";
import servicesCatalogData from "@/data/servicesCatalog.json";
import caseStudiesData from "@/data/caseStudies.json";

export const siteUrl = "https://scalesforge.site";

// ── Accessors ─────────────────────────────────────────────────────────────────
export function getAllIndustries() {
  return industriesData;
}

export function getIndustryBySlug(slug) {
  if (!slug) return null;
  return industriesData.find((item) => item.slug === slug.toLowerCase()) || null;
}

export function getAllLocations() {
  return locationsData;
}

export function getLocationBySlug(slug) {
  if (!slug) return null;
  return (
    locationsData.find(
      (item) =>
        item.slug === slug.toLowerCase() ||
        item.code.toLowerCase() === slug.toLowerCase()
    ) || null
  );
}

export function getAllServices() {
  return servicesCatalogData;
}

export function getServiceBySlug(slug) {
  if (!slug) return null;
  return (
    servicesCatalogData.find((item) => item.slug === slug.toLowerCase()) || null
  );
}

export function getAllCaseStudies() {
  return caseStudiesData;
}

export function getCaseStudyBySlug(slug) {
  if (!slug) return null;
  return caseStudiesData.find((item) => item.slug === slug.toLowerCase()) || null;
}

export function getCaseStudiesForContext(industrySlug, serviceSlug) {
  return caseStudiesData.filter((cs) => {
    if (industrySlug && cs.industrySlug === industrySlug) return true;
    if (serviceSlug && cs.serviceSlugs?.includes(serviceSlug)) return true;
    return false;
  });
}

// ── High-Priority Validated Combos (Phase 1 & 2 demand footprint) ────────────
export function getPriorityCombos() {
  const priorityCombos = [];

  // Generate verified high-demand combinations across top commercial sectors & major metros
  industriesData.forEach((ind) => {
    const relevantServices = ind.recommendedServices || ["seo", "web-development"];
    locationsData.forEach((loc) => {
      // Prioritize top industry-location overlaps
      const isTopIndustry = loc.topIndustries?.some((name) =>
        name.toLowerCase().includes(ind.shortName.toLowerCase()) ||
        ind.name.toLowerCase().includes(name.toLowerCase())
      );

      relevantServices.forEach((svcSlug) => {
        priorityCombos.push({
          serviceSlug: svcSlug,
          industrySlug: ind.slug,
          locationSlug: loc.slug,
          priority: isTopIndustry ? 0.85 : 0.7,
        });
      });
    });
  });

  return priorityCombos;
}

// ── Dynamic Rich Content Generator (Anti-Thin Content Architecture) ──────────
export function generateComboContent(service, industry, location) {
  if (!service || !industry || !location) return null;

  const relevantCaseStudies = getCaseStudiesForContext(industry.slug, service.slug);
  const featuredCaseStudy =
    relevantCaseStudies[0] || caseStudiesData[0];

  // Tailored title and description
  const pageTitle = `${service.title} for ${industry.name} in ${location.city}, ${location.stateCode} | ScaleForge`;
  const metaDescription = `Grow your ${industry.singular.toLowerCase()} in ${location.city}, ${location.stateCode} with ${service.shortName.toLowerCase()}, custom Next.js engineering, and high-intent local acquisition from ScaleForge.`;

  // Unique contextualized intro variation based on service type
  let introHeadline = `Scaling ${industry.name} Across ${location.city} with Custom ${service.shortName}`;
  let introParagraph = `In the competitive commercial landscape of ${location.city}, ${industry.name.toLowerCase()} require more than generic digital templates. With ${location.growthStat.toLowerCase()}, capturing qualified local client intent demands technical excellence, sub-second web performance, and aggressive search engine authority.`;

  if (service.slug === "seo") {
    introHeadline = `Page 1 SEO & Inbound Client Acquisition for ${industry.name} in ${location.city}`;
    introParagraph = `When prospective clients in ${location.metro} search for top-tier ${industry.singular.toLowerCase()} services, where does your firm appear? ScaleForge engineers hyper-targeted local SEO systems that secure dominant Google Map Pack positions and capture high-intent organic search queries across ${location.city} and surrounding sub-markets.`;
  } else if (service.slug === "web-development" || service.slug === "web-design") {
    introHeadline = `Custom High-Converting Web Architecture for ${location.city} ${industry.name}`;
    introParagraph = `Your website is the single most valuable 24/7 digital asset for your ${industry.singular.toLowerCase()} in ${location.city}. We replace slow, outdated legacy builders with custom Next.js web applications delivering sub-second load times, interactive client portals, and conversion funnels that turn visitors into booked retainers.`;
  } else if (service.slug === "ai-development") {
    introHeadline = `Automated Operating Workflows & AI Systems for ${industry.name} in ${location.city}`;
    introParagraph = `Eliminate manual operational drag in your ${location.city} ${industry.singular.toLowerCase()}. From autonomous lead qualification and CRM synchronization to 24/7 AI voice dispatch, ScaleForge builds custom n8n and Make workflows that allow your team to handle 2x client volume without expanding overhead.`;
  }

  // Localized Market Strategy Breakdown
  const strategyPillars = [
    {
      title: `1. Localized ${location.city} Market Positioning`,
      description: `We analyze local competitors in ${location.city} to identify high-value keyword and conversion gaps they have left open, ensuring your ${industry.singular.toLowerCase()} captures uncontested market share.`,
    },
    {
      title: `2. Solving ${industry.shortName} Operational Bottlenecks`,
      description: `We address key vertical challenges including: ${industry.painPoints[0].toLowerCase()}, providing immediate friction-free solutions for your target clientele.`,
    },
    {
      title: `3. High-Velocity ${service.shortName} Implementation`,
      description: `${service.methodology} Tailored specifically to the regulatory, commercial, and technical standards of ${industry.name}.`,
    },
  ];

  // Contextual FAQs with Schema Support
  const faqs = [
    {
      q: `Why choose ScaleForge for ${service.title} for ${industry.name} in ${location.city}?`,
      a: `ScaleForge combines deep vertical expertise in ${industry.name.toLowerCase()} with hands-on knowledge of the ${location.city}, ${location.stateCode} regional economy. We do not use cookie-cutter WordPress templates. Our Next.js architecture, verified conversion track record, and transparent pricing drive the return on your investment.`,
    },
    {
      q: `How long does it take to see tangible results in ${location.city}?`,
      a: `For custom web development and automation sprints, projects deploy within 2 to 4 weeks. For local SEO campaigns in ${location.city}, ranking improvements and inbound call velocity typically begin compounding within 30 to 60 days of technical deployment.`,
    },
    {
      q: `How do you measure success and return on investment?`,
      a: `Every client receives a real-time transparent reporting dashboard tracking organic search positions, inbound phone calls, qualified form submissions, and revenue pipeline attribution.`,
    },
    ...(industry.faqs || []),
  ];

  return {
    pageTitle,
    metaDescription,
    introHeadline,
    introParagraph,
    strategyPillars,
    featuredCaseStudy,
    relevantCaseStudies,
    faqs,
  };
}

// ── Structured JSON-LD Schema Generator ─────────────────────────────────────
export function generateProgrammaticSchemas({
  service,
  industry,
  location,
  canonicalUrl,
}) {
  const schemas = [];

  // 1. BreadcrumbList Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteUrl}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service?.title || "Service",
        item: `${siteUrl}/services/${service?.slug}`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: industry?.name || "Industry",
        item: `${siteUrl}/industries/${industry?.slug}`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: `${location?.city}, ${location?.stateCode}`,
        item: canonicalUrl,
      },
    ],
  });

  // 2. Service Schema
  schemas.push({
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${service?.title} for ${industry?.name} in ${location?.city}, ${location?.stateCode}`,
    serviceType: service?.title,
    // ScaleForge works remotely and has no premises in these cities, so the
    // provider points at the single real Organization entity rather than
    // asserting a street address that does not exist locally.
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: {
      "@type": "AdministrativeArea",
      name: `${location?.city}, ${location?.stateCode}`,
    },
    description: `${service?.title} and digital growth systems built for ${industry?.name.toLowerCase()} in ${location?.city}, ${location?.stateCode}.`,
  });

  // FAQPage is intentionally NOT emitted here. The combo page renders
  // <FAQAccordion>, which already publishes a FAQPage node for the same
  // questions; adding a second one put two FAQPage entities on every page.

  return schemas;
}
