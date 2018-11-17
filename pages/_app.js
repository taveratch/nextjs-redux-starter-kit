import App, {Container} from 'next/app'

import Datetime from 'utils/datetime'
import Head from 'pages/head'
import I18n from 'lib/I18n'
import { Provider } from 'react-redux'
import React from 'react'
import _ from 'lodash'
import { initializeStore } from 'redux/store'
import withRedux from 'next-redux-wrapper'

class MyApp extends App {

  static async getInitialProps ({Component, ctx, router}) {
    // Apply localization for SSR
    I18n.withContext(ctx)
    Datetime.getInstance(ctx)

    return {
      pageProps: (Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
    }
  }

  render () {
    const {Component, pageProps, store} = this.props
    return (
      <div>
        <Head />
        <Container>
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </Container>
      </div>
    )
  }
}

export default withRedux(initializeStore)(MyApp)
