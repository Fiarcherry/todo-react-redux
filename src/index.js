// import './utils/wdyr'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureAppStore from './redux/configureStore'
import App from './components/App'

const store = configureAppStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
