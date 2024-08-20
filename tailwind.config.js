/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#1c1c1e",
        gray: "#444446",
        gray_cassette: "#818181",
        blue: "#007aff",
        indigo: "#5856d6",
        red: "#EC5959",
      },
    },
  },
  plugins: [],
};
