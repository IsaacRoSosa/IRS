// JobHill's mascot (Jobmiga) waving, ported from the JobHill repo
// (src/components/mascots/AntWaving.tsx). Animations live in globals.css (jm- classes)
// and stop when the visitor prefers reduced motion.
export default function JobHillMark({ className = "", label = "JobHill logo" }) {
  return (
    <svg
      viewBox="0 0 240 240"
      className={`jm-mascot ${className}`}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >

      {/* far arm (down, right side) */}
      <path d="M188 182 C 200 200, 206 222, 208 244" fill="none" stroke="#1a73c9" strokeWidth="17" strokeLinecap="round"/>
      {/* lower body / pants */}
      <path d="M100 222 C 112 214, 180 214, 194 224 L 196 250 L 98 250 Z" fill="#0b5bb5"/>
      {/* waving arm */}
      <g className="jm-wave-arm" style={{ transformOrigin: '96px 182px' }}>
        <path d="M98 184 C 80 196, 66 192, 60 180 C 52 164, 44 148, 38 136" fill="none" stroke="#1a7fd6" strokeWidth="17" strokeLinecap="round"/>
        <path d="M30 140 C 26 128, 30 118, 38 118 C 46 118, 48 128, 48 136 L 52 128 C 54 122, 60 124, 58 132 L 52 146 C 46 150, 34 150, 30 140 Z" fill="#1a7fd6"/>
      </g>
      {/* torso + shirt */}
      <path d="M110 150 C 96 156, 86 172, 82 186 C 90 192, 98 194, 104 192 L 106 226 C 128 232, 168 232, 192 224 L 190 192 C 196 194, 204 192, 210 186 C 204 168, 188 154, 170 148 Z" fill="#d6e7f7"/>
      <path d="M106 192 C 104 205, 105 216, 106 226" fill="none" stroke="#b9d4ee" strokeWidth="2"/>
      <path d="M190 192 C 192 205, 191 216, 192 224" fill="none" stroke="#b9d4ee" strokeWidth="2"/>
      {/* heart + text */}
      <path d="M122 172 C 122 166, 130 164, 133 170 C 136 164, 144 166, 144 172 C 144 179, 133 186, 133 186 C 133 186, 122 179, 122 172 Z" fill="#c8423f"/>
      <text x="138" y="208" textAnchor="middle" fontFamily="Arial Black, Arial, sans-serif" fontWeight="900" fontSize="13" fill="#1a5fb0" letterSpacing="0.3">JOBHILL</text>
      {/* neck */}
      <path d="M114 136 L 150 134 L 152 150 C 140 158, 122 158, 112 150 Z" fill="#0f62bd"/>
      {/* antennae */}
      <g className="jm-antennae" style={{ transformOrigin: '140px 64px' }} fill="none" stroke="#2a90de" strokeWidth="7" strokeLinecap="round">
        <path d="M128 62 C 128 44, 120 32, 106 26"/>
        <path d="M156 68 C 162 52, 160 40, 150 32"/>
      </g>
      {/* head */}
      <g className="jm-head" style={{ transformOrigin: '130px 140px' }}>
        <ellipse cx="116" cy="100" rx="54" ry="40" fill="#2a90de" transform="rotate(-14 116 100)"/>
        <ellipse className="jm-eye" style={{ transformOrigin: '125px 94px' }} cx="125" cy="94" rx="6.5" ry="10" fill="#0b3f75"/>
        <path d="M76 124 C 86 132, 106 132, 117 120" fill="none" stroke="#0b3f75" strokeWidth="5" strokeLinecap="round"/>
      </g>
    </svg>
  );
}
