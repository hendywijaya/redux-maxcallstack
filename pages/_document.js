// @flow
import Document, { Head, Main, NextScript } from 'next/document'
// config
// import config from '../src/Config/config'
import flush from 'styled-jsx/server'

export default class extends Document {

  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className='co-content'>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
