import React from 'react'
// Redux
import { useSelector } from 'react-redux'
import { selectCurrentAuth } from '../../features/auth/authSlice'
import NavbarIn from './NavbarIn'
import NavbarOut from './NavbarOut'

const Navbar = ({ className }) => {
   const {token} = useSelector(selectCurrentAuth)
   return (
      token ? (
            <div>
               <NavbarIn className={className} />
            </div>
         ) : (
            <div>
               <NavbarOut className={className} />
            </div>
         )
   )
}

export default Navbar
