import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CategoryCard from '../components/CategoryCard'
import { useCategories } from '../hooks/useMenuContent'
import { useTransition } from '../context/TransitionContext'

const INTRO_KEY = 'otto-brothers-intro-played'

export default function Home() {
  const { t } = useTranslation()
  const categories = useCategories()
  const { playIntro } = useTransition()

  useEffect(() => {
    if (!sessionStorage.getItem(INTRO_KEY)) {
      sessionStorage.setItem(INTRO_KEY, '1')
      playIntro()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col">
      <Header />

      <main className="flex-1 px-4 py-6">
        <div className="mb-6 text-center">
          <h1 className="font-display text-3xl font-extrabold tracking-tight text-cream">
            {t('home.heading')}
          </h1>
          <p className="font-display text-lg font-bold tracking-[0.2em] text-primary">
            {t('home.subheading')}
          </p>
          <p className="mt-2 text-sm text-muted">{t('home.intro')}</p>
        </div>

        <div className="flex flex-col gap-3">
          {categories.map((c) => (
            <CategoryCard
              key={c.slug}
              slug={c.slug}
              title={c.title}
              tagline={c.tagline}
              price={c.price}
              heroImage={c.heroImage}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
