import React from 'react'

const CampaignProfileImage = () => {
  return (
     <div>
        {' '}
        <div class='flex flex-row justify-between gap-2 items-center w-full mx-auto'>
           <div class='bg-gray-200 rounded-xl overflow-hidden mx-auto border-4 border-white'>
              <div className=''>
                 <img
                    className=' w-40 '
                    src='/assets/images/giveStar_stock_Image.jpg'
                 />
              </div>
           </div>
        </div>
     </div>
  )
}

export default CampaignProfileImage