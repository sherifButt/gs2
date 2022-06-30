import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import SigninForm from '../../features/auth/SigninForm_00'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   hideSignup,
   showSignup
} from '../../features/modalSlice'

const ModalSignupForm = () => {
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.signin)
   return (
      <Modal active={modal.show}>
         <SigninForm />
      </Modal>
   )
}

export default ModalSignupForm
