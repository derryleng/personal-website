/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,ts,svelte}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        noto: ["Noto Serif", "serif"],
      },
    },
  },
  plugins: [],
};
