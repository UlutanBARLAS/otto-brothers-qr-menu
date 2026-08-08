// Marka fotoğrafı yerine, broşürdeki kapaklı/pipetli bardak temasını yansıtan sade bir illüstrasyon.
export default function DrinkIcon({ color = '#ff8a3d', className = 'h-16 w-12' }) {
  return (
    <svg viewBox="0 0 64 88" className={`${className} drop-shadow-lg`} aria-hidden="true">
      {/* bardak gövdesi */}
      <path d="M16 22h32l-4 58a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4L16 22Z" fill={color} />
      <path d="M16 22h32l-4 58a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4L16 22Z" fill="black" fillOpacity="0.12" />
      <rect x="18" y="34" width="28" height="9" rx="2" fill="white" fillOpacity="0.85" />

      {/* kapak */}
      <ellipse cx="32" cy="22" rx="18" ry="5" fill="#e7e2da" />
      <rect x="14" y="17" width="36" height="6" rx="3" fill="#f6ede1" />

      {/* pipet */}
      <rect x="33" y="2" width="5" height="20" rx="2" fill="#f6ede1" transform="rotate(10 35 12)" />
    </svg>
  )
}
