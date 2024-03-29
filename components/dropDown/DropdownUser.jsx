import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

// Icons
import InfoIcon from '../icons/InfoIcon'
import SettingsIcon from '../icons/SettingsIcon'
import UserIcon from '../icons/UserIcon'

import AvatarUser from '../avatar/AvatarUser'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from '../../features/auth/authSlice'

import DropdownUserMenu from './DropdownUserMenu'

export default function Example() {
   const dispatch = useDispatch()

   const user = useSelector(state => state.user)
   const {
      forename,
      surname,
      fullName,
      phone,
      email,
      profileImage,
      privilege,
   } = user
   return (
      <Menu as='div' className='relative inline-block text-left z-50'>
         <div>
            <Menu.Button className='flex flex-col gap-10 mb-2 justify-start items-center w-12 h-full hover:scale-105 duration-300 ease-in-out   '>
               <AvatarUser online streaming needHelp {...user} />
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
               <DropdownUserMenu />
            </Menu.Items>
         </Transition>
      </Menu>
   )
}
