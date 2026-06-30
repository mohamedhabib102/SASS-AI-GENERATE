import "@/lib/i18n"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ReactQueryProvider from "./providers/reactQueryProvider"
import { GoogleOAuthProvider } from "@react-oauth/google"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ReactQueryProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
        <App />
      </GoogleOAuthProvider>
    </ReactQueryProvider>
    </BrowserRouter>
  </StrictMode>
)