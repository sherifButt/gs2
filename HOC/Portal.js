import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }) => {
   const [isPortal, setIsPort] = useState(false)
   useEffect(() => {
      setIsPort(true)

      return () => setIsPort(false)
   }, [children])
   return isPortal
      ? createPortal(children, document.querySelector('#portal'))
      : null
}

export default Portal
