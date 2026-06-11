import Header from '../../components/header/header.component'
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

const LoginPage = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          {/* button */}
          <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer>{/* email input */}</LoginInputContainer>
          <LoginInputContainer>{/* password input */}</LoginInputContainer>
          {/* button */}
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
