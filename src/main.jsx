import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import { GlobalStyle } from './styles/GlobalStyle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <GlobalStyle/>
      <App />
  </React.StrictMode>,
)
