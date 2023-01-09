/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      lightMode: {
        background: "#FAF9F6",
        text: "#141A46",
        ctaText: "#000000",
        highlight: "#FFC300",
      },
      darkMode: {
        background: "#0E1628",
        backgroundAlt: "#1E293B",
        text: "#f7f7f7",
        ctaText: "#ffffff",
        highlight: "#247BA0",
      },
      white: "#ffffff",
      black: "#000000",
    },
    container: {
      center: true,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
