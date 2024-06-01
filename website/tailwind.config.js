/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "founders-grotesk": ['"Founders Grotesk X-Cond SmBd"', "sans-serif"],
      },
    },
  },
  plugins: [],
};

