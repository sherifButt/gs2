import React from 'react'
import PostLastUpdate from '../PostLastUpdate1'
import VerticalMenu from '../v-menu-1'
import Event from './Event'
const RightSidebar = props => {
   return (
      <aside {...props}>
         {props.children}

         <div className=' flex grow h-full  flex-col items-center md:items-left md:w-290 lg:w-350 '>
            <div>
               {/* Call To Action */}
               {/* <div>RightSidebars call to action</div> */}
               2<VerticalMenu />

               {/* /Call To Action */}
               <div className='  flex-col justify-between  hidden md:block'>
                  <PostLastUpdate />
                  <PostLastUpdate />

              
               </div>
            </div>
            {/* Moving footer */}
            <div className='sticky top-28 hidden md:block -z-10'>
             {/* <PostLastUpdate /> */}
               <Event/>
            </div>
            {/* /Moving footer */}
         </div>
      </aside>
   )
}

export default RightSidebar
