import { FunctionComponent, useContext, useEffect } from 'react'
// utilities
import { CategoryContext } from '../../contexts/category.context'
// components
import CategoryOverview from '../category-overview/category-overview.component'
import LoadingComponent from '../loading/loading.component'
// styles
import { Container } from './categories-overview.styles'

const CategoriesOverview: FunctionComponent = () => {
  const { categories, isLoading, fetchCategories } = useContext(CategoryContext)

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories()
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
