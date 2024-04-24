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
        "background-gray": "#F4F5F7",
        "slate-gray": "#F4F5F7",
        'muted': "#C6CAD4"
      }
    },
  },
  plugins: [],
};
export default config;
