/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        vbk: {
          blue: "#1565C0",
          "blue-dark": "#0d47a1",
          dark: "#080f1e",
          "dark-light": "#1a2744",
          accent: "#D4FF00",
          "accent-dark": "#b8dd00",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
