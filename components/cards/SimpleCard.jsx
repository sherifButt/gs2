import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const SimpleCard = ({title,subTitle,body,cta,className}, {...props}) => {
  return (
     <div className={`flex flex-col mt-8 gap-6 justify-start items-start max-w-[30.94rem] w-full mx-auto ${className}`}>
        <div className='gbp-1'>
            <p className='block text-3xl text-black  font-light'>
               {title}
            </p>
              <p className='block text-2xl text-gray-600  font-light'>{ subTitle}</p>
        </div>
        <p className='block w-full text-black  font-light'>
           {body}
          </p>
          { cta?.text && <ButtonPrimary text={ cta?.text } className={cta?.className} />}
     </div>
  )
}
SimpleCard.defaultProps = {
   title: 'Run for Macmillan',
   subTitle: 'Nationwide',
   body: 'This June we are asking our supporters to don their running shoes and Run for Macmillan! Whether you do 5k or 50k, the distance is up to you. So lace your trainers and raise as much as you can for Macmillan this summer.',
   cta: {},
}
export default SimpleCard