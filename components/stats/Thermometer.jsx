import React from 'react'

const Thermometer = ( { current, max, currency, text,small } ) => {
   
  return (
     <div>
        <div
           className={`flex flex-col gap-5 justify-center items-center max-w-[32.11rem] mx-auto`}>
           <div
              className={`flex ${
                 small ? 'flex-col' : 'flex-row items-center '
              } justify-between w-full`}>
              <p className='block text-2xl text-army-500  font-light'>
                 {currency}{current.toLocaleString(undefined, {maximumFractionDigits:2})}
              </p>
              <p
                 className={`block ${
                    small ? 'text-md' : 'text-2xl'
                 } text-gray-600  font-light`}>
                 {text} {currency}{max.toLocaleString(undefined, {maximumFractionDigits:2})}
              </p>
           </div>
           <div className={`flex flex-col justify-center items-center w-full`}>
              <div className='w-full h-2 rounded bg-neutral-200'>
                 <div
                    style={{ width: `${(current / max) * 100}%` }}
                    className='h-2 rounded bg-army-500'></div>
              </div>
           </div>
        </div>
     </div>
  )
}
Thermometer.defaultProps = {
   current: '7500',
   text:'raised of',
   max: '14000',
   currency:'£'
}

export default Thermometer