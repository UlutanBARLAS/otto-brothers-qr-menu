import { ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTransition } from '../context/TransitionContext'
import DrinksCollage from './DrinksCollage'

export default function CategoryCard({ slug, title, tagline, price, heroImage }) {
  const { t } = useTranslation()
  const { navigateWithTransition } = useTransition()

  return (
    <button
      type="button"
      onClick={() => navigateWithTransition(`/menu/${slug}`)}
      className="group flex items-center gap-4 overflow-hidden rounded-2xl border border-border bg-surface p-3 text-left transition-colors hover:border-primary/60"
    >
      <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-surface-raised">
        {heroImage ? (
          <img src={heroImage} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <DrinksCollage />
        )}
      </div>

      <div className="min-w-0 flex-1">
        <p className="font-display font-bold text-cream">{title}</p>
        <p className="line-clamp-2 text-xs text-muted">{tagline}</p>
        {price != null && (
          <p className="mt-1 font-display text-sm font-bold text-primary">
            {price.toFixed(2)} {t('common.currency')}
          </p>
        )}
      </div>

      <ChevronRight className="h-5 w-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
    </button>
  )
}
