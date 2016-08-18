import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/demoApp'
import configureStore from './stores/configureStore'

const store = configureStore()

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)