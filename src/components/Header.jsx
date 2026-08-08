import { Pizza } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-ink/90 px-4 py-3 backdrop-blur">
      <div className="flex items-center gap-2">
        <Pizza className="h-5 w-5 text-primary" />
        <span className="font-display text-sm font-bold tracking-wide text-cream">
          {t('brand.name')}
        </span>
      </div>
      <LanguageSwitcher />
    </header>
  )
}
