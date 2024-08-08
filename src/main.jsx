import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from '../Pages/Home/Index.jsx'
import { GlobalStyle } from './styles/GlobalStyles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Home />
  </React.StrictMode>,
)
