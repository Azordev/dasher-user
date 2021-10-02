import React from 'react'
import ReactDOM from 'react-dom'
import Pages from './pages'
import * as serviceWorkerRegistration from './serviceWorkerRegistration'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <Pages />
  </React.StrictMode>,
  document.getElementById('root'),
)

serviceWorkerRegistration.unregister()

reportWebVitals(console.log)
