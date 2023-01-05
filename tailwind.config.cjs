/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "background-blue": "#0a192f",
        "text-highlight": "#64ffda",
        "text-header": "#e6f1ff",
        "text-main": "#8892b0",
      },
      fontFamily: {
        SFMono: ["SFMono", "sans-serif"],
      },
    },
  },
  plugins: [],
};
