import { VIDEOS } from '../site'

type Card =
  | { kind: 'play'; img: string; label: string; href: string }
  | { kind: 'stat'; value: string; label: string; href: string }

const thumb = (id: string) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`

const CARDS: Card[] = [
  { kind: 'play', img: thumb(VIDEOS[0].id), label: 'Watch the masterclass', href: 'insights.html' },
  { kind: 'stat', value: '30+', label: 'Technicians trained', href: 'training.html' },
  { kind: 'play', img: thumb(VIDEOS[1].id), label: 'Mobile training unit', href: 'insights.html' },
]

export function PlayIcon() {
  return (
    <span className="play">
      <svg width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
        <path d="M0 0L9 5L0 10Z" fill="#262262" />
      </svg>
    </span>
  )
}

export default function HeroCards() {
  return (
    <div className="hero-cards">
      {CARDS.map((c) => (
        <a key={c.label} className="hero-card" href={c.href}>
          {c.kind === 'play' && <img src={c.img} alt="" />}
          <span className="hero-card-foot">
            {c.kind === 'play' ? <PlayIcon /> : <span className="hero-card-value">{c.value}</span>}
            <span>{c.label}</span>
          </span>
        </a>
      ))}
    </div>
  )
}
