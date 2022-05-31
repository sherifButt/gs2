import React from 'react'
import { useSelector } from 'react-redux'

const AvatarUser = ( { className, image } ) => {
    const user={};
    if(!image)  image = useSelector(state => state.user.image)
  return (
     <img
        className={`block rounded-full w-12 border-2 border-white ${className}`}
        src={image}
     />
  )
}

export default AvatarUser