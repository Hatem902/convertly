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
        primary600: "#ff1f31",
        black: "#111111",
        pop: "#89CFF0",
        pop600: "#60BEEB",
        /* gray: "#E0E0E0", */
        /* primary: "#22C55E",*/
      },
      screens: {
        "2xl": "1540px",
        // => @media (min-width: 992px) { ... }
      },

      //font-sizes
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
    require("daisyui"),
  ],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
