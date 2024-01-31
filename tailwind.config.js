/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customGreen: '#393c41',
        customRed: '#e74c3c',
        customBlue: '#3498db',
      },
    },
  },
  plugins: [],
}

