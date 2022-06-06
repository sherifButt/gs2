import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

/**
 *
 * @param {Object} className classes from parent component
 * @param {string} image image path
 * @param {boolean} online user is online
 * @param {boolean} needHelp user need help
 * @param {boolean} streaming user is streaming an activity
 * @returns User Avatar with online notification
 */
const AvatarUser = ({
   className,
   image,
   forename,
   surname,
   online,
   needHelp,
   streaming,
}) => {
   // Global State : redux
   const globalUser = useSelector(state => state.user)
   // Local State
   const [user, setUser] = useState({
      className: className || globalUser.className,
      image: image || globalUser.image,
      forename: forename || globalUser.forename,
      surname: surname || globalUser.surname,
      online: online || globalUser.online,
      needHelp: needHelp || globalUser.needHelp,
      streaming: streaming || globalUser.streaming,
   })
   // Refresh props
   useEffect(() => {
      setUser({
         className,
         image,
         forename,
         surname,
         online,
         needHelp,
         streaming,
      })
   }, [className, image, forename, surname, online, needHelp, streaming])

   // Refresh Local state based on Global state
   useEffect(() => {
      setUser({
         image: globalUser.image,
         forename: globalUser.forename,
         surname: globalUser.surname,
         online: globalUser.online,
         needHelp: globalUser.needHelp,
         streaming: globalUser.streaming,
      })
   }, [globalUser])

   

   return (
      <div>
         <div className='relative'>
            {/* User image */}

            {user.image ? (
               <img
                  className={`-z-50 block rounded-full w-12 border-2 border-white ${className}`}
                  src={user.image}
               />
            ) : (
               <div className='m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase'>
                  {user.forename.slice(0, 1)}
                  {user.surname.slice(0, 1)}
               </div>
            )}
            {/* /User image */}
            {/* Notification bubble  */}
            <span
               className={`bottom-0 right-0 absolute z-0  w-1/5 h-1/5 border-2 border-transparent rounded-full
                   ${user.online && 'border-white bg-green-400'}
                   ${user.needHelp && 'border-white bg-red-400'}
                   
                   `}></span>
            <span
               className={`bottom-0 right-0 absolute z-0  w-1/5 h-1/5 border-2 border-transparent rounded-full
                   
                   ${user.online & user.streaming && ' bg-green-400 animate-ping'}
                   ${user.needHelp & user.streaming && ' bg-red-400 animate-ping'}
                   `}></span>
            {/* /Notification bubble  */}
         </div>
      </div>
   )
}

export default AvatarUser
