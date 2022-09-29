/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        background: "#e2e8dc",
        text: "#202d4a",
        ctaText: "#000000",
        ctaBackground: "#008044",
        highlight: "#0073e6",
      },
      secondary: {
        background: "#ffffff",
        text: "#000000",
        ctaText: "#ffffff",
        ctaBackground: "#008044",
        highlight: "#008044",
      },
      tertiary: {
        background: "#0d291c",
        text: "#ffffff",
        ctaText: "",
        ctaBackground: "",
      },
    },
  },
  plugins: [],
};
