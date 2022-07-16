import { useRouter } from 'next/router'
import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import PostLastUpdate from '../PostLastUpdate1'
import VerticalMenu from '../v-menu-1'
import Event from './Event'
const RightSidebar = props => {
   const router = useRouter()
   return (
      <aside {...props}>
         {props.children}

         <div className=' flex grow h-full w-full  flex-col  items-center md:items-left md:w-290 lg:w-350 '>
            <div className='w-full'>
               {/* Call To Action */}
               {/* <div>RightSidebars call to action</div> */}
               <ButtonPrimary
                  text='GIVE NOW'
                  className='lg:mb-4 w-full bg-orange-400 text-white font-thin lg:min-w-64 bg-button-texture bg-no-repeat bg-contain bg-[left-20px] text-lg '
                  actionHandler={() => {
                     router.push('/basecamp/giv-now')
                  }}
               />
               <ButtonPrimary
                  text='REGISTER'
                  className='lg:mb-4 w-full font-thin lg:min-w-64 bg-button-texture bg-no-repeat bg-contain bg-[left-20px] text-lg '
                  actionHandler={() => {
                     router.push('/basecamp/giv-now')
                  }}
               />

               {/* /Call To Action */}
               <div className='  flex-col justify-between  hidden md:block'>
                  <PostLastUpdate />
                  <PostLastUpdate />
               </div>
            </div>
            {/* Moving footer */}
            <div className='sticky top-28 hidden md:block -z-10'>
               {/* <PostLastUpdate /> */}
               <Event />
            </div>
            {/* /Moving footer */}
         </div>
      </aside>
   )
}

export default RightSidebar
