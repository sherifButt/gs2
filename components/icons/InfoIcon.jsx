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
            d='M2 13C2 6.92487 6.92487 2 13 2C19.0751 2 24 6.92487 24 13C24 19.0751 19.0751 24 13 24C6.92487 24 2 19.0751 2 13Z'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.5 18.0098H14C13.448 18.0098 13 17.5618 13 17.0098V10.5098C13 10.2338 12.776 10.0098 12.5 10.0098H11'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12.74 7.5C12.602 7.5 12.49 7.612 12.49 7.75C12.49 7.888 12.602 8 12.74 8C12.878 8 12.99 7.888 12.99 7.75C12.99 7.612 12.878 7.5 12.74 7.5'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   viewBox: '0 0 26 26',
}

export default Icon
