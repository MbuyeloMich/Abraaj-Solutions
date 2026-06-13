import type { Localized } from "../i18n/pickLocale";

export const site = {
  name: "Abraaj Solutions",
  legalName: "Abraaj Solutions B.V.",
  url: "https://abraajsolutions.com",
  title: { en: "Digital Product, AI and Cloud Solutions", nl: "Digitale product-, AI- en cloudoplossingen" } as Localized<string>,
  tagline: "Engineering digital transformation",
  description: {
    en: "Abraaj Solutions builds modern software and AI-enabled platforms for ambitious organizations, blending product engineering, data-driven insights, and cloud-native delivery.",
    nl: "Abraaj Solutions ontwikkelt moderne software en AI-gestuurde platforms voor ambitieuze organisaties, met een mix van product engineering, datagestuurde inzichten en cloud-native levering.",
  } as Localized<string>,
  footerDescription: {
    en: "We help teams design, build, and scale digital products that transform operations, customer experiences, and business outcomes.",
    nl: "Wij helpen teams met het ontwerpen, bouwen en opschalen van digitale producten die operaties, klantervaringen en bedrijfsresultaten transformeren.",
  } as Localized<string>,
  office: {
    street: "Hambakenwetering 1",
    postalCode: "5231 DD",
    city: "'s-Hertogenbosch",
    country: "The Netherlands",
    lat: 51.7095,
    lon: 5.2827,
    bbox: [5.2747, 51.7055, 5.2907, 51.7135] as [number, number, number, number],
  },
  contact: {
    email: "hello@abraajsolutions.com",
    phoneDisplay: "+31 85 212 94 14",
    phoneHref: "tel:+31852129414",
    linkedin: "https://www.linkedin.com/company/abraaj-solutions/",
  },
  analytics: {
    provider: "plausible",
    domain: "abraajsolutions.com",
  },
  marqueeItems: [
    "AI Engineering",
    "Cloud Platforms",
    "Data Ops",
    "Product Strategy",
    "Digital Transformation",
    "Platform Modernization",
    "Automation",
    "Customer Experience",
  ],
};

export type SiteData = typeof site;
