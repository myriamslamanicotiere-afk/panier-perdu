import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sable: "#EDE9E1",
        encre: "#1F2420",
        petrole: "#1B4B43",
        moutarde: "#D9A441",
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-plex)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
