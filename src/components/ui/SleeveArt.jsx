// An original piece in the spirit of the Nujabes sleeves: masses of overlapping, ink-edged
// leaf and feather shapes growing in from the right edge, in the wash colors.
// Generated from a seeded sequence so the arrangement is stable between renders.
const colors = ["moss", "sage", "teal", "vermilion", "ochre", "rose", "fern", "umber", "sky", "burgundy"];

function seeded(seed) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

function leaf(len, w) {
  return `M0,0 C${len * 0.3},${-w} ${len * 0.7},${-w * 1.1} ${len},0 C${len * 0.7},${w * 0.6} ${len * 0.3},${w * 0.7} 0,0 Z`;
}

function mass(seed, originX, originY, from, to, count) {
  const r = seeded(seed);
  return Array.from({ length: count }, (_, i) => {
    const angle = from + (to - from) * (i / (count - 1)) + (r() - 0.5) * 14;
    const len = 170 + r() * 170;
    const w = 30 + r() * 46;
    return {
      d: leaf(len, w),
      transform: `translate(${originX + (r() - 0.5) * 50} ${originY + (r() - 0.5) * 70}) rotate(${angle})`,
      color: colors[Math.floor(r() * colors.length)],
    };
  });
}

const shapes = [
  ...mass(7, 500, -20, 105, 185, 13),
  ...mass(13, 500, 420, -185, -105, 13),
  ...mass(29, 540, 200, 150, 210, 7),
];

export default function SleeveArt({ className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 520 400"
      preserveAspectRatio="xMaxYMid slice"
      className={className}
    >
      {shapes.map((s, i) => (
        <path
          key={i}
          d={s.d}
          transform={s.transform}
          fill={`var(--color-${s.color})`}
          stroke="var(--color-umber)"
          strokeWidth="1.2"
          strokeLinejoin="round"
          style={{ opacity: 0.95 }}
        />
      ))}
    </svg>
  );
}
