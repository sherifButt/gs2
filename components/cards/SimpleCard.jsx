import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const SimpleCard = ({title,subTitle,description,cta,className}, {...props}) => {
  return (
     <div className={`flex flex-col my-10 gap-6 justify-start items-start  w-full mx-auto ${className}`}>
        <div className='gbp-1'>
            <p className='block text-2xl lg:text-3xl text-black  font-semibold'>
               {title}
            </p>
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
   title: 'Run for Macmillan',
   subTitle: 'Nationwide',
   description: 'This June we are asking our supporters to don their running shoes and Run for Macmillan! Whether you do 5k or 50k, the distance is up to you. So lace your trainers and raise as much as you can for Macmillan this summer.',
   cta: {},
}
export default SimpleCard