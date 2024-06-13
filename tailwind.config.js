/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "derk-bg":"141c2e",
        "dark-grey":"#1e2b48",
        "dark-blue":"#007afd"
      },
    },
  },
  plugins: [],
};
