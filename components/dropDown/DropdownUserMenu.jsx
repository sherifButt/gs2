import { Fragment } from 'react'
import {useRouter} from 'next/router'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

// Icons
import InfoIcon from '../icons/InfoIcon'
import SettingsIcon from '../icons/SettingsIcon'
import UserIcon from '../icons/UserIcon'

import AvatarUser from '../avatar/AvatarUser'
import { useSelector, useDispatch } from 'react-redux'
import { selectCurrentUser } from '../../features/user/userSlice'
import { logOut } from '../../features/auth/authSlice'
import { removeUser } from '../../features/user/userSlice'

const menu = [
   {
      title: 'Account settings',
      href: '#',
      icon: SettingsIcon,
      active: false,
   },
   {
      title: 'User Profile',
      href: '/your-account/profile',
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

export default function DropdownUserMenu ( open ) {
   const router = useRouter()
   const  pathname  = router.pathname.split('/').filter(Boolean)
   console.log('pathname', pathname)
   const dispatch = useDispatch()
   const { forename, surname, name, phone, email, image, privilege } =
      useSelector(selectCurrentUser)
   return (
      <div>
         <div className='px-4 py-3 flex gab-4'>
            <div className='mr-3 block lg:hidden '>
               <AvatarUser />
            </div>
            <div>
               <p className='text-md font-bold'>Hi, {forename}</p>
               <p className='text-sm font-medium text-gray-900 truncate'>
                  {email}
               </p>
            </div>
         </div>
         <div className='py-1'>
            {menu.map((item, i) => (
               <div
                  key={i + '_' + item.title}
                  className='ml-2 lg:ml-0 last:border-b last:border-yellow-500 lg:last:border-gray-200 first:border-t first:border-yellow-500 lg:first:border-gray-200  first:mt-2 lg:first:mt-0'>
                  <Link href={item.href} passHref>
                     <a
                        src={item.href}
                        className=' text-gray-800 px-4 py-3 text-md flex  gap-2 place-items-center hover:bg-gray-100 hover:text-gray-900 '>
                        <item.icon className='' />
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
                        dispatch( logOut() )
                        dispatch( removeUser() )
                        router.push('/')
                     }}
                     type='submit'
                     className='uppercase block w-full text-left  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900'>
                     Sign out
                  </button>
               </div>
            </form>
         </div>
      </div>
   )
}
