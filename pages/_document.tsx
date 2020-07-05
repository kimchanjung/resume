import Document, { Head, Main, NextScript } from 'next/document';
import GoogleAnalytics from 'next-simple-google-analytics';

export default class ResumeDocument extends Document {
  render() {
    return (
      <html lang="ko-KR">
        <Head>
          {/* Step 5: Output the styles in the head  */}
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link
            href="https://fonts.googleapis.com/css?family=Noto+Sans+KR:300,400,500,700|Parisienne&display=swap&subset=korean"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Parisienne&display=swap"
            rel="stylesheet"
          />
          <GoogleAnalytics id="UA-165866221-1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
