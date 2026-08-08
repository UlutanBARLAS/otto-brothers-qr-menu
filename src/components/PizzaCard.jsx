export default function PizzaCard({ image, name, ingredients }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface">
      <img src={image} alt={name} className="h-36 w-full object-cover" loading="lazy" />
      <div className="p-3">
        <p className="font-display font-semibold text-cream">{name}</p>
        <p className="mt-1 text-xs leading-snug text-muted">{ingredients.join(', ')}</p>
      </div>
    </div>
  )
}
