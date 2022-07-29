import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const donationOptions = [
   { name: '£5', inStock: true },
   { name: '£10', inStock: true },
   { name: '£20', inStock: true },
   { name: '£50', inStock: true },
   { name: '£100', inStock: true }

]

function classNames(...classes) {
   return classes.filter(Boolean).join(' ')
}

export default function Example() {
   const [donation, setDonaion] = useState(donationOptions[2])

   return (
      <div className='my-10 mx-auto'>
         <RadioGroup value={donation} onChange={setDonaion} className='mt-2'>
            <RadioGroup.Label className='sr-only'>
               Choose a Donation amount
            </RadioGroup.Label>
            <div className='grid grid-cols-3 gap-3 sm:grid-cols-5 '>
               {donationOptions.map(option => (
                  <RadioGroup.Option
                     key={option.name}
                       value={ option }
                       defaultValue={option[2]}
                     className={({ active, checked }) =>
                        classNames(
                           option.inStock
                              ? 'cursor-pointer focus:outline-none'
                              : 'opacity-25 cursor-not-allowed',
                           active ? 'ring-2 ring-offset-2 ring-army-500' : '',
                           checked
                              ? 'bg-army-600 border-transparent text-white hover:bg-army-700'
                              : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50',
                           'border rounded-full py-8 sm:py-6 px-4 flex items-center justify-center text-lg font-medium uppercase sm:flex-1'
                        )
                     }
                     disabled={!option.inStock}>
                     <RadioGroup.Label as='span'>
                        {option.name}
                     </RadioGroup.Label>
                  </RadioGroup.Option>
               ))}
            </div>
         </RadioGroup>
      </div>
   )
}
