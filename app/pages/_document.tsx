import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta
            name="description"
            content="emruby: A Ruby interpreter on browser"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="emruby: A Ruby interpreter on browser"
          />
          <meta property="og:url" content={process.env.BASE_PATH} />
          <meta
            property="og:description"
            content="A demonstration of emruby, a MRI that works on browser"
          />
          <meta
            property="og:site_name"
            content="emruby: A Ruby interpreter on browser"
          />
          <meta
            property="og:image"
            content={`${process.env.BASE_PATH}/ogp.png`}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content="emruby: A Ruby interpreter on browser"
          />
          <meta name="twitter:site" content="@mametter" />
          <meta name="twitter:creator" content="@mametter" />
          <meta
            name="twitter:title"
            content="emruby: A Ruby interpreter on browser"
          />
          <meta
            name="twitter:description"
            content="A demonstration of emruby, a MRI that works on browser"
          ></meta>
          <meta
            name="twitter:image"
            content={`${process.env.BASE_PATH}/ogp.png`}
          ></meta>
          <meta name="format-detection" content="telephone=no" />
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
          <link rel="icon" href={`${process.env.BASE_PATH}/favicon.ico`} />
          <link
            rel="mask-icon"
            href={`${process.env.BASE_PATH}/safari-pinned-tab.svg`}
            color="#03a9f4"
          />
          <meta name="msapplication-TileColor" content="#ce0000" />
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
