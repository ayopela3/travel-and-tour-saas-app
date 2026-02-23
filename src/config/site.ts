export const siteConfig = {
  name: "Travel & Tour SaaS",
  description: "A modern travel and tour management platform",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og.png",
  links: {
    github: "https://github.com/your-username/travel-and-tour-saas-app",
  },
} as const;

export type SiteConfig = typeof siteConfig;
