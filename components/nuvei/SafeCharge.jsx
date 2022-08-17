import React, { memo, useEffect, useState } from 'react'
import ButtonPrimary from '../buttons/ButtonPrimary'
import FieldText from '../forms/FieldText'
import styles from './styles.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { addNotification } from '../../features/notificationSlice'
import { useRouter } from 'next/router'

export const SafeChargeCC = memo(
   ({
      safeCharge,
      donationId,
      emailAddress,
      sessionToken,
      merchantId,
      merchantSiteId,
      donatorName,
      donationAmount,
      volounTarlyContrubution,
      currencySymbol,
   } ) => {
      const route = useRouter()
      const dispatch = useDispatch()
      const [cardN, setCardN] = useState(null)
      // const [sessionToken, setSessionToken] = useState('')
      const [cardHolderName, setCardHolderName] = useState(donatorName)
      // const[_sessionToken,setSessionToken]=useState(sessionToken)

      useEffect(() => {
         // setSessionToken(sessionToken)
         if (safeCharge) {
            const safeChargeFields = safeCharge.fields({
               // fonts: [{ cssUrl: '' }],
               fontSize: '16px',
               fontWeight: '200',
            })

            // Card number----------------------------------------------------

            const cardNumber = safeChargeFields.create('ccNumber', {
               style: {
                  base: {
                     fontSize: '16px',
                     fontWeight: '200',
                  },
               },
            })

            cardNumber.attach('#card-number')

            const cardExpiry = safeChargeFields.create('ccExpiration', {
               style: {
                  base: {
                     fontSize: '16px',
                     fontWeight: '200',
                  },
               },
            })

            cardExpiry.attach('#card-expiry')

            // CVV--------------------------------------------------------------

            const cardCvc = safeChargeFields.create('ccCvc', {
               style: {
                  base: {
                     fontSize: '16px',
                     fontWeight: '200',
                  },
               },
            })
            console.log('safeCharge', safeCharge)
            cardCvc.attach('#card-cvc')
            console.log(cardNumber)
            setCardN(cardNumber)
         }
      }, [safeCharge])

      const createPayment = e => {
         if (cardN) {
            try {
               safeCharge.createPayment(
                  {
                     sessionToken: sessionToken,
                     clientUniqueId: donationId,
                     clientRequestId: donationId,
                     merchantId,
                     merchantSiteId,

                     cardHolderName: cardHolderName,
                     paymentOption: cardN,
                     billingAddress: {
                        email: emailAddress,
                        country: 'GB',
                     },
                  },
                  resp => {
                     console.log('sucess', resp)
                     dispatch(
                        addNotification({
                           isSuccess: resp?.result == 'ERROR' ? false : true,
                           message: resp?.result,
                           description:
                              resp?.result == 'ERROR'
                                 ? resp?.errorDescription
                                    ? resp?.errorDescription
                                    : 'Your payment Failed!'
                                 : 'Your payment went through successfully',
                        })
                     )
                     if (resp.result === 'APPROVED') {
                        setTimeout(() => {
                           route.push('/donate/thank_you')
                        }, 1000)
                     }
                  }
               )
            } catch (e) {
               console.error(e)
               resp => {
                  console.log('error', resp)
                  dispatch(
                     addNotification({
                        isSuccess: false,
                        message: 'Failed!',
                        description: 'Your payment Failed!!',
                     })
                  )
               }
            }
         }
      }

      return (
         <>
            <div className='container'>
               <div className='item sessionfield'>
                  {/* <FieldText
                     id='sessionField'
                     name='sessionField'
                     className='my-6 '
                     placeholder='Session Token'
                     type='text'
                     inputHandler={e => setSessionToken(e.target.value)}
                     value={sessionToken}
                     validationHandler={e => {}}
                  /> */}
                  {/* <label htmlFor='sessionField'>Session Token</label>
               <input
                  id='sessionField'
                  placeholder='Session Token'
                  type='text'
                  value={sessionToken}
                  onChange={e => setSessionToken(e.target.value)}
                  className='mt-1 relative shadow-sm block w-full py-3 pl-3 pr-10 placeholder-transparent  text-gray-900  focus:outline-none border focus:ring-gray-300 focus:border-gray-300 border-gray-200 sm:text-md rounded-xl transition-all ease-out duration-300'
               /> */}
               </div>

               <div className='item'>
                  <FieldText
                     id='cardHolderName'
                     name='cardHolderName'
                     className=''
                     placeholder='Cardholder Name (as Printed on card)'
                     type='text'
                     inputHandler={e => setCardHolderName(e.target.value)}
                     value={cardHolderName}
                     validationHandler={e => {}}
                  />
                  {/* <label htmlFor='cardHolderName'>Cardholder Name</label>
               <input
                  id='cardHolderName'
                  placeholder='Cardholder Name'
                  type='text'
                  value={cardHolderName}
                  onChange={e => setCardHolderName(e.target.value)}
               /> */}
               </div>
               <div className='item text-left'>
                  <label
                     htmlFor='card-number'
                     className='text-sm text-left font-medium pl-4'>
                     Card Number
                  </label>
                  <div id='card-number' className={styles.input} />
               </div>

               <div className='flex flex-row gap-4 text-left'>
                  <div className='item w-full '>
                     <label
                        htmlFor='card-expiry'
                        className='text-sm text-left font-medium pl-4'>
                        Expiration Date
                     </label>
                     <div
                        id='card-expiry'
                        className={`${styles.input} ${styles.empty}`}
                     />
                  </div>

                  <div className='item w-full'>
                     <label
                        htmlFor='card-cvc'
                        className='text-sm text-left font-medium pl-4'>
                        CVC/CVV
                     </label>
                     <div
                        id='card-cvc'
                        className={`${styles.input} ${styles.empty}`}
                     />
                  </div>
               </div>
               <div className='item100'>
                  {/* <button
                  className='pay-button bg-yellow-400'
                  onClick={createPayment}>
                  Create Payment
               </button> */}
                  <ButtonPrimary
                     text={`Donate ${currencySymbol}${(
                        donationAmount + volounTarlyContrubution
                     ).toFixed(2)} Securely`}
                     actionHandler={e => {
                        e.preventDefault()
                        createPayment()
                     }}
                     className='mt-8'
                  />

                  {/* <button className='pay-button' onClick={authenticate3d}>
                  Authenticate3d
               </button>

               <button className='pay-button' onClick={getToken}>
                  getToken
               </button> */}
               </div>
            </div>
         </>
      )
   }
)
