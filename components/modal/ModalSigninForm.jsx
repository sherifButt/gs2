import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import SigninForm from '../forms/SigninForm'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   hideSignup,
   showSignup
} from '../../redux/features/modalSlicer'

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
