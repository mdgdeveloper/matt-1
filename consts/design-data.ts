// @/consts/design-data.ts
import { DesignData } from '@/types/design.types';

export const designData: DesignData = {
  colors: {
    primary: {
      50: "#eff6ff",
      100: "#dbeafe",
      500: "#3b82f6",
      600: "#2563eb",
      700: "#1d4ed8",
      900: "#1e3a8a"
    },
    secondary: {
      50: "#f8fafc",
      100: "#f1f5f9",
      500: "#64748b",
      600: "#475569",
      700: "#334155",
      900: "#0f172a"
    },
    neutral: {
      50: "#fafafa",
      100: "#f4f4f5",
      200: "#e4e4e7",
      300: "#d4d4d8",
      400: "#a1a1aa",
      500: "#71717a",
      600: "#52525b",
      700: "#3f3f46",
      800: "#27272a",
      900: "#18181b"
    },
    accent: {
      success: "#10b981",
      warning: "#f59e0b",
      error: "#ef4444",
      info: "#06b6d4"
    }
  },

  fonts: {
    primary: {
      name: "Inter",
      weights: [300, 400, 500, 600, 700],
      fallback: ["system-ui", "sans-serif"]
    },
    secondary: {
      name: "Playfair Display",
      weights: [400, 500, 600, 700],
      fallback: ["Georgia", "serif"]
    },
    mono: {
      name: "Courier New",
      weights: [400, 500, 600, 700],
      fallback: ["monospace"]
    }
  },

  layout: {
    maxWidth: "1200px",
    containerPadding: "1rem",
    sectionSpacing: "4rem",
    borderRadius: {
      sm: "0.25rem",
      md: "0.5rem",
      lg: "0.75rem",
      xl: "1rem"
    }
  },

  variants: {
    header: "centered",
    hero: "split",
    footer: "comprehensive",
    buttons: "rounded",
    cards: "shadow"
  },

  animations: {
    enabled: true,
    duration: "normal",
    easing: "ease-out"
  },

  theme: {
    mode: "light",
  }
};