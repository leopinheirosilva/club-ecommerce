import { FunctionComponent } from 'react'
// utilities
import Category from '../../types/category.types'
// styles
import { CategoryItemContainer, CategoryName } from './category-item.styles'
import { useNavigate } from 'react-router-dom'

interface CategoryProps {
  category: Category
}

const CategoryItem: FunctionComponent<CategoryProps> = ({ category }) => {
  const navigate = useNavigate()
  const handleExploreClick = () => {
    navigate(`/category/${category.id}`)
  }
  return (
    <CategoryItemContainer backgroundImage={category.imageUrl}>
      <CategoryName onClick={handleExploreClick}>
        <p>{category.displayName}</p>
        <p>Explorar</p>
      </CategoryName>
    </CategoryItemContainer>
  )
}

export default CategoryItem
