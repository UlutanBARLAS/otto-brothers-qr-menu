import { useTranslation } from 'react-i18next'

export default function SnackCard({ image, name, description, price }) {
  const { t } = useTranslation()

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <img src={image} alt={name} className="h-36 w-full object-cover" loading="lazy" />
      <div className="p-3">
        <p className="font-display font-semibold text-cream">{name}</p>
        <p className="mt-1 text-xs leading-snug text-muted">{description}</p>
        {price != null && (
          <p className="mt-2 font-display text-sm font-bold text-primary">
            {price.toFixed(2)} {t('common.currency')}
          </p>
        )}
      </div>
    </div>
  )
}
