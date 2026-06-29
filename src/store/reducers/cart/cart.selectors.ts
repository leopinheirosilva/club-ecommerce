import { RootState } from '../../store'

export const selectProductsTotalPrice = (state: RootState) => {
  return state.cartReducer.products.reduce((acc: number, currentProduct: { price: number; quantity: number }) => {
    return acc + currentProduct.price * currentProduct.quantity
  }, 0)
}

export const selecProductsCount = (state: RootState) => {
  return state.cartReducer.products.reduce((acc: any, currentProduct: { quantity: any }) => {
    return acc + currentProduct.quantity
  }, 0)
}
