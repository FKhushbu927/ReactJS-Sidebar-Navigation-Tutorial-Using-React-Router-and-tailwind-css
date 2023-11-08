
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            "dark-purple": "#6b21a8",
             "light-white": "rgb(230, 230, 250)",
             "light-purple": "#9333ea"
      }
    },
  },
  plugins: [],
}