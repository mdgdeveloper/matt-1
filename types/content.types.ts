// @/types/content.types.ts

export interface ContentData {
  // SEO & Metadata
  meta: {
    title: string; // e.g., "Home - My Business"
    description: string; // e.g., "Welcome to My Business, your go-to place for..."
    keywords: string[]; // e.g., ["business", "services", "products"]
    ogImage?: string; // Optional, URL for Open Graph image
    favicon?: string; // Optional, URL for favicon
  },

  // Navigation
  navigation: {
    logo: {
      text?: string; // e.g., "My Business"
      image?: string; // Optional, URL for logo image
      alt: string; // e.g., "My Business Logo"
    };
    menuItems: Array<{
      label: string;
      href: string;
      description?: string; // Optional, for accessibility
      submenu?: Array<{
        label: string;
        href: string;
        description?: string; // Optional, for accessibility
      }>
    }>;
    cta?: {
      label: string; // e.g., "Contact Us"
      href: string; // e.g., "/contact"
      variant: 'primary' | 'secondary' | 'outline'; // e.g., "primary"
    }
  },

  // Homepage Sections
  homepage: {
    hero: {
      variant: 'split' | 'centered' | 'video' | 'carousel';
      headline: string; // e.g., "Welcome to My Business"
      subheadline: string; // Optional, e.g., "Your one-stop solution for all your needs"
      description?: string; // Optional, e.g., "We offer a wide range of services to help you succeed."
      cta: {
        primary: {
          label: string; // e.g., "Get Started"
          href: string;
        }
        secondary?: {
          label: string; // e.g., "Learn More"
          href: string;
        }
      }
      media: {
        type: 'image' | 'video' | 'gallery';
        src: string | string[];
        alt?: string; // Optional, e.g., "Hero Image"
        poster?: string; // Optional, for videos
      };
      features: Array<{
        icon: string; // e.g., "icon-class-name"
        title: string; // e.g., "Feature Title"
        description: string; // e.g., "Brief description of the feature."
      }>;
    }
  }
  about: {
    variant: 'simple' | 'with-stats' | 'team-focused';
    headline: string; // e.g., "About Us"
    description: string; // e.g., "Learn more about our mission and values."
    image?: string
    stats?: Array<{
      number: string;
      label: string; // e.g., "Years in Business"
      description?: string; // Optional, e.g., "We have been serving our customers since 2010."
    }>;
    team?: Array<{
      name: string; // e.g., "John Doe"
      role: string; // e.g., "CEO"
      image?: string; // Optional, URL for team member image
      bio?: string; // Optional, e.g., "John has over 20 years of experience in the industry."
      social?: {
        linkedin?: string; // Optional, URL for LinkedIn profile
        twitter?: string; // Optional, URL for Twitter profile
      }
    }>;
  }


  services: {
    variant: 'grid' | 'list' | 'carousel';
    headline: string; // e.g., "Our Services"
    description: string;
    items: Array<{
      id: string; // Unique identifier for the service
      title: string; // e.g., "Service Title"
      description: string; // e.g., "Brief description of the service."
      image?: string; // Optional, URL for service image
      features?: string[];
      price?: {
        amount: number; // e.g., 99.99
        currency: string; // e.g., "USD"
        period?: string; // Optional, e.g., "monthly", "yearly"
      };
      cta?: {
        label: string; // e.g., "Learn More"
        href: string; // e.g., "/services/service-id"
      }
    }>;
  };

  testimonials: {
    variant: 'slider' | 'grid' | 'carousel';
    headline: string; // e.g., "What Our Clients Say"
    description?: string; // Optional, e.g., "Hear from our satisfied customers."
    items: Array<{
      id: string; // Unique identifier for the testimonial
      content: string; // e.g., "This service changed my life!"
      author: {
        name: string; // e.g., "Jane Doe"
        role?: string; // Optional, e.g., "CEO of Company"
        company?: string; // Optional, e.g., "Company Name"
        avatar?: string; // Optional, URL for author image
      }
      rating?: number; // Optional, e.g., 4.5
      date?: string; // Optional, e.g., "2023-10-01"
    }>;
  };

