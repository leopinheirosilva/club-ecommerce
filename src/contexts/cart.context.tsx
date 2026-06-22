import { createContext, FunctionComponent, ReactNode, useState } from 'react'
// utilities
import CartProduct from '../types/cart.types'

interface ICartContext {
  isVisible: boolean
  toggleCart: () => void
  products: CartProduct[]
}

export const CartContext = createContext<ICartContext>({
  isVisible: false,
  products: [],
  toggleCart: () => {}
})

const CartContextProvider: FunctionComponent<{ children: ReactNode }> = ({
  children
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [products] = useState<CartProduct[]>([])

  const toggleCart = () => {
    setIsVisible((prevState) => !prevState)
  }

  return (
    <CartContext.Provider value={{ isVisible, products, toggleCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
