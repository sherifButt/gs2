import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menu = [
   { title: 'About us', href: '#' },
   { title: 'Terms and Conditions', href: '#' },
   { title: ' Privacy Policy', href: '#' },
   { title: ' Contact us', href: '#' },
]

const socialMediaIcons = [
   {
      title: 'instagram',
      alt: 'instagram link',
      href: '#',
      src: '/assets/images/icon-instagram.svg',
   },
   {
      title: 'youtube',
      alt: 'youtube link',
      href: '#',
      src: '/assets/images/icon-youtube.svg',
   },
   {
      title: 'facebook',
      alt: 'facebook link',
      href: '#',
      src: '/assets/images/icon-facebook.svg',
   },
]

const Footer = () => {
   return (
      <div className='flex flex-col gap-8 justify-end items-start max-w-[10.25rem] mb-10'>
         <div className='flex flex-col gap-2'>
            {menu.map(item => (
               <Link href={item.href} key={item.title} passHref>
                  <a className='block text-sm text-gray-600  font-medium ease-in-out duration-300  hover:scale-105 transform-gpu '>
                     {item.title}
                  </a>
               </Link>
            ))}
         </div>
         <div className='flex gap-2'>
            {socialMediaIcons.map(icon => (
               <Link href={icon.href} key={icon.title} passHref>
                  <a>
                     <Image
                        width={22}
                        height={22}
                        className='block  duration-300  hover:scale-110  transform-gpu ease-in-out '
                        src={icon.src}
                     />
                  </a>
               </Link>
            ))}
         </div>
         <p className='block opacity-50 text-xs text-gray-600 font-light'>
            Copyright (c) 2022 GiveStar Ltd.All rights reserved.
         </p>
      </div>
   )
}

export default Footer
