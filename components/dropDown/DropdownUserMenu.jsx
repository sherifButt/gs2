/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

// Icons
import InfoIcon from '../icons/InfoIcon'
import SettingsIcon from '../icons/SettingsIcon'
import UserIcon from '../icons/UserIcon'

import AvatarUser from '../avatar/AvatarUser'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../redux/features/authSlicer'

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

export default function DropdownUserMenu(open) {
   const dispatch = useDispatch()
   const { foreName, surName, name, phone, email, image, privilege } =
      useSelector(state => state.user)
   return (
      <div>
         <div className='px-4 py-3 flex gab-4'>
            <div className="mr-3 block lg:hidden">
               <AvatarUser />
            </div>
            <div>
               <p className='text-md font-bold'>Hi, {foreName}</p>
               <p className='text-sm font-medium text-gray-900 truncate'>
                  {email}
               </p>
            </div>
         </div>
         <div className='py-1'>
            {menu.map((item, i) => (
               <div key={i + '_' + item.title}>
                  <Link href={item.href} passHref>
                     <a className='text-gray-700 px-4 py-3 text-md flex  gap-2 place-items-center hover:bg-gray-100 hover:text-gray-900'>
                        <item.icon />
                        <p>{item.title}</p>
                     </a>
                  </Link>
               </div>
            ))}
         </div>
         <div className='py-1'>
            <form method='POST' action='#'>
               <div>
                  <button
                     onClick={e => {
                        e.preventDefault()
                        dispatch(signin())
                     }}
                     type='submit'
                     className='block w-full text-left px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                     Sign out
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}
