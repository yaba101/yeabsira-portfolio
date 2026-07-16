/**
 * Minimal line-only icons for the Capabilities cards.
 * Single `currentColor` stroke, `fill="none"`, geometric — built in the
 * same dialect as the reference mark: thin, quiet, nested primitives.
 * Kept static so recognition is immediate and motion remains reserved for state.
 */

const svgProps = {
  className: "h-full w-full",
  viewBox: "0 0 40 40",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const

// Diamond path centred on `cy` — pure geometry, no per-render allocation.
const plane = (cy: number) => `M20 ${cy - 7} L34 ${cy} L20 ${cy + 7} L6 ${cy} Z`

// 01 — Stacked planes. Isometric layers that drift apart and re-settle.
export function LayersIcon(): React.ReactElement {
  return (
    <svg {...svgProps} aria-hidden>
      <path d={plane(13)} />
      <path d={plane(20)} opacity={0.85} />
      <path d={plane(27)} />
    </svg>
  )
}

// Three sonar rings, staggered by index — stable, so module scope.
const PULSE_RINGS = [0, 1, 2]

// 02 — Pulse rings. Concentric rings emanating outward, sonar-style.
export function PulseIcon(): React.ReactElement {
  return (
    <svg {...svgProps} aria-hidden>
      <circle cx={20} cy={20} r={2} fill="currentColor" stroke="none" />
      {PULSE_RINGS.map((ring) => (
        <circle
          key={ring}
          cx={20}
          cy={20}
          r={6}
          style={{ transformBox: "fill-box", transformOrigin: "center" }}
          opacity={0.68 - ring * 0.18}
        />
      ))}
    </svg>
  )
}

// 03 — Nested frames. Concentric rounded rects with inner frames breathing.
export function FramesIcon(): React.ReactElement {
  return (
    <svg {...svgProps} aria-hidden>
      <rect x={4} y={4} width={32} height={32} rx={8} />
      <rect
        x={10}
        y={10}
        width={20}
        height={20}
        rx={5.5}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
      <rect
        x={15.5}
        y={15.5}
        width={9}
        height={9}
        rx={3}
        style={{ transformBox: "fill-box", transformOrigin: "center" }}
      />
    </svg>
  )
}

export const CAPABILITY_ICONS = [LayersIcon, PulseIcon, FramesIcon] as const
