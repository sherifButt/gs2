import '../styles/globals.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

import Layout1 from '../components/Layout/Layout1'
import Layout2 from '../components/Layout/Layout2'
import Layout3 from '../components/Layout/Layout3'
import Layout4 from '../components/Layout/Layout4'
import Layout5 from '../components/Layout/Layout5'
const layouts = {
   L1: Layout1,
   L2: Layout2,
   L3: Layout3,
   L4: Layout4,
   L5: Layout5,
   
}

function MyApp({ Component, pageProps }) {
   const Layout = layouts[Component.layout] || Layout1
   return (
      <Provider store={store}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
      </Provider>
   )
}

export default MyApp
