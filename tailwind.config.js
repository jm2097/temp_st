/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    extend: {
      colors: {
        primary: "#0B0D17",
        secondary: "#D0D6F9",
      },
      fontFamily: {
        sans: ["Barlow Condensed", "sans-serif"],
        serif: ["Bellefair", "serif"],
      },
    },
  },
  plugins: [],
};
