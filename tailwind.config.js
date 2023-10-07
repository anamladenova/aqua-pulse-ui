/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["dist/*.html"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#0071BC",
        "navbar-color": "#121212",
        "button-color": "#D9D9D9"
      }
    },
  },
  plugins: [],
}

