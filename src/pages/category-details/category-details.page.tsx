import { FunctionComponent } from 'react'
import Header from '../../components/header/header.component'
import CategoryDetails from '../../components/category-details/category-details.component'
import { useParams } from 'react-router-dom'

interface CategoryDetailsPageProps {}

const CategoryDetailsPage: FunctionComponent<CategoryDetailsPageProps> = () => {
  const { id } = useParams()

  if (!id) return null

  return (
    <>
      <Header />
      <CategoryDetails categoryId={id} />
    </>
  )
}

export default CategoryDetailsPage
