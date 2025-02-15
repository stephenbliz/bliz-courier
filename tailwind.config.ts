import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: '#f6ab36',
        headerColor: '#222222',
        shadowColor: '#eaeaeaaa',
        whiteColor: '#ffffff',
        textColor: '#b1b0b0'
      },
      fontFamily: {
        headerFont: ['var(--font-poppins)', 'sans-serif'],
        bodyFont: ['var(--font-roboto)', 'sans-serif']
      }
    },
  },
  plugins: [],
} satisfies Config;
