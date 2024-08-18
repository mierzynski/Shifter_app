/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1e",
        grey: "#444446",
        blue: "#007aff",
        indigo: "#5856d6",
      },
    },
  },
  plugins: [],
};
