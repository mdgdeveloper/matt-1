// @/types/design.types.ts

export interface DesignData {
  // Brand Colors 

  colors: {
    primary: {
      50: string; // e.g., "#1a202c"
      100: string; // e.g., "#2d3748"
      500: string; // e.g., "#4a5568"
      600: string; // e.g., "#718096"
      700: string; // e.g., "#a0aec0"
      900: string; // e.g., "#cbd5e0"
    },
    secondary: {
      50: string; // e.g., "#f7fafc"
      100: string; // e.g., "#edf2f7"
      500: string; // e.g., "#e2e8f0"
      600: string; // e.g., "#cbd5e0"
      700: string; // e.g., "#a0aec0"
      900: string; // e.g., "#718096"
    },
    neutral: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      500: string;
      600: string;
      700: string;
      800: string;
      900: string;
    },
    accent: {
      success: string; // e.g., "#38a169"
      warning: string; // e.g., "#dd6b20"
      error: string; // e.g., "#e53e3e"
      info: string; // e.g., "#3182ce"
    }
  },

  // Typography
  fonts: {
    primary: {
      name: string; // e.g., "Roboto"
      weights: number[]; // e.g., [400, 500, 700]
      fallback: string[];
    },
    secondary: {
      name: string; // e.g., "Arial"
      weights: number[]; // e.g., [400, 500, 700]
      fallback: string[];
    },
    mono: {
      name: string; // e.g., "Courier New"
      weights: number[]; // e.g., [400, 500, 700]
      fallback: string[];
    }
  }
  // Layout and Spacing
  layout: {
    maxWidth: string;
    containerPadding: string;
    sectionSpacing: string;
    borderRadius: {
      sm: string; // e.g., "4px"
      md: string; // e.g., "8px"
      lg: string; // e.g., "16px"
      xl: string; // e.g., "24px"
    }
  }

  // Component Variants
  variants: {
    header: 'minimal' | 'centered' | 'sidebar' | 'mega';
    hero: 'split' | 'centered' | 'video' | 'carousel';
    footer: 'minimal' | 'comprehensive' | 'newsletter';
    cards: 'flat' | 'shadow' | 'border' | 'elevated';
  }

  // Animation preferences
  animations: {
    enabled: boolean;
    duration: 'fast' | 'normal' | 'slow';
    easing: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear';
  }

  // Theme settings
  theme: {
    mode: 'light' | 'dark' | 'auto'; // Auto switches based on system preference
  }
}

