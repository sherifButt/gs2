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
            d='M1.75 19.8727C1.75 15.4978 5.27559 11.9584 9.61576 11.9584C13.9559 11.9584 17.4815 15.4978 17.4815 19.8727C17.4815 24.2476 13.9559 27.7869 9.61576 27.7869C5.27558 27.7869 1.75 24.2476 1.75 19.8727Z'
            clipRule='evenodd'></path>
         <path
            fill={fill}
            fillOpacity='0.25'
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M7.13934 10.1275C7.13934 5.75216 10.6631 2.21322 15.0001 2.21322C19.3371 2.21322 22.8609 5.75216 22.8609 10.1275C22.8609 14.5028 19.3371 18.0417 15.0001 18.0417C10.6631 18.0417 7.13934 14.5028 7.13934 10.1275Z'
            clipRule='evenodd'></path>
         <path
            fill={fill}
            fillOpacity='0.25'
            fillRule='evenodd'
            stroke={stroke}
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={strokeWidth}
            d='M12.5188 19.8727C12.5188 15.4978 16.0444 11.9584 20.3845 11.9584C24.7247 11.9584 28.2503 15.4978 28.2503 19.8727C28.2503 24.2476 24.7247 27.7869 20.3845 27.7869C16.0443 27.7869 12.5188 24.2476 12.5188 19.8727Z'
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
