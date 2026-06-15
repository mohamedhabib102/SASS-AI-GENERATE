
import { Route, Routes } from 'react-router-dom'
import './App.css'
// Auth
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import Home from '@/pages/home/Home'

function App() {

  return (
    <main dir='rtl'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='auth/sign-up' element={<SignUp/>}/>
      <Route path='auth/sign-in' element={<SignIn/>}/>
      <Route path='auth/forgot-password' element={<ForgotPassword/>}/>
    </Routes>
    </main>
  )
}

export default App
