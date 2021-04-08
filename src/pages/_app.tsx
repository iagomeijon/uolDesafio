import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '@core/styles/global.scss';

class ContingencyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>UOL</title>
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default ContingencyApp;
