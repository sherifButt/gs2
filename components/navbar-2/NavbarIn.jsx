import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

// Redux
import { useDispatch, useSelector } from 'react-redux'

// Components
import DropdownEmailNotifications from '../dropDown/DropdownEmailNotifications'
import DropdownNotifications from '../dropDown/DropdownNotifications'
import DropdownUser from '../dropDown/DropdownUser'

// Icons
import GivestarIcon from '../icons/GivestarIcon'
import SearchIcon from '../icons/SearchIcon'
import StatsIcon from '../icons/StatsIcon'
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import VerticalMenu from '../v-menu-1'
import DropdownUserMenu from '../dropDown/DropdownUserMenu'

const mainMenu = [
   { title: 'Charities', href: '#', icon: '', active: false },
   { title: 'Individuals', href: '#', icon: '', active: false },
   { title: 'Companies', href: '#', icon: '', active: false },
]

const signMenu = [
   { title: 'Sign in', href: '#', icon: '', active: false },
   { title: 'Sign up', href: '#', icon: '', active: false },
]

const loggedInMenu = [
   { title: 'Stats', href: '#', icon: StatsIcon, active: false },
   {
      title: 'Notification',
      href: '#',
      icon: DropdownNotifications,
      active: true,
   },
   {
      title: 'Email',
      href: '#',
      icon: DropdownEmailNotifications,
      active: false,
   },
]

const NavbarIn = ({ className }) => {
   const dispatch = useDispatch()
   const { auth } = useSelector(state => state.auth)
   const [open, setOpen] = useState(false)
   const menuBackdrop = {
      initial: { opacity: 0 },
      animate: {
         opacity: 1,
         transition: {
            duration: 0.3,
            ease: 'easeOut',
            staggerChildren: 0,
            when: 'beforeChildren',
         },
      },
      exit: { opacity: 0, transition: { duration: 0.2, ease: 'easeOut' } },
   }
   const menuContainer = {
      initial: { y: -500 },
      animate: {
         y: 0,
         transition: {
            duration: 0.3,
            ease: 'easeOut',
            staggerChildren: 0,
            when: 'beforeChildren',
         },
      },
      exit: { y: -500, transition: { duration: 0.2, ease: 'easeOut' } },
   }
   const menuItem = {
      initial: { opacity: 0 },
      animate: { opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
      exit: { opacity: 0 },
   }
   return (
      <div className={`bg-menu-texture   ${className}`}>
         {/* mobile menu */}
         <AnimatePresence>
            {open && (
               <div>
                  <motion.div
                     variants={menuBackdrop}
                     initial='initial'
                     animate='animate'
                     exit='exit'
                     key='menu-backdrop'
                     className='fixed inset-0 bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60'
                  />
                  <motion.div
                     variants={menuContainer}
                     initial='initial'
                     animate='animate'
                     exit='exit'
                     key='menu'
                     className=' absolute top-20 rounded-b-xl pb-8 flex flex-col flex-grow w-full bg-yellow-400 bg-menu-texture'
                     onClick={() => setOpen(!open)}>
                     <motion.div
                        variants={menuItem}
                        key='sub-menu'
                        className='flex flex-col space-y-8 ml-6 '>
                        <VerticalMenu />
                     </motion.div>
                     <motion.div
                        variants={menuItem}
                        key='sub-menu-signing'
                        className=' mt-4 pt-4  border-t border-yellow-500 flex flex-col gap-8 uppercase'>
                        <DropdownUserMenu open />
                     </motion.div>
                  </motion.div>
               </div>
            )}
         </AnimatePresence>
         <div className=' z-10 lg:container flex flex-row justify-between items-center gap-4 mx-auto w-full p-5 lg:p-0 bg-menu-texture lg:bg-empty-texture'>
            <div className='flex flex-row gap-4 justify-start items-center '>
               <div className='flex-shrink-1'>
                  <GivestarIcon
                     viewBox='0 0 32 32'
                     className='block md:hidden w-8'
                  />
                  <GivestarIcon className='hidden md:block' />
               </div>
               <div className=' flex flex-row gap-4 w-full lg:w-auto justify-end items-center'>
                  <div className=' relative rounded-md w-full lg:w-auto shadow-sm '>
                     <input
                        type='text'
                        name='search'
                        id='search'
                        className='focus:ring-indigo-500 focus:border-indigo-500 block w-full lg:w-80 pr-10  sm:text-sm border-gray-300 rounded-xl px-3 py-2'
                        placeholder='Search campaigns...'
                     />
                     <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                        <SearchIcon
                           className='h-5 w-5 text-gray-400'
                           aria-hidden='true'
                        />
                     </div>
                  </div>
               </div>
            </div>
            <div className='flex flex-row gap-10 justify-end items-center'>
               <div className='flex flex-inline gap-4'>
                  <div className='flex flex-row gap-4 justify-end items-center max-w-[14.38rem] mx-auto'>
                     <div className='hidden lg:block'>
                        <div className='flex flex-row gap-[1.69rem] justify-end items-center '>
                           {loggedInMenu.map(item => (
                              <Link href={item.href} passHref key={item.title}>
                                 <a className=''>
                                    <div className='relative'>
                                       <item.icon className='z-0' />
                                    </div>
                                 </a>
                              </Link>
                           ))}
                        </div>
                     </div>
                     <div className='block lg:hidden'>
                        <div className='flex flex-row gap-4 justify-end items-center '>
                           {loggedInMenu.map(item => {
                              if (
                                 item.title.toUpperCase() ==
                                 'notification'.toUpperCase()
                              )
                                 return (
                                    <Link
                                       href={item.href}
                                       passHref
                                       key={item.title}>
                                       <a className=''>
                                          <div className='relative'>
                                             <item.icon className='z-0' />
                                          </div>
                                       </a>
                                    </Link>
                                 )
                           })}
                        </div>
                     </div>
                     <div className='hidden lg:block'>
                        <DropdownUser />
                     </div>
                     <div className='flex lg:hidden z-10'>
                        {/* Mobile menu button */}
                        <button
                           onClick={() => setOpen(!open)}
                           className=' inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover-:text-white hover-:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                           <span className='sr-only'>Open main menu</span>
                           {open ? (
                              <XIcon
                                 className='block h-6 w-6'
                                 aria-hidden='true'
                              />
                           ) : (
                              <MenuIcon
                                 className='block h-6 w-6 text-gray-900'
                                 aria-hidden='true'
                              />
                           )}
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default NavbarIn
