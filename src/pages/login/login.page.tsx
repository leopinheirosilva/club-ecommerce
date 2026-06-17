import { BsGoogle } from 'react-icons/bs'
import { FiLogIn } from 'react-icons/fi'
import { useForm } from 'react-hook-form'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import validator from 'validator'
import {
  AuthError,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  signInWithPopup
} from 'firebase/auth'
import { UserContext } from '../../contexts/user.context'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// utilities
import { auth, db, googleProvider } from '../../config/firebase.config'
// components
import CustomButton from '../../components/custom-button/custom-button.component'
import Header from '../../components/header/header.component'
import InputErrorMessage from '../../components/input-error-message/input-error-message.component'
import CustomInput from '../../components/custom-input/custom-input.component'
import LoadingComponent from '../../components/loading/loading.component'
// styles
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle
} from './login.styles'

interface LoginForm {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<LoginForm>()

  const [isLoading, setIsLoading] = useState(false)

  const { isAuthenticated } = useContext(UserContext)

  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  const handleSubmitPress = async (data: LoginForm) => {
    try {
      setIsLoading(true)
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      )
      console.log({ userCredentials })
    } catch (error) {
      const _error = error as AuthError

      if (_error.code === AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        setError('password', { type: 'mismatch' })
        setError('email', { type: 'notFound' })
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleSignInWithGooglePress = async () => {
    try {
      setIsLoading(true)
      const userCredentials = await signInWithPopup(auth, googleProvider)
      const querySnapshot = await getDocs(
        query(
          collection(db, 'users'),
          where('id', '==', userCredentials.user.uid)
        )
      )
      const user = querySnapshot.docs[0]?.data()

      if (!user) {
        const firstName = userCredentials.user.displayName?.split(' ')[0]
        const lastName = userCredentials.user.displayName?.split(' ')[1]
        await addDoc(collection(db, 'users'), {
          id: userCredentials.user.uid,
          email: userCredentials.user.email,
          firstName,
          lastName,
          provider: 'google'
        })
      }
    } catch (error) {
      console.log({ error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <Header />

      {isLoading && <LoadingComponent />}

      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          <CustomButton
            startIcon={<BsGoogle size={20} />}
            onClick={handleSignInWithGooglePress}>
            Entrar com o Google
          </CustomButton>
          <LoginSubtitle>Ou entre com o seu e-mail</LoginSubtitle>
          <LoginInputContainer>
            <p>E-mail</p>
            <CustomInput
              hasError={!!errors?.email} // boolean
              placeholder="Digite o seu e-mail"
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
            {errors?.email?.type === 'notFound' && (
              <InputErrorMessage>O e-mail não foi encontrado</InputErrorMessage>
            )}
          </LoginInputContainer>
          <LoginInputContainer>
            <p>Senha</p>
            <CustomInput
              hasError={!!errors?.password} // boolean
              placeholder="Digite sua senha"
              type="password"
              {...register('password', {
                required: true
              })}
            />
            {errors?.password?.type === 'required' && (
              <InputErrorMessage>A senha é obrigatória</InputErrorMessage>
            )}
            {errors?.password?.type === 'mismatch' && (
              <InputErrorMessage>Senha inválida</InputErrorMessage>
            )}
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
