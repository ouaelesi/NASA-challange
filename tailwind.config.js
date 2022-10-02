/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: "#080447",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "ping-slow": "ping 3s linear infinite",
        "ping-slowest": "ping 8s linear infinite",
        "ping-normal": "ping 12s linear infinite",
      },
    },
  },
  plugins: [],
};
