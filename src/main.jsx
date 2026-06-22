import "@/lib/i18n"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import Header from "@/components/layouts/Header"
// import Footer from "@/components/layouts/Footer"


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header/>
        <App />
      {/* <Footer/> */}
    </BrowserRouter>
  </StrictMode>
)
