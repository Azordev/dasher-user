import React from 'react'
import ReactDOM from 'react-dom'
import Pages from './pages'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'
import { Theme } from './styles'

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <Pages />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.unregister()

reportWebVitals(console.log)
