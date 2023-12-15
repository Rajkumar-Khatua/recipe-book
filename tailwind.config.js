/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#ff00c0",

          secondary: "#00f500",

          accent: "#a64300",

          neutral: "#121e2b",

          "base-100": "#edffff",

          info: "#0083b5",

          success: "#0ba500",

          warning: "#e95100",

          error: "#be2e34",
        },
      },
    ],
  },
};
