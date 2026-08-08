import { createContext, useContext, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import PizzaWheelOverlay, { WHEEL_SIZE } from '../components/PizzaWheelOverlay'
import useReducedMotion from '../hooks/useReducedMotion'

const SLICE_COUNT = 8
const TransitionCtx = createContext(null)

function coverScale() {
  const diagonal = Math.hypot(window.innerWidth, window.innerHeight)
  return (diagonal / WHEEL_SIZE) * 1.15
}

export function TransitionProvider({ children }) {
  const navigate = useNavigate()
  const reducedMotion = useReducedMotion()
  const containerRef = useRef(null)
  const backdropRef = useRef(null)
  const wheelRef = useRef(null)
  const logoRef = useRef(null)
  const sliceRefs = useRef(Array(SLICE_COUNT).fill(null))
  const busyRef = useRef(false)

  const navigateWithTransition = (to) => {
    if (busyRef.current) return
    if (reducedMotion) {
      navigate(to)
      window.scrollTo(0, 0)
      return
    }
    busyRef.current = true
    const slices = sliceRefs.current
    const scale = coverScale()

    gsap.timeline({ onComplete: () => (busyRef.current = false) })
      .set(containerRef.current, { opacity: 1, pointerEvents: 'auto' })
      .set(slices, { scale: 0 })
      .set(wheelRef.current, { scale: 1, opacity: 1 })
      .to(slices, { scale: 1, duration: 0.28, stagger: 0.035, ease: 'back.out(1.7)' })
      .to(wheelRef.current, { scale, duration: 0.42, ease: 'power2.in' }, '+=0.04')
      .call(() => {
        navigate(to)
        window.scrollTo(0, 0)
      })
      .to(wheelRef.current, { scale: 1, duration: 0.42, ease: 'power2.out' }, '+=0.1')
      .to(
        slices,
        { scale: 0, duration: 0.25, stagger: { each: 0.03, from: 'end' }, ease: 'back.in(1.7)' },
        '-=0.08',
      )
      .set(containerRef.current, { opacity: 0, pointerEvents: 'none' })
  }

  const playIntro = () => {
    if (reducedMotion) return
    busyRef.current = true
    const slices = sliceRefs.current

    gsap.timeline({ onComplete: () => (busyRef.current = false) })
      .set(containerRef.current, { opacity: 1, pointerEvents: 'auto' })
      .set(backdropRef.current, { opacity: 1 })
      .set(slices, { scale: 0 })
      .set(wheelRef.current, { scale: 1, opacity: 1 })
      .set(logoRef.current, { opacity: 0, y: 12 })
      .to(slices, { scale: 1, duration: 0.35, stagger: 0.05, ease: 'back.out(1.7)' })
      .to(logoRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.1')
      .to({}, { duration: 0.55 })
      .to([logoRef.current, backdropRef.current], { opacity: 0, duration: 0.4, ease: 'power2.in' })
      .to(wheelRef.current, { scale: 1.3, opacity: 0, duration: 0.4, ease: 'power2.in' }, '<')
      .set(containerRef.current, { opacity: 0, pointerEvents: 'none' })
  }

  const overlayRefs = { containerRef, backdropRef, wheelRef, logoRef, sliceRefs }

  return (
    <TransitionCtx.Provider value={{ navigateWithTransition, playIntro }}>
      {children}
      <PizzaWheelOverlay ref={overlayRefs} />
    </TransitionCtx.Provider>
  )
}

export function useTransition() {
  const ctx = useContext(TransitionCtx)
  if (!ctx) throw new Error('useTransition must be used within TransitionProvider')
  return ctx
}
