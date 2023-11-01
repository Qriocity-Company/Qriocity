/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        RedHat: ["Red Hat Text", "sans-serif"],
      },
    },
  },
  plugins: [],
};
