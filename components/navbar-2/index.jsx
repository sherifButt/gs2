import React from 'react'
import Link from 'next/link'

// Icons
import SearchIcon from '../icons/SearchIcon'
import GivestarIcon from '../icons/GivestarIcon'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {signin} from '../../redux/features/authSlicer'

const mainMenu = [
   { title: 'Charities', href: '#', icon: '', active: false },
   { title: 'Individuals', href: '#', icon: '', active: false },
   { title: 'Companies', href: '#', icon: '', active: false },
]
const signMenu = [
   { title: 'Sign in', href: '#', icon: '', active: false },
   { title: 'Sign up', href: '#', icon: '', active: false },
]

const Navbar = props => {
    const dispatch = useDispatch()
    const {auth} = useSelector(state => state.auth)
   return (
      <div {...props}>
         <div className='flex flex-row justify-between items-center  mx-auto w-full mx-20'>
            <div className='flex flex-row gap-20 justify-start items-center'>
               <div>
                  <GivestarIcon />
               </div>
               <div className='flex flex-row gap-[2.69rem] justify-start items-start'>
                  {mainMenu.map(item => (
                     <Link href={item.href} passHref key={item.title}>
                        <a className='block text-lg text-black  font-medium hover:scale-105 duration-300 ease-in-out'>
                           {item.title}
                        </a>
                     </Link>
                  ))}
               </div>
            </div>
            <div className='flex flex-row gap-10 justify-end items-center'>
               <div>
                  <div>
                     <div>
                        <div className='mt-1 relative rounded-md shadow-sm '>
                           <input
                              type='text'
                              name='search'
                              id='search'
                              className='focus:ring-indigo-500 focus:border-indigo-500 block w-80 pr-10  sm:text-sm border-gray-300 rounded-xl px-3 py-2'
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
               </div>
               <div className='flex flex-inline gap-4'>
                  {signMenu.map(item => (
                     <Link href={item.href} passHref key={item.title}>
                          <a
                              onClick={()=>dispatch(signin())}
                              className='block text-center text-lg text-black  font-medium hover:scale-105 duration-300 ease-in-out'>
                           {item.title}
                        </a>
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </div>
   )
}

export default Navbar