const defaultTheme = require('tailwindcss/defaultTheme')
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
         backgroundImage: {
            'menu-texture': "url('/assets/images/navbar-shade.png')",
            'empty-texture': "url('/assets/images/16x16.png')",
            'button-texture':
               "url('/assets/images/givestar-bg-element-03.png')",
         },
         colors: {
            river: {
               DEFAULT: '#495360',
               50: '#A6AFBB',
               100: '#9AA5B2',
               200: '#8390A1',
               300: '#6C7B8E',
               400: '#5B6777',
               500: '#495360',
               600: '#313740',
               700: '#191C20',
               800: '#000000',
               900: '#000000',
            },
            army: {
               50: '#aedbb4',
               100: '#a4d1aa',
               200: '#9ac7a0',
               300: '#90bd96',
               400: '#86b38c',
               500: '#7ca982',
               600: '#729f78',
               700: '#68956e',
               800: '#5e8b64',
               900: '#54815a',
            },
         },
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
       require('@tailwindcss/forms'),
   ],
}
