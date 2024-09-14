import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "var(--primary)",
        'secondary': "var(--secondary)",
        'primaryText': "var(--primary-text)",
        'secondaryText': "var(--secondary-text)",
      },
      backgroundImage: {
        'hero': "url('/hero-mobile.jpeg')",
        'big-hero': "url('/hero.jpg')",
      },
    },
  },
  plugins: [],
};
export default config;
