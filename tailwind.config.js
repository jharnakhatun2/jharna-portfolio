/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  daisyui: {
    themes: [
      {
        jharnatheme: {
          primary: "#32e0fb",

          secondary: "#f33bea",

          accent: "#576574",

          neutral: "#222f3e",

          "base-100": "#FFFFFF",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require("daisyui"), require("tw-elements/dist/plugin.cjs")],
};
