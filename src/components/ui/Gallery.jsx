"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronIcon } from "./Icons";

// Screenshot carousel used inside the project modal.
export default function Gallery({ images, title }) {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (step) => setIndex((i) => (i + step + count) % count);

  return (
    <div className="relative aspect-video w-full bg-space">
      <Image
        key={images[index]}
        src={images[index]}
        alt={`${title} screenshot ${index + 1} of ${count}`}
        fill
        sizes="(min-width: 768px) 768px, 100vw"
        className="object-contain"
        priority
      />
      {count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Previous screenshot"
            className="absolute top-1/2 left-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-space/70 backdrop-blur transition-colors hover:bg-space"
          >
            <ChevronIcon direction="left" />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Next screenshot"
            className="absolute top-1/2 right-3 grid size-10 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-space/70 backdrop-blur transition-colors hover:bg-space"
          >
            <ChevronIcon />
          </button>
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-space/60 px-3 py-2 backdrop-blur">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all ${i === index ? "w-6 bg-lavender" : "w-2 bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
