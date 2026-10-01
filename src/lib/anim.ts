export const lerp = (a: number, b: number, t: number) => a + (b - a) * t

export const clamp = (v: number, mn: number, mx: number) =>
  Math.max(mn, Math.min(mx, v))

/** ease-in-out */
export const ease = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)

/** normalise v from the range [a,b] into [0,1] */
export const range = (v: number, a: number, b: number) =>
  clamp((v - a) / (b - a), 0, 1)

export type LayerId =
  | 'wall'
  | 'rays'
  | 'hook'
  | 'gantry'
  | 'floor'
  | 'fgLeft'
  | 'fgRight'
  | 'canopy'

/**
 * One parallax plane in the hero.
 *
 * `scale` is the scroll-driven zoom: as the camera pushes through the gantry,
 * the layers closest to the lens grow fastest and leave frame first. `mouse` is
 * the pixel offset applied on pointer move. Nearer planes get both a larger
 * scale range and a larger mouse offset, which is what sells the depth.
 */
export type Layer = {
  id: LayerId
  z: number
  /** px of pointer parallax */
  mouse: number
  /** scroll zoom, start -> end */
  scale: [number, number]
  /** px of vertical drift across the scroll */
  driftY?: number
  /** px of horizontal drift across the scroll (mirrored for the right side) */
  driftX?: number
  /** fades out over this scroll range */
  fade?: [number, number]
  /** transform-origin, so edge layers grow outward instead of from centre */
  origin?: string
}

export const HERO_LAYERS: Layer[] = [
  { id: 'wall', z: 1, mouse: 4, scale: [1.0, 1.45] },
  { id: 'rays', z: 2, mouse: 7, scale: [1.0, 1.7], driftY: -40 },
  // The hook block is what the camera travels toward, so it has to grow faster
  // than the wall behind it or the approach reads as a flat push-in.
  { id: 'hook', z: 3, mouse: 9, scale: [1.0, 5.2], driftY: 40 },
  { id: 'gantry', z: 4, mouse: 12, scale: [1.0, 9.0], fade: [0.4, 0.58] },
  {
    id: 'floor',
    z: 6,
    mouse: 15,
    scale: [1.0, 3.0],
    origin: '50% 100%',
    driftY: 760,
    fade: [0.34, 0.54],
  },
  {
    id: 'fgLeft',
    z: 7,
    mouse: 24,
    scale: [1.0, 3.8],
    origin: '0% 100%',
    driftX: -880,
    driftY: 260,
    fade: [0.26, 0.46],
  },
  {
    id: 'fgRight',
    z: 7,
    mouse: 24,
    scale: [1.0, 3.8],
    origin: '100% 100%',
    driftX: 880,
    driftY: 260,
    fade: [0.26, 0.46],
  },
  {
    id: 'canopy',
    z: 8,
    mouse: 19,
    scale: [1.0, 3.4],
    origin: '50% 0%',
    driftY: -720,
    fade: [0.24, 0.44],
  },
]
