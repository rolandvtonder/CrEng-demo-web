import { useEffect, useState } from 'react'
import { PAGES, type PageId } from '../site'

const LEFT = PAGES.slice(0, 3)
const RIGHT = PAGES.slice(3)

export default function Nav({ current }: { current: PageId }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)

  // Over a hero the bar is see-through; once body copy scrolls under it, it fills in.
  useEffect(() => {
    const onScroll = () => {
      const stage = document.querySelector('.stage')?.parentElement
      setSolid(stage ? stage.getBoundingClientRect().bottom < 80 : window.scrollY > 40)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = (items: typeof PAGES, side: string) => (
    <ul className={`nav-links ${side}`}>
      {items.map((p) => (
        <li key={p.id}>
          <a
            className="nav-link"
            href={p.href}
            aria-current={p.id === current ? 'page' : undefined}
          >
            {p.label}
          </a>
        </li>
      ))}
    </ul>
  )

  return (
    <nav className={`nav${open ? ' open' : ''}${solid ? ' solid' : ''}`} aria-label="Main">
      {links(LEFT, 'left')}
      <a className="logo" href="./" aria-label="CrEng home">
        <img src="logo.png" alt="" width="412" height="452" />
      </a>
      <button
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="16" height="12" viewBox="0 0 16 12" aria-hidden="true">
          <path d="M0 1h16M0 6h16M0 11h16" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        Menu
      </button>
      {links(RIGHT, 'right')}
    </nav>
  )
}
