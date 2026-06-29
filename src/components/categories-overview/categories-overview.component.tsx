// libs
import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// utilities
import { fetchCategories } from '../../store/toolkit/category/category.slice'
import { useAppSelector } from '../../hooks/redux.hooks'
import Category from '../../types/category.types'
// components
import CategoryOverview from '../category-overview/category-overview.component'
import LoadingComponent from '../loading/loading.component'
// styles
import { Container } from './categories-overview.styles'

const CategoriesOverview: FunctionComponent = () => {
  const dispatch = useDispatch<any>()
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories())
    }
  }, [categories.length, dispatch])

  if (isLoading) return <LoadingComponent />
  return (
    <Container>
      {categories.map((category: Category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
