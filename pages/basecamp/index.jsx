import React, { useEffect, useState } from 'react'
import SimpleCardVertical from '../../components/cards/SimpleCardVertical'
import Tab from '../../components/tabs/TabHorizontal'
import Panel from '../../components/tabs/Panel'
import { selectCurrentAuth } from '../../features/auth/authSlice'
import { useDispatch,useSelector } from 'react-redux'

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

const Basecamp = ( { name } ) => {

const dispatch = useDispatch()
   const { isAuthenticated } = useSelector( selectCurrentAuth )
   
   const {
      data: campaignListData,
      isLoading: campaignListDataIsLoading,
      isSuccess: campaignListDataIsSuccess,
   } = useGetMyListQuery( isAuthenticated ? ()=>{dispatch(api.util.invalidateTags(['Campaign']))} :skipToken )

   // console.log('campaignListData', campaignListData)
  
   const [ yourCampaigns, setYourCampaigns ] = useState( <p>nothing....</p> )
   
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
               {yourCampaigns}
            </Panel>
            <Panel title='Pinned'>... nothing pind yet</Panel>
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