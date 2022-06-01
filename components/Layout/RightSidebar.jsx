import React from 'react'
import PostLastUpdate from '../PostLastUpdate1'

const RightSidebar = props => {
   return (
      <aside {...props}>
         {props.children}

         <div className='flex  flex-col items-center md:items-left  md:w-290 lg:w-350  '>
            {/* Call To Action */}
            <div>
               RightSidebars call to action
            </div>
            {/* /Call To Action */}

            <div className='flex  flex-col justify-between  mb-auto hidden md:block '>
               <PostLastUpdate />

               <PostLastUpdate
                  className='sticky top-10 '
                   />
                   
               <div>footer</div>
            </div>
         </div>
      </aside>
   )
}

export default RightSidebar
