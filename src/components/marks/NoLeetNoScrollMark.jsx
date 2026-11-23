import Image from "next/image";

// No Leet No Scroll's character, in two layers: the hand sits behind the body and
// wags from the wrist ("nuh uh"), while the little guy stays put.
// The global reduced-motion rule stops the wag.
export default function NoLeetNoScrollMark({ className = "", label = "No Leet No Scroll logo" }) {
  return (
    <span
      className={`relative block ${className}`}
      {...(label ? { role: "img", "aria-label": label } : { "aria-hidden": true })}
    >
      <span className="absolute inset-0 m-auto aspect-[233/283] max-h-full max-w-full">
        <Image
          src="/Projects/NoLeetNoScroll/hand.png"
          alt=""
          fill
          sizes="192px"
          className="origin-[64%_88%] animate-nuh-wag object-contain motion-reduce:animate-none"
        />
        <Image src="/Projects/NoLeetNoScroll/body.png" alt="" fill sizes="192px" className="object-contain" />
      </span>
    </span>
  );
}
