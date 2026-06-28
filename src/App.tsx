// libs
import { FunctionComponent, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, query, where } from 'firebase/firestore'
// components
import LoadingComponent from './components/loading/loading.component'
import Cart from './components/cart/cart.component'
// pages
import HomePage from './pages/home/home.page'
import LoginPage from './pages/login/login.page'
import SignUpPage from './pages/sign-up/sign-up.page'
import ExplorePage from './pages/explore/explore.page'
import CategoryDetailsPage from './pages/category-details/category-details.page'
import CheckoutPage from './pages/checkout/checkout.page'
import PaymentConfirmationPage from './pages/payment-confirmation/payment-confirmation.page'
// utilities
import { auth, db } from './config/firebase.config'
import { userConverter } from './converters/firestore.converters'
import { loginUser, logoutUser } from './store/reducers/user/user.action'
import { useAppDispatch, useAppSelector } from './hooks/redux.hooks'
import { Action } from 'redux'
// guards
import AuthenticationGuard from './guards/authentication.guard'

const App: FunctionComponent = () => {
  const [isInitializing, setIsInitializing] = useState(true)
  const dispatch = useAppDispatch()
  const { isAuthenticated } = useAppSelector(
    (rootReducer) => rootReducer.userReducer
  )

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      // se o usuário estiver logado no contexto, e o usuário do firebase for nulo
      // devemos limpar o contexto (sign out)
      const isSigningOut = isAuthenticated && !user
      if (isSigningOut) {
        dispatch(logoutUser())
        return setIsInitializing(false)
      }
      // se o usuário do firebase estiver logado, e o usuário do contexto for nulo
      // devemos fazer o login
      const isSigningIn = !isAuthenticated && user
      if (isSigningIn) {
        const querySnapshot = await getDocs(
          query(
            collection(db, 'users').withConverter(userConverter),
            where('id', '==', user.uid)
          )
        )
        const userFromFirestore = querySnapshot.docs[0]?.data()

        dispatch(loginUser(userFromFirestore) as Action)

        return setIsInitializing(false)
      }
      setIsInitializing(false)
    })
  }, [dispatch])
  if (isInitializing) return <LoadingComponent />

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/category/:id" element={<CategoryDetailsPage />} />
        <Route
          path="/checkout"
          element={
            <AuthenticationGuard>
              <CheckoutPage />
            </AuthenticationGuard>
          }
        />
        <Route
          path="/payment-confirmation"
          element={<PaymentConfirmationPage />}
        />
      </Routes>
      <Cart />
    </BrowserRouter>
  )
}

export default App
