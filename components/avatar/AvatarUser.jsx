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
const AvatarUser = ( { className, image, online, needHelp, streaming } ) => {
    
   const [userStatus, setUserStatus] = useState({ online, needHelp, streaming })
   
    useEffect( () => {
      setUserStatus({ online, needHelp, streaming })
    }, [ online, needHelp, streaming ] )
    
   const user = useSelector(state => state.user)
   if (!image) image = user.image
   
    return (
      <div>
          <div className='relative'>
             {/* User image */}
             <img
                className={`block rounded-full w-12 border-2 border-white ${className}`}
                src={image}
             />
             {/* /User image */}
             {/* Notification bubble  */}
             <span
                class={`bottom-0 right-0 absolute  w-1/4 h-1/4 border-2 border-transparent rounded-full
                ${online && 'border-white bg-green-400'}
                ${needHelp && 'border-white bg-red-400'}
                
                `}></span>
             <span
                class={`bottom-0 right-0 absolute  w-1/4 h-1/4 border-2 border-transparent rounded-full
                
                ${online & streaming && ' bg-green-400 animate-ping'}
                ${needHelp & streaming && ' bg-red-400 animate-ping'}
                `}></span>
             {/* /Notification bubble  */}
          </div>
      </div>
   )
}

export default AvatarUser
