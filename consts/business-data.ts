// @/consts/business-data.ts

import { BusinessData } from '@/types/business.types';

export const businessData: BusinessData = {

  name: "Acme Digital Solutions",
  tagline: "Innovating Your Digital Experience",
  description: "Acme Digital Solutions is a leading provider of digital marketing and web development services, helping businesses thrive in the digital age.",
  industry: "Digital Marketing",

  contact: {
    email: "info@acmedigital.com",
    phone: "+1 (555) 123-4567",
    address: {
      street: "123 Digital Way",
      city: "Tech City",
      state: "CA",
      zipCode: "90210",
      country: "United States"
    },
    coordinates: {
      lat: 34.0522,
      lng: -118.2437
    }
  },

  hours: {
    monday: { open: "09:00", close: "17:00" },
    tuesday: { open: "09:00", close: "17:00" },
    wednesday: { open: "09:00", close: "17:00" },
    thursday: { open: "09:00", close: "17:00" },
    friday: { open: "09:00", close: "17:00" },
    saturday: { open: "10:00", close: "14:00" },
    sunday: { open: "10:00", close: "14:00", closed: true }
  },

  social: {
    website: "https://www.acmedigital.com",
    facebook: "https://www.facebook.com/acmedigital",
    twitter: "https://twitter.com/acmedigital",
    instagram: "https://www.instagram.com/acmedigital",
    linkedin: "https://www.linkedin.com/company/acmedigital",
  },

  seo: {
    keywords: ["digital marketing", "web development", "SEO", "social media"],
    businessType: "Professional Services",
    foundedYear: 2010
  },

  legal: {
    termsOfService: "https://www.acmedigital.com/terms",
    privacyPolicy: "https://www.acmedigital.com/privacy"
  }
};

//