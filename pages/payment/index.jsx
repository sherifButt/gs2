import React, { useState } from 'react'
import FieldCheckbox from '../../components/forms/FieldCheckbox'
import FieldCurrency from '../../components/forms/FieldCurrency'
import FieldRadialSelect from '../../components/forms/FieldRadialSelect'
import FieldText from '../../components/forms/FieldTextarea'
import FieldSelect from '../../components/forms/FieldSelect'
import FieldLabel from '../../components/forms/FieldLabel'

//Data
import { useLoadCurrencyListQuery } from '../../features/currency/currencyApiSlice'
import ButtonPrimary from '../../components/buttons/ButtonPrimary'

const Index = () => {
   const [page, setPage] = useState(0)
   const [donationAmount, setDonationAmount] = useState()
   return (
      <div className='divide-y mx-4 text-center'>
         <div className='flex flex-col gap-3 justify-start items-center py-2'>
            <div>
               <p className='block text-center text-xl text-stone-800  font-bold'>
                  Donate to Alex’s Big Run
               </p>
               <p className='block opacity-[0.80] text-center text-xs text-stone-800  font-medium'>
                  Fundraising on behalf of:
               </p>
            </div>
            <div className='flex flex-row gap-5 justify-start items-start'>
               <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <img
                     className='block w-20 rounded-xl'
                     src='/assets/images/giveStar_stock_Image.jpg'
                  />
                  <p className='block w-[3.13rem]   text-center text-xs text-stone-800  font-medium'>
                     Parkinson’s UK
                  </p>
               </div>
               <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <img
                     className='block w-20 rounded-xl'
                     src='/assets/images/giveStar_stock_Image.jpg'
                  />
                  <p className='block w-[3.13rem]   text-center text-xs text-stone-800  font-medium'>
                     Christian Aid
                  </p>
               </div>
               <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <img
                     className='block w-20 rounded-xl'
                     src='/assets/images/giveStar_stock_Image.jpg'
                  />
                  <p className='block w-[3.13rem]   text-center text-xs text-stone-800  font-medium'>
                     British Heart Foundation
                  </p>
               </div>
               <div className='flex flex-col gap-1.5 justify-center items-center'>
                  <img
                     className='block w-20 rounded-xl'
                     src='/assets/images/giveStar_stock_Image.jpg'
                  />
                  <p className='block w-[3.13rem]   text-center text-xs text-stone-800  font-medium'>
                     Royal Marsden Cancer Charity
                  </p>
               </div>
            </div>
         </div>
         {page == 0 && (
            <div className='flex flex-col gap-3 justify-start items-center py-8 '>
               <div>
                  <div>
                     <p className='block text-center text-xl text-stone-800  font-bold'>
                        Choose Donation Amount
                     </p>
                  </div>
                  <FieldRadialSelect />
                  <FieldCurrency
                     className='my-4'
                     data={useLoadCurrencyListQuery}
                     defaultValue={20}
                  />
                  <FieldText
                     className='my-4'
                     placeholder='Write a message of support...'
                     rows={2}
                  />
                  <FieldCheckbox
                     className='my-4'
                     terms='Make my donation and message anonymous from public view'
                  />
               </div>
            </div>
         )}

         {page == 1 && (
            <div className='flex flex-col gap-3 justify-start items-center py-8 '>
               <div>
                  <div>
                     <p className='block text-center text-xl text-stone-800  font-bold py-4'>
                        We don't charge charities fees
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
                  <FieldSelect
                     forLabel='givestarSupport'
                     className='my-8 '
                     placeholder='Voluntary Contribution'
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
         {(page != 0 || page != 2) && (
            <p className='my-8' onClick={() => setPage(page - 1)}>
               ←previous
            </p>
         )}
      </div>
   )
}
Index.layout = 'L2'
export default Index
