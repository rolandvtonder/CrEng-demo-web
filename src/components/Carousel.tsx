import type { RefObject } from 'react'
import { SERVICES } from '../site'

// a lit face rather than a flat fill, so the tilt reads as a solid
const FACES = [
  ['#e4e7ff', '#bcc2f2'],
  ['#ffe3e4', '#f3b9bc'],
  ['#e9edf5', '#c3cbdd'],
  ['#e4e7ff', '#bcc2f2'],
  ['#ffe3e4', '#f3b9bc'],
]

export const SLIDES = [
  ...SERVICES.slice(0, 4).map((s) => ({
    no: s.no,
    title: s.title,
    short: s.short,
    href: 'services.html',
  })),
  {
    no: '05',
    title: 'Crane\nTraining',
    short: 'Hands-on masterclasses with a mobile training unit.',
    href: 'training.html',
  },
]

type Props = {
  /** the Home rAF loop writes transforms straight onto these nodes */
  cardsRef: RefObject<(HTMLAnchorElement | null)[]>
}

export default function Carousel({ cardsRef }: Props) {
  return (
    <div className="track">
      {SLIDES.map((s, i) => (
        <a
          key={s.no}
          href={s.href}
          className="track-card"
          ref={(el) => {
            cardsRef.current[i] = el
          }}
          style={{
            background: `linear-gradient(152deg, #fff 0%, ${FACES[i][0]} 46%, ${FACES[i][1]} 100%)`,
          }}
        >
          <span className="no">{s.no}</span>
          <span className="title">{s.title}</span>
          <span className="body">{s.short}</span>
          <span className="arrow">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <path
                d="M2 8L8 2M8 2H3.4M8 2V6.6"
                fill="none"
                stroke="#262262"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </a>
      ))}
    </div>
  )
}
