import React from 'react'

const StatsBox = () => {
   return (
      <div class='flex flex-row my-8 gap-5 justify-center items-center max-w-[30.50rem] mx-auto px-[2.06rem] py-[1.63rem] bg-gray-600 rounded-[1.13rem]'>
         <div class='flex flex-row justify-between items-center w-full'>
            <div class='flex flex-col gap-1.5 justify-start items-center'>
               <p class='block text-center text-3xl text-white  font-light'>
                  456
               </p>
               <p class='block uppercase text-center text-lg text-white  font-light'>
                  Donations
               </p>
            </div>
            <div class='flex flex-col gap-1.5 justify-start items-center'>
               <p class='block text-center text-3xl text-white  font-light'>
                  34
               </p>
               <p class='block uppercase text-center text-lg text-white  font-light'>
                  Fundraisers
               </p>
            </div>
            <div class='flex flex-col gap-[0.44rem] justify-start items-center'>
               <p class='block text-center text-[1.81rem] text-white  font-light'>
                  £35,000
               </p>
               <p class='block uppercase text-center text-lg text-white  font-light'>
                  Raised
               </p>
            </div>
         </div>
      </div>
   )
}

export default StatsBox
