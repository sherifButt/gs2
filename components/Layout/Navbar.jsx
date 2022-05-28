import React from 'react'

const Navbar = props => {
   return (
      <header {...props}>
         <nav
            className='w-full flex justify-between px-4 sm:px-6 lg:px-8 '
            aria-label='Top'>
            <div>Navbar</div>
            <div>Navbar</div>
            <div>Navbar</div>
            <div>Navbar</div>
            <div>Navbar</div>
         </nav>
      </header>
   )
}

export default Navbar
