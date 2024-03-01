/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      colors: {
        transparent: 'transparent',
        'primary': '#ffffff',
        'greenStart': '#AAFFA1',
        'greenEnd': '#15F400',
        'black': '#000000',
        'grey': '#151515',
        'text-grey': '#BFBFBF',
        'link-hover': '#DADDDB'
      },
      extend: {
        gridTemplateColumns: {
          '1/1': '50% 50%',
          '3/1': '66% 33%',
          '1/3': '33% 66%',
          '4/1': '80% 20%',
          '1/4': '20% 80%',
          '1/2/2': '20% 40% 40%',
          'nav-sm': '20% 4% 36% 40%',
          '1/2/1': '25% 50% 25%'
        },
        fontFamily: {
          'montserrat': ['"Montserrat"', 'sans-serif'],
          'inter': ['"Inter"', 'sans-serif']
        }
      },
    },
    plugins: [],
  }