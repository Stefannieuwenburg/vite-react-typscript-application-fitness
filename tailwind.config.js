/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    colors: {
      "white-100": "#ffffff",
      "gray-100": "#dadce0",
      "gray-200": "#bcc0c3",
      "gray-300": "#757575",
      "gray-400": "#6b6b6b",
      "black-100": "#2b2b2b",
      "black-200": "#000000",
      "green-500": "#7adec9",
      "oranje-100": "#fe7000",
      "primary-100": "#FFE1E0",
      "primary-300": "#FFA6A3",
      "primary-500": "#FF6B66",
      "primary-600": "#fe7000",
      "secondary-400": "#FFCD5B",
      "secondary-500": "#FFC132",
      "secondary-600": "#6131ad",
    },
    backgroundImage: (theme) => ({
      "mobile-home": "url('./assets/HomePageGraphic.png')",
    }),
    fontFamily: {
      dmsans: ["DM Sans", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
    },
    content: {
      evolvetext: "url('./assets/EvolveText.png')",
    },
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
  },
};
export const plugins = ['prettier-plugin-tailwindcss'];
