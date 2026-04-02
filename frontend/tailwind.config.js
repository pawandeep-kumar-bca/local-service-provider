/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3B82F6",
        "primary-dark": "#2563EB",
        "primary-light": "#60A5FA",

        success: "#22C55E",
        "success-dark": "#16A34A",

        warning: "#F59E0B",
        danger: "#EF4444",

        text: "#0F172A",
        "text-secondary": "#1E293B",
        muted: "#64748B",

        bg: "#F8FAFC",
        card: "#FFFFFF",
        border: "#E2E8F0",
        divider: "#94A3B8",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #3B82F6, #1D4ED8)",
        "gradient-success": "linear-gradient(135deg, #22C55E, #16A34A)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
        roboto:["Roboto","sans-serif"]
      }
    },
  },
  plugins: [],
};
