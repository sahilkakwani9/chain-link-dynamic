/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/ethBg.jpg')",
      },
      fontFamily: {
        'One': ["Unbounded"],
        'Two': ["Inter"]
      }
    },
  },
  plugins: [],
}