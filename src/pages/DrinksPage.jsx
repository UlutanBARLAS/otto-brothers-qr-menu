import Header from '../components/Header'
import Footer from '../components/Footer'
import BackButton from '../components/BackButton'
import DrinkCard from '../components/DrinkCard'

export default function DrinksPage({ category }) {
  const { title, tagline, description, drinks, heroImage } = category

  return (
    <div className="mx-auto flex min-h-full max-w-md flex-col">
      <Header />

      <main className="flex-1 px-4 py-6">
        <BackButton />

        {heroImage && (
          <img
            src={heroImage}
            alt=""
            className="mb-6 h-40 w-full rounded-2xl object-cover"
          />
        )}

        <div className="mb-6 text-center">
          <h1 className="font-display text-2xl font-extrabold text-cream">{title}</h1>
          <p className="text-sm text-muted">{tagline}</p>
          <p className="mt-2 text-sm text-muted">{description}</p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {drinks.map((d) => (
            <DrinkCard key={d.slug} name={d.name} note={d.note} brandColor={d.brandColor} image={d.image} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}
