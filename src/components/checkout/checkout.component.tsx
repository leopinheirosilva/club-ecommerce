import { FunctionComponent, useContext, useState } from 'react'
import { BsBagCheck } from 'react-icons/bs'
// utilities
import { CartContext } from '../../contexts/cart.context'
// components
import CartItem from '../cart-item/cart-item.component'
import CustomButton from '../custom-button/custom-button.component'
// styles
import {
  CheckoutContainer,
  CheckoutProducts,
  CheckoutTitle,
  CheckoutTotal
} from './checkout.styles'
import axios from 'axios'
import LoadingComponent from '../loading/loading.component'

const Checkout: FunctionComponent = () => {
  const { products, productsTotalPrice } = useContext(CartContext)
  const [isLoading, setIsLoading] = useState(false)

  const handleFinishPurchaseClick = async () => {
    try {
      setIsLoading(true)
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL!}/create-checkout-session`,
        {
          products
        }
      )
      window.location.href = data.url
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <CheckoutContainer>
      {isLoading && <LoadingComponent />}
      <CheckoutTitle>Checkout</CheckoutTitle>
      {products.length > 0 ? (
        <>
          <CheckoutProducts>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </CheckoutProducts>
          <CheckoutTotal>Total: R${productsTotalPrice}</CheckoutTotal>
          <CustomButton
            startIcon={<BsBagCheck />}
            onClick={handleFinishPurchaseClick}>
            Finalizar Compra
          </CustomButton>
        </>
      ) : (
        <p>Seu carrinho está vazio!</p>
      )}
    </CheckoutContainer>
  )
}

export default Checkout
