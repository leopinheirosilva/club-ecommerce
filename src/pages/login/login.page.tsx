import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
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
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const handleSubmitPress = (data: any) => {
    console.log({ data })
  }

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
            <CustomInput
              hasError={!!errors?.email} // boolean
              placeholder="Digite o seu e-mail"
              {...register('e-mail', { required: true })}
            />
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password} // boolean
              placeholder="Digite sua senha"
              {...register('password', { required: true })}
            />
          </LoginInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Entrar
          </CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  )
}

export default LoginPage
