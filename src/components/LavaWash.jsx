const palette = ["sage", "vermilion", "moss", "ochre", "indigo", "teal", "rose", "burgundy"];

// [cx, cy, r, dy, x1, x2, seconds, delay] in a 1200 x 800 space. Positions are only starting points:
// each drop wanders along its own path, and the goo filter merges drops that touch.
const drops = [
  [820, 620, 110, -380, 60, -80, 26, 0],
  [980, 300, 90, 260, -100, 80, 31, -10],
  [700, 200, 70, 300, 80, -60, 22, -5],
  [1040, 560, 60, -300, -70, 50, 19, -14],
  [560, 640, 80, -420, 90, -40, 28, -8],
  [900, 120, 100, 320, -60, 100, 34, -18],
  [380, 300, 60, 260, 100, -90, 24, -3],
  [1100, 420, 70, -200, -80, -120, 21, -12],
  [640, 420, 50, 200, 70, 60, 17, -6],
];

// Full-bleed background for the hero. The layer fades toward the text on the left and at the top and
// bottom edges (see .lava-bg), so the drops never end in a visible edge or compete with the copy.
export default function LavaWash() {
  const fill = (i) => ({ fill: `var(--color-${palette[i % palette.length]})` });

  return (
    <>
      <div aria-hidden="true" className="lava-bg pointer-events-none absolute inset-0 -z-10">
        <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" className="size-full">
          <defs>
            <filter id="goo" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -9" />
            </filter>
          </defs>
          <g filter="url(#goo)">
            {drops.map(([cx, cy, r, dy, x1, x2, dur, delay], i) => (
              <circle
                key={i}
                cx={cx}
                cy={cy}
                r={r}
                className="lava-drop"
                style={{ ...fill(i), "--dy": `${dy}px`, "--x1": `${x1}px`, "--x2": `${x2}px`, "--dur": `${dur}s`, "--delay": `${delay}s` }}
              />
            ))}
          </g>
        </svg>
      </div>
    </>
  );
}
