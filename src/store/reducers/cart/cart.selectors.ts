import { RootState } from '../../store'

export const selectProductsTotalPrice = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.price * currentProduct.quantity
  }, 0)
}

export const selecProductsCount = (state: RootState) => {
  return state.cartReducer.products.reduce((acc, currentProduct) => {
    return acc + currentProduct.quantity
  }, 0)
}
