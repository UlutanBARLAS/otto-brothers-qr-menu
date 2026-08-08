import { Heart } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { BUSINESS, DEVELOPER } from '../data/business'

function InstagramGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="flex flex-col items-center gap-3 border-t border-border px-4 py-8 text-muted">
      <a
        href={BUSINESS.instagramUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
      >
        <InstagramGlyph />
      </a>
      <p className="flex items-center gap-1 text-xs">
        {t('common.enjoyMessage')} <Heart className="h-3 w-3 fill-danger text-danger" />
      </p>

      <div className="mt-2 flex flex-col items-center gap-1 border-t border-border pt-4 text-[11px]">
        <p>
          © {new Date().getFullYear()} {t('brand.name')}. {t('common.rightsReserved')}
        </p>
        <a
          href={DEVELOPER.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-colors hover:text-primary"
        >
          Created by {DEVELOPER.name} — {DEVELOPER.title}
        </a>
      </div>
    </footer>
  )
}
