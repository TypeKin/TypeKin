import React from 'react';
import Head from 'next/head';

import '../assets/css/main.css';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>TypeKin</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
