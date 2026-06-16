
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from '@/pages/auth/SignIn'
import SignUp from '@/pages/auth/SignUp'
import Home from '@/pages/home/Home'

function App() {

  return (
    <main>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth/sign-up' element={<SignUp/>}/>
      <Route path='/auth/sign-in' element={<SignIn/>}/>
    </Routes>
    </main>
  )
}

export default App
