"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Animates its children in the first time they scroll into view.
 *
 *   <Reveal from="up" delay={100}>…</Reveal>
 *
 * from:  "up" (default) | "left" | "right" | "scale" | "fade"
 * delay: milliseconds, handy for staggering items in a list
 * as:    element to render (div by default, use "li" inside lists)
 *
 * The transition itself lives in globals.css (.reveal). People who prefer
 * reduced motion see the content immediately, with no movement.
 */
export default function Reveal({ as: Tag = "div", from = "up", delay = 0, className = "", children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      // Fire when the element is ~12% inside the viewport. The huge top margin means
      // anything already above the screen (e.g. after jumping to #contact) counts as seen.
      { threshold: 0.12, rootMargin: "100000px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={from}
      data-shown={shown || undefined}
      style={{ "--reveal-delay": `${delay}ms` }}
      className={`reveal ${className}`}
      {...rest}
    >
      {children}
    </Tag>
  );
}
