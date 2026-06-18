import { useContext, useEffect } from 'react'
// components
import LoadingComponent from '../loading/loading.component'
import CategoryItem from '../category-item/category-item.component'
// styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
// utilities
import { CategoryContext } from '../../contexts/category.context'

const Categories = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      {isLoading && <LoadingComponent />}
      <CategoriesContent>
        {categories?.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
