import type { ReactNode } from 'react'
import type { LayerId } from '../lib/anim'

/**
 * The crane bay, drawn as separate planes so each can be moved on its own.
 * Every plane shares one 1600x900 frame and is cropped like `object-fit: cover`.
 * Far planes are lighter and bluer, near planes almost black: the haze is what
 * reads as distance before anything moves.
 */
function Plate({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {children}
    </svg>
  )
}

const WINDOWS = Array.from({ length: 11 }, (_, i) => 118 + i * 126)

function Wall() {
  return (
    <Plate>
      <defs>
        <linearGradient id="wall-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#090b28" />
          <stop offset="0.55" stopColor="#1d2064" />
          <stop offset="1" stopColor="#2a2e80" />
        </linearGradient>
        <linearGradient id="wall-pane" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#aab2ff" stopOpacity="0.42" />
          <stop offset="1" stopColor="#6d74d8" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#wall-bg)" />
      {WINDOWS.map((x) => (
        <g key={x}>
          <rect x={x} y="130" width="96" height="380" fill="url(#wall-pane)" />
          <path
            d={`M${x + 48} 130V510M${x} 225H${x + 96}M${x} 320H${x + 96}M${x} 415H${x + 96}`}
            stroke="#15184f"
            strokeWidth="5"
          />
        </g>
      ))}
      {/* a second crane, far down the bay */}
      <rect x="0" y="548" width="1600" height="16" fill="#2f3390" />
      <rect x="560" y="534" width="70" height="16" fill="#3a3fa6" />
      <path d="M595 564V610" stroke="#3a3fa6" strokeWidth="3" />
      <rect x="0" y="640" width="1600" height="260" fill="#13154a" />
    </Plate>
  )
}

function Rays() {
  return (
    <Plate>
      <defs>
        <linearGradient id="ray" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9ceff" stopOpacity="0.22" />
          <stop offset="1" stopColor="#c9ceff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g className="shimmer">
        <path d="M244 130H340L640 900H380Z" fill="url(#ray)" />
        <path d="M622 130H718L900 900H700Z" fill="url(#ray)" />
        <path d="M1126 130H1222L1180 900H940Z" fill="url(#ray)" />
      </g>
    </Plate>
  )
}

function Hook() {
  return (
    <Plate>
      <defs>
        <linearGradient id="steel" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#8e93c4" />
          <stop offset="0.5" stopColor="#e4e6f6" />
          <stop offset="1" stopColor="#7a7fb4" />
        </linearGradient>
        <linearGradient id="block" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#f2323a" />
          <stop offset="1" stopColor="#b20e15" />
        </linearGradient>
      </defs>
      {/* four falls of rope, running well past the top of the frame */}
      <path
        d="M764-600V372M788-600V372M812-600V372M836-600V372"
        stroke="#b9bde0"
        strokeWidth="4"
      />
      <rect x="732" y="362" width="136" height="104" rx="16" fill="url(#block)" />
      <rect x="732" y="400" width="136" height="12" fill="#070822" opacity="0.5" />
      <circle cx="772" cy="414" r="24" fill="#1a1c58" stroke="#070822" strokeWidth="4" />
      <circle cx="828" cy="414" r="24" fill="#1a1c58" stroke="#070822" strokeWidth="4" />
      <circle cx="772" cy="414" r="6" fill="#c9cdee" />
      <circle cx="828" cy="414" r="6" fill="#c9cdee" />
      <rect x="786" y="466" width="28" height="36" fill="url(#steel)" />
      <path
        d="M800 502V540C800 560 842 562 842 596C842 628 818 646 796 646C770 646 750 628 750 604"
        fill="none"
        stroke="url(#steel)"
        strokeWidth="24"
        strokeLinecap="round"
      />
    </Plate>
  )
}

function Gantry() {
  return (
    <Plate>
      <defs>
        <linearGradient id="girder" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#23277a" />
          <stop offset="1" stopColor="#10123c" />
        </linearGradient>
        <pattern id="hazard" width="28" height="28" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="14" height="28" fill="#ed1c24" />
          <rect x="14" width="14" height="28" fill="#f1f2fa" />
        </pattern>
      </defs>
      {/* columns and runway */}
      <rect x="236" y="268" width="92" height="640" fill="#0e1038" />
      <rect x="236" y="268" width="10" height="640" fill="#2b2f86" />
      <rect x="1272" y="268" width="92" height="640" fill="#0e1038" />
      <rect x="1354" y="268" width="10" height="640" fill="#2b2f86" />
      <rect x="210" y="262" width="144" height="22" fill="#1a1d5e" />
      <rect x="1246" y="262" width="144" height="22" fill="#1a1d5e" />
      {/* bridge girder */}
      <rect x="170" y="186" width="1260" height="78" fill="url(#girder)" />
      <rect x="170" y="180" width="1260" height="10" fill="#363bb0" />
      <path
        d="M330 190V264M470 190V264M610 190V264M990 190V264M1130 190V264M1270 190V264"
        stroke="#0a0c2e"
        strokeWidth="4"
      />
      <rect x="170" y="186" width="74" height="78" fill="url(#hazard)" />
      <rect x="1356" y="186" width="74" height="78" fill="url(#hazard)" />
      <rect x="1040" y="206" width="150" height="38" rx="4" fill="#f1f2fa" />
      <text
        x="1115"
        y="233"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontWeight="600"
        fontSize="24"
        fill="#262262"
      >
        SWL 20 t
      </text>
      {/* trolley */}
      <rect x="704" y="146" width="192" height="44" rx="6" fill="#cf141b" />
      <rect x="724" y="128" width="152" height="22" rx="4" fill="#8c0c12" />
      <circle cx="728" cy="186" r="11" fill="#070822" />
      <circle cx="872" cy="186" r="11" fill="#070822" />
    </Plate>
  )
}

