/* This example requires Tailwind CSS v2.0+ */
import { Menu, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/solid'
import { Fragment, useState } from 'react'
import AvatarUser from '../avatar/AvatarUser'
import AlertIcon from '../icons/AlertIcon'
import EmailIcon from '../icons/EmailIcon'
// Icons
import InfoIcon from '../icons/InfoIcon'
import NotificationIcon from '../icons/NotificationIcon'
import SettingsIcon from '../icons/SettingsIcon'
import UserIcon from '../icons/UserIcon'

export default function DropdownEmailNotification({ data }) {
   const [notifications, setNotifications] = useState(data)
   return (
      <Menu as='div' className=''>
         <div>
            <Menu.Button className='relative hover:scale-105 duration-300 ease-in-out active:rotate-6'>
               {notifications.map(
                  item =>
                     item.active === true && (
                        <AlertIcon
                           className={`absolute  left-4 animate-bounce `}
                        />
                     )
               )}
               <EmailIcon />
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
                     <div className='flex flex-row grow justify-between items-center w-full px-[1.94rem] pt-[1.06rem] pb-[0.56rem] sticky top-0 bg-white border-b z-10'>
                        <p className='block uppercase text-xs text-neutral-500  font-medium'>
                           today
                        </p>
                        <p
                           className='block text-right text-xs text-neutral-500  font-medium'
                           onClick={() => {
                              notifications.map(item => (item.active = false))
                           }}>
                           Mark all read
                        </p>
                     </div>
                     <ul className='divide-y '>
                        {notifications.map(
                           (item, i) =>
                              item.active && (
                                 <li
                                    key={i + '_' + item.title}
                                    className='flex flex-row gap-4 justify-start items-start w-full px-[2.31rem] py-3.5 hover:bg-gray-100'>
                                    <div
                                       onClick={() => {
                                          notifications[i].active = false
                                          setNotifications(notifications)
                                       }}
                                       className='order-last hover:scale-110 hover: active:rotate-6 ease-in-out duration-300 p-2 group peer'>
                                       <XIcon className='w-4 rounded-full border border-transparent text-base font-medium text-gray-400 hover:text-gray-100 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm' />
                                    </div>{' '}
                                    <AvatarUser
                                       image={item.image}
                                       className='peer-hover:opacity-50'
                                    />
                                    <div className='flex flex-col gap-[0.06rem] justify-start items-start w-full text-black peer-hover:line-through'>
                                       <p className='block w-full text-[0.81rem] font-semibold'>
                                          {item.title}
                                       </p>
                                       <p className='block w-full text-[0.81rem]'>
                                          {item.content}
                                       </p>
                                    </div>
                                 </li>
                              )
                        )}
                     </ul>
                  </div>
               </div>
            </Menu.Items>
         </Transition>
      </Menu>
   )
}

DropdownEmailNotification.defaultProps = {
   data: [
      {
         title: 'Mark Smith started fundraising',
         href: '#',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi a piscing elit. Quisque quis pharetra orci…',
         icon: SettingsIcon,
         image: '/assets/images/image-mark.png',
         active: false,
      },
      {
         title: 'Natasha Stone started another fundraising',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi in a piscing elit. Quisque quis pharetra orci…',
         href: '#',
         icon: UserIcon,
         active: true,
      },
      {
         title: 'Natasha Stone started is killing it fundraising',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi the piscing elit. Quisque quis pharetra orci…',
         href: '#',
         icon: InfoIcon,
         active: true,
      },
      {
         title: 'Mark Smith started fundraising reached target',
         href: '#',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi this piscing elit. Quisque quis pharetra orci…',
         icon: SettingsIcon,
         image: '/assets/images/image-mark.png',
         active: true,
      },
      {
         title: 'Natasha Stone started is killing it fundraising',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         href: '#',
         icon: InfoIcon,
         active: true,
      },
      {
         title: 'Mark Smith started fundraising reached target',
         href: '#',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         icon: SettingsIcon,
         image: '/assets/images/image-mark.png',
         active: true,
      },
      {
         title: 'Natasha Stone started is killing it fundraising',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         href: '#',
         icon: InfoIcon,
         active: true,
      },
      {
         title: 'Mark Smith started fundraising reached target',
         href: '#',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         icon: SettingsIcon,
         image: '/assets/images/image-mark.png',
         active: true,
      },
      {
         title: 'Mark Smith started fundraising reached target',
         href: '#',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         icon: SettingsIcon,
         image: '/assets/images/image-mark.png',
         active: true,
      },
      {
         title: 'Natasha Stone started is killing it fundraising',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         href: '#',
         icon: InfoIcon,
         active: true,
      },
      {
         title: 'Mark Smith started fundraising reached target',
         href: '#',
         content:
            'Lorem ipsum dolor sit amet, consectetur adi piscing elit. Quisque quis pharetra orci…',
         icon: SettingsIcon,
         image: '/assets/images/image-mark.png',
         active: true,
      },
   ],
}
