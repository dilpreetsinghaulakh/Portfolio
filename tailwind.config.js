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
        background: "#FFFFFF",
        primary: "#000000",
        opposite: "#FFFFFF",
        secondary: {
          100: "#404664",
          200: "#314088",
        },
        tertiary: "#999999",
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
