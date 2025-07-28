import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";

import { persistStore, persistReducer } from "redux-persist";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
      <App />
    
  </StrictMode>,
)

