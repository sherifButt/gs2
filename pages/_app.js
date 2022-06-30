import '../styles/globals.css'
import { store, persistor } from '../app/store'
import { Provider } from 'react-redux'
// persist
import { PersistGate } from 'redux-persist/integration/react'


import Portal from '../HOC/Portal'

import Layout1 from '../components/Layout/Layout1'
import Layout2 from '../components/Layout/Layout2'
import Layout3 from '../components/Layout/Layout3'
import Layout4 from '../components/Layout/Layout4'
import Layout5 from '../components/Layout/Layout5'
import Layout6 from '../components/Layout/Layout6'
import SignUpModal from '../components/modal/SignUpModalValidation'
import Modal from '../components/modal/Modal'
import SignupForm from '../components/forms/SignupForm'
import ModalSignupForm from '../components/modal/ModalSignupForm'
import ModalSigninForm from '../components/modal/ModalSigninForm'
import ModalRestorePasswordForm from '../components/modal/ModalRestorePasswordForm'

import Notifications from '../components/modal/NotificationsGroupedStack'
import SignInModal from '../components/modal/SignInModal'
import RestorePasswprdModal from '../components/modal/RestorePasswprdModal'

const layouts = {
   L1: Layout1,
   L2: Layout2,
   L3: Layout3,
   L4: Layout4,
   L5: Layout5,
   L6: Layout6,
}

function MyApp({ Component, pageProps }) {
   const Layout =
      typeof Component.layout === 'function'
         ? Component.layout
         : layouts[Component.layout] || Layout5
   console.log('Component.layout', typeof Component.layout)
   return (
      <Provider store={store}>
            <Layout
               rightSidebar={Component.rightSidebar}
               leftSidebar={Component.leftSidebar}
               footer={Component.footer}>
            <PersistGate loading={ null } persistor={ persistor }>
               <Portal>
                  <Notifications />
                  <ModalSignupForm />
                  <ModalSigninForm />
                  <ModalRestorePasswordForm />
               </Portal>
         
               <Component {...pageProps} />
         </PersistGate>
            </Layout>
      </Provider>
   )
}

export default MyApp
