import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './fonts/MontserratRegular.woff2'
import './fonts/MontserratMedium.woff2'
import './fonts/MontserratSemiBold.woff2'
import './fonts/MontserratBold.woff2'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>,
)
