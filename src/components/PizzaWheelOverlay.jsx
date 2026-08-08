import { forwardRef } from 'react'

export const WHEEL_SIZE = 220
const SLICE_COUNT = 8

const PizzaWheelOverlay = forwardRef(function PizzaWheelOverlay(_, ref) {
  return (
    <div
      ref={ref.containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center opacity-0"
      style={{ pointerEvents: 'none' }}
      aria-hidden="true"
    >
      <div ref={ref.backdropRef} className="absolute inset-0 bg-ink opacity-0" />

      <div
        ref={ref.wheelRef}
        className="relative overflow-hidden rounded-full shadow-2xl"
        style={{ width: WHEEL_SIZE, height: WHEEL_SIZE }}
      >
        {Array.from({ length: SLICE_COUNT }).map((_, i) => (
          <div
            key={i}
            ref={(el) => (ref.sliceRefs.current[i] = el)}
            className="absolute inset-0"
            style={{
              background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-primary-dark)',
              clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%)',
              transform: `rotate(${i * 45}deg)`,
              backgroundImage:
                i % 2 !== 0
                  ? 'radial-gradient(circle at 35% 35%, rgba(163,34,31,0.9) 0 6px, transparent 7px)'
                  : undefined,
              backgroundSize: i % 2 !== 0 ? '18px 18px' : undefined,
            }}
          />
        ))}
        <div className="pointer-events-none absolute inset-2 rounded-full border-4 border-gold/80" />
      </div>

      <div ref={ref.logoRef} className="absolute text-center opacity-0">
        <p className="font-display text-2xl font-extrabold tracking-wide text-cream md:text-3xl">
          OTTO BROTHERS
        </p>
        <p className="mt-1 text-xs uppercase tracking-[0.3em] text-gold md:text-sm">Pizza</p>
      </div>
    </div>
  )
})

export default PizzaWheelOverlay
