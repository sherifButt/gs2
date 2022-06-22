import React from 'react'
import PostLastUpdate from '../../components/PostLastUpdate1'
import RightSidebar from '../../components/right-sidebar/right-sidebar-1'
import HomePage from '../../components/Home'
const Discover = () => {
   return (
      <>
         {/* <HomePage/> */}
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
         <PostLastUpdate />
      </>
   )
}

Discover.layout = 'L5'
Discover.rightSidebar = RightSidebar
export default Discover
