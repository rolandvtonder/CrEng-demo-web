import { useEffect, useRef, useState } from 'react'
import Carousel, { SLIDES } from '../components/Carousel'
import Cta from '../components/Cta'
import Footer from '../components/Footer'
import HeroCards from '../components/HeroCards'
import { useReveal } from '../components/Layout'
import Nav from '../components/Nav'
import { Blueprint, Elevation, Haze, SceneLayer } from '../components/Scene'
import { HERO_LAYERS, clamp, ease, lerp, range } from '../lib/anim'

/** Total scroll distance. 6x viewport gives the fly-through room to breathe. */
const SCROLL_VH = 600

const REDUCED = '(prefers-reduced-motion: reduce)'

export default function Home() {
  // With reduced motion the fly-through is replaced by a still hero and a grid.
  const [still, setStill] = useState(() => window.matchMedia(REDUCED).matches)

  const flyRef = useRef<HTMLDivElement>(null)
  const layersRef = useRef<(HTMLDivElement | null)[]>([])
  const heroRef = useRef<HTMLDivElement>(null)
  const cueRef = useRef<HTMLDivElement>(null)
  const scene2Ref = useRef<HTMLDivElement>(null)
  const paperRef = useRef<HTMLDivElement>(null)
  const elevationRef = useRef<HTMLDivElement>(null)
  const hazeRef = useRef<HTMLDivElement>(null)
  const head2Ref = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([])

  // pointer parallax, lerped toward the real cursor each tick
  const mouse = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useReveal()

  useEffect(() => {
    const mq = window.matchMedia(REDUCED)
    const onChange = () => setStill(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      target.current.x = (e.clientX / window.innerWidth) * 2 - 1
      target.current.y = (e.clientY / window.innerHeight) * 2 - 1
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useEffect(() => {
    if (still) return
    let raf = 0

    const tick = () => {
      raf = requestAnimationFrame(tick)
      const fly = flyRef.current
      if (!fly) return

      // progress through the fly-through only; the page carries on below it
      const max = fly.offsetHeight - window.innerHeight
      const sp = max > 0 ? clamp(-fly.getBoundingClientRect().top / max, 0, 1) : 0
      const ep = ease(sp)

      // pointer easing
      mouse.current.x = lerp(mouse.current.x, target.current.x, 0.06)
      mouse.current.y = lerp(mouse.current.y, target.current.y, 0.06)
      const { x: rx, y: ry } = mouse.current

      // ── hero planes ─────────────────────────────────────────────
      // The gantry reaches scale 9 and passes the lens; everything nearer
      // than it leaves frame sooner, everything behind it barely moves.
      HERO_LAYERS.forEach((L, i) => {
        const el = layersRef.current[i]
        if (!el) return

        const scale = lerp(L.scale[0], L.scale[1], ep)
        // divide the pointer offset by scale so the wiggle does not balloon
        // as a plane zooms past the camera
        const px = (rx * L.mouse) / scale + (L.driftX ?? 0) * ep
        const py = (ry * L.mouse) / scale + (L.driftY ?? 0) * ep

        el.style.transform = `translate3d(${px}px, ${py}px, 0) scale(${scale})`
        // Nearer planes clear out early so they stop occluding the hook we
        // are travelling toward; the backplates hold until scene two arrives.
        const [f0, f1] = L.fade ?? [0.5, 0.62]
        el.style.opacity = String(1 - range(sp, f0, f1))
      })

      // ── hero copy ───────────────────────────────────────────────
      if (heroRef.current) {
        const op = 1 - range(sp, 0.02, 0.24)
        heroRef.current.style.opacity = String(op)
        heroRef.current.style.transform = `translateY(${sp * -50}px)`
        // faded-out links must leave the tab order too
        heroRef.current.style.visibility = op > 0.01 ? 'visible' : 'hidden'
      }
      if (cueRef.current) {
        cueRef.current.style.opacity = String(1 - range(sp, 0.0, 0.12))
      }

      // ── scene two ───────────────────────────────────────────────
      const s2 = range(sp, 0.46, 0.64)
      if (scene2Ref.current) {
        scene2Ref.current.style.opacity = String(s2)
        scene2Ref.current.style.visibility = s2 > 0.01 ? 'visible' : 'hidden'
        scene2Ref.current.style.pointerEvents = s2 > 0.5 ? 'auto' : 'none'
      }
      if (paperRef.current) {
        const k = lerp(1.18, 1.0, s2)
        paperRef.current.style.transform = `translate3d(${rx * 6}px, ${ry * 6}px, 0) scale(${k})`
      }
      if (elevationRef.current) {
        const k = lerp(1.3, 1.0, s2)
        elevationRef.current.style.transform = `translate3d(${rx * 12}px, ${ry * 12}px, 0) scale(${k})`
      }
      if (hazeRef.current) {
        hazeRef.current.style.transform = `translate3d(${rx * 20}px, ${ry * 10 + lerp(60, 0, s2)}px, 0) scale(1.05)`
      }
      if (head2Ref.current) {
        head2Ref.current.style.opacity = String(range(sp, 0.52, 0.66))
        head2Ref.current.style.transform = `translateY(${lerp(26, 0, range(sp, 0.52, 0.68))}px)`
      }

      // ── card track ──────────────────────────────────────────────
      // The cards ride a shallow arc rather than a full circle: each one
      // enters from the left, rises to the crown of the arc facing the
      // viewer, then drops away right. Scroll advances every card along the
      // same track, and the track wraps so the row never runs out.
      const prog = range(sp, 0.5, 1)
      const spread = Math.min(window.innerWidth * 0.42, 560)
      const arcDrop = 96
      const n = SLIDES.length

      cardsRef.current.forEach((el, i) => {
        if (!el) return
        // u runs -1 (far left) -> 0 (crown) -> +1 (far right), wrapping
        const t = (i / n + prog * 1.15) % 1
        const u = t * 2 - 1

        const x = u * spread
        const y = u * u * arcDrop // crown at centre, shoulders dip away
        // the arc bulges toward the viewer, so the ends sit further back
        const z = -Math.abs(u) * 260
        // ...and turn to follow it: the card's inner edge stays nearer the lens
        const rotY = u * 38
        const rot = u * 9 // a little lean on top of the turn
        const s = lerp(1.0, 0.9, Math.abs(u))
        // fade the two ends so cards slip in and out rather than popping
        const op = 1 - range(Math.abs(u), 0.62, 0.96)

        el.style.transform = `translate3d(calc(-50% + ${x}px), calc(-50% + ${y}px), ${z}px) rotateY(${rotY}deg) rotate(${rot}deg) scale(${s})`
        el.style.zIndex = String(200 - Math.round(Math.abs(u) * 100))
        el.style.opacity = String(op)
      })
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [still])

  return (
    <>
      <a className="skip" href="#after-hero">
        Skip to content
      </a>
      <Nav current="home" />

      <main className={still ? 'still' : undefined}>
        <div ref={flyRef} style={{ height: still ? 'auto' : `${SCROLL_VH}vh`, position: 'relative' }}>
          <div className="stage">
            {/* ── SCENE ONE : the crane bay ──────────────────────────── */}
            {HERO_LAYERS.map((L, i) => (
              <div
                key={L.id}
                className="plate"
                ref={(el) => {
                  layersRef.current[i] = el
                }}
                style={{ transformOrigin: L.origin ?? '50% 50%', zIndex: L.z }}
              >
                <SceneLayer id={L.id} />
              </div>
            ))}

            {/* depth vignette, sits above the plates but below the copy */}
            <div className="vignette" />

            {/* ── HERO COPY ──────────────────────────────────────────── */}
            <div ref={heroRef} className="hero-copy">
              <div className="hero-text">
                <h1 className="hero-title">
                  RISK{' '}
                  <span className="chev" aria-hidden="true">
                    ›
                  </span>
                  <br />
                  <em>INTO</em> PERSPECTIVE
                </h1>
                <p className="hero-lede">
                  Independent, data-driven engineering expertise for all lifting
                  assets, from useful life assessments to hands-on training.
                </p>
                <div className="btn-row">
                  <a className="btn btn-primary" href="services.html">
                    Our services
                  </a>
                  <a className="btn btn-ghost" href="contact.html">
                    Contact us
                  </a>
                </div>
              </div>

              <HeroCards />
            </div>

            {!still && (
              <>
                {/* ── SCROLL CUE ─────────────────────────────────────── */}
                <div ref={cueRef} className="cue" aria-hidden="true">
                  <span className="cue-ring">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                      <path
                        d="M2 4l4 4 4-4"
                        stroke="#fff"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                      />
                    </svg>
                  </span>
                </div>

                {/* ── SCENE TWO : the drawing ────────────────────────── */}
                <div ref={scene2Ref} className="scene2" style={{ visibility: 'hidden' }}>
                  <div ref={paperRef} className="plate">
                    <Blueprint />
                  </div>
                  <div ref={elevationRef} className="plate">
                    <Elevation />
                  </div>
                  <div ref={hazeRef} className="plate" style={{ zIndex: 300 }}>
                    <Haze />
                  </div>

                  <Carousel cardsRef={cardsRef} />

                  <div ref={head2Ref} className="scene2-head" style={{ opacity: 0 }}>
                    <h2>ENGINEERING BEYOND INSPECTION</h2>
                    <p>
                      Every assessment ends in a detailed engineering report and
                      analytics, so decisions rest on data rather than guesswork.
                    </p>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div id="after-hero">
          {still && (
            <section className="section">
              <div className="wrap">
                <div className="section-head">
                  <span className="eyebrow">What we do</span>
                  <h2 className="h2">Engineering beyond inspection</h2>
                </div>
                <div className="grid">
                  {SLIDES.map((s) => (
                    <a key={s.no} className="card" href={s.href}>
                      <span className="no">{s.no}</span>
                      <h3 className="h3">{s.title}</h3>
                      <p>{s.short}</p>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          )}

          <section className="section section-alt">
            <div className="wrap">
              <div className="section-head reveal">
                <span className="eyebrow">Why CrEng</span>
                <h2 className="h2">
                  Condition, turned into <em>quantified</em> risk
                </h2>
                <p className="prose" style={{ marginTop: 16 }}>
                  A major inspection or useful life assessment gives you perspective
                  on risk, safety and capital planning for your cranes and hoists.
                </p>
              </div>
              <div className="stats reveal">
                <div className="stat">
                  <div className="stat-value">4</div>
                  <p className="stat-label">
                    perspectives on every asset: structural, mechanical, electrical
                    and legal
                  </p>
                </div>
                <div className="stat">
                  <div className="stat-value">47–50%</div>
                  <p className="stat-label">
                    of findings in two recent client datasets related to electrical
                    and hoist systems, the load path
                  </p>
                </div>
                <div className="stat">
                  <div className="stat-value">30+</div>
                  <p className="stat-label">
                    technicians trained at our Overhead Crane &amp; Lifting
                    Masterclass
                  </p>
                </div>
              </div>
            </div>
          </section>

          <Cta
            title="Let us give perspective"
            body="Tell us about your cranes and hoists and we will help you understand where the risk sits."
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
