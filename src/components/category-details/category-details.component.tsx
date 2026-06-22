import { FunctionComponent, useEffect, useState } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { BiChevronLeft } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
// utilities
import { db } from '../../config/firebase.config'
import { categoryConverter } from '../../converters/firestore.converters'
import Category from '../../types/category.types'
// components
import LoadingComponent from '../loading/loading.component'
import ProductItem from '../product-item/product-item.component'
// styles
import {
  CategoryTitle,
  Container,
  IconContainer
} from './category-details.styles'
import { ProductContainer } from '../product-item/product-item.styles'

interface CategoryDetailsProps {
  categoryId: string
}

const CategoryDetails: FunctionComponent<CategoryDetailsProps> = ({
  categoryId
}) => {
  const [category, setCategory] = useState<Category | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleBackClick = () => {
    navigate('/')
  }

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        setIsLoading(true)
        const querySnapshot = await getDocs(
          query(
            collection(db, 'categories').withConverter(categoryConverter),
            where('id', '==', categoryId)
          )
        )
        const category = querySnapshot.docs[0]?.data()
        setCategory(category)
      } catch (error) {
        console.log(error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchCategory()
  }, [])

  if (isLoading) return <LoadingComponent />

  return (
    <Container>
      <CategoryTitle>
        <IconContainer onClick={handleBackClick}>
          <BiChevronLeft size={36} />
        </IconContainer>
        <p>Explorar {category?.displayName}</p>
      </CategoryTitle>

      <ProductContainer>
        {category?.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductContainer>
    </Container>
  )
}

export default CategoryDetails
