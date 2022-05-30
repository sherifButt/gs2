import React from 'react'

function Icon({ fill, stroke, strokeWidth }) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         width='30'
         height='30'
         fill='none'
         viewBox='0 0 30 30'>
         <path
            fill={fill}
            fillOpacity='0.25'
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M14.446 2.634a.594.594 0 011.112 0l3.006 8.511h8.49a.594.594 0 01.386 1.044l-7.095 5.873 2.97 8.908a.594.594 0 01-.914.665L15 22.214l-7.403 5.42a.594.594 0 01-.911-.664l2.97-8.908L2.56 12.19a.592.592 0 01.386-1.044h8.49l3.01-8.51z'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   fill: '',
   stroke: '#000',
   strokeWidth: '1.5',
}

export default Icon
