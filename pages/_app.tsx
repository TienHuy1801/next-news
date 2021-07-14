import '../styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from '../store';
import React from 'react';
import Design from '../components/Design';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <Provider store={store}>
      <Design>
        <Component {...pageProps} />
      </Design>
    </Provider>
  ); 
}
export default MyApp
