import "@/lib/i18n"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from "./providers/reactQueryProvider"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ReactQueryProvider>
      <App />
    </ReactQueryProvider>
    </BrowserRouter>
  </StrictMode>
)