import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-ink/90 px-4 py-2 backdrop-blur">
      <div className="flex flex-col leading-none">
        <span
          className="font-script text-2xl"
          style={{ color: '#F80F09' }}
        >
          Otto
        </span>
        <span
          className="-mt-1 text-xs font-extrabold uppercase tracking-widest"
          style={{ color: '#F4CA13' }}
        >
          Brother&apos;s
        </span>
      </div>
      <LanguageSwitcher />
    </header>
  )
}
