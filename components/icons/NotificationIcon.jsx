import React from 'react'

function Icon({ className, viewBox }) {
   return (
      <div className={className}>
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
               d='M21.5 18.4745V11.9754C21.496 8.42596 19.287 5.25344 15.959 4.01762C15.723 2.56584 14.469 1.5 12.998 1.5C11.527 1.5 10.273 2.56584 10.037 4.01762C6.71 5.25244 4.501 8.42696 4.5 11.9754V18.4745C4.5 20.1312 3.157 21.474 1.5 21.474H24.5C22.843 21.474 21.5 20.1312 21.5 18.4745Z'
               clipRule='evenodd'></path>
            <path
               fillRule='evenodd'
               strokeLinecap='round'
               strokeLinejoin='round'
               d='M16 21.48C16 23.137 14.657 24.48 13 24.48C11.343 24.48 10 23.137 10 21.48'
               clipRule='evenodd'></path>
         </svg>
      </div>
   )
}

Icon.defaultProps = {
   viewBox: '0 0 26 26',
}

export default Icon
