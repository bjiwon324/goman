import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        blackHanSans: ["var(--font-black-han-sans)"],
        pretendard: ["var(--font-pretendard)"],
      },
    },
  },
  plugins: [],
};
export default config;
