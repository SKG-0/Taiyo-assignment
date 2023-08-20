/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "custom-sm": "400px",
        "custom-md": "600px",
        "custom-lg": "800px",
      },
    },
  },
  plugins: [],
};
