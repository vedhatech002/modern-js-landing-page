/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ropa': "'Ropa Sans', sans-serif",
        'sofia': "'Sofia Sans Condensed', sans-serif;",
      },
      backgroundImage: {
        'hero-bg-img': "url('/public/img/homepage-bg.png')"
      }
    },
  },
  plugins: [],
}