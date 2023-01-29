/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'plex-sans': ['"IBM Plex Sans"', 'sans-serif']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}