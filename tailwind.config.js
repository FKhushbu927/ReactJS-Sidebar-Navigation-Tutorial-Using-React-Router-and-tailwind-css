
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
            "dark-purple": "#663399",
             "light-white": "rgb(230, 230, 250)"
      }
    },
  },
  plugins: [],
}