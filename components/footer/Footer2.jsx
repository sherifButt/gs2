import React from 'react'
import GivestarIcon from '../icons/GivestarIcon'
import Footer from './Footer1'
import Image from 'next/image'

const Footer2 = () => {
   return (
      <div className='flex flex-row mt-10 lg:mt-0 gap-5 justify-center items-center w-full' >
         <div className='flex flex-row gap-10 justify-between items-start w-fll' >
            <GivestarIcon/>
            <Footer/>
         </div >

         <img
            className=' max-w-96 hidden lg:block'
            src='./assets/images/givestar-bg-element-02.png'
         />
      </div>
   )
}

export default Footer2
