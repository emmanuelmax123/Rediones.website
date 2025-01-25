/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.js", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ["Quicksand", "serif"],
        secfont: ["Poppins", "serif"],
        subfont: ["Montserrat", "serif"],
      },
      colors: { mainColor: ["#D94A4A"] },
    },
    screens: {
      xxs: "375px",
      xs: "425px",
      sm: "640px",
      exmd: "760px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
