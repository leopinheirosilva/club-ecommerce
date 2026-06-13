import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import validator from 'validator'
// components
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
// styles
import {
  SignUpContainer,
  SignUpContent,
  SignUpHeadline,
  SingUpInputContainer
} from './sign-up.styles'

interface SignUpForm {
  name: string
  surname: string
  email: string
  password: string
  confirmPassword: string
}

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>()

  const watchPassword = watch('password')

  const handleSubmitPress = (data: SignUpForm) => {
    console.log({ data })
  }

  return (
    <>
      <Header />

      <SignUpContainer>
        <SignUpContent>
          <SignUpHeadline>Crie sua conta</SignUpHeadline>
          <SingUpInputContainer>
            <p>Nome</p>
            <CustomInput
              hasError={!!errors?.name}
              placeholder="Digite seu nome"
              {...register('name', {
                required: true
              })}
            />
            {errors?.name?.type === 'required' && (
              <InputErrorMessage>O nome é obrigatório</InputErrorMessage>
            )}
          </SingUpInputContainer>
          <SingUpInputContainer>
            <p>Sobrenome</p>
            <CustomInput
              hasError={!!errors?.surname}
              placeholder="Digite seu sobrenome"
              {...register('surname', {
                required: true
              })}
            />
            {errors?.surname?.type === 'required' && (
              <InputErrorMessage>O sobrenome é obrigatório</InputErrorMessage>
            )}
          </SingUpInputContainer>
          <SingUpInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email}
              placeholder="Digite seu e-mail"
              {...register('email', {
                required: true,
                validate: (value) => {
                  return validator.isEmail(value)
                }
              })}
            />
            {errors?.email?.type === 'required' && (
              <InputErrorMessage>O e-mail é obrigatório</InputErrorMessage>
            )}
            {errors?.email?.type === 'validate' && (
              <InputErrorMessage>
                Por favor, insira um e-mail válido
              </InputErrorMessage>
            )}
          </SingUpInputContainer>
          <SingUpInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password}
              placeholder="Digite sua senha"
              type="password"
              {...register('password', {
                required: true
              })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
          </SingUpInputContainer>
          <SingUpInputContainer>
            <p>Confirmação de Senha</p>
            <CustomInput
              hasError={!!errors?.confirmPassword}
              placeholder="Digite novamente sua senha"
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: (value) => {
                  return value === watchPassword
                }
              })}
            />
            {errors?.confirmPassword?.type === 'required' && (
              <InputErrorMessage>
                A confirmação de senha é obrigatória
              </InputErrorMessage>
            )}
            {errors?.confirmPassword?.type === 'validate' && (
              <InputErrorMessage>As senhas não coincidem</InputErrorMessage>
            )}
          </SingUpInputContainer>
          <CustomButton
            startIcon={<FiLogIn size={18} />}
            onClick={() => handleSubmit(handleSubmitPress)()}>
            Criar conta
          </CustomButton>
        </SignUpContent>
      </SignUpContainer>
    </>
  )
}

export default SignUpPage
