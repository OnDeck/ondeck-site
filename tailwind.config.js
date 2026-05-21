/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--ondeck-sans)'],
        mono: ['var(--ondeck-mono)'],
      },
    },
  },
  plugins: [],
}
