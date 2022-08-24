import React from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'

const CampaignCharityCard = ({ charities, className }, { ...props }) => {
    return (
        <div className={`flex flex-col my-5 gap-1 justify-start items-start  w-full mx-auto ${className}`}>
            {charities.map(
                charity => (
                    <li className='list-none'>
                        <div className="divide-y divide-solid divide-slate-100"></div>
                        <article className="flex items-start space-x-6 p-1">
                            <img src={charity.profileImagePath} alt="" width="80" height="60" className="flex-none rounded-md bg-slate-100" />
                            <div className="min-w-0 relative flex-auto">
                            <h1 className="font-semibold text-slate-900 truncate pr-20">Raising for</h1>
                                <h2 className="font-semibold text-slate-900 truncate pr-20">{charity.charityName}</h2>
                                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
                                    
                                
                                </dl>
                            </div>
                        </article>
                    </li>
                )
            )
            }

        </div>
    )
}
CampaignCharityCard.defaultProps = {
    charities: [],
    className: '',
}
export default CampaignCharityCard