  contact: {
    variant: 'form-only' | 'with-info' | 'map';
    headline: string; // e.g., "Get in Touch"
    description?: string; // Optional, e.g., "We'd love to hear from you!"
    form: {
      fields: Array<{
        name: string; // e.g., "name"
        type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
        label: string; // e.g., "Your Name"
        placeholder?: string; // Optional, e.g., "Enter your name"
        required?: boolean; // Optional, e.g., true
        options?: string[]; // Optional, for select fields
      }>;
      submitLabel: string; // e.g., "Send Message"
      successMessage?: string; // Optional, e.g., "Thank you for your message!"
      errorMessage?: string; // Optional, e.g., "There was an error sending your message."
    };

    info?: {
      items: Array<{
        type: 'address' | 'phone' | 'email' | 'hours';
        label: string; // e.g., "Address"
        value: string; // e.g., "123 Main St, City, State, Zip"
        icon?: string; // Optional, e.g., "icon-class-name"
      }>;
    };
  }

  cta: {
    variant: 'banner' | 'inline' | 'popup';
    headline: string; // e.g., "Ready to Get Started?"
    description?: string; // Optional, e.g., "Contact us today to learn more about our services."
    button: {
      label: string; // e.g., "Contact Us"
      href: string; // e.g., "/contact"
      variant: 'primary' | 'secondary' | 'outline'; // e.g., "primary"
    }
    background?: {
      type: 'color' | 'image' | 'gradient';
      src?: string; // Optional, URL for background image
      overaly?: boolean; // Optional, e.g., true for overlay
    }
  }

  pages: {
    about?: {
      meta: {
        title: string; // e.g., "About Us - My Business"
        description: string;
      }
      content: {
        headline: string; // e.g., "About Us"
        sections: Array<{
          type: 'text' | 'image' | 'gallery' | 'team' | 'timeline';
          content: string | { [key: string]: unknown };
        }>
      }
    },
    services?: {
      meta: {
        title: string; // e.g., "Our Services - My Business"
        description: string;
      }
      content: {
        headline: string; // e.g., "Our Services"
        services: Array<{
          slug: string; // Unique identifier for the service
          title: string; // e.g., "Service Title"
          excerpt: string; // e.g., "Brief description of the service."
          content: string; // e.g., "Detailed description of the service."
          image?: string; // Optional, URL for service image
          gallery?: string[]; // Optional, array of image URLs
          features?: string[]; // Optional, array of feature descriptions
          pricing?: {
            packages: Array<{
              name: string; // e.g., "Basic Package"
              price: number;
              currency: string; // e.g., "USD"
              period?: string; // Optional, e.g., "monthly", "yearly"
              features: string[]; // e.g., ["Feature 1", "Feature 2"]
              popular?: boolean; // Optional, e.g., true if this is the most popular package
            }>;
          };
        }>;
      }
    }
  },
  footer: {
    variant: 'minimal' | 'comprehensive' | 'newsletter';
    description?: string; // Optional, e.g., "Stay connected with us."
    sections?: Array<{
      title: string; // e.g., "Follow Us"
      links: Array<{
        label: string; // e.g., "Facebook"
        href: string; // e.g., "https://facebook.com/mybusiness"
      }>;
    }>;
    newsletter?: {
      enabled: boolean; // e.g., true if newsletter signup is available
      headline: string; // e.g., "Subscribe to Our Newsletter"
      description?: string; // Optional, e.g., "Get the latest updates and offers."
      placeholder?: string; // Optional, e.g., "Enter your email"
      buttonLabel: string; // e.g., "Subscribe"
    };
    legal?: {
      termsOfService?: string; // URL or text for terms of service
      privacyPolicy?: string;
      copyright?: string; // URL or text for copyright
      links: Array<{
        label: string; // e.g., "Privacy Policy"
        href: string; // e.g., "/privacy-policy"
      }>
    };
  }
}

