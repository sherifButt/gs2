import React from 'react'

function Icon ( {
   className,
   viewBox,
}) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox={viewBox}
         width={10}
         height={10}
         fill='white'
         strokeWidth={1.5}
         stroke='black'
         className={className}>
         <path
            
            fillRule='evenodd'
          
            strokeLinecap='round'
            strokeLinejoin='round'
      
            d='M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5Z'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   
   viewBox: '0 0 10 10',
}

export default Icon
