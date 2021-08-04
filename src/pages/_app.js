import React from 'react';
import Head from 'next/head';

import { Provider } from 'next-auth/client';

import '../assets/css/main.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>TypeKin</title>
      </Head>
      <Provider session={pageProps.session}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default App;
