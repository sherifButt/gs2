import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const ThumbnailCard = ({ imgSrc, subText, subText2 }, { ...props }) => {
    return (

        <div className="mb-4 py-4 flex-item">
            <img src={imgSrc} className="max-w-full h-32 rounded-full" alt=""></img>



            <p className='block w-full text-gray text-center text-xs font-light'>
                {subText}
            </p>
            <p className='block w-full text-gray text-center text-xs font-light'>
                {subText2}
            </p>
        </div>





    )
}
ThumbnailCard.defaultProps = {
    imgSrc: '',
    subText: '',
    subText2:'',
}
export default ThumbnailCard