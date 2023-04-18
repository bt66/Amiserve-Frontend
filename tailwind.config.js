/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-light-purple' : '#5715B1',
        'bg-dark-purple': '#1F004F',

      },
    },
    fontFamily: {
      francois_one : ['Francois One'],
      poppins: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}
