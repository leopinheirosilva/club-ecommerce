// libs
import { FunctionComponent, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineHome
} from 'react-icons/ai'
// utilities
import Colors from '../../theme/theme.colors'
import { clearCartProducts } from '../../store/reducers/cart/cart.action'
// components
import Header from '../../components/header/header.component'
import CustomButton from '../../components/custom-button/custom-button.component'
// styles
import {
  PaymentConfirmationContainer,
  PaymentConfirmationContent
} from './payment-confirmation.styles'

const PaymentConfirmationPage: FunctionComponent = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const status = searchParams.get('success')
  const isCanceled = searchParams.get('canceled') === 'true'

  const handleGoToHomeClick = () => {
    navigate('/')
  }

  useEffect(() => {
    if (status === 'true') {
      dispatch(clearCartProducts())
    }
  }, [status])

  return (
    <>
      <Header />
      <PaymentConfirmationContainer>
        <PaymentConfirmationContent>
          {status === 'true' && (
            <>
              <AiOutlineCheckCircle size={120} color={Colors.success} />
              <p>Sua compra foi finalizada com sucesso!</p>
            </>
          )}
          {(status === 'false' || isCanceled) && (
            <>
              <AiOutlineCloseCircle size={120} color={Colors.error} />
              <p>
                Ocorreu um erro ao finalizar sua compra! Por favor, tente
                novamente.
              </p>
            </>
          )}
          <CustomButton
            startIcon={<AiOutlineHome />}
            onClick={handleGoToHomeClick}>
            Ir para a Página Inicial
          </CustomButton>
        </PaymentConfirmationContent>
      </PaymentConfirmationContainer>
    </>
  )
}

export default PaymentConfirmationPage
