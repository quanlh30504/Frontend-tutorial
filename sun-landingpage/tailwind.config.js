/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        redsun: '#c01111',
        blacksun: "#2b3441",
        footer: "#f7f7f7",
        circle: "#e4e4e4"
      },
      fontSize: {
        base: ['14px', '22px'],      // text cơ bản
        h1: ['40px', '48px'],        // header 1
        h2: ['32px', '40px'],        // header 2
        btn: ['18px', '24px'],       // text button
      },
    },
  },
  plugins: [],
};
