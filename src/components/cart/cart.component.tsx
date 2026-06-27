// libs
import { FunctionComponent } from 'react'
import { BsCartCheck } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// utilities
import { toggleCart } from '../../store/reducers/cart/cart.action'
import { useAppSelector } from '../../hooks/redux.hooks'
import {
  selecProductsCount,
  selectProductsTotalPrice
} from '../../store/reducers/cart/cart.selectors'
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
  const { isVisible, products } = useAppSelector((state) => state.cartReducer)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const productsTotalPrice = useAppSelector(selectProductsTotalPrice)
  const productsCount = useAppSelector(selecProductsCount)

  const handleGoToCheckoutClick = () => {
    navigate('/checkout')
    dispatch(toggleCart())
  }

  const handleScapeAreaClick = () => {
    dispatch(toggleCart())
  }

  return (
    <CartContainer $isVisible={isVisible}>
      <CartEscapeArea onClick={handleScapeAreaClick} />
      <CartContent>
        <CartTitle>Seu Carrinho</CartTitle>
        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}
        {productsCount > 0 && (
          <>
            <CartTotal>Total: R${productsTotalPrice}</CartTotal>
            <CustomButton
              startIcon={<BsCartCheck />}
              onClick={handleGoToCheckoutClick}>
              Ir para o Checkout
            </CustomButton>
          </>
        )}
        {productsCount === 0 && <p>Seu carrinho está vazio!</p>}
      </CartContent>
    </CartContainer>
  )
}

export default Cart
