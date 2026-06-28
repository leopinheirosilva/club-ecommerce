// libs
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hooks'
// components
import LoadingComponent from '../loading/loading.component'
import CategoryItem from '../category-item/category-item.component'
// utilities
import { fetchCategories } from '../../store/reducers/category/category.action'
// styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

const Categories = () => {
  const dispatch = useAppDispatch()
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
