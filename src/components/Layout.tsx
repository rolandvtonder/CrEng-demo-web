import { useEffect, type ReactNode } from 'react'
import type { PageId } from '../site'
import Footer from './Footer'
import Nav from './Nav'
import { SceneLayer } from './Scene'

type Props = {
  current: PageId
  eyebrow: string
  title: ReactNode
  lede: string
  children: ReactNode
}

/** sections marked .reveal rise in as they enter the viewport */
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return
          e.target.classList.add('in')
          io.unobserve(e.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px' },
    )
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

/** Shell for every page except Home: nav, a still of the crane bay, content, footer. */
export default function Layout({ current, eyebrow, title, lede, children }: Props) {
  useReveal()

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav current={current} />
      <header className="page-hero">
        {(['wall', 'rays', 'canopy'] as const).map((id) => (
          <div key={id} className="plate">
            <SceneLayer id={id} />
          </div>
        ))}
        <div className="wrap page-hero-inner">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="page-title">{title}</h1>
          <p className="page-lede">{lede}</p>
        </div>
      </header>
      <main id="main">{children}</main>
      <Footer />
    </>
  )
}
