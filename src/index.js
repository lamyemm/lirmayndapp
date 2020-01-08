// Dependencies
import { Provider } from 'unistore/react'

// Store
import { store } from './store'

import React from 'react'
import ReactDOM from 'react-dom'
//import './style/index.scss'
import App from './client/App'
import * as serviceWorker from './serviceWorker'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style/custom.css'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

// Add here later : IntlProvider
