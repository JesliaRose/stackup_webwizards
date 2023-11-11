/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wishquire: {
          background: "#EAEDED",
          light_blue: "#232F3A",
          DEFAULT: "#131921",
          orange: "#FB8500",
          yellow: "#FFB703",
          darkblue: "#023047",
          blue: "#219EBC",
          lightblue: "#8ECAE6"
        }
      }
    },
  },
  plugins: [],
}
