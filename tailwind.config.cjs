/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,svelte}"],
  theme: {
    colors: {
      white: "hsl(0,0%,100%)",
      cyan: {
        100: "hsl(183, 100%, 15%)",
        200: "hsl(183, 78%, 24%)",
        400: "hsl(186, 14%, 43%)",
        600: "hsl(184, 14%, 56%)",
        800: "hsl(185, 41%, 84%)",
        1000: "hsl(189, 41%, 97%)",
      },
    },
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace"],
      },
      fontSize: {
        xs: "0.8125rem",
        base: "1rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
        "5xl": "3rem",
      },
    },
  },
  plugins: [],
};
