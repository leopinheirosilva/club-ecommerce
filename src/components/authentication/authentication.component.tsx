// libs
import { FunctionComponent, ReactNode, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// utilities
import { useAppSelector } from '../../hooks/redux.hooks'
// components
import LoadingComponent from '../loading/loading.component'
import Header from '../header/header.component'

interface AuthenticationProps {
  children: ReactNode
}

const Authentication: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useAppSelector((state) => state.userReducer)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isAuthenticated) {
      setTimeout(() => {
        navigate('/login')
      }, 3000)
    }
  }, [])

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

export default Authentication
