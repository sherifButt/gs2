import React from 'react'

function Icon ( {
   className,
   fill,
   stroke,
   strokeWidth,
   width,
   height,
   viewBox,
   fillOpacity,
}) {
   return (
      <svg
         
         xmlns='http://www.w3.org/2000/svg'
         width={width}
         height={height}
         fill="none"
         viewBox={ viewBox }
      className={className}
      >
         <path
            fill={fill}
            fillOpacity={fillOpacity}
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M0.5 5C0.5 2.51472 2.51472 0.5 5 0.5C7.48528 0.5 9.5 2.51472 9.5 5C9.5 7.48528 7.48528 9.5 5 9.5C2.51472 9.5 0.5 7.48528 0.5 5Z'
            clipRule='evenodd'></path>
         
      </svg>
   )
}

Icon.defaultProps = {
   fill: '#FF2929',
   stroke: '#FDD430',
   strokeWidth: '1',
   width: '10',
   height: '10',
   viewBox: '0 0 10 10',
   fillOpacity: '1',
}

export default Icon
