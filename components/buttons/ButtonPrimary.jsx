import React, { useEffect, useState } from 'react'


const ButtonPrimary = ({
   text,
   isLoading,
   actionHandler,
   bgColor,
   textColor,
   icon,
   idle,
   action,
   isSuccess,
   success,
   error,
   className,
} ) => {
   const [ _className, setClassName ] = useState( className )
   useEffect( () => { setClassName(className)} ,[className])
   return (
      <>
         <button
            disabled={isLoading}
            onClick={actionHandler}
            className={`inline-flex justify-center items-center w-full py-3 ${
               isLoading
                  ? `${bgColor} shadow-none text-white`
                  : `bg-yellow-400 hover:scale-105 active:scale-100 hover:shadow-md ${textColor}`
            } rounded-xl ease-in-out duration-300 active:shadow-none text-center  font-semibold uppercase px-8 ${_className}`}>
            {isLoading ? (
               <div className='inline-flex'>
                    
                         <svg
                     className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                     xmlns='http://www.w3.org/2000/svg'
                     fill='none'
                     viewBox='0 0 24 24'>
                       
                     <circle
                        className='opacity-25'
                        cx='12'
                        cy='12'
                        r='10'
                        stroke='currentColor'
                        strokeWidth='4'></circle>
                     <path
                        className='opacity-75'
                        fill='currentColor'
                        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                        
                       
                 
                  <p>{action}</p>
               </div>
            ) : isSuccess ? (
               success
            ) : (
               text || idle
            )}
         </button>
      </>
   )
}

ButtonPrimary.defaultProps = {
   
   isLoading: false,
 
   bgColor: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500',
   textColor: 'text-black',
   icon: '',
   isSuccess:false,
   idle: 'Sign in',
   action: 'processing...',
   success: 'Done!',
   error: 'Try again!',
}
export default ButtonPrimary
