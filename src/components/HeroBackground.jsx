export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Soft teal glow */}
          <radialGradient id="teal-glow" cx="15%" cy="85%" r="55%">
            <stop offset="0%" stopColor="#2EC4B6" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#2EC4B6" stopOpacity="0" />
          </radialGradient>

          {/* Soft gold glow top-right */}
          <radialGradient id="gold-glow" cx="88%" cy="12%" r="40%">
            <stop offset="0%" stopColor="#EAA123" stopOpacity="0.10" />
            <stop offset="100%" stopColor="#EAA123" stopOpacity="0" />
          </radialGradient>

          {/* Cap group — reusable */}
          <g id="hero-cap">
            <path d="M -78 -28 Q 0 4 78 -28 L 78 10 Q 0 44 -78 10 Z" fill="#DA9100" />
            <polygon points="0,-105 175,-52 0,2 -175,-52" fill="#EAA123" />
            <polygon points="0,-105 175,-52 0,-45 -175,-52" fill="#F3AE26" opacity="0.35" />
            <path d="M 130 -40 L 131 22" fill="none" stroke="#EAA123" strokeWidth="6" strokeLinecap="round" />
            <circle cx="131" cy="30" r="9" fill="#EAA123" />
          </g>
        </defs>

        {/* Base wash */}
        <rect width="1440" height="900" fill="#FFFFFF" />
        <rect width="1440" height="900" fill="url(#teal-glow)" />
        <rect width="1440" height="900" fill="url(#gold-glow)" />

        {/* Ghost cap — top-right, low opacity, rotated slightly */}
        <g transform="translate(1020 250) rotate(12) scale(0.85)" opacity="0.38">
          <use href="#hero-cap" />
        </g>

        {/* Wave band 1 — high, faint */}
        <path
          d="M -100 300 Q 200 200 500 320 T 1100 300 T 1540 320"
          fill="none"
          stroke="#2EC4B6"
          strokeWidth="28"
          strokeLinecap="round"
          opacity="0.10"
        />

        {/* Wave band 2 — mid, slightly stronger */}
        <path
          d="M -100 520 Q 200 430 500 540 T 1100 520 T 1540 540"
          fill="none"
          stroke="#2EC4B6"
          strokeWidth="32"
          strokeLinecap="round"
          opacity="0.16"
        />

        {/* Wave band 3 — low, boldest (grounds the section) */}
        <path
          d="M -100 760 Q 220 660 520 780 T 1120 760 T 1540 780"
          fill="none"
          stroke="#0B2545"
          strokeWidth="36"
          strokeLinecap="round"
          opacity="0.08"
        />

        {/* Gold accent dots (stars / sparks) */}
        <g fill="#EAA123" opacity="0.55">
          <circle cx="120" cy="140" r="3" />
          <circle cx="240" cy="90" r="2" />
          <circle cx="340" cy="200" r="2.5" />
          <circle cx="880" cy="120" r="3" />
          <circle cx="1010" cy="80" r="2" />
          <circle cx="1320" cy="380" r="2.5" />
          <circle cx="180" cy="620" r="2" />
          <circle cx="1360" cy="650" r="3" />
        </g>
      </svg>
    </div>
  )
}