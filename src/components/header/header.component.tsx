// libs
import { useNavigate } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'firebase/auth'
// utilities
import { auth } from '../../config/firebase.config'
import { CartContext } from '../../contexts/cart.context'
import { logoutUser } from '../../store/reducers/user/user.action'
import { toggleCart } from '../../store/reducers/cart/cart.action'
// styles
import {
  HeaderContainer,
  HeaderItem,
  HeaderItems,
  HeaderTitle
} from './header.styles'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch<any>()
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const { productsCount } = useContext(CartContext)

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleSignUpPage = () => {
    navigate('/signup')
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  const handleExploreClick = () => {
    navigate('/explore')
  }

  const handleSignoutClick = () => {
    dispatch(logoutUser())
    signOut(auth)
  }

  const handleCartClick = () => {
    dispatch(toggleCart())
  }

  return (
    <HeaderContainer>
      <HeaderTitle onClick={handleLogoClick}>CLUB CLOTHING</HeaderTitle>
      <HeaderItems>
        <HeaderItem onClick={handleExploreClick}>Explorar</HeaderItem>
        {!isAuthenticated && (
          <>
            <HeaderItem onClick={handleLoginClick}>Login</HeaderItem>
            <HeaderItem onClick={handleSignUpPage}>Criar conta</HeaderItem>
          </>
        )}
        {isAuthenticated && (
          <HeaderItem onClick={handleSignoutClick}>Sair</HeaderItem>
        )}
        <HeaderItem onClick={handleCartClick}>
          <BsCart3 size={25} />
          <p style={{ marginLeft: 5 }}>{productsCount}</p>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
