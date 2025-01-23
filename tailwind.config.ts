import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        1:'var( --colour--bg-1)',
        2:'var(--colour--bg-2)',
        3:'var(--colour--bg-3)',
        4:'var(--colour--bg-4)',
        "colour-1":"var(--colour--border-1)",
        "colour-2":"var(--colour--border-2)"
      },
    },
  },
  plugins: [],
} satisfies Config;
