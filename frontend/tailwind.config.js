/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: "#E11D48",
        gray: "#171717",
      },
      backgroundImage: {
        "main-grad":
          "linear-gradient(180deg, rgba(0,0,0,0.7) 0%, rgba(0, 195, 255, 0.5)  100%)",
      },
    },
  },
  plugins: [],
};
