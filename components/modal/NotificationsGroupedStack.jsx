import { Fragment, useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'
// Icons
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/outline'
import { XIcon } from '@heroicons/react/solid'
import { motion, AnimatePresence } from 'framer-motion'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { hideNotification } from '../../redux/features/modalSlicer'
import {
   removeNotification,
   deleteAllNotifications,
} from '../../redux/features/notificationSlicer'

export default function NotificationsGroupedStack() {
   // Global State
   const notifications = useSelector(state => state.notification)
   const dispatch = useDispatch()

   
   return (
      <>
         {/* Global notification live region, render this permanently at the end of the document */}
         <div
            aria-live='assertive'
            className='fixed right-0 top-0 sm:top-auto sm:bottom-0 w-full  sm:w-[30rem] sm:left-160 flex flex-row justify-end items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-30'>
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <motion.ol className='w-full flex flex-col items-center space-y-4 sm:items-end'>
               <AnimatePresence>
                  {notifications.map((item, i) => (
                     <motion.li
                        layoutId={item.id}
                        key={item.id}
                        index={i}
                        initial={{ x: 200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: 500, opacity: 0 }}
                        className='w-full'>
                        <div className='max-w-sm w-full bg-neutral-100 shadow-lg rounded-xl pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200'>
                           <div className='p-4'>
                              <div className='flex items-start'>
                                 <div className='flex-shrink-0'>
                                    {item.isSuccess ? (
                                       <CheckCircleIcon
                                          className='h-6 w-6 text-green-400 '
                                          aria-hidden='true'
                                       />
                                    ) : (
                                       <XCircleIcon
                                          className='h-6 w-6 text-red-400'
                                          aria-hidden='true'
                                       />
                                    )}
                                 </div>
                                 <div className='ml-3 w-0 flex-1 pt-0.5'>
                                    <p className='text-sm font-medium text-gray-900'>
                                       {item.message}
                                    </p>
                                    <p className='mt-1 text-sm text-gray-500'>
                                       {item.description}
                                    </p>
                                 </div>
                                 <div className='ml-4 flex-shrink-0 flex flex-col items-end justify-between'>
                                    <button
                                       type='button'
                                       className='bg-neutral-100 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
                                          className='bg-neutral-100 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
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
