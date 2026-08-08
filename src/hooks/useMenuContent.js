import { useTranslation } from 'react-i18next'
import { CATEGORIES, getCategoryBySlug } from '../data/menu'

function mergeText(item, translated) {
  return translated ? { ...item, ...translated } : item
}

export function useCategoryContent(slug) {
  const { t } = useTranslation()
  const category = getCategoryBySlug(slug)
  if (!category) return null

  const text = t(`categories.${slug}`, { returnObjects: true, defaultValue: {} })
  const varieties = category.varieties?.map((v) =>
    mergeText(v, t(`pizzaVarieties.${v.slug}`, { returnObjects: true, defaultValue: null })),
  )
  const drinks = category.drinks?.map((d) =>
    mergeText(d, t(`drinks.${d.slug}`, { returnObjects: true, defaultValue: null })),
  )
  const policies = category.policies?.map((p, i) => ({ ...p, ...(text.policies?.[i] || {}) }))

  return { ...category, ...text, varieties, drinks, policies }
}

export function useDrinksContent() {
  const { t } = useTranslation()
  const category = getCategoryBySlug('icecekler')
  return category.drinks.map((d) =>
    mergeText(d, t(`drinks.${d.slug}`, { returnObjects: true, defaultValue: null })),
  )
}

export function useCategories() {
  const { t } = useTranslation()
  return CATEGORIES.map((c) =>
    mergeText(c, t(`categories.${c.slug}`, { returnObjects: true, defaultValue: {} })),
  )
}
