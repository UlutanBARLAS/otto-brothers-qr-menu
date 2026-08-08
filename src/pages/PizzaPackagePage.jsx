import { useTranslation } from 'react-i18next'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import PizzaCard from '../components/PizzaCard'
import DrinkCard from '../components/DrinkCard'
import PolicyNotice from '../components/PolicyNotice'
import { useDrinksContent } from '../hooks/useMenuContent'

export default function PizzaPackagePage({ category }) {
  const { t } = useTranslation()
  const drinks = useDrinksContent()
  const { title, tagline, price, priceNote, description, heroImage, varieties, notes, policies, includesDrinks } =
    category

  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col">
      <Header />

      <main className="flex-1 px-4 py-6">
        <BackButton />

        <div className="mb-5 overflow-hidden rounded-2xl border border-border bg-surface">
          {heroImage && <img src={heroImage} alt={title} className="h-44 w-full object-cover" />}
          <div className="p-4">
            <h1 className="font-display text-2xl font-extrabold text-cream">{title}</h1>
            <p className="text-sm text-muted">{tagline}</p>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="font-display text-2xl font-extrabold text-primary">
                {price.toFixed(2)} {t('common.currency')}
              </span>
              {priceNote && <span className="text-xs text-gold">{priceNote}</span>}
            </div>
            <p className="mt-2 text-sm text-muted">{description}</p>
          </div>
        </div>

        {policies?.length > 0 && (
          <div className="mb-5 flex flex-col gap-2">
            {policies.map((p, i) => (
              <PolicyNotice key={i} type={p.type} title={p.title} text={p.text} />
            ))}
          </div>
        )}

        <h2 className="mb-3 font-display font-bold text-cream">{t('common.allVarieties')}</h2>
        <div className="grid grid-cols-2 gap-3">
          {varieties.map((v) => (
            <PizzaCard key={v.slug} image={v.image} name={v.name} ingredients={v.ingredients} />
          ))}
        </div>

        {includesDrinks && (
          <>
            <h2 className="mb-3 mt-6 font-display font-bold text-cream">{t('common.ourDrinks')}</h2>
            <div className="grid grid-cols-3 gap-3">
              {drinks.map((d) => (
                <DrinkCard key={d.slug} name={d.name} note={d.note} brandColor={d.brandColor} shape={d.shape} />
              ))}
            </div>
          </>
        )}

        {notes?.length > 0 && (
          <p className="mt-6 text-center text-xs text-muted">{notes[0]}</p>
        )}
      </main>

      <Footer />
    </div>
  )
}
