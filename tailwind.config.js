/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F9F7F7",
        secondary: "#252A34",
        neutral: "#FFFFFF",
        accent: "#00ADB5",
      },
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
    },
  },
  plugins: [],
};
