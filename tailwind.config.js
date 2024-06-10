/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./docs/*.{html,js}"],
    theme: {
      extend: {
        colors: {
            primary: '#0d0c11',
            gold: '#a37b39',
        }
      },
      fontFamily: {
        inter: 'Inter, sans-serif'
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 700,
        extrabold: 800,
        black: 900
      }
    },
    plugins: [],
}