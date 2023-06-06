/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      lg: { max: "1279px" },
    },
    extend: {
      colors: {
        violet: "#9D71FD",
        violetDark: "#1A0745",
        violetLight: "#5F517D",
        secondaryWhite: "#E8E6EC",
        whiteBackground: "#F2EFFE",
        purple: "#543E81",
        gray: "#A39CB5",
      },
      fontSize: {
        xs: "14px",
        base: "16px",
      },
    },
  },
  plugins: [],
};
