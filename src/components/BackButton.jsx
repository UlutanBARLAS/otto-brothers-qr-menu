import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { useTransition } from '../context/TransitionContext'

export default function BackButton() {
  const { t } = useTranslation()
  const { navigateWithTransition } = useTransition()

  return (
    <button
      type="button"
      onClick={() => navigateWithTransition('/')}
      className="mb-4 inline-flex items-center gap-1.5 text-sm font-semibold text-muted transition-colors hover:text-primary"
    >
      <ArrowLeft className="h-4 w-4" />
      {t('common.backToMenu')}
    </button>
  )
}
