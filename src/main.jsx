import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'amfe-flexible'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import { Provider } from 'react-redux';
// import stores from './store/index.js'

import { PersistGate } from 'redux-persist/integration/react';
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
)
