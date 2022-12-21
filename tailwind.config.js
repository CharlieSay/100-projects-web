/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        background: "#FAF9F6",
        text: "#141A46",
        ctaText: "#000000",
        ctaBackground: "#FFC300",
        highlight: "#FFC300",
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
