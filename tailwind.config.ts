import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        syne: ['var(--font-syne)'],
        dmSans: ['var(--font-dmSans)']

      },
      colors: {
        'bgPeach': '#ffe9d9',
        'primaryYellow': '#ffb646',
        'fontBlack': '#080808',
        'bgGrey': '#f5f5f5',
        'fontGrey': '#655d57',
        'headingGrey': '#393531',
      }
    },
  },
  plugins: [],
};
export default config;
