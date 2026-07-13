/**
 * LinkedIn Posts Configuration
 * 
 * Since the LinkedIn API requires strict enterprise-level company verification,
 * you can display your latest posts by entering their content here.
 * This is 100% reliable, loads instantly, and keeps the design beautifully styled.
 */

export interface LinkedInPost {
  id: string;
  commentary: string;
  publishedAt: string; // e.g., "14 Jul 2026" or "2 days ago"
  postUrl: string;
  imageUrl?: string;
  relatedService?: {
    name: string;
    href: string;
  };
}

export const LINKEDIN_COMPANY_URL = "https://www.linkedin.com/company/scale-forge-web-devs";

export const LINKEDIN_POSTS: LinkedInPost[] = [
  {
    id: "1",
    commentary: "Your website might be losing you customers and you don't even know it.\n\nMost businesses spend thousands building a beautiful website... then forget the one thing that actually brings people to it: SEO.\n\nA stunning design with zero SEO is just an expensive PDF sitting on the internet. No traffic. No rankings. No leads. No sales.\n\nFor the next few days, ScaleForge is offering a FREE Website SEO Audit. Drop your website link in the comments and our team will record a short Loom video walking you through exactly what to fix first.\n\nNo sales call. No spam. No catch. Comment your website URL below! 🔍",
    publishedAt: "09 Jul 2026",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7481033236844969984/",
    imageUrl: "/Assets/linkedin-post-1.jpg",
    relatedService: {
      name: "SEO Services",
      href: "/services/seo"
    }
  },
  {
    id: "2",
    commentary: "Your best lead messaged you at 11:47pm. By the time you saw it, they'd already booked a showing with a competitor who replied in 4 minutes. That's the real cost of manual follow-up in real estate.\n\nAt ScaleForge, we build AI agentic workflows that automatically qualify leads, check your calendar, book showings, and update your CRM instantly 24/7. Out-respond everyone still doing it by hand! ⏱️",
    publishedAt: "20 Jun 2026",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7474175478803722240/",
    imageUrl: "/Assets/linkedin-post-2.jpg",
    relatedService: {
      name: "AI Development",
      href: "/services/ai-development"
    }
  },
  {
    id: "3",
    commentary: "\"Is SEO necessary? Do you even need a website?\"\n\nTwo questions I hear back-to-back, usually right when a client's trying to trim budget. Here's the thing: they're not two separate decisions, they're one. A website with no SEO behind it is a digital business card nobody finds. SEO with no website to send traffic to has nowhere to convert. One gets you found, the other gets you trusted. Cut either, and the other stops working.",
    publishedAt: "07 Jul 2026",
    postUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7480249638894301184/",
    imageUrl: "/Assets/linkedin-post-3.jpg",
    relatedService: {
      name: "Web Development",
      href: "/services/web-development"
    }
  }
];
