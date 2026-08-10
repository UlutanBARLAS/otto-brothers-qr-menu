import { useParams } from 'react-router-dom'
import { useCategoryContent } from '../hooks/useMenuContent'
import PizzaPackagePage from './PizzaPackagePage'
import DrinksPage from './DrinksPage'
import SnacksPage from './SnacksPage'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = useCategoryContent(slug)

  if (!category) return null

  if (category.kind === 'drinks') return <DrinksPage category={category} />
  if (category.kind === 'snacks') return <SnacksPage category={category} />
  return <PizzaPackagePage category={category} />
}
