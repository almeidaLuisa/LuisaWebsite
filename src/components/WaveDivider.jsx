function WaveDivider({ flip = false, color = 'var(--bg-elevated)' }) {
  return (
    <svg
      className={`wave-divider${flip ? ' wave-divider-flip' : ''}`}
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0,30 C150,60 350,0 600,30 C850,60 1050,0 1200,30 L1200,60 L0,60 Z"
        fill={color}
      />
    </svg>
  )
}

export default WaveDivider
