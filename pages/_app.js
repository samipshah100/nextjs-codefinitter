import '../styles/globals.css'
import theme from '../theme'
import React from 'react'
import {
  ThemeProvider,
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import Head from 'next/head'
import { SWRConfig } from 'swr'
import store from '../redux/store'
import { Provider } from 'react-redux'
import axios from 'axios'

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  const generateClassName = createGenerateClassName({
    productionPrefix: 'myclasses-',
  })

  const [key, setKey] = React.useState(0)

  React.useEffect(() => {
    setKey(1)
  }, [])

  return (
    <>
      <Provider store={store}>
        <SWRConfig
          value={{
            refreshInterval: 3000,
            errorRetryCount: 2,
            fetcher: (url, appId) =>
              axios({
                method: 'get',
                url,
              }),
          }}
        >
          <Head>
            <title>Codefinitter</title>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width"
            />
          </Head>
          <StylesProvider key={key} generateClassName={generateClassName}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Component {...pageProps} />
            </ThemeProvider>
          </StylesProvider>
        </SWRConfig>
      </Provider>
    </>
  )
}

export default MyApp
