import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
// components
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'
// styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'
import CustomInput from '../../components/custom-input/custom-input.component'

const LoginPage = () => {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          <CustomButton startIcon={<BsGoogle size={20} />}>
            Entrar com o Google
          </CustomButton>
          <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput placeholder="Digite o seu e-mail" />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput placeholder="Digite sua senha" />
          </LoginInputContainer>
          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
