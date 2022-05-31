import React from 'react'
import { useSelector } from 'react-redux'

const AvatarUser = ({ className, image }) => {
   const user = useSelector(state => state.user)
   if (!image) image = user.image
   return (
      <img
         className={`block rounded-full w-12 border-2 border-white ${className}`}
         src={image}
      />
   )
}

export default AvatarUser
