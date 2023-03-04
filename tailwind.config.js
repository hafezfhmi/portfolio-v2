/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#ffe663",
        "main-red": "#FF6363",
        "main-green": "#8FFF9B",
        "main-blue": "#63FFFF",
        "main-purple": "#928FFF",
      },
    },
  },
  plugins: [],
};
