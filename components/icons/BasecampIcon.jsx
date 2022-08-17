import React from 'react'

function Icon({ className, viewBox }) {
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
            d='M17.3786 2.25006L2.51613 25.3237C2.39723 25.5085 2.3889 25.7437 2.49235 25.9369C2.59698 26.1301 2.79911 26.2513 3.0167 26.2501H26.9857C27.2021 26.2501 27.4018 26.1301 27.5065 25.9357C27.6099 25.7425 27.6016 25.5085 27.4827 25.3237L12.6226 2.25006'
            clipRule='evenodd'></path>
         <path
            fillRule='evenodd'
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M19.0013 26.242L15.4273 20.4379C15.3363 20.29 15.1753 20.2 15.0013 20.2C14.8273 20.2 14.6663 20.29 14.5753 20.4379L11.0013 26.242'
            clipRule='evenodd'></path>
      </svg>
   )
}

Icon.defaultProps = {
   viewBox: '0 0 30 30',
}

export default Icon
