/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "16px",
        lg: "32px",
        xl: "0px",
      },
      screens: {
        DEFAULT: "360px",
        sm: "360px",
        md: "767px",
        lg: "1024px",
        xl: "1170px",
      },
    },
    extend: {
      colors: {
        primary: "#f4e041",
        background: "#f8f8f8",
        "black-87": "rgba(0, 0, 0, 0.87)",
        secondary: "#00bdd3",
      },
    },
  },
  plugins: [],
};
