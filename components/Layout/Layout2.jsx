import React from 'react'
import Head from './Header'
import Header from './Nav'

const Layout = ({children}) => {
   return (
      <div>
         <Head />
         <Header />
         {children}
      </div>
   )
}

export default Layout
