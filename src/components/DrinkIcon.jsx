// Marka fotoğrafı yerine, telif sorunu yaratmayan sade bir bardak/şişe illüstrasyonu.
function Can({ color }) {
  return (
    <svg viewBox="0 0 64 96" className="h-16 w-11 drop-shadow-lg" aria-hidden="true">
      <rect x="8" y="8" width="48" height="80" rx="10" fill={color} />
      <rect x="8" y="8" width="48" height="16" rx="8" fill="black" fillOpacity="0.15" />
      <ellipse cx="32" cy="8" rx="24" ry="5" fill="white" fillOpacity="0.35" />
      <rect x="14" y="34" width="36" height="10" rx="2" fill="white" fillOpacity="0.85" />
    </svg>
  )
}

function Bottle({ color }) {
  return (
    <svg viewBox="0 0 64 96" className="h-16 w-11 drop-shadow-lg" aria-hidden="true">
      <path
        d="M26 4h12v14l6 10v58a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4V28l6-10Z"
        fill={color}
      />
      <rect x="26" y="4" width="12" height="8" rx="2" fill="#3a3a3a" />
      <rect x="20" y="46" width="24" height="12" rx="2" fill="white" fillOpacity="0.85" />
    </svg>
  )
}

export default function DrinkIcon({ shape = 'can', color = '#ff8a3d' }) {
  return shape === 'bottle' ? <Bottle color={color} /> : <Can color={color} />
}
