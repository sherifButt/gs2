import { useEffect, useState } from 'react'
import { RadioGroup } from '@headlessui/react'
import SpinningWheel from '../icons/SpinningWheel'

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function FieldRadialSelect({ data, inputHandler }) {
   const [donation, setDonation] = useState(data[2])
   // useEffect( () => {
   //    setDonation(data[2])
   // }, [] )
   // useEffect(() => {
   // //   inputHandler(donation)
   // }, [data])
   
   return (
      <div className='my-8 mx-auto'>
         <RadioGroup value={donation} onChange={setDonation} className='mt-2'>
            <RadioGroup.Label className='sr-only'>
               Choose a Donation amount
            </RadioGroup.Label>
            <div className='grid gap-3 grid-cols-5   '>
               {data.map((option, idx) => (
                  <RadioGroup.Option
                     key={option.name}
                     value={option.value}
                     // defaultValue={option[2]}
                     checked={ idx == 2 }
                     onClick={()=>inputHandler(option.value)}
                     className={({ active, checked }) =>
                        classNames(
                           active ? 'ring-2 ring-offset-2 ring-army-500' : '',
                           checked
                              ? 'bg-army-600 border-transparent text-white hover:bg-army-700'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                           'border rounded-full py-4 sm:py-6 px-4 flex items-center justify-center text-xl sm:text-2xl font-medium uppercase sm:flex-1'
                        )
                     }>
                     <RadioGroup.Label
                        as='span'
                        key={option.value}
                        value={option?.value}>
                        {option.name ? option.name : <SpinningWheel />}
                     </RadioGroup.Label>
                  </RadioGroup.Option>
               ))}
            </div>
         </RadioGroup>
      </div>
   )
}

FieldRadialSelect.defaultProps = {
   data: [
      { id: 'flkajs5', name: '£5', value: 5, checked: false },
      { id: 'fdsa56', name: '£10', value: 10, checked: false },
      { id: 'fasd8', name: '£20', value: 20, checked: true },
      { id: 'rwer6', name: '£50', value: 50, checked: false },
      { id: 'rweq4', name: '£100', value: 100, checked: false },
   ],
}
