import { useTranslation } from 'react-i18next'

const LANGUAGES = [
  { code: 'tr', label: 'TR' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' },
]

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation()
  const current = i18n.resolvedLanguage || i18n.language

  return (
    <div
      className="inline-flex items-center gap-0.5 rounded-full border border-border bg-surface p-1"
      role="group"
      aria-label={t('common.languageLabel')}
    >
      {LANGUAGES.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => i18n.changeLanguage(code)}
          aria-pressed={current === code}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors ${
            current === code
              ? 'bg-primary text-ink'
              : 'text-muted hover:text-cream'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
