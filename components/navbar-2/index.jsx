import React from 'react'
// Redux
import { useSelector } from 'react-redux'
import NavbarIn from './NavbarIn'
import NavbarOut from './NavbarOut'

const Navbar = ({ className }) => {
   const { auth } = useSelector(state => state.auth)
   return auth ? (
      <>
         <NavbarIn className={className} />
      </>
   ) : (
      <>
         <NavbarOut className={className} />
      </>
   )
}

export default Navbar
