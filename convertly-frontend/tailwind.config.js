/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        markpro: "'markpro','Arial',sans-serif",
      },
      colors: {
        white: "#F9F9F9",
        primary: "#ff4655",
        black: "#111111",
        pop: "#89CFF0",
        /* gray: "#E0E0E0", */
        /* primary: "#22C55E",*/
      },

      //font-sizes
    },
  },
  plugins: [require("tailwind-scrollbar-hide"), require("tailwind-scrollbar")],
};
