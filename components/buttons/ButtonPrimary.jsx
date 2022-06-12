import React from 'react'

const ButtonPrimary = ({
   text,
   isLoading,
   actionHandler,
   bgColor,
   textColor,
   icon,
}) => {
   return (
      <div>
         <button
            disabled={isLoading}
            onClick={actionHandler}
            className={`flex flex-col justify-center items-center w-full py-4 ${
               isLoading ? { bgColor } + 'shadow-none' : 'bg-yellow-400'
            } rounded-xl hover:scale-105 ease-in-out duration-300 hover:shadow-md  active:scale-100 active:shadow-none`}>
            <p
               className={`block w-[3.90rem] text-center ${textColor}  font-semibold uppercase`}>
               {isLoading ? 'Loading...' : text}
            </p>
         </button>
      </div>
   )
}

ButtonPrimary.defaultProps = {
   text: 'SIGN UP',
   isLoading: false,
   actionHandler: e => alert('Sign Up'),
   bgColor: 'bg-gray-400',
   textColor: 'text-black',
   icon: '',
}
export default ButtonPrimary
