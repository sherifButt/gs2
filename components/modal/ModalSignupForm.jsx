import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import SignupForm from '../forms/SignupForm_00'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   hideSignup,
   showSignup
} from '../../features/modalSlice'

const ModalSignupForm = () => {
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.signup)
   return (
      <Modal active={modal.show}>
         <SignupForm />
      </Modal>
   )
}

export default ModalSignupForm
