/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-grey': '#252532', // Corrected color name
      },
    },
  },
  plugins: [],
}