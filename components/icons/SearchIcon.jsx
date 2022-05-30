import React from 'react'

function Icon({
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
         fill={fill}
         viewBox={viewBox}>
         <path
            fill={fill}
            fillOpacity={fillOpacity}
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M1.53852 9.73223C1.53852 5.0582 5.32757 1.26915 10.0016 1.26915C14.6756 1.26915 18.4647 5.0582 18.4647 9.73223C18.4647 14.4063 14.6756 18.1953 10.0016 18.1953C5.32757 18.1953 1.53852 14.4063 1.53852 9.73223Z'
            clipRule='evenodd'></path>
         <path
            fill={fill}
            fillOpacity={fillOpacity}
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M21.0022 20.7306L15.9885 15.7169'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   fill: '#fff',
   stroke: '#FFA841',
   strokeWidth: '1',
   width: '23',
   height: '22',
   viewBox: '0 0 23 22',
   fillOpacity: '1',
}

export default Icon
