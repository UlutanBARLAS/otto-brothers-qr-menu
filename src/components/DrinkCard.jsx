import DrinkIcon from './DrinkIcon'

export default function DrinkCard({ name, note, brandColor, image }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface text-center">
      <div className="flex h-24 items-center justify-center overflow-hidden bg-surface-raised">
        {image ? (
          <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
        ) : (
          <DrinkIcon color={brandColor} />
        )}
      </div>
      <div className="px-3 py-3">
        <p className="text-sm font-semibold text-cream">{name}</p>
        {note && <p className="text-xs text-muted">{note}</p>}
      </div>
    </div>
  )
}
