// libs
import { FunctionComponent } from 'react'
import { BsCartPlus } from 'react-icons/bs'
// Utilities
import Product from '../../types/product.types'
import { addProductToCart } from '../../store/reducers/cart/cart.action'
import { useAppDispatch } from '../../hooks/redux.hooks'
// Components
import CustomButton from '../custom-button/custom-button.component'
// Styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  const dispatch = useAppDispatch()

  const handleAddToCartClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <ProductContainer>
      <ProductImage $imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleAddToCartClick}>
          Adicionar ao carrinho
        </CustomButton>
      </ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p className="product-price">R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
