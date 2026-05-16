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
      colors: {
        lp: {
          bg0: '#fdfbf7',
          bg1: '#ffffff',
          bg2: '#f5f1ea',
          bg3: '#ede7dc',
          line: '#e7e0d2',
          lineStrong: '#d6cdba',
          fg0: '#1a1814',
          fg1: '#4a463e',
          fg2: '#7a7568',
          fg3: '#a39d8e',
          fg4: '#c4bda8',
          blue: '#2a5fd9',
          blueSoft: '#e6edfb',
          amber: '#d68a1f',
          amberSoft: '#fbf0d8',
          red: '#c5443d',
          redSoft: '#fae0dd',
          green: '#3d8a4d',
          greenSoft: '#dff0e0',
          purple: '#7549b8',
          purpleSoft: '#ede4f8',
          ink: '#1a1814',
        },
      },
    },
  },
  plugins: [],
}
