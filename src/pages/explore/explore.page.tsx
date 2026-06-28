// libs
import { FunctionComponent } from 'react'
// components
import Header from '../../components/header/header.component'
import CategoriesOverview from '../../components/categories-overview/categories-overview.component'

interface ExplorePageProps {}

const ExplorePage: FunctionComponent<ExplorePageProps> = () => {
  return (
    <>
      <Header />
      <CategoriesOverview />
    </>
  )
}

export default ExplorePage
