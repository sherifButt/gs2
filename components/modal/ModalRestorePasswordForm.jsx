import React, { useEffect, useState } from 'react'
import Modal from './Modal'
import RestorePassword from '../forms/RestorePasswordForm_00'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import {
   hideSignup,
   showSignup
} from '../../redux/features/modalSlicer'

const ModalRestorePassword = () => {
   const dispatch = useDispatch()
   const modal = useSelector(state => state.modal.restorePassword)
   return (
      <Modal active={modal.show}>
         <RestorePassword />
      </Modal>
   )
}

export default ModalRestorePassword
