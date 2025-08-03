// @/types/business.types.ts

export interface BusinessData {
  // Basic Information
  name: string;
  tagline: string;
  description: string;
  industry: string;

  // Contact Information
  contact: {
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
      country: string;
    }
    coordinates: {
      lat: number;
      lng: number;
    }
  }

  // Business Hours
  hours: {
    [key: string]: {
      open: string; // e.g., "09:00"
      close: string; // e.g., "17:00"
      closed?: boolean; // Optional, if the business is closed on that day
    }
  }

  // Social Media
  social: {
    website?: string;
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
    tiktok?: string;
  }

  // SEO & Legal
  seo: {
    keywords: string[];
    businessType: string; // e.g., "LLC", "Corporation"
    foundedYear?: number; // Optional, if the business was founded in a specific year
  }

  legal: {
    termsOfService?: string; // URL or text for terms of service
    privacyPolicy?: string; // URL or text for privacy policy
  }

}