import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { GitHubProvider } from '@core/contexts/GitHubContext';
import '@core/styles/global.scss';

class ContingencyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>UOL</title>
        </Head>
        <GitHubProvider>
          <Component {...pageProps} />
        </GitHubProvider>
      </>
    );
  }
}

export default ContingencyApp;
