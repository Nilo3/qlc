import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import store from "../src/Redux/store/store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
   
      <App />

  </Provider>
)
