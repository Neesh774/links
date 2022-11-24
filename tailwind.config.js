/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        gradient: "gradient 30s ease infinite",
      },
      colors: {
        gradient: {
          orange: "#ee7752",
          pink: "#e73c7e",
          blue: "#23a6d5",
          green: "#23d5ab",
        },
      },
      backgroundSize: {
        gradient: "400% 400%",
      },
    },
  },
  plugins: [],
};
