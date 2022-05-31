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
         viewBox={viewBox}
         className={className}>
         
         <path
            fill={fill}
            fillOpacity={fillOpacity}
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M1.5 13C1.5 6.64873 6.64873 1.5 13 1.5C19.3513 1.5 24.5 6.64873 24.5 13C24.5 19.3513 19.3513 24.5 13 24.5C6.64873 24.5 1.5 19.3513 1.5 13Z'
            clipRule='evenodd'></path>
         <path
            fill={fill}
            fillOpacity={fillOpacity}
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M8.75 9.75C8.75 7.40279 10.6528 5.5 13 5.5C15.3472 5.5 17.25 7.40279 17.25 9.75C17.25 12.0972 15.3472 14 13 14C10.6528 14 8.75 12.0972 8.75 9.75Z'
            clipRule='evenodd'></path>
         <path
            fill={fill}
            fillOpacity={fillOpacity}
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M19.314 19.5C18.1595 17.057 15.7007 15.5 13 15.5C10.2993 15.5 7.84045 17.057 6.686 19.5'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   fill: '#fff',
   stroke: '#000',
   strokeWidth: '1.5',
   width: '26',
   height: '26',
   viewBox: '0 0 26 26',
   fillOpacity: '1',
}

export default Icon
