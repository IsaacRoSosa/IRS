"use client";
import { useEffect, useId, useState } from "react";

// Crosstalk's logo (option B, the planet) drawn as live SVG so the moon can orbit:
// it travels along the ring and passes behind the planet on the far side.
// With reduced motion turned on, the moon stays at its resting spot.

// The ring as one closed loop: the near (lower) half first, then the far (upper) half.
const ORBIT = "M 16 100 A 84 30 0 0 0 184 100 A 84 30 0 0 0 16 100";
const NEAR_ARC = "M 16 100 A 84 30 0 0 0 184 100";
const FAR_ARC = "M 16 100 A 84 30 0 0 1 184 100";

function useReducedMotion() {
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

export default function CrosstalkMark({ color = "#ffffff", className = "", label = "Crosstalk logo" }) {
  const id = useId().replace(/:/g, "");
  const reduced = useReducedMotion();

  // On the far side the moon is dimmed like the far half of the ring, so it reads as behind.
  // The clip sits on a wrapping <g>: animateMotion moves the circle's own coordinates,
  // so a clip on the circle itself would travel with it.
  const moon = (clip, opacity = 1) => (
    <g clipPath={`url(#${clip})`} opacity={opacity}>
      {reduced ? (
        <circle cx="168" cy="121" r="15" fill={color} />
      ) : (
        <circle r="15" fill={color}>
          <animateMotion dur="9s" repeatCount="indefinite" path={ORBIT} />
        </circle>
      )}
    </g>
  );

  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <defs>
        {/* Cuts a gap into the planet where the near half of the ring crosses it */}
        <mask id={`${id}-gap`} maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
          <rect width="200" height="200" fill="#fff" />
          <path d={NEAR_ARC} fill="none" stroke="#000" strokeWidth="30" />
        </mask>
        {/* The moon is drawn twice: behind the planet on the far half, in front on the near half */}
        <clipPath id={`${id}-far`} clipPathUnits="userSpaceOnUse">
          <rect x="-20" y="-20" width="240" height="120" />
        </clipPath>
        <clipPath id={`${id}-near`} clipPathUnits="userSpaceOnUse">
          <rect x="-20" y="100" width="240" height="120" />
        </clipPath>
      </defs>
      <g transform="translate(16 16) scale(0.84) rotate(-18 100 100)">
        <path d={FAR_ARC} fill="none" stroke={color} strokeWidth="14" opacity="0.55" />
        {moon(`${id}-far`, 0.55)}
        <circle cx="100" cy="100" r="46" fill={color} mask={`url(#${id}-gap)`} />
        <path d={NEAR_ARC} fill="none" stroke={color} strokeWidth="14" />
        {moon(`${id}-near`)}
      </g>
    </svg>
  );
}
