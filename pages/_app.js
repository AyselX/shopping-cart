import { Provider } from 'react-redux';
import ContainerLayout from '../components/ContainerLayout';
import store from '../redux/store';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Provider store={store}>
    <ContainerLayout>
    <Component {...pageProps} />
    </ContainerLayout>
  </Provider>
}

export default MyApp
