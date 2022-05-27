
const defaultTheme = require( 'tailwindcss/defaultTheme' )
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

module.exports = {
  carkMode:"class",
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      extend: {
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
      require('tailwind-scrollbar-hide')
   ],
}