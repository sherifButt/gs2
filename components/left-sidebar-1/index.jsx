import React from 'react'
import Image from 'next/image'
import Footer from '../footer-1'
import VerticalMenu from '../v-menu-1'

const LeftSidebar = props => {
   return (
      <aside {...props}>
         {props.children}
         <div className='flex w flex-col justify-start h-full  '>
            <div className='flex flex-col justify-between h-full'>
               <div className='flex flex-col mt-5 gap-6'>
                  <VerticalMenu />
               </div>
               <Footer />
            </div>
         </div>
      </aside>
   )
}

export default LeftSidebar
