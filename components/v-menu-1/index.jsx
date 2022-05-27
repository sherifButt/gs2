import React from 'react'
import Image from 'next/Image'

function VerticalMenu() {
  return (
     <div className='flex flex-col gap-[1.81rem] justify-start items-start  '>
        <div className='flex flex-row gap-[0.81rem] justify-start items-center'>
           <svg
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                 fill-rule='evenodd'
                 clip-rule='evenodd'
                 d='M14.4462 2.63434C14.5329 2.40306 14.755 2.25006 15.002 2.25006C15.2491 2.25006 15.4712 2.40306 15.5579 2.63434L18.5639 11.1454H27.0536C27.3018 11.1454 27.5239 11.2996 27.6106 11.5332C27.6973 11.7657 27.6284 12.0278 27.4396 12.1891L20.3455 18.0624L23.3147 26.9696C23.3967 27.2151 23.31 27.4843 23.1009 27.6361C22.8919 27.7879 22.608 27.7879 22.4002 27.6349L15.0008 22.2135L7.59795 27.6349C7.38891 27.7844 7.10862 27.7832 6.90077 27.6314C6.69411 27.4808 6.60741 27.2139 6.68698 26.9696L9.65621 18.0624L2.56092 12.1891C2.37208 12.0278 2.30319 11.7657 2.38989 11.5332C2.4754 11.2996 2.69869 11.1454 2.94692 11.1454H11.4378L14.4462 2.63434Z'
                 fill='#FED500'
                 fill-opacity='0.25'
                 stroke='black'
                 stroke-width='1.5'
                 stroke-linecap='round'
                 stroke-linejoin='round'
              />
           </svg>

           <p className='block text-center text-lg text-black  font-semibold'>
              Discover
           </p>
        </div>
        <div className='flex flex-row gap-[0.81rem] justify-start items-center group'>
           <svg
              className='group-hover:fill-yellow-50'
              width='30'
              height='30'
              viewBox='0 0 30 30'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                 d='M17.3786 2.25006L2.51613 25.3237C2.39723 25.5085 2.3889 25.7437 2.49235 25.9369C2.59698 26.1301 2.79911 26.2513 3.0167 26.2501H26.9857C27.2021 26.2501 27.4018 26.1301 27.5065 25.9357C27.6099 25.7425 27.6016 25.5085 27.4827 25.3237L12.6226 2.25006'
                 stroke='black'
                 stroke-width='1.5'
                 stroke-linecap='round'
                 stroke-linejoin='round'
              />
              <path
                 d='M19.0013 26.242L15.4273 20.4379C15.3363 20.29 15.1753 20.2 15.0013 20.2C14.8273 20.2 14.6663 20.29 14.5753 20.4379L11.0013 26.242'
                 stroke='black'
                 stroke-width='1.5'
                 stroke-linecap='round'
                 stroke-linejoin='round'
              />
           </svg>
           <p className='block text-center text-lg text-black group-hover:font-semibold '>
              Base Camp
           </p>
        </div>
        <div className='flex flex-row gap-3.5 justify-start items-end'>
           <Image
              width={30}
              height={30}
              className='block'
              src='/assets/images/icon-groups.svg'
           />
           <p className='block text-center text-lg text-black '>
              Groups
           </p>
        </div>
        <div className='flex flex-row gap-3.5 justify-start items-end'>
           <Image
              width={30}
              height={30}
              className='block'
              src='/assets/images/icon-friends.svg'
           />
           <p className='block text-center text-lg text-black '>
              Friends
           </p>
        </div>
     </div>
  )
}

export default VerticalMenu