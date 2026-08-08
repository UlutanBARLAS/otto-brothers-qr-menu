import { useParams } from 'react-router-dom'
import { useCategoryContent } from '../hooks/useMenuContent'
import PizzaPackagePage from './PizzaPackagePage'
import DrinksPage from './DrinksPage'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = useCategoryContent(slug)

  if (!category) return null

  return category.kind === 'drinks' ? (
    <DrinksPage category={category} />
  ) : (
    <PizzaPackagePage category={category} />
  )
}
