import { FunctionComponent, useContext } from 'react'
import { BsCartCheck } from 'react-icons/bs'
// utilities
import { CartContext } from '../../contexts/cart.context'
// components
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
// styles
import {
  CartContainer,
  CartContent,
  CartEscapeArea,
  CartTitle,
  CartTotal
} from './cart.styles'

const Cart: FunctionComponent = () => {
  const { isVisible, products, productsTotalPrice, toggleCart } =
    useContext(CartContext)
  return (
    <CartContainer isVisible={isVisible}>
      <CartEscapeArea onClick={toggleCart} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        <CartTotal>Total: R${productsTotalPrice}</CartTotal>
        <CustomButton startIcon={<BsCartCheck />}>
          Ir para o Checkout
        </CustomButton>
      </CartContent>
    </CartContainer>
  )
}

export default Cart
