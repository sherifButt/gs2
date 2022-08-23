import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const menu = [
   { title: 'About us', href: 'https://give-star.com/about/' },
   {
      title: 'Terms and Conditions',
      href: 'https://give-star.com/terms-and-conditions/',
   },
   {
      title: ' Privacy Policy',
      href: 'https://workdrive.zohopublic.eu/external/1gha4qtasMA-lU7zIz',
   },
   { title: ' Contact us', href: 'https://give-star.com/contact/' },
]

const socialMediaIcons = [
   {
      title: 'instagram',
      alt: 'instagram link',
      href: 'https://instagram.com/wearegivestar',
      src: '/assets/images/icon-instagram.svg',
   },
   // {
   //    title: 'youtube',
   //    alt: 'youtube link',
   //    href: '#',
   //    src: '/assets/images/icon-youtube.svg',
   // },
   {
      title: 'facebook',
      alt: 'facebook link',
      href: 'https://facebook.com/wearegivestar',
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
            ) ) }
            
         </div>
         <p className='block opacity-50 text-xs text-gray-600 font-light'>
            Copyright © 2022 GiveStar Ltd.  All rights reserved.
         </p>
      </div>
   )
}

export default Footer
