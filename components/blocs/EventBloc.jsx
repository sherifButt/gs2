import Link from 'next/link'
import React from 'react'
import EventSimpleCard from '../cards/EventSimpleCard'

const EventBloc = ({ data, isLoading, className }) => {
   return (
      <div
         className={`flex flex-col gap-[0.56rem] justify-start items-start max-w-[33.75rem] mx-auto ${className}`}>
         {/* <div>
            <p className='block text-[1.31rem] text-black  font-semibold'>
               Events
            </p>
            <div>
               <p className='block text-right text-[0.81rem] text-neutral-400  font-bold'>
                  SEE MORE
               </p>
            </div>
         </div> */}
         <ul className='grid grid-cols-2 gap-4 my-8'>
            {data?.map((item, idx) => (
               <li key={item.id}>
                  <Link
                     href={`/basecamp/fundraiser-campaign/${item?.quickCode}`}>
                     <a>
                        <EventSimpleCard data={item} />
                     </a>
                  </Link>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default EventBloc
