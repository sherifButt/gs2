import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import PostLastUpdate from '../PostLastUpdate1'
import VerticalMenu from '../v-menu-1'
const RightSidebar = props => {
   return (
      <aside {...props}>
         {props.children}

         <div className=' flex grow h-full  flex-col items-center md:items-left md:w-290 lg:w-350 '>
            <div className='w-full px-4 lg:px-0 '>
               {/* Call To Action stays on mobile*/}

               <ButtonPrimary
                  text='CREATE CAMPAIGN'
                  className='lg:mb-8 w-full lg:w-64 bg-button-texture bg-no-repeat bg-contain bg-[left-20px] text-lg '
               />

               {/* /Call To Action */}
               {/* Moving element */}
               <div className='  flex-col justify-between  hidden md:block'></div>
               {/* / Moving element */}
            </div>

            {/* Fixed footer */}
            <div className='sticky top-28 hidden md:block -z-10'></div>
            {/* /Fixed footer */}
         </div>
      </aside>
   )
}

export default RightSidebar