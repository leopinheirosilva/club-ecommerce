import { FunctionComponent } from 'react'
// utilities
import Product from '../../types/product.types'
// styles
import {
  ProductContainer,
  ProductImage,
  ProductInfo
} from './product-item.styles'

interface ProductItemProps {
  product: Product
}

const ProductItem: FunctionComponent<ProductItemProps> = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl} />
      <ProductInfo>
        {product.name}
        {product.price}
      </ProductInfo>
    </ProductContainer>
  )
}

export default ProductItem
