import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
// pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
// utilities
import { auth } from './config/firebase.config'

const App: FunctionComponent = () => {
  onAuthStateChanged(auth, (user) => {
    console.log(user)
  })
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
