import React from 'react'

function Icon({ className,viewBox }) {
   return (
      <svg
         xmlns='http://www.w3.org/2000/svg'
         viewBox={viewBox}
         width={30}
         height={30}
         fill='white'
         strokeWidth={1.5}
         stroke='black'
         className={className}>
         <path
            
            
            fillRule='evenodd'
            
            strokeLinecap='round'
            strokeLinejoin='round'
            
            d='M15.9003 1.5C11.3306 1.49296 7.10969 3.96757 4.88621 7.96356C2.66273 11.9596 2.78247 16.8477 5.19965 20.7299L1.49933 28.5L9.26978 24.7998C13.8118 27.6149 19.6358 27.258 23.7999 23.9088C27.9651 20.5597 29.5617 14.9472 27.7843 9.90757C26.0081 4.86796 21.2442 1.49766 15.9003 1.5Z'
            clipRule='evenodd'></path>
         <path
            
            
            fillRule='evenodd'
            
            strokeLinecap='round'
            strokeLinejoin='round'
            
            d='M11.1733 12.1001C11.3113 12.1001 11.4233 12.2121 11.4233 12.3501C11.4233 12.4881 11.3113 12.6001 11.1733 12.6001C11.0353 12.6001 10.9233 12.4881 10.9233 12.3501C10.9233 12.2121 11.0353 12.1001 11.1733 12.1001'
            clipRule='evenodd'></path>
         <path
            
            
            fillRule='evenodd'
            
            strokeLinecap='round'
            strokeLinejoin='round'
            
            d='M20.5974 12.1001C20.7353 12.1001 20.8474 12.2121 20.8474 12.3501C20.8474 12.4881 20.7353 12.6001 20.5974 12.6001C20.4594 12.6001 20.3473 12.4881 20.3473 12.3501C20.3473 12.2121 20.4594 12.1001 20.5974 12.1001'
            clipRule='evenodd'></path>
         <path
            
            
            fillRule='evenodd'
            
            strokeLinecap='round'
            strokeLinejoin='round'
            
            d='M18.4118 16.438C18.4118 17.819 17.2928 18.938 15.9118 18.938C14.5308 18.938 13.4118 17.819 13.4118 16.438H18.4118Z'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   viewBox: '0 0 30 30'
}

export default Icon
