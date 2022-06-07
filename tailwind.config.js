
const defaultTheme = require( 'tailwindcss/defaultTheme' )
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
   carkMode: 'class',
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
         boxShadow: {
            top: [
               '0 -35px 30px rgba(0, 0, 0, 0.25)',
               '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            ],
         },
         screens: {
            xs: '320px',
         },
         fontFamily: {
            sans: ["'JK Grotesk'", ...defaultTheme.fontFamily.sans],
         },
      },
   },
   plugins: [
      require('@tailwindcss/line-clamp'),
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
      require('tailwind-scrollbar-hide'),
   ],
}