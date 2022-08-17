import React from 'react'

const index = () => {
   return (
      <div className='flex flex-col gap-[1.88rem] justify-start items-center max-w-[31.44rem] mx-auto'>
         <div>
            <img
               className='block'
               src='/assets/images/assets/image-9841.856701604602.png'
            />
         </div>
         <p className='block text-center text-2xl text-stone-800  font-medium'>
            Thank you for your donation! A receipt has been sent to your email.
         </p>
         <div>
            <p className='block text-xl text-black  font-medium'>
               Make an even bigger difference!
            </p>
         </div>
         <p className='block text-center text-sm text-black  font-light'>
            Sharing this page could bring in 5x more donations!
         </p>
         <div className="flex flex-row gap-4">
               <div>
                   email
               <img
                  className='block'
                  src='/assets/images/assets/image-41417.21673972265.png'
               />
            </div>
            facebook
            <img
               className='block'
               src='/assets/images/assets/image-83861.34680363047.png'
            />
               <div>
                   twitter
               <img
                  className='block'
                  src='/assets/images/assets/image-1190.8620429265104.png'
               />
            </div>
               <div>
                   wahtsApp
               <img
                  className='block'
                  src='/assets/images/assets/image-60690.40666285763.png'
               />
            </div>
            <div></div>
         </div>
         <div>
            {/* <div>
               <img
                  className='block'
                  src='/assets/images/assets/image-16885.563144787262.png'
               />
               <p className='block text-center text-black  font-medium'>
                  COPY LINK
               </p>
            </div> */}
            {/* <div>
               <div>
                  <img
                     className='block'
                     src='/assets/images/assets/image-65518.58297863611.png'
                  />
                  <p className='block opacity-50 text-black  font-light'>
                     https://www.give-star.com/page-user-test
                  </p>
               </div>
            </div> */}
         </div>
         <img
            className='block'
            src='/assets/images/assets/image-61032.08142993069.png'
         />
         <div>
            <p className='block text-[1.69rem] text-black  font-medium'>
               Download our app
            </p>
         </div>
         <p className='block w-[24.88rem] text-center text-sm text-black  font-light'>
            Download our GiveStar app to see your donation attached to your
            for-good profile and share with friends!
         </p>
           <div>
               google play
            <img
               className='block'
               src='/assets/images/assets/image-22440.838951564434.png'
               />
               apple store
            <img
               className='block'
               src='/assets/images/assets/image-47925.30387624736.png'
            />
         </div>
      </div>
   )
}

export default index
