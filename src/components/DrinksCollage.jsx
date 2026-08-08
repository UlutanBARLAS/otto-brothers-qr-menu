import DrinkIcon from './DrinkIcon'
import { DRINKS } from '../data/menu'

const COLLAGE_SLUGS = ['pepsi', '7up', 'lipton-ice-tea']

export default function DrinksCollage() {
  const cups = COLLAGE_SLUGS.map((slug) => DRINKS.find((d) => d.slug === slug)).filter(Boolean)

  return (
    <div className="flex items-end justify-center -space-x-3">
      {cups.map((d, i) => (
        <DrinkIcon
          key={d.slug}
          color={d.brandColor}
          className={i === 1 ? 'z-10 h-11 w-8' : 'h-9 w-7 opacity-80'}
        />
      ))}
    </div>
  )
}
