import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={`${process.env.BASE_PATH}/apple-touch-icon.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${process.env.BASE_PATH}/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${process.env.BASE_PATH}/favicon-16x16.png`}
          />
          <meta name="theme-color" content="#ce0000" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
