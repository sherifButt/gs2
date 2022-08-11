import React, { memo, useEffect, useState } from 'react'
import FieldText from '../forms/FieldText'
import styles from './styles.module.css'
export const SafeChargeCC = memo(({ safeCharge }) => {
   const [cardN, setCardN] = useState(null)
   const [sessionToken, setSessionToken] = useState('')
   const [cardHolderName, setCardHolderName] = useState('CL-BRW1')

   useEffect(() => {
      if (safeCharge) {
         const safeChargeFields = safeCharge.fields({
            fonts: [{ cssUrl: '' }],
            locale: 'en',
            fontSize: '16px',
         })

         // Card number----------------------------------------------------

         const cardNumber = safeChargeFields.create('ccNumber', {
            // style: {
            //    base: {
            //       fontSize: '16px',
            //       border: '1px solid gray',

            //       boxShadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
            //       backgroundColor: 'white',
            //       borderRadius: '12px',
            //       padding: '4px',
            //       margin:'6px'
                  
            //    },
            // },
         })

         cardNumber.attach('#card-number')

         const cardExpiry = safeChargeFields.create('ccExpiration', {
            style: {
               base: {
                  fontSize: '16px',
               },
            },
         })

         // cardExpiry.on("change", (evt) => {
         //   console.log("cardExpiry change event >>>", evt);
         // });

         // cardExpiry.on("error", (evt) => {
         //   console.log("cardExpiry error event >>>", evt);
         // });

         cardExpiry.attach('#card-expiry')

         // CVV--------------------------------------------------------------

         const cardCvc = safeChargeFields.create('ccCvc', {
            style: {
               base: {
                  fontSize: '16px',
               },
            },
         })

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
                  cardHolderName: cardHolderName,
                  paymentOption: cardN,
                  billingAddress: {
                     email: 'someone@somedomain.com',
                     country: 'GB',
                  },
               },
               resp => console.log(resp)
            )
         } catch (e) {
            console.error(e)
         }
      }
   }

   // const authenticate3d = e => {
   //    if (cardN) {
   //       try {
   //          safeCharge.authenticate3d(
   //             {
   //                sessionToken: sessionToken,
   //                cardHolderName: cardHolderName,
   //                paymentOption: cardN,
   //                billingAddress: {
   //                   email: 'someone@somedomain.com',
   //                   country: 'GB',
   //                },
   //             },
   //             resp => console.log(resp)
   //          )
   //       } catch (e) {
   //          console.error(e)
   //       }
   //    }
   // }

   const getToken = e => {
      if (cardN) {
         try {
            safeCharge
               .getToken(cardN, {
                  sessionToken: sessionToken,
                  cardHolderName: cardHolderName,
                  paymentOption: cardN,
                  billingAddress: {
                     email: 'someone@somedomain.com',
                     country: 'GB',
                  },
               })
               .then(function (result) {
                  if (result.status === 'SUCCESS') {
                     console.log(result) //pass the paymentOption to the payment API call
                  } else {
                     console.log(result)
                  }
               })
         } catch (e) {
            console.error(e)
         }
      }
   }

   return (
      <>
         <div className='container'>
            <div className='item sessionfield'>
               <FieldText
                  id='sessionField'
                  name='sessionField'
                  className='my-6 '
                  placeholder='Session Token'
                  type='text'
                  inputHandler={e => setSessionToken(e.target.value)}
                  value={sessionToken}
                  validationHandler={e => {}}
               />
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
                  className='my-6 '
                  placeholder='Cardholder Name'
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
            <div className='item'>
               <label htmlFor='card-number'>Card Number</label>
               <div id='card-number' className={styles.input} />

               {/* <FieldText
                  id='card-number'
                  name='card-number'
                  className='my-6 '
                  placeholder='cardnumber'
                  type='text'
                  inputHandler={e=>{}}
                  
                  validationHandler={e => {}}
               /> */}
            </div>

            <div className='item'>
               <label htmlFor='card-expiry'>Expiration Date</label>
               <div id='card-expiry' className={`${styles.input} ${styles.empty}`} />
            </div>

            <div className='item'>
               <label htmlFor='card-cvc'>CVC</label>
               <div id='card-cvc' className={`${styles.input} ${styles.empty}`} />
            </div>
            <div className='item100'>
               <button className='pay-button' onClick={createPayment}>
                  Create Payment
               </button>

               <button className='pay-button' onClick={authenticate3d}>
                  Authenticate3d
               </button>

               <button className='pay-button' onClick={getToken}>
                  getToken
               </button>
            </div>
         </div>
      </>
   )
})
