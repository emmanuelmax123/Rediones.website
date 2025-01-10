/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        mainfont: ["Quicksand", "serif"],
        secfont: ["Poppins", "serif"],
        subfont: ["Montserrat", "serif"],
      },
      colors: { mainColor: ["#D94A4A"] },
    },
  },
  plugins: [],
};
