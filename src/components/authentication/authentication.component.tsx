import { FunctionComponent, ReactNode, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// utilities
import { UserContext } from '../../contexts/user.context'
import LoadingComponent from '../loading/loading.component'
// components
import Header from '../header/header.component'

interface AuthenticationProps {
  children: ReactNode
}

const Authentication: FunctionComponent<AuthenticationProps> = ({
  children
}) => {
  const { isAuthenticated } = useContext(UserContext)
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
