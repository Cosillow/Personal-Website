import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import store from './redux/store'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>    
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>
)
