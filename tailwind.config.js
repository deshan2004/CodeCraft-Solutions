/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0a0f1c',
          800: '#111827',
          700: '#1f2937',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
