/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#04081A",
        primary: "#FFFFFF",
        secondary: {
          100: "#D1D5E7",
          200: "#D4DDFF",
        },
        tertiary: "#262F58",
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
      },
      width: {
        "main-content": "calc(100vw - 2rem)",
      },
    },
  },
  plugins: [],
};
