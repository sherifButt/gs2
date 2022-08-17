import React from 'react'

function Icon({ className, viewBox }) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox={viewBox}
         width={26}
         height={26}
         fill='white'
         strokeWidth={1.5}
         stroke='black'
         className={className}>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 20.5C2.17157 20.5 1.5 19.8284 1.5 19V7C1.5 6.17157 2.17157 5.5 3 5.5H23C23.8284 5.5 24.5 6.17157 24.5 7V19C24.5 19.8284 23.8284 20.5 23 20.5H3Z'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.5 9.5L13 15L4.5 9.5'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 17L8 15'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21.5 17L18 15'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   viewBox: '0 0 26 26',
}

export default Icon
