import { AlertTriangle, Info } from 'lucide-react'

export default function PolicyNotice({ type, title, text }) {
  const isWarning = type === 'warning'
  const Icon = isWarning ? AlertTriangle : Info

  return (
    <div
      className={`flex items-start gap-3 rounded-2xl border px-4 py-3 ${
        isWarning ? 'border-danger/40 bg-danger/10' : 'border-gold/30 bg-gold/10'
      }`}
    >
      <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${isWarning ? 'text-danger' : 'text-gold'}`} />
      <div className="text-sm leading-snug">
        {title && <p className="mb-0.5 font-semibold text-cream">{title}</p>}
        <p className="text-muted">{text}</p>
      </div>
    </div>
  )
}
