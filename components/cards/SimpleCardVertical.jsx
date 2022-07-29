import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const SimpleCard = ({title,subTitle,body,cta,className}, {...props}) => {
   return (
     
         <div className={`flex flex-col gap-4 justify-start items-center  mx-auto px-[6.06rem] py-[2.44rem] bg-white rounded-xl ${className}`}>
            <img
               className='block w-full'
               src='/assets/images/givestar-fetured-01.png'
            />
            <p className='block text-center text-2xl text-black  font-semibold'>
               {title}
            </p>
            <p className='block text-xl lg:text-2xl text-gray-600  font-light'>
               {subTitle}
            </p>
            <p className='block w-full text-center text-lg text-black '>
               {body}
            </p>
            {cta?.text && (
               <ButtonPrimary text={cta?.text} className={cta?.className} />
            )}
         </div>

        
      
   )
}
SimpleCard.defaultProps = {
   title: 'Start Something Today',
   subTitle: '',
   body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at dapibus sapien.',
   cta: {},
}
export default SimpleCard