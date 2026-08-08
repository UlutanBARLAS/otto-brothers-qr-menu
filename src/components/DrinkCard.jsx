import DrinkIcon from './DrinkIcon'

export default function DrinkCard({ name, note, brandColor }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-surface px-3 py-4 text-center">
      <DrinkIcon color={brandColor} />
      <div>
        <p className="text-sm font-semibold text-cream">{name}</p>
        {note && <p className="text-xs text-muted">{note}</p>}
      </div>
    </div>
  )
}
