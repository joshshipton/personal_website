
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    fontFamily: {
      Roboto: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      width: {
        '11/12': '91.67%',
      }
    },
  },
  plugins: [],
}

