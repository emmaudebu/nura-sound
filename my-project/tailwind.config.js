/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        Herobg: "url('../src/assets/images/Hero.png')",
        "device-bg": "url('./src/assets/images/cock.png')",
        Blurs: "url('../src/assets/images/blur.png')",
      },
    },
  },
  plugins: [],
};
