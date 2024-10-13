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
        background: "var(--background)",
        foreground: "var(--foreground)",
        pumpkinOrange: "#F75F1C",
        black: "#000000",
        darkPurple: "#881EE4",
        ghostGreen: "#85E21F",
        sweetYellowCorn: "#FFD401",
      },
    },
  },
  plugins: [],
};
export default config;
