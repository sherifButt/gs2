import React from 'react'
import Image from 'next/image'

const LeftSidebar = props => {
   return (
      <aside {...props}>
         {props.children}
         <div className='flex w flex-col justify-start h-full  '>
            <div className='flex flex-col justify-between h-full'>
               <div className="flex flex-col mt-5 gap-6">
                 <div className='flex  gap-2 ml-4 items-center'>
                    <Image width={30} height={30} 
                       className='block'
                       src='/assets/images/icon-discover.svg'
                    />
                    <p className='block text-center text-lg text-black  font-semibold'>
                       Discover
                    </p>
                 </div>
                 <div className='flex max-w-32 gap-2  ml-4 items-center'>
                    <Image width={30} height={30}
                       className='block'
                       src='/assets/images/icon-basecamp.svg'
                    />
                    <p className='block text-center text-lg text-black  font-normal'>
                       Base Camp
                    </p>
                 </div>
               </div>
               <div>footer</div>
            </div>
         </div>
      </aside>
   )
}

export default LeftSidebar
