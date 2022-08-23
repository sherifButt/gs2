import React, { useEffect, useState } from 'react'
import SimpleCardVertical from '../../components/cards/SimpleCardVertical'
import Tab from '../../components/tabs/TabHorizontal'
import Panel from '../../components/tabs/Panel'
import { selectCurrentAuth } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

import EventBloc from '../../components/blocs/EventBloc'
import { useGetMyListQuery } from '../../features/campaign/campaignApiSlice'

import { wrapper } from '../../app/store'
import { skipToken } from '@reduxjs/toolkit/dist/query'

const initialTabs = [
   { title: 'Your Campaigns', body: <li>stuff</li>, href: '#', current: true },
   { title: 'Pinned', body: <li>other stuff</li>, href: '#', current: false },
]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

const Basecamp = ({ name }) => {
   const dispatch = useDispatch()
   const { isAuthenticated } = useSelector(selectCurrentAuth)

   const {
      data: campaignListData,
      isLoading: campaignListDataIsLoading,
      isSuccess: campaignListDataIsSuccess,
   } = useGetMyListQuery(
      isAuthenticated
         ? () => {
              dispatch(api.util.invalidateTags(['Campaign']))
           }
         : skipToken
   )

   const createSomething = (
      <div className='flex flex-col gap-6 justify-start items-center max-w-[18.94rem] mx-auto'>
         <div className='flex flex-row gap-5 justify-start items-start'>
            <div>
               <img
                  className='block'
                  src='/assets/images/givestar-fetured-01.png'
               />
            </div>
         </div>
         <p className='block text-center text-2xl text-black  font-light'>
            Start Something Today
         </p>
         <p className='block w-[18.94rem] text-center text-lg text-black  font-light'>
           
         </p>
      </div>
   )

   const [yourCampaigns, setYourCampaigns] = useState(createSomething)

   useEffect(() => {
      // console.log('campaignListData', campaignListData)

      campaignListData && 
         setYourCampaigns(
            <>
               <EventBloc
                  data={campaignListData}
                  isLoading={campaignListDataIsLoading}
               />
            </>
         )
   }, [campaignListData])

   return (
      <div className='mx-4'>
         {/* {yourCampaigns} */}
         <Tab>
            <Panel title='Your Campaigns' current>
               {campaignListData && campaignListData.length>0? <EventBloc
                  data={campaignListData}
                  isLoading={campaignListDataIsLoading}
               />:<div>{createSomething}</div>}
            </Panel>
            {/* <Panel title='Pinned'>{createSomething}</Panel> */}
         </Tab>
      </div>
   )
}

export default Basecamp

export const getServerSideProps = wrapper.getServerSideProps(
   store => async () => {
      return {
         props: { name: 'sherif' },
      }
   }
)
