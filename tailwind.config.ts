import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#00308F",
          "blue-dark": "#001F5E",
          "blue-light": "#1A4BAA",
          red: "#C0001D",
          gray: {
            50: "#F8F9FB",
            100: "#EEF0F4",
            200: "#D9DDE5",
            400: "#8B94A6",
            600: "#4B5568",
            900: "#111827",
          },
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 1px 3px 0 rgba(0,0,0,0.08), 0 1px 2px -1px rgba(0,0,0,0.06)",
        "card-hover": "0 10px 25px -3px rgba(0,0,0,0.10), 0 4px 6px -4px rgba(0,0,0,0.08)",
      },
    },
  },
  plugins: [],
};
export default config;