function Floor() {
  return (
    <Plate>
      <defs>
        <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0d0f38" />
          <stop offset="1" stopColor="#05061a" />
        </linearGradient>
      </defs>
      <path d="M-200 900V716H1800V900Z" fill="url(#floor)" />
      <path d="M-200 716H1800" stroke="#2b2f86" strokeWidth="3" />
      <path d="M560 716L300 900M1040 716L1300 900" stroke="#ed1c24" strokeWidth="7" opacity="0.85" />
      <path d="M800 740V900" stroke="#f1f2fa" strokeWidth="4" strokeDasharray="34 26" opacity="0.4" />
    </Plate>
  )
}

/** A laced column with stock stacked at its foot; mirrored for the right side. */
function Foreground({ flip }: { flip?: boolean }) {
  return (
    <Plate>
      <g transform={flip ? 'translate(1600 0) scale(-1 1)' : undefined} fill="#04051a">
        <rect x="-40" y="-40" width="54" height="980" />
        <rect x="150" y="-40" width="40" height="980" />
        <path
          d="M0 60L170 200L0 340L170 480L0 620L170 760L0 900"
          fill="none"
          stroke="#04051a"
          strokeWidth="18"
        />
        <rect x="-40" y="770" width="420" height="170" />
        <circle cx="250" cy="735" r="62" />
        <circle cx="250" cy="735" r="22" fill="#14174a" />
        <circle cx="352" cy="790" r="44" />
        <circle cx="352" cy="790" r="15" fill="#14174a" />
        <rect x="150" y="300" width="40" height="10" fill="#ed1c24" />
      </g>
    </Plate>
  )
}

function Canopy() {
  return (
    <Plate>
      <defs>
        <radialGradient id="lamp" cx="0.5" cy="0" r="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.5" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <g fill="none" stroke="#04051a" strokeWidth="16">
        <path d="M-100 118H1700" />
        <path d="M-100 118L100 0L300 118L500 0L700 118L900 0L1100 118L1300 0L1500 118L1700 0" />
      </g>
      <rect x="-100" y="-40" width="1800" height="54" fill="#04051a" />
      {[420, 1180].map((x) => (
        <g key={x}>
          <path d={`M${x} 118V150`} stroke="#04051a" strokeWidth="6" />
          <path d={`M${x - 34} 172L${x - 16} 150H${x + 16}L${x + 34} 172Z`} fill="#04051a" />
          <ellipse cx={x} cy="174" rx="120" ry="150" fill="url(#lamp)" />
        </g>
      ))}
    </Plate>
  )
}

export function SceneLayer({ id }: { id: LayerId }) {
  switch (id) {
    case 'wall':
      return <Wall />
    case 'rays':
      return <Rays />
    case 'hook':
      return <Hook />
    case 'gantry':
      return <Gantry />
    case 'floor':
      return <Floor />
    case 'fgLeft':
      return <Foreground />
    case 'fgRight':
      return <Foreground flip />
    case 'canopy':
      return <Canopy />
  }
}

/** Scene two backdrop: drawing paper for the engineering view of the same bay. */
export function Blueprint() {
  return (
    <Plate>
      <defs>
        <pattern id="bp-grid" width="50" height="50" patternUnits="userSpaceOnUse">
          <path d="M50 0H0V50" fill="none" stroke="#dee2ff" strokeOpacity="0.07" />
        </pattern>
        <radialGradient id="bp-glow" cx="0.5" cy="0.35" r="0.7">
          <stop offset="0" stopColor="#2d3192" />
          <stop offset="1" stopColor="#090b2a" />
        </radialGradient>
      </defs>
      <rect x="-200" y="-200" width="2000" height="1300" fill="url(#bp-glow)" />
      <rect x="-200" y="-200" width="2000" height="1300" fill="url(#bp-grid)" />
    </Plate>
  )
}

/** Scene two midground: the crane in elevation, as it appears in a report. */
export function Elevation() {
  return (
    <Plate>
      <g fill="none" stroke="#dee2ff" strokeOpacity="0.34" strokeWidth="2">
        <path d="M140 900V640H1460V900" />
        <path d="M100 640H1500M100 600H1500M100 600V640M1500 600V640" />
        <path d="M100 600L200 640L300 600L400 640L500 600L600 640L700 600L800 640L900 600L1000 640L1100 600L1200 640L1300 600L1400 640L1500 600" />
        <rect x="730" y="568" width="140" height="32" />
      </g>
      <g fill="none" stroke="#ed1c24" strokeWidth="2">
        <path d="M140 850H1460M140 838V862M1460 838V862" />
      </g>
      <text
        x="800"
        y="838"
        textAnchor="middle"
        fontFamily="'DM Sans', sans-serif"
        fontSize="20"
        letterSpacing="4"
        fill="#ff7a80"
      >
        SPAN
      </text>
    </Plate>
  )
}

/** Scene two foreground: a low haze so the cards sit in the drawing, not on it. */
export function Haze() {
  return (
    <Plate>
      <defs>
        <linearGradient id="haze" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0.7" stopColor="#070822" stopOpacity="0" />
          <stop offset="1" stopColor="#070822" stopOpacity="0.9" />
        </linearGradient>
      </defs>
      <rect x="-200" y="-200" width="2000" height="1300" fill="url(#haze)" />
    </Plate>
  )
}
