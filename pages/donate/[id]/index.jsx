import React, { useEffect, useState } from 'react'
import FieldCheckbox from '../../../components/forms/FieldCheckbox'
import FieldCurrency from '../../../components/forms/FieldCurrency'
import FieldRadialSelect from '../../../components/forms/FieldRadialSelect'
import FieldText from '../../../components/forms/FieldTextarea'
import FieldSelectVoluntaryContribution from '../../../components/forms/FieldSelectVoluntaryContribution'
import FieldLabel from '../../../components/forms/FieldLabel'
import { useRouter } from 'next/router'
import { wrapper } from '../../../app/store'
import {
   getRunningOperationPromises,
   getByQuickCode,
} from '../../../features/campaign/campaignApiSlice'
//Data
import { useLoadCurrencyListQuery } from '../../../features/currency/currencyApiSlice'
import { useGetByQuickCodeQuery } from '../../../features/campaign/campaignApiSlice'
import ButtonPrimary from '../../../components/buttons/ButtonPrimary'
import { useLoadUserQuery } from '../../../features/user/userApiSlice'
import { selectCurrentUser } from '../../../features/user/userSlice'
import { useDispatch, useSelector } from 'react-redux'

const Donate = ({ data: campaignData }) => {
   const user = useSelector(selectCurrentUser)
   const { data: userData } = useLoadUserQuery()
   const router = useRouter()

   // console.log('router.query.id', router.query.id)
   // const {
   //    data: campaignData,
   //    isLoading: campaignDataIsLoading,
   //    error: campaignDataError,
   // } = useGetByQuickCodeQuery({ query: router.query.id })

   // console.log('campaignData', campaignData)
   const [page, setPage] = useState(0)

   const [donationAmount, setDonationAmount] = useState(
      campaignData?.defaultDonationSizes[2].value
   )

   const formInitialData = {
      id: campaignData?.id,
      campaignId: campaignData?.id,
      giftAid: true,
      giftAidRequest: {
         donatorName: user.fullName,
         postZipCode: '',
         addressLine1: '',
         addressLine2: '',
         addressLine3: '',
         donatorEmail: user.email,
      },
      currencyId: campaignData?.baseCurrencyId,
      donatorName: user.fullName,
      message: '',
      amount: campaignData?.defaultDonationSizes[2].value,
      anonymous: true,
      paymentProviderId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
      supporterId: user?.id,
      feesCovered: true,
      giftValue: 0,
      paymentProviderRef: '',
      donationSource: 1,
      donationType: 1,
      privateDonation: true,
      donatorEmail: user?.email,
   }

   const [formData, setFormData] = useState(formInitialData)

   useEffect(() => {
      // console.log('donationAmount', donationAmount)
      // console.log('user', user)
      console.table('formData', formData)
   }, [donationAmount, user, formData])
   return (
      <div className='divide-y mx-4 text-center'>
         <div className='flex flex-col gap-3 justify-start items-center py-2 -mt-4 sm:mt-0'>
            <div>
               <p className='block text-center text-xl text-stone-800  font-bold'>
                  Donate to {campaignData?.supporter.forename} &apos;s{' '}
                  {campaignData?.name} {formData.donatorName}
               </p>
               <p className='block opacity-[0.80] text-center text-xs text-stone-800  font-medium'>
                  Fundraising on behalf of:
               </p>
            </div>
            <div className='flex flex-row gap-5 justify-start items-start'>
               {campaignData?.campaignCharities.map((item, idx) => (
                  <div
                     key={item.charityId}
                     className='flex flex-col gap-1.5 justify-center items-center'>
                     <div className='w-20 h-20 items-center'>
                        <img
                           className=' w-20  rounded-xl'
                           src={
                              item.profileImagePath ||
                              `/assets/images/giveStar_stock_Image.jpg`
                           }
                        />
                     </div>
                     <p className='block w-[3.13rem]   text-center text-xs text-stone-800  font-medium'>
                        {item.charityName || '33'}
                     </p>
                  </div>
               ))}
            </div>
         </div>
         {page == 0 && (
            <div className='flex flex-col gap-3 justify-start items-center py-4 '>
               <div>
                  <div>
                     <p className='block text-center text-xl text-stone-800  font-bold'>
                        Choose Donation Amount
                     </p>
                  </div>
                  <FieldRadialSelect
                     data={campaignData?.defaultDonationSizes?.map(
                        (item, idx) => ({
                           id: item.id,
                           name:
                              campaignData?.baseCurrency.displaySymbol +
                              item.value,
                           value: item.value,
                        })
                     )}
                     inputHandler={e => {
                        setDonationAmount(e)
                        setFormData({ ...formData, amount: e })
                     }}
                  />
                  <FieldCurrency
                     className='my-4'
                     data={useLoadCurrencyListQuery} //List of currencies
                     value={formData.amount}
                     inputHandler={e => {
                        // console.log('FieldCurrency e:', e.target.value)
                        setDonationAmount(e.target.value)
                        setFormData({
                           ...formData,
                           amount: parseInt(e.target.value),
                        })
                     }}
                     inputHandlerSelect={e => {
                        console.log('--------')
                        console.table(e)
                        console.debug(e)
                        setFormData({ ...formData, currencyId: e })
                     }}
                     min={1}
                     step={1}
                     baseCurrency={campaignData?.baseCurrency}
                  />
                  <FieldText
                     className='my-6'
                     placeholder='Write a message of support...'
                     rows={2}
                     inputHandler={e => {
                        setFormData({ ...formData, message: e.target.value })
                     }}
                     value={formData.message}
                  />
                  <FieldCheckbox
                     className='my-4'
                     terms='Make my donation and message anonymous from public view'
                     inputHandler={e =>
                        setFormData({
                           ...formData,
                           anonymous: e.target.checked,
                        })
                     }
                     value={formData.anonymous}
                  />
               </div>
            </div>
         )}

         {page == 1 && (
            <div className='flex flex-col gap-3 justify-start items-center py-8 '>
               <div>
                  <div>
                     <p className='block text-center text-xl text-stone-800  font-bold py-4'>
                        We don&apos;t charge charities fees
                     </p>
                     <p className='block opacity-[0.80] text-center text-xs text-stone-800  font-medium'>
                        GiveStar has a 0% platform fee on donations like these.
                        Adding a small contribution on top of your donation
                        means we can continue to support more charities and
                        their incredible work.
                     </p>
                  </div>
                  {/* <FieldLabel
                  className='my-4 text-xl'
                  forLabel='givestarSupport'
                  text='Voluntary Contribution'
               /> */}
                  <FieldSelectVoluntaryContribution
                     forLabel='givestarSupport'
                     className='my-8 '
                     placeholder='Voluntary Contribution'
                     formData={formData}
                  />
               </div>
            </div>
         )}

         {page == 2 && (
            <div
               className='flex flex-col gap-3 justify-between
             items-center py-8 '>
               <div>
                  <div>
                     <img
                        className='mx-auto'
                        src='/assets/images/giftaidit.png'
                        alt=''
                     />
                     <p className='block text-center text-xl text-stone-800  font-bold py-4'>
                        Give 25% more for free with Gift Aid
                     </p>
                     <p className='block opacity-[0.80] text-center text-xs text-stone-800  font-medium'>
                        I confirm that I am a UK taxpayer and I understand that
                        if I pay less income tax and/or capital gains tax in the
                        current tax year than the amount of Gift Aid claimed on
                        all my donations, it is my responsibility to pay the
                        difference.
                     </p>
                  </div>
               </div>

               <div className='flex flex-row justify-between gap-4'>
                  <ButtonPrimary
                     className='w-32'
                     text='Yes'
                     actionHandler={() => {
                        setPage(3)
                     }}
                  />
                  <ButtonPrimary
                     className='w-32 '
                     bgColor='bg-white'
                     text='No'
                     actionHandler={() => {
                        setPage(4)
                     }}
                  />
               </div>
            </div>
         )}
         {page != 2 && (
            <ButtonPrimary
               className='w-60'
               text='Continue'
               actionHandler={() => {
                  setPage(page + 1)
               }}
            />
         )}
         {page != 0 && (
            <p className='my-8' onClick={() => setPage(page - 1)}>
               ←previous
            </p>
         )}
         {page == 0 && <p className='uppercase'>donate with confidence</p>}
      </div>
   )
}

// export const getServerSideProps = wrapper.getServerSideProps(
//    store => async context => {
//       const quickCode = context.params?.name
//       if (typeof quickCode === 'string') {
//          store.dispatch(getByQuickCode.initiate(quickCode ))
//       }
//       await Promise.all(getRunningOperationPromises())

//       return {
//          props: {},
//       }
//    }
// )

export const getServerSideProps = async context => {
   // console.log('context', context)
   const res = await fetch(
      `https://api.gs2dev.co.uk/api/v1/Campaign/GetByQuickCode/?quickCode=${context.query.id}`
   )
   const data = await res.json()

   return { props: { data } }
}

Donate.layout = 'L2'
export default Donate
