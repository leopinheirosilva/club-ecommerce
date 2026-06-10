import { FunctionComponent } from 'react'
// utilities
import Category from '../../types/category.types'
// styles
import { CategoryItemContainer, CategoryName } from './category-item.styles'

interface CategoryProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryProps> = ({ category }) => {
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
