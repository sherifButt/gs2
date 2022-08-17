import { Fragment, useEffect, useState, useCallback } from 'react'
import { Transition } from '@headlessui/react'
// Icons
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { motion, AnimatePresence } from 'framer-motion'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../../features/modalSlice'
import {
   removeNotification,
   deleteAllNotifications,
} from '../../features/notificationSlice'

// b point
   const useMediaQuery = width => {
      const [targetReached, setTargetReached] = useState(false)

      const updateTarget = useCallback(e => {
         if (e.matches) {
            setTargetReached(true)
         } else {
            setTargetReached(false)
         }
      }, [])

      useEffect(() => {
         const media = window.matchMedia(`(max-width: ${width}px)`)
         media.addListener(updateTarget)

         // Check on mount (callback is not called until a change occurs)
         if (media.matches) {
            setTargetReached(true)
         }

         return () => media.removeListener(updateTarget)
      }, [])

      return targetReached
   }

export default function NotificationsGroupedStack() {
   // Global State
   let notifications = useSelector(state => state.notification)
   const dispatch = useDispatch()
   
    const isBreakpoint = useMediaQuery(768)
if(isBreakpoint) notifications = notifications.slice(-1)
   return (
      <>
         {/* Global notification live region, render this permanently at the end of the document */}
         <div
            aria-live='assertive'
            className='fixed right-0 top-0 md:top-auto md:bottom-0 w-full  md:w-[30rem] md:left-160 flex flex-row justify-end items-end px-2 py-2 pointer-events-none md:p-6 md:items-start z-30'>
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <motion.ol className='w-full flex flex-col items-center space-y-4 md:items-end'>
               <AnimatePresence exitBeforeEnter={isBreakpoint}>
                  {notifications.map((item, i) => (
                     <motion.li
                        layoutId={item.id}
                        key={item.id}
                        index={i + '_'}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 500, opacity: 0 }}
                        className='w-full '>
                        <div className=' md:max-w-sm w-full  bg-neutral-100/60 shadow-lg rounded-2xl pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60  border-gray-200'>
                           <div className='p-3'>
                              <div className='flex items-center '>
                                 <div className='flex-shrink-0 '>
                                    {item.isSuccess ? (
                                       <CheckCircleIcon
                                          className='h-8 w-8 text-army-500 '
                                          aria-hidden='true'
                                       />
                                    ) : (
                                       <XCircleIcon
                                          className='h-8 w-8 text-red-400'
                                          aria-hidden='true'
                                       />
                                    )}
                                 </div>
                                 <div className='ml-3 w-0 flex-1 pt-0.5'>
                                    <p className='text-md  font-medium text-gray-900'>
                                       {item.message}
                                    </p>
                                    <p className='mt-1 leading-tight text-md md:text-sm text-gray-600'>
                                       {item.description || '.'}
                                    </p>
                                 </div>
                                 <div className='ml-4 flex-shrink-0 flex flex-col items-end justify-between'>
                                    <button
                                       type='button'
                                       className='bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                       onClick={() => {
                                          dispatch(removeNotification(i))
                                       }}>
                                       <span className='sr-only'>Close</span>
                                       <XIcon
                                          className='h-5 w-5'
                                          aria-hidden='true'
                                       />
                                    </button>{' '}
                                    {notifications.length > 2 && (
                                       <button
                                          type='button'
                                          className='bg-transparent rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                                          onClick={() => {
                                             dispatch(deleteAllNotifications())
                                          }}>
                                          <span className='sr-only'>
                                             Close All
                                          </span>
                                          <span className='text-xs font-thin'>
                                             clear all
                                          </span>
                                       </button>
                                    )}
                                 </div>
                              </div>
                           </div>
                        </div>
                     </motion.li>
                  ))}
               </AnimatePresence>
            </motion.ol>
         </div>
      </>
   )
}

NotificationsGroupedStack.defaultProps = {
   isNotification: false,
   isSuccess: true,
   message: 'Successfully Logged ins!',
   description: 'Anyone with a link can now view this page.',
}
