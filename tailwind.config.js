/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
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
        "secondary-400": "#60AAB3",
        "secondary-500": "#358D99",
        "secondary-600": "#25646A",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        oleo: ["Oleo Script", "sans-serif"],
        rocknroll: ["RocknRoll One", "sans-serif"],
      },
      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },

      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
