/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

// Icons
import InfoIcon from '../icons/InfoIcon'
import SettingsIcon from '../icons/SettingsIcon'
import UserIcon from '../icons/UserIcon'

import AvatarUser from '../avatar/AvatarUser'
import {useSelector} from 'react-redux'

const menu = [
   {
      title: 'Account settings',
      href: '#',
      icon: SettingsIcon,
      active: false,
   },
   {
      title: 'User Profile',
      href: '#',
      icon: UserIcon,
      active: false,
   },
   {
      title: 'Help & support',
      href: '#',
      icon: InfoIcon,
      active: false,
   },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Example() {
    const {foreName,surName,name,phone,email,image,privilege}=useSelector(state=>state.user)
   return (
      <Menu as='div' className='relative inline-block text-left z-50'>
         <div>
            <Menu.Button className='flex flex-col gap-10 mb-2 justify-start items-center w-12 h-full hover:scale-105 duration-300 ease-in-out   '>
               <AvatarUser  online streaming needHelp />
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
            <Menu.Items className='origin-top-right absolute right-0  w-56 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
               <div className='px-4 py-3'>
                       <p className='text-md'>Hi, { foreName}</p>
                  <p className='text-sm font-medium text-gray-900 truncate'>
                    {email}
                  </p>
               </div>
               <div className='py-1'>
                  {menu.map((item,i) => (
                     <Menu.Item key={i+'_'+item.title}>
                        <Link href={item.href} passHref>
                           <a
                              
                              className='text-gray-700 px-4 py-3 text-md flex  gap-2 place-items-center hover:bg-gray-100 hover:text-gray-900'>
                              <item.icon />
                              <p>{item.title}</p>
                           </a>
                        </Link>
                     </Menu.Item>
                  ))}
               </div>
               <div className='py-1'>
                  <form method='POST' action='#'>
                     <Menu.Item>
                        <button
                           type='submit'
                           className='block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                           Sign out
                        </button>
                     </Menu.Item>
                  </form>
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   )
}
