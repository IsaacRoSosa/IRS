import Image from "next/image";

// Each card gets a different arrangement of washes: [shape class, color class, position/size classes].
// Shapes are organic blobs, half and quarter discs, like the Nujabes sleeves. Picked by project index.
const blob = "rounded-[62%_38%_55%_45%/48%_58%_42%_52%]";
const compositions = [
  [
    [blob, "bg-vermilion", "-left-8 top-6 h-36 w-44"],
    ["rounded-full", "bg-mint", "right-6 -top-8 size-32"],
    ["rounded-tl-full", "bg-rose", "-right-4 -bottom-4 h-24 w-28"],
  ],
  [
    ["rounded-full", "bg-fern", "-left-6 -bottom-10 size-40"],
    [blob, "bg-ochre", "right-4 top-4 h-28 w-36"],
    ["rounded-full", "bg-rose", "left-1/3 -top-6 h-14 w-24"],
  ],
  [
    [blob, "bg-rose", "-right-8 top-2 h-40 w-44"],
    ["rounded-tr-full", "bg-fern", "-left-4 -bottom-4 h-24 w-28"],
    ["rounded-full", "bg-butter", "left-10 top-5 size-16"],
  ],
  [
    ["rounded-full", "bg-ochre", "-left-6 -top-8 size-36"],
    [blob, "bg-moss", "-right-6 bottom-0 h-32 w-44"],
    ["rounded-full", "bg-vermilion", "right-1/3 top-3 h-10 w-16"],
  ],
  [
    [blob, "bg-mint", "-left-10 top-4 h-40 w-48"],
    ["rounded-tl-full", "bg-burgundy", "-right-4 -bottom-4 h-24 w-28"],
    ["rounded-full", "bg-ochre", "right-8 top-5 size-14"],
  ],
];

// The project card artwork: the app icon resting on a small patch of watercolor,
// with a wash arrangement chosen from the project index (stable across renders).
export default function WashWindow({ src, alt, index = 0, large = false, interactive = false }) {
  const shapes = compositions[index % compositions.length];
  return (
    <div className={`${interactive ? "shine" : ""} relative grid aspect-[16/10] w-full place-items-center overflow-hidden bg-paper-sunk`}>
      {shapes.map(([shape, color, place], i) => (
        <span
          key={i}
          aria-hidden="true"
          className={`absolute ${shape} ${color} ${place} opacity-90 [mix-blend-mode:var(--wash-blend)] transition-transform duration-700 ease-out ${
            interactive ? (i % 2 ? "group-hover:-translate-y-1.5" : "group-hover:translate-x-2") : ""
          }`}
        />
      ))}
      <div
        className={`relative transition-transform duration-500 ease-out ${large ? "size-40 sm:size-48" : "size-28 sm:size-32"} ${
          interactive ? "scale-90 group-hover:scale-100 group-hover:-rotate-3" : ""
        }`}
      >
        <Image src={src} alt={alt} fill sizes={large ? "192px" : "128px"} className="object-contain drop-shadow-[0_8px_16px_rgba(38,38,29,0.25)]" />
      </div>
    </div>
  );
}
