/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBlue: "#0a192f",
        cianGreen: "#64ffda",
        darkerSlate: "ccd6f6",
        lightSlate: "#8892b0",
        brightSlate: "#d7dff5",
      },
    },
  },
  plugins: [],
};
