/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

// Icons
import InfoIcon from '../icons/InfoIcon'
import SettingsIcon from '../icons/SettingsIcon'
import UserIcon from '../icons/UserIcon'
import NotificationIcon from '../icons/NotificationIcon'
import { XIcon } from '@heroicons/react/solid'

import AvatarUser from '../avatar/AvatarUser'

const menu = [
   {
      title: 'Mark Smith started fundraising',
      href: '#',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      icon: SettingsIcon,
      image: '/assets/images/image-mark.png',
      active: false,
   },
   {
      title: 'Natasha Stone started another fundraising',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      href: '#',
      icon: UserIcon,
      active: false,
   },
   {
      title: 'Natasha Stone started is killing it fundraising',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      href: '#',
      icon: InfoIcon,
      active: false,
   },
   {
      title: 'Mark Smith started fundraising reached target',
      href: '#',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      icon: SettingsIcon,
      image: '/assets/images/image-mark.png',
      active: false,
   },
   {
      title: 'Natasha Stone started is killing it fundraising',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      href: '#',
      icon: InfoIcon,
      active: false,
   },
   {
      title: 'Mark Smith started fundraising reached target',
      href: '#',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      icon: SettingsIcon,
      image: '/assets/images/image-mark.png',
      active: false,
   },
   {
      title: 'Natasha Stone started is killing it fundraising',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      href: '#',
      icon: InfoIcon,
      active: false,
   },
   {
      title: 'Mark Smith started fundraising reached target',
      href: '#',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      icon: SettingsIcon,
      image: '/assets/images/image-mark.png',
      active: false,
   },
   {
      title: 'Mark Smith started fundraising reached target',
      href: '#',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      icon: SettingsIcon,
      image: '/assets/images/image-mark.png',
      active: false,
   },
   {
      title: 'Natasha Stone started is killing it fundraising',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      href: '#',
      icon: InfoIcon,
      active: false,
   },
   {
      title: 'Mark Smith started fundraising reached target',
      href: '#',
      content:
         'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
      icon: SettingsIcon,
      image: '/assets/images/image-mark.png',
      active: false,
   },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Example() {
   return (
      <Menu as='div' className=''>
         <div>
            <Menu.Button className='hover:scale-105 duration-300 ease-in-out active:rotate-6'>
               <NotificationIcon />
            </Menu.Button>
         </div>

         <Transition
            as={Fragment}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'>
            <Menu.Items className='origin-top-right absolute right-0 mt-2  rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none '>
               <div className='flex flex-col justify-start items-center w-[35rem] max-w-[30.13rem] mx-auto pb-4 bg-white rounded-[1.25rem] max-h-[42rem] overflow-scroll'>
                  <div className='flex flex-col  justify-start items-start w-full overflow-scroll'>
                     <div className='flex flex-row grow justify-between items-center w-full px-[1.94rem] pt-[1.06rem] pb-[0.56rem] sticky top-0 bg-white border-b'>
                        <p className='block uppercase text-xs text-neutral-500  font-medium'>
                           today
                        </p>
                        <p className='block text-right text-xs text-neutral-500  font-medium'>
                           Mark all read
                        </p>
                     </div>
                     {menu.map(item => (
                        <div key={item.title} className='flex flex-row gap-3 justify-start items-start w-full px-[2.31rem] py-3.5 border-gray-100 border-t'>
                           <div>
                              <div>
                                 <AvatarUser image={item.image} />
                              </div>
                           </div>
                           <div className='flex flex-col gap-[0.06rem] justify-start items-start w-full'>
                              <p className='block w-full text-[0.81rem] text-black  font-semibold'>
                                 {item.title}
                              </p>
                              <p className='block w-full text-[0.81rem] text-black '>
                                 {item.content}
                              </p>
                           </div>
                           <div>
                              <XIcon className='w-4 fill-gray-400  hover:scale-120 active:rotate-6 ease-in-out duration-300' />
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   )
}
