import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'
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

import Notifications from '../components/modal/NotificationsStack'
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
   const Layout = layouts[Component.layout] || Layout1
   return (
      <Provider store={store}>
         <Layout>
            <Portal>
               <SignInModal />
               <SignUpModal />
               <RestorePasswprdModal />
               {/* <Notifications /> */}
               <Notifications isNotification />
               <SignupForm isActive />
            </Portal>
            <Component {...pageProps} />
         </Layout>
      </Provider>
   )
}

export default MyApp
