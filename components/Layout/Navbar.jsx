import React from 'react'

const navigation = [
   { name: 'Solutions', href: '#' },
   { name: 'Pricing', href: '#' },
   { name: 'Docs', href: '#' },
   { name: 'Company', href: '#' },
]

const Navbar = () => {
   return (
      <header className='sticky top-0 bg-indigo-200 z-50'>
         <nav
            className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
            aria-label='Top'>
            Navbar
         </nav>
      </header>
   )
}

export default Navbar
