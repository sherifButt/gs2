import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import PostLastUpdate from '../cards/PostLastUpdate1'
import VerticalMenu from '../v-menu-1'
import Event from '../cards/EventSimpleCard'
import { useRouter } from 'next/router'
const RightSidebar = props => {
   const router = useRouter()
   return (
      <aside {...props}>
         {props.children}

         <div className=' flex grow h-full  flex-col items-center md:items-left md:w-290 lg:w-350 '>
            <div className='w-full px-4 lg:px-0 '>
               {/* Call To Action stays on mobile*/}

               {/* /Call To Action */}
               {/* Moving element */}
               <div className='  flex-col justify-between  hidden md:block'></div>
               {/* / Moving element */}
            </div>

            {/* Fixed footer */}
            <div className='sticky top-28 hidden md:block z-10'>
               <ButtonPrimary
                  text='CREATE CAMPAIGN'
                  className='lg:mb-8 w-full lg:w-64 bg-button-texture bg-no-repeat bg-contain bg-[left-20px] text-lg '
                  actionHandler={() => {
                     router.push('/basecamp/create-campaign')
                  }}
               />

               {/* <Event /> */}
               {/* <PostLastUpdate /> */}
            </div>
            {/* /Fixed footer */}
         </div>
      </aside>
   )
}

export default RightSidebar
