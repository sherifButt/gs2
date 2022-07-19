import React from 'react'

const CampaignProfileImage = ({ imgUrl, rounded, className }, { ...props }) => {
   return (
      <div>
         <div
            className={`flex flex-row justify-between gap-2 items-center w-full mx-auto`}>
            <div
               className={`bg-gray-200 overflow-hidden mx-auto border-4 ${
                  rounded ? 'rounded-full' : 'rounded-xl'
               } border-gray-100`}>
               <div className=''>
                  <img className={`w-32 lg:w-40`} src={imgUrl} />
               </div>
            </div>
         </div>
      </div>
   )
}
CampaignProfileImage.defaultProps = {
   imgUrl: '/assets/images/giveStar_stock_Image.jpg',
   rounded: false,
}
export default CampaignProfileImage
