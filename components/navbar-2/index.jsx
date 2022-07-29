import React, { useState, useEffect } from 'react'
// Redux
import { useSelector,useDispatch } from 'react-redux'
import { selectCurrentAuth } from '../../features/auth/authSlice'
import { useLoadUserQuery } from '../../features/user/userApiSlice'
import { setUser } from '../../features/user/userSlice'

import NavbarIn from './NavbarIn'
import NavbarOut from './NavbarOut'

const Navbar = ( { className } ) => {
   const dispatch = useDispatch()
   const {data} =  useLoadUserQuery()
   
   const { token } = useSelector( selectCurrentAuth )
   
   useEffect(() => {
      // loadUser()
      dispatch( setUser( data ) )
      console.log( 'loadUser', data )
   }, [ data ] )
   
   return token ? (
      <div>
         <NavbarIn className={className} />
      </div>
   ) : (
      <div>
         <NavbarOut className={className} />
      </div>
   )
}

export default Navbar
