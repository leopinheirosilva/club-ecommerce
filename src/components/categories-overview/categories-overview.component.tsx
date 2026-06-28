import { FunctionComponent, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// utilities
import { fetchCategories } from '../../store/reducers/category/category.action'
import { useAppSelector } from '../../hooks/redux.hooks'
// components
import CategoryOverview from '../category-overview/category-overview.component'
import LoadingComponent from '../loading/loading.component'
// styles
import { Container } from './categories-overview.styles'

const CategoriesOverview: FunctionComponent = () => {
  const dispatch = useDispatch()
  const { categories, isLoading } = useAppSelector(
    (state) => state.categoryReducer
  )

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(fetchCategories() as any)
    }
  }, [])

  if (isLoading) return <LoadingComponent />
  return (
    <Container>
      {categories.map((category) => (
        <CategoryOverview key={category.id} category={category} />
      ))}
    </Container>
  )
}

export default CategoriesOverview
