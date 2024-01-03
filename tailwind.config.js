/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        tableHeader: "30% 30% 30% 10%",
      },
      colors: {
        mainBlue: "#03045E",
        textGreen:"#046865",
        mainBackground:"#F2F7F7"
      },
    },
  },
  plugins: [],
};
