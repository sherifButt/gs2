import React, { useEffect, useState } from 'react'
import { SafeChargeCC } from '../../../components/nuvei/SafeCharge'
import FieldCheckbox from '../../../components/forms/FieldCheckbox'
import FieldCurrency from '../../../components/forms/FieldCurrency'
import FieldRadialSelect from '../../../components/forms/FieldRadialSelect'
import FieldTextarea from '../../../components/forms/FieldTextarea'
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
import FieldText from '../../../components/forms/FieldText'

const loadScript = src =>
   new Promise((resolve, reject) => {
      const scriptElem = Object.assign(document.createElement('script'), {
         type: 'text/javascript',
         defer: true,
         src,
         onerror: e => {
            reject(e)
         },
      })
      scriptElem.onload = () => {
         resolve()
      }
      document.body.appendChild(scriptElem)
   })

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
     const [safeCharge, setSafeCharge] = useState(null)
   const [ page, setPage ] = useState( 0 )
   const [giftAid,setGiftAid]=useState(false)

   const [donationAmount, setDonationAmount] = useState(
      campaignData?.defaultDonationSizes[2].value
   )

   const formInitialData = {
      id: campaignData?.id,
      campaignId: campaignData?.id,
      giftAid: true,
      giftAidRequest: {
         donatorName: user?.fullName,
         postZipCode: '',
         addressLine1: '',
         addressLine2: '',
         addressLine3: '',
         donatorEmail: user?.email,
      },
      currencyId: campaignData?.baseCurrencyId,
      baseCurrency: campaignData?.baseCurrency,
      donatorName: user?.fullName,
      firstName: user?.forename,
      lastName: user?.surname,
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
      voluntaryContribution: donationAmount * 0.1,
      voluntaryContributionValueHolder: 0.1,
   }

   const [formData, setFormData] = useState(formInitialData)

   useEffect(() => {
      // console.log('donationAmount', donationAmount)
      console.log('user', user)
      console.table( 'formData', formData )
      console.log('page', page)
   }, [ donationAmount, user, formData, page ] )
   
   useEffect(() => {
      loadScript(
         'https://cdn.safecharge.com/safecharge_resources/v1/websdk/safecharge.js' //production
      ).then(() => {
         setSafeCharge(
            window.SafeCharge({
               merchantId: '806659927845195034',
               merchantSiteId: '196488',
            })
         )
      })
   }, [] )
   
   return (
      <form className='divide-y mx-4 text-center'>
         <div className='flex flex-col gap-3 justify-start items-center py-2 -mt-4 sm:mt-0'>
            <div>
               <p className='block text-center text-2xl text-stone-800  font-bold'>
                  Donate to {campaignData?.supporter.forename} &apos;s{' '}
                  {campaignData?.name}
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
                           campaignData?.baseCurrency?.displaySymbol +
                           item.value,
                        value: item.value,
                     })
                  )}
                  inputHandler={e => {
                     setDonationAmount(e)
                     setFormData({ ...formData, amount: e })
                  }}
                  baseCurrency={formData?.baseCurrency}
               />

               <FieldCurrency
                  className='my-4 mt-10'
                  data={useLoadCurrencyListQuery} //List of currencies
                  value={formData.amount}
                  inputHandler={e => {
                     setFormData({
                        ...formData,
                        amount: Number(e.target.value),
                     })
                     setDonationAmount(e.target.value)
                  }}
                  inputHandlerSelect={e => {
                     setFormData({ ...formData, currencyId: e })
                  }}
                  inputHandlerBasecurrency={e => {
                     setFormData({ ...formData, baseCurrency: e })
                  }}
                  min={1}
                  step={0.01}
                  baseCurrency={campaignData?.baseCurrency}
               />

               <FieldTextarea
                  className='my-6'
                  placeholder='Write a message of support...'
                  rows={2}
                  inputHandler={e => {
                     setFormData({ ...formData, message: e.target.value })
                  }}
                  value={formData.message}
               />

               <FieldCheckbox
                  className='my-4 text-left'
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

         {page >= 1 && (
            <div className='flex flex-col gap-3 justify-start items-center py-8 '>
               <div>
                  <div>
                     <p className='block text-center text-xl text-stone-800  font-bold py-4'>
                        We don&apos;t charge charities fees
                     </p>
                     <p className='block  text-center text-sm text-stone-800  '>
                        GiveStar has a 0% platform fee on donations like these.
                        Adding a small contribution on top of your donation
                        means we can continue to support more charities and
                        their incredible work.
                     </p>
                  </div>

                  <FieldSelectVoluntaryContribution
                     forLabel='givestarSupport'
                     className='mt-12 mb-6'
                     placeholder='Voluntary Contribution'
                     donationAmount={donationAmount}
                     formData={formData}
                     setFormData={setFormData}
                     inputHandler={e => {
                        console.log('e.target', e.target.value)
                        setFormData({
                           ...formData,
                           voluntaryContribution: Number(
                              e.target.value * formData.amount
                           ),
                           voluntaryContributionValueHolder: Number(
                              e.target.value
                           ),
                        })
                     }}
                     value={formData.voluntaryContributionValueHolder}
                  />
                  <FieldText
                     hidden={formData.voluntaryContributionValueHolder}
                     id='voluntaryContributionOther'
                     name='Other'
                     className='my-6'
                     placeholder='Enter contribution amount'
                     type='text'
                     inputHandler={e => {
                        setFormData({
                           ...formData,
                           voluntaryContribution: Number(e.target.value),
                        })
                     }}
                     value={formData.voluntaryContribution}
                     validationHandler={e => {}}
                     step={0.01}
                     // min={ 0 }
                     rightText={formData.baseCurrency?.displaySymbol}
                     rightTextPadding='pl-6'
                  />
               </div>
            </div>
         )}

         {page >= 2 && (
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
                     <div className='flex flex-row gap-4 justify-center items-center mx-auto my-8'>
                        <p className='text-2xl font-bold'>
                           {formData.baseCurrency?.displaySymbol}
                           {formData.amount.toFixed(2)}
                        </p>

                        <img
                           src='/assets/images/arrow.png'
                           alt=''
                           className='w-10'
                        />
                        <p className='text-2xl font-bold'>
                           {formData.baseCurrency?.displaySymbol}
                           {(formData.amount * 1.25).toFixed(2)}
                        </p>
                     </div>

                     <p className='block  text-center text-sm text-stone-800  '>
                        I confirm that I am a UK taxpayer and I understand that
                        if I pay less income tax and/or capital gains tax in the
                        current tax year than the amount of Gift Aid claimed on
                        all my donations, it is my responsibility to pay the
                        difference.
                     </p>
                  </div>
               </div>

               <div className='flex flex-row justify-between gap-4 my-8'>
                  <ButtonPrimary
                     className='w-40'
                     text='Yes'
                     actionHandler={() => {
                        setPage(3)
                        setGiftAid(true)
                     }}
                  />
                  <ButtonPrimary
                     className='w-40 bg-gray-300 text-gray-900'
                     bgColor='bg-white'
                     text='No'
                     actionHandler={() => {
                        setPage(4)
                        setGiftAid(false)
                     }}
                  />
               </div>
            </div>
         )}

         {giftAid && (
            <div className='flex flex-col gap-3 justify-start items-center py-8 '>
               <p className='block  text-xl text-stone-800  font-bold py-4'>
                  Please accept and read these statements
               </p>
               <FieldCheckbox
                  className='my-4 text-left text-stone-800'
                  terms='This is my own money. I am not paying in donations made by a third party, e.g. money collected at an event, the pub, a company donation or a donation from a friend or family member.'
                  inputHandler={e =>
                     setFormData({
                        ...formData,
                        anonymous: e.target.checked,
                     })
                  }
                  value={formData.anonymous}
               />
               <FieldCheckbox
                  className='my-4 text-left text-stone-800'
                  terms='This donation is not made as part of a sweepstake, raffle or lottery and I am not receiving anything in return for it, e.g. book, auction prize, ticket to an event'
                  inputHandler={e =>
                     setFormData({
                        ...formData,
                        anonymous: e.target.checked,
                     })
                  }
                  value={formData.anonymous}
               />
               <div className='grid grid-cols-2 gap-4 justify-between my-8'>
                  <FieldText
                     // hidden={user?.forename}
                     id='firstName'
                     name='firstName'
                     className='my-4'
                     placeholder='First Name'
                     type='text'
                     inputHandler={e => {
                        setFormData({
                           ...formData,
                           firstName: e.target.value,
                        })
                     }}
                     value={formData.firstName}
                     validationHandler={e => {}}
                  />
                  <FieldText
                     // hidden={user?.surname}
                     id='lastName'
                     name='lastName'
                     className='my-4'
                     placeholder='Last Name'
                     type='text'
                     inputHandler={e => {
                        setFormData({
                           ...formData,
                           lastName: e.target.value,
                        })
                     }}
                     value={formData.lastName}
                     validationHandler={e => {}}
                  />
                  <FieldText
                     // hidden={user?.surname}
                     id='addressLine1'
                     name='addressLine1'
                     className='my-4'
                     placeholder='Address First Line'
                     type='text'
                     inputHandler={e => {
                        setFormData({
                           ...formData,
                           giftAidRequest: {
                              ...formData.giftAidRequest,
                              addressLine1: e.target.value,
                           },
                        })
                     }}
                     value={formData.giftAidRequest.addressLine1}
                     validationHandler={e => {}}
                  />
                  <FieldText
                     id='postcode'
                     name='postcode'
                     className='my-4'
                     placeholder='Post Code'
                     type='text'
                     inputHandler={e => {
                        setFormData({
                           ...formData,
                           giftAidRequest: {
                              ...formData.giftAidRequest,
                              postZipCode: e.target.value,
                           },
                        })
                     }}
                     value={formData.giftAidRequest.postZipCode}
                     validationHandler={e => {}}
                  />
               </div>
            </div>
         )}
         {page >= 4 && (
            <>
               <div className='items-center py-8 '>
                  <p className='block  text-xl text-stone-800   font-bold py-4'>
                     Payment method
                  </p>
                  <div className='px-8 pt-8'>
                     <FieldText
                        // hidden={user?.forename}
                        id='email'
                        name='email'
                        className='my-6 '
                        placeholder='Email'
                        type='text'
                        inputHandler={e => {
                           setFormData({
                              ...formData,
                              donatorEmail: e.target.value,
                           })
                        }}
                        value={formData.donatorEmail}
                        validationHandler={e => {}}
                     />
                  </div>

                  <div className='flex flex-col  p-8 pt-12  border rounded-3xl bg-gray-50 shadow-xl'>
                     <SafeChargeCC safeCharge={safeCharge} />
                     <FieldText
                        // hidden={user?.forename}
                        id='firstName'
                        name='firstName'
                        className='my-6 w-full'
                        placeholder='Card Number '
                        type='text'
                        inputHandler={e => {
                           setFormData({
                              ...formData,
                              firstName: e.target.value,
                           })
                        }}
                        value={formData.firstName}
                        validationHandler={e => {}}
                     />
                     <FieldText
                        // hidden={user?.forename}
                        id='firstName'
                        name='firstName'
                        className='my-6 w-full'
                        placeholder='Card Holder Name'
                        type='text'
                        inputHandler={e => {
                           setFormData({
                              ...formData,
                              firstName: e.target.value,
                           })
                        }}
                        value={formData.firstName}
                        validationHandler={e => {}}
                     />
                     <div className='flex flex-row gap-4 justify-between'>
                        <FieldText
                           // hidden={user?.forename}
                           id='Exp'
                           name='Exp'
                           className='my-6 w-full'
                           placeholder='Expire date'
                           type='tel'
                           pattern='\d\d/\d\d'
                           inputHandler={e => {
                              setFormData({
                                 ...formData,
                                 firstName: e.target.value,
                              })
                           }}
                           value={formData.firstName}
                           validationHandler={e => {}}
                        />
                        <FieldText
                           // hidden={user?.forename}
                           id='CSV'
                           name='CSV'
                           className='my-6 w-full'
                           placeholder='CSV/CVV'
                           type='text'
                           inputHandler={e => {
                              setFormData({
                                 ...formData,
                                 firstName: e.target.value,
                              })
                           }}
                           value={formData.firstName}
                           validationHandler={e => {}}
                        />
                     </div>
                  </div>
               </div>

               <div className='items-center py-8 '>
                  <p className='block  text-xl text-stone-800   font-bold py-4'>
                     Your donation
                  </p>
                  <div className='flex flex-col  gap-1 mx-8'>
                     <div className='flex flex-row justify-between'>
                        <p>Your donation</p>
                        <p>
                           {formData?.baseCurrency?.displaySymbol}
                           {formData?.amount.toFixed(2)}
                        </p>
                     </div>
                     <div className='flex flex-row justify-between'>
                        <p>GiveStar Voluntary Contribution</p>
                        <p>
                           {formData?.baseCurrency?.displaySymbol}
                           {formData?.voluntaryContribution.toFixed(2)}
                        </p>
                     </div>
                     <div className='flex flex-row justify-between'>
                        <p>Gift Aid</p>
                        <p>
                           {formData?.baseCurrency?.displaySymbol}
                           {(formData.amount * 0.25).toFixed(2)}
                        </p>
                     </div>
                  </div>
                  <div
                     className='flex flex-col gap-2 px-8 p-4
                      my-8 bg-white rounded-2xl text-xl '>
                     <div className='flex flex-row justify-between '>
                        <p>You Pay</p>
                        <p>
                           {formData?.baseCurrency?.displaySymbol}
                           {(
                              formData?.voluntaryContribution + formData.amount
                           ).toFixed(2)}
                        </p>
                     </div>
                     <div className='flex flex-row justify-between'>
                        <p>Charities recivere</p>
                        <p>
                           {formData?.baseCurrency?.displaySymbol}
                           {(formData.amount * 1.25).toFixed(2)}
                        </p>
                     </div>
                  </div>
               </div>
            </>
         )}

         {page != 2 && page != 4 && (
            <ButtonPrimary
               className='w-60'
               text={`Continue`}
               actionHandler={() => {
                  setPage(page + 1)
               }}
            />
         )}

         {page >= 4 && (
            <ButtonPrimary
               className='w-60'
               text={`Donate ${formData?.baseCurrency?.displaySymbol}${(
                  formData?.voluntaryContribution + formData.amount
               ).toFixed(2)} Securely`}
               actionHandler={() => {}}
            />
         )}

         {/* {page >= 4 && (
            <p className='my-8' onClick={() => setPage(page - 1)}>
               ←previous
            </p>
         )} */}
      </form>
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