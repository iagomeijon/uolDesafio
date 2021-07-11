import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="shortcut icon" href="/static/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
