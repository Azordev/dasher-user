import React from 'react'
import ReactDOM from 'react-dom'
import Pages from './pages'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Theme } from './styles'
import { ApolloProvider } from '@apollo/client'
import { client } from './services/GraphQl'
ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <ApolloProvider client={client}>
        <Pages />
      </ApolloProvider>
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.unregister()

// eslint-disable-next-line
reportWebVitals(console.log)
