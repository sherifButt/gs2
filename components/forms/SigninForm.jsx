import React from 'react'
import { signin } from './fomrs'
import Modal from '../modal/Modal'

const Signin = () => {
   return (
      <Modal active>
         {signin.fields.map((field,i) => (
            <field.component key={field.id} {...field} />
         ))}
      </Modal>
   )
}

export default Signin
