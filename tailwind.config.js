/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      pub: ["Public Sans"],
    },
    extend: {
      colors: {
        dBlue: "hsl(233, 26%, 24%)",
        lGreen: "hsl(136, 65%, 51%)",
        bCyan: "hsl(192, 70%, 51%)",
      },
    },
  },
  plugins: [],
};
