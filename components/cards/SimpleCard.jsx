import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const SimpleCard = ({title,subTitle,description,cta,className}, {...props}) => {
  return (
     <div className={`flex flex-col my-10 gap-6 justify-start items-start  w-full mx-auto ${className}`}>
        <div className='gbp-1'>
            <p className='block text-2xl lg:text-3xl text-black  font-semibold'>
               {title}
            </p>
            <br/>
              <p className='block text-xl lg:text-2xl text-gray-600  font-light'>{ subTitle}</p>
        </div>
        <p className='block w-full text-black  font-light'>
           {description}
          </p>
          { cta?.text && <ButtonPrimary text={ cta?.text } className={cta?.className} />}
     </div>
  )
}
SimpleCard.defaultProps = {
   title: '',
   subTitle: '',
   description: '',
   cta: {},
}
export default SimpleCard