import { useEffect, useState } from 'react'
import { CheckCircleIcon, XIcon, XCircleIcon } from '@heroicons/react/solid'

export default function AlertWithDismissButton(props) {
    const [ alert, setAlert ] = useState( { ...props } )
    const { isAlert, isSuccess, message, description } = alert
    const [toggleAlert,setToggleAlert]=useState(isAlert)
   useEffect(() => {
      setAlert({ ...props })
   }, [{ ...props }])
   return (
      <>
         {toggleAlert && (
            <div
               className={`rounded-md border p-4  ${
                  isSuccess
                     ? 'bg-green-50  border-green-400'
                     : 'bg-red-50 border-red-400'
               }`}>
               <div className='flex'>
                  <div className='flex-shrink-0'>
                     {isSuccess ? (
                        <CheckCircleIcon
                           className='h-5 w-5 text-green-400'
                           aria-hidden='true'
                        />
                     ) : (
                        <XCircleIcon
                           className='h-5 w-5 text-red-400'
                           aria-hidden='true'
                        />
                     )}
                  </div>
                  <div className='ml-3'>
                     <p
                        className={`text-sm font-medium ${
                           isSuccess ? 'text-green-800' : 'text-red-800'
                        }`}>
                        {message}
                     </p>
                  </div>
                  <div className='ml-auto pl-3'>
                     <div className='-mx-1.5 -my-1.5'>
                        <button
                           type='button'
                           className={`inline-flex  rounded-md p-1.5 ${
                              isSuccess
                                 ? 'focus:ring-green-600 text-green-500 bg-green-50 hover:bg-green-100 focus:ring-offset-green-50'
                                 : 'focus:ring-red-600 text-red-500 bg-red-50 hover:bg-red-100 focus:ring-offset-red-50'
                           }  focus:outline-none focus:ring-2 focus:ring-offset-2  `}>
                           <span className='sr-only'>Dismiss</span>
                           <XIcon
                              className='h-5 w-5'
                              aria-hidden='true'
                              onClick={() => setToggleAlert(!toggleAlert)}
                           />
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   )
}

AlertWithDismissButton.defaultProps = {
   isAlert: false,
   isSuccess: true,
   message: 'Successfully Logged in!',
   description: 'Anyone with a link can now view this page.',
}
