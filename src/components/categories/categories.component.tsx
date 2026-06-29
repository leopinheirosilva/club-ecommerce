// libs
import { useEffect } from 'react'
import { useAppSelector } from '../../hooks/redux.hooks'
import { useDispatch } from 'react-redux'
// components
import LoadingComponent from '../loading/loading.component'
import CategoryItem from '../category-item/category-item.component'
// utilities
import { fetchCategories } from '../../store/toolkit/category/category.slice'
// styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'
import Category from '../../types/category.types'

const Categories = () => {
  const dispatch = useDispatch<any>()
  const { isLoading, categories } = useAppSelector(
    (state) => state.categoryReducer
  )

  useEffect(() => {
    dispatch(fetchCategories())
  }, [dispatch])

  return (
    <CategoriesContainer>
      {isLoading && <LoadingComponent />}
      <CategoriesContent>
        {categories?.map((category: Category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories
