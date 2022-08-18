import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import { overrideTailwindClasses } from 'tailwind-override'


/**
 *
 * @param {Object} className classes from parent component
 * @param {string} profileImage profileImage path
 * @param {boolean} online user is online
 * @param {boolean} needHelp user need help
 * @param {boolean} streaming user is streaming an activity
 * @returns User Avatar with online notification
 */
const AvatarUser = ({
   className,
   profileImage,
   forename,
   surname,
   online,
   needHelp,
   streaming,
}) => {
   // Global State : redux
   const globalUser = useSelector( selectCurrentUser )
   console.log('globalUser', globalUser)
   // Local State
   const [user, setUser] = useState({
      className: className || globalUser.className,
      profileImage: profileImage || globalUser.profileImage,
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
         profileImage,
         forename,
         surname,
         online,
         needHelp,
         streaming,
      })
   }, [className, profileImage, forename, surname, online, needHelp, streaming])

   // Refresh Local state based on Global state
   useEffect(() => {
      setUser({
         profileImage: globalUser.profileImage,
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
            {/* User profileImage */}

            {user.profileImage ? (
               <img
                  className={overrideTailwindClasses(`-z-50 block rounded-full w-12 border-2 border-white ${className}`)}
                  src={user.profileImage}
               />
            ) : (
               <div
                  className={overrideTailwindClasses(`m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-green-500 text-xl text-white uppercase ${className}`)}>
                  {user.forename?.slice(0, 1)}
                  {user.surname?.slice(0, 1)}
               </div>
            )}
            {/* /User profileImage */}
            {/* Notification bubble  */}
            <span
               className={`bottom-0 left-0 absolute z-0  w-1/5 h-1/5 border-2 border-transparent rounded-full
                   ${user.online && 'border-white bg-green-400'}
                   ${user.needHelp && 'border-white bg-red-400'}
                   
                   `}></span>
            <span
               className={`bottom-0 left-0 absolute z-0  w-1/5 h-1/5 border-2 border-transparent rounded-full
                   
                   ${
                      user.online & user.streaming &&
                      ' bg-green-400 animate-ping'
                   }
                   ${
                      user.needHelp & user.streaming &&
                      ' bg-red-400 animate-ping'
                   }
                   `}></span>
            {/* /Notification bubble  */}
         </div>
      </div>
   )
}

export default AvatarUser
