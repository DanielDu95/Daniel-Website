/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#BBAB94",
        "gray-50": "#342F33",
        "primary-100": "",
        "primary-400": "#F28D70",
        "primary-500": "#E26B46",
        "primary-600": "#B25336",
        "secondary-400": "",
        "secondary-500": "#358D99",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        oleo: ["Oleo Script", "sans-serif"],
        rocknroll: ["RocknRoll One", "sans-serif"],
      },
      backgroundImage: () => ({
        "gradient-yellowred":
          "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('./assets/something.png')",
      }),
      content: {
        evolvetext: "url('./assets/something.png')",
        name: "url('./assets/name.png')",
      },
    },
  },
  plugins: [],
};
