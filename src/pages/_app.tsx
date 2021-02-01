import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import '@core/styles/global.scss';

class ContingencyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const wrapper = (
      <>
        <Head>
          <title>UOL</title>
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <meta name="description" content="UOL" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="googlebot" content="noindex" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, minimum-scale=1, viewport-fit=cover"
          />
        </Head>
        <Component {...pageProps} />
      </>
    );
    return wrapper;
  }
}

export default ContingencyApp;
