/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#facc29",
        "background-light": "#f8f8f5",
        "background-dark": "#141414",
        "text-light": "#141414",
        "text-dark": "#FFFFFF",
        "subtle-light": "#141414",
        "subtle-dark": "#a1a1aa"
      },
      fontFamily: {
        "display": ["Lexend", "sans-serif"]
      },
    },
  },
  plugins: [],
}