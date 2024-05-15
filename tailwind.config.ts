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
        'muted': "#C6CAD4",
        "border": "#F2F4F7",
        "dashboard": "#F9FAFB",
        "primary-light-blue": "#BAD8FF",
        "p-muted": "#98a2b3",
        "active": "#EAF3FF",
        "small-p-mute": "#667085",
        
      },
      backgroundImage: {
        dashBoard: "url('/dashboardBanner (1).png",
      },
      screens: {
        "md": "600px",
        "lg":"840px"
      }
    },
  },
  plugins: [],
};
export default config;
