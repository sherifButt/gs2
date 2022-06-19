import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { showSignin, showSignup } from '../../redux/features/modalSlicer'

const CtaLetsDoSomeGood = () => {
   const dispatch = useDispatch()
   return (
      <div className='relative flex flex-row flex-wrap lg:flex-nowrap  gap-5 justify-start items-center  w-full mx-auto p-4 '>
         <div className='absolute lg:relative top-0 left-0'>
            <img
               className=' w-fill  blur-sm opacity-50'
               src='./assets/images/givestar-bg-element-01.png'
            />
         </div>
         <div className='relative flex flex-col gap-[1.81rem] justify-center items-center w-full h-full -bg-[url("/assets/images/givestar-bg-element-01.png")] bg-auto bg-left-top'>
            <div className='flex flex-col gap-[1.81rem] justify-start items-start w-full '>
               <p className='block text-4xl lg:text-6xl text-gray-700 font-bold leading-tight lg:leading-normal '>
                  Let’s do some good.
               </p>
               <p className='block text-2xl text-gray-700  font-bold'>
                  Join GiveStar today
               </p>

               <ButtonPrimary
                  text='SIGN UP WITH EMAIL'
                  className='w-full lg:w-96 bg-army-500 text-white'
                  actionHandler={() => dispatch(showSignup())}
               />

               <p className='block text-2xl text-gray-700  font-bold'>
                  Already have an account?
               </p>

               <ButtonPrimary
                  text='SIGN IN'
                  className='w-full lg:w-96'
                  actionHandler={() => dispatch(showSignin())}
               />
            </div>
         </div>
      </div>
   )
}

export default CtaLetsDoSomeGood
