
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import Home from '@/pages/home/Home'
import ForgotPassword from '@/pages/auth/ForgotPassword'
import ResetPassword from '@/pages/auth/ResetPassword'
function App() {

  return (
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth/sign-up' element={<SignUp/>}/>
      <Route path='/auth/sign-in' element={<SignIn/>}/>
      <Route path='/auth/forgot-password' element={<ForgotPassword/>}/>
      <Route path='/auth/ResetPassword' element={<ResetPassword/>}/>
    </Routes>
    </main>
  )
}

export default App
