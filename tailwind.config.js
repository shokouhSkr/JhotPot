/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      orange: "#fc6011",
      "light-orange": "#fdd8be",
      navy: "#11263c",
      "dark-gray": "#52616b",
      "main-gray": "#c8d7e2",
      "light-gray": "#f0f5f9",
      navbar: "#f0f5f9",
      footer: "#f9f9f9",
    },
    screens: {
      "2xs": { min: "375px" },
      xs: { min: "425px" },
      sm: { min: "600px" },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
