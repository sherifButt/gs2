import Link from 'next/link'
import React, { useState } from 'react'
import BasecampIcon from '../icons/BasecampIcon'
import BouncingstarIcon from '../icons/BouncingstarIcon'
import DiscoverIcon from '../icons/DiscoverIcon'
import FriendsIcon from '../icons/FriendsIcon'
import GroupsIcon from '../icons/GroupsIcon'


// Redux
import { useDispatch, useSelector } from 'react-redux'
import { signin } from '../../redux/features/authSlicer'
import{toggleSignup} from '../../redux/features/modalSlicer'

const menu = [
   {
      title: 'Discover',
      icon: DiscoverIcon,
      active: false,
      href: '#',
   },
   {
      title: 'Basecamp',
      icon: BasecampIcon,
      active: false,
      href: '#',
   },
   {
      title: 'Groups',
      icon: GroupsIcon,
      active: false,
      href: '#',
   },
   {
      title: 'Friends',
      icon: FriendsIcon,
      active: false,
      href: '#',
   },
]

function VerticalMenu() {
   const [selectedMenu, setSelectedMenu] = useState(menu)
   const [userLogin, setUserLogin] = useState(false)

   const dispatch = useDispatch()
   const { auth } = useSelector(state => state.auth)

   const handleSelectMenu = e => {}
   return (
      <div className='flex flex-col gap-[1.81rem] justify-start items-start  '>
         {auth ? (
            selectedMenu.map((item, i) => (
               <Link href={item.href} key={item.title} passHref>
                  <a
                     onClick={e => {
                        const selectedMenuCopy = [...selectedMenu]
                        selectedMenuCopy[i].active = true
                        selectedMenuCopy.map((items, idx) => {
                           if (idx != i) return (items.active = false)
                        })
                        setSelectedMenu([...selectedMenuCopy])
                     }}>
                     <div className='flex flex-row gap-[0.81rem] justify-start items-center ease-in-out duration-300  hover:scale-110'>
                        {<item.icon fill={item.active ? '#FED500' : ''} />}
                        <p
                           className={`block text-center text-lg text-black  ${
                              item.active ? 'font-semibold' : 'font-normal'
                           }`}>
                           {item.title}
                        </p>
                     </div>
                  </a>
               </Link>
            ))
         ) : (
            <div className='relative flex flex-col gap-3 justify-start items-start max-w-[11.94rem] mx-auto'>
               <div className='absolute  -left-[4.5rem]  -top-2'>
                  <BouncingstarIcon />
               </div>
               <p className='block text-[1.31rem] text-black  font-semibold'>
                  Join GiveStar
               </p>
               <p className='block w-[11.88rem] text-black '>
                  GiveStar users are helping to change the world together. Join
                  our community today and get involved.
               </p>

               <Link href='#' passHref>
                  <button
                     type='button'
                     className='flex w-full flex-row gap-5 justify-center items-center  py-3 bg-yellow-400 rounded-xl hover:scale-105 ease-out duration-300 hover:shadow-md active:scale-100 active:shadow-none'
                        onClick={ () => dispatch( toggleSignup() ) }
                     >
                     <p className='block text-center text-gray-600  font-semibold'>
                        SIGN UP
                     </p>
                  </button>
               </Link>
               
            </div>
         )}
      </div>
   )
}

export default VerticalMenu
