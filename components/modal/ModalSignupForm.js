import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import SignupForm from '../forms/SignupForm'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   hideSignup,
   showSignup
} from '../../redux/features/modalSlicer'

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
