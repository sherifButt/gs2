import React from 'react'
import { useRouter } from 'next/router'
import CampaignProfileImage from '../../../components/alerts/CampaignProfileImage'

const index = () => {
    const router = useRouter()
    console.log('router.query.id', router.query.id)
  return (
      <div><CampaignProfileImage /></div>
  )
}
index.layout='L1'
export default index