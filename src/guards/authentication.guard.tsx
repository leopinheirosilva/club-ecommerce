import { FunctionComponent, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// utilities
import { useSelector } from 'react-redux'
// components
import Header from '../components/header/header.component'
import LoadingComponent from '../components/loading/loading.component'

interface AuthenticationProps {
  children: ReactNode
}

const AuthenticationGuard: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useSelector(
    (rootReducer: any) => rootReducer.userReducer
  )
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [isAuthenticated])

  if (!isAuthenticated) {
    return (
      <>
        <Header />
        <LoadingComponent message="Você precisa estar logado para acessar essa página. Você será redirecionado para a página de login em instantes..." />
      </>
    )
  }

  return <>{children}</>
}

export default AuthenticationGuard
