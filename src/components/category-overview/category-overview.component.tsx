import { FunctionComponent } from 'react'
// utilities
import Category from '../../types/category.types'
// components
import ProductItem from '../product-item/product-item.component'
// styles
import {
  CategoryContainer,
  CategoryTitle,
  ProductsContainer
} from './category-overview.styles'

interface CategoryOverviewProps {
  category: Category
}

const CategoryOverview: FunctionComponent<CategoryOverviewProps> = ({
  category
}) => {
  return (
    <CategoryContainer>
      <CategoryTitle> {category.displayName} </CategoryTitle>
      <ProductsContainer>
        {category.products.slice(0, 5).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}{' '}
      </ProductsContainer>
    </CategoryContainer>
  )
}

export default CategoryOverview
