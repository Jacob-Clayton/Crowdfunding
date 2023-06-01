import { type Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './styles/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jost: ['var(--font-jost)'],
      },
      colors: {
        'off-white' : '#fafafa',
        'primary-black': '#18181c',
      }
    },
  },
  plugins: [],
} satisfies Config;
