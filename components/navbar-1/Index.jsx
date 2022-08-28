
import React, { Fragment } from 'react'
import Link from 'next/link'
// Redux
import { useDispatch, useSelector } from 'react-redux'
import { toggleSignin, toggleSignup } from '../../features/modalSlice'
// Icons
import EmailIcon from '../icons/EmailIcon'
import GivestarIcon from '../icons/GivestarIcon'
import NotificationIcon from '../icons/NotificationIcon'
import SearchIcon from '../icons/SearchIcon'
import StatsIcon from '../icons/StatsIcon'
import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { SearchIcon } from '@heroicons/react/solid'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const mainMenu = [
   { title: 'Charities', href: '#', icon: '', active: false },
   { title: 'Individuals', href: '#', icon: '', active: false },
   { title: 'Companies', href: '#', icon: '', active: false },
]

const loggedInMenu = [
   { title: 'Stats', href: '#', icon: StatsIcon, active: false },
   {
      title: 'Notification',
      href: '#',
      icon: NotificationIcon,
      active: true,
   },
   { title: 'Email', href: '#', icon: EmailIcon, active: false },
]


function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function NavbarOut ( {className} ) {
   const dispatch = useDispatch()
   const signMenu = [
      {
         title: 'Sign in',
         href: '#',
         icon: '',
         active: false,
         action: toggleSignin(),
      },
      {
         title: 'Sign up',
         href: '#',
         icon: '',
         active: false,
         action: toggleSignup(),
      },
   ]

   const { auth } = useSelector(state => state.auth)
   return (
      <Disclosure
         as='nav'
         className={`${className}  ${
            open ? `rounded-none` : `rounded-b-xl`
         } md:rounded-none`}>
         {({ open }) => (
            <div>
               <div className=' mx-auto container max-w-5xl px-3 md:px-0'>
                  <div className='relative flex items-center justify-between h-20'>
                     <div className='flex items-center px-2 lg:px-0'>
                        <div className='flex-shrink-1'>
                           <GivestarIcon
                              width='32'
                              viewBox='0 0 32 32'
                              className='block md:hidden'
                           />
                           <GivestarIcon className='hidden md:block' />
                        </div>
                        <div className='hidden lg:block lg:ml-6'>
                           <div className='flex space-x-4'>
                              {mainMenu.map(item => (
                                 <Link
                                    href={item.href}
                                    passHref
                                    key={item.title}>
                                    <a className='block text-lg text-black  font-medium hover:scale-105 duration-300 ease-in-out'>
                                       {item.title}
                                    </a>
                                 </Link>
                              ))}
                           </div>
                        </div>
                     </div>
                     <div className='flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end'>
                        <div className='max-w-lg w-full lg:max-w-xs'>
                           <label htmlFor='search' className='sr-only'>
                              Search
                           </label>
                           <div className='relative'>
                              <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                                 <SearchIcon
                                    className='h-5 w-5 text-gray-400'
                                    aria-hidden='true'
                                 />
                              </div>
                              <input
                                 id='search'
                                 name='search'
                                 className='block w-full pl-4 pr-3 py-2 border border-transparent rounded-xl leading-5 bg-white text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm'
                                 placeholder='Search...'
                                 type='search'
                              />
                           </div>
                        </div>
                     </div>
                     <div className='flex lg:hidden'>
                        {/* Mobile menu button */}
                        <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover-:text-white hover-:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
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
                        </Disclosure.Button>
                     </div>
                     <div className='hidden lg:block lg:ml-4'>
                        <div className='flex items-center'>
                           {signMenu.map(item => (
                              <Link href={item.href} passHref key={item.title}>
                                 <a
                                    onClick={() => dispatch(item.action)}
                                    className='block text-center text-lg text-black  font-medium hover:scale-105 duration-300 ease-in-out'>
                                    {item.title}
                                 </a>
                              </Link>
                           ))}
                           <button
                              type='button'
                              className='flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                              <span className='sr-only'>
                                 View notifications
                              </span>
                              <BellIcon
                                 className='h-6 w-6'
                                 aria-hidden='true'
                              />
                           </button>

                           {/* Profile dropdown */}
                           <Menu
                              as='div'
                              className='ml-4 relative flex-shrink-0'>
                              <div>
                                 <Menu.Button className='bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                                    <span className='sr-only'>
                                       Open user menu
                                    </span>
                                    <img
                                       className='h-8 w-8 rounded-full'
                                       src=''
                                       alt=''
                                    />
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
                                 <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    <Menu.Item>
                                       {({ active }) => (
                                          <a
                                             href='#'
                                             className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                             )}>
                                             Your Profile
                                          </a>
                                       )}
                                    </Menu.Item>
                                    <Menu.Item>
                                       {({ active }) => (
                                          <a
                                             href='#'
                                             className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                             )}>
                                             Settings
                                          </a>
                                       )}
                                    </Menu.Item>
                                    <Menu.Item>
                                       {({ active }) => (
                                          <a
                                             href='#'
                                             className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                             )}>
                                             Sign out
                                          </a>
                                       )}
                                    </Menu.Item>
                                 </Menu.Items>
                              </Transition>
                           </Menu>
                        </div>
                     </div>
                  </div>
               </div>

               <Disclosure.Panel className='lg:hidden bg-yellow-400 rounded-b-xl'>
                  <div className='px-2 pt-2 pb-3 space-y-1'>
                     {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                     {mainMenu.map(item => (
                        <Disclosure.Button
                           as='a'
                           href={item.href}
                           key={item.title}
                           className='text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                           {item.title}
                        </Disclosure.Button>
                     ))}
                  </div>
                  <div className='pt-4 pb-3 border-t border-gray-700'>
                     <div className='flex items-center px-5'>
                        <div className='flex-shrink-0'>
                           <img
                              className='h-10 w-10 rounded-full'
                              src=''
                              alt=''
                           />
                        </div>
                        <div className='ml-3'>
                           <div className='text-base font-medium text-white'>
                              Tom Cook
                           </div>
                           <div className='text-sm font-medium text-gray-400'>
                              tom@example.com
                           </div>
                        </div>
                        <button
                           type='button'
                           className='ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                           <span className='sr-only'>View notifications</span>
                           <BellIcon className='h-6 w-6' aria-hidden='true' />
                        </button>
                     </div>
                     <div className='mt-3 px-2 space-y-1'>
                        <Disclosure.Button
                           as='a'
                           href='#'
                           className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                           Your Profile
                        </Disclosure.Button>
                        <Disclosure.Button
                           as='a'
                           href='#'
                           className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                           Settings
                        </Disclosure.Button>
                        <Disclosure.Button
                           as='a'
                           href='#'
                           className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'>
                           Sign out
                        </Disclosure.Button>
                     </div>
                  </div>
               </Disclosure.Panel>
            </div>
         )}
      </Disclosure>
   )
}
