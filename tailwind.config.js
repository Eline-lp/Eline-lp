/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage:{
        "home": "url('/Cardapio/assets/bg.png')"
      }
    },
  },
  plugins: [],
}
