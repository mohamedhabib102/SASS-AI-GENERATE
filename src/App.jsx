
import { Route, Routes } from 'react-router-dom'
import './App.css'
import SignIn from './pages/auth/SignIn'
import SignUp from './pages/auth/SignUp'

function App() {

  return (
    <>
    <Routes>
      <Route path='auth/sign-up' element={<SignUp/>}/>
      <Route path='auth/sign-in' element={<SignIn/>}/>
    </Routes>
    </>
  )
}

export default App
