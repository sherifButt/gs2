import React from 'react'

const Thermometer = () => {
  return (
     <div>
        <div class='flex flex-col gap-3.5 justify-center items-center max-w-[32.11rem] mx-auto'>
           <div class='flex flex-row justify-between items-center w-full'>
              <p class='block text-[2.13rem] text-neutral-400  font-light'>
                 £7,250
              </p>
              <p class='block text-[1.31rem] text-gray-600  font-light'>
                 raised of £15,000
              </p>
           </div>
           <div class='flex flex-col justify-center items-center w-full'>
                  <div className="w-full h-2 rounded bg-neutral-200">
                      <div style={ { width: '45%'}} className="h-2 rounded bg-army-500"></div>
              </div>
              
           </div>
        </div>
     </div>
  )
}

export default Thermometer