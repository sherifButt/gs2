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
            d='M24.5 24H1.5'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M11.5 21C10.9477 21 10.5 20.5523 10.5 20V3C10.5 2.44771 10.9477 2 11.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3V20C15.5 20.5523 15.0523 21 14.5 21H11.5Z'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3 21C2.44772 21 2 20.5523 2 20V10C2 9.44772 2.44772 9 3 9H6C6.55228 9 7 9.44772 7 10V20C7 20.5523 6.55228 21 6 21H3Z'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M20 21C19.4477 21 19 20.5523 19 20V13C19 12.4477 19.4477 12 20 12H23C23.5523 12 24 12.4477 24 13V20C24 20.5523 23.5523 21 23 21H20Z'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   viewBox: '0 0 26 26',
}

export default Icon
