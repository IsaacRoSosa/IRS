import Image from "next/image";

const planets = [
  "radial-gradient(circle at 35% 35%, #d060ff, #6600cc 60%, #1a0040)",
  "radial-gradient(circle at 35% 35%, #40d4ff, #0066cc 60%, #001a40)",
  "radial-gradient(circle at 35% 35%, #40ffb8, #00cc66 60%, #00401a)",
  "radial-gradient(circle at 35% 35%, #ffb840, #e05500 60%, #3a1000)",
  "radial-gradient(circle at 35% 35%, #ff80d4, #cc0099 60%, #400033)",
];

// The project card artwork: the app icon floating in a small patch of space,
// with a planet whose color is picked from the project index (stable across renders).
export default function PlanetWindow({ src, alt, index = 0, large = false, interactive = false }) {
  const planet = planets[index % planets.length];
  return (
    <div className={`${interactive ? "shine" : ""} relative grid aspect-[16/10] w-full place-items-center overflow-hidden bg-[radial-gradient(ellipse_at_30%_40%,#16113a_0%,#070820_60%,#03040f_100%)]`}>
      <span aria-hidden="true" className="starfield absolute inset-0" />
      <span
        aria-hidden="true"
        className={`absolute rounded-full transition-transform duration-700 ease-out ${large ? "-right-6 -bottom-6 size-28" : "-right-4 -bottom-4 size-16"} ${
          interactive ? "group-hover:-translate-x-2 group-hover:-translate-y-1" : ""
        }`}
        style={{ background: planet, boxShadow: "0 0 40px rgba(203,172,249,0.25), inset -6px -6px 14px rgba(0,0,0,0.55)" }}
      />
      <span
        aria-hidden="true"
        className={`absolute rounded-full ${large ? "top-8 left-10 size-6" : "top-5 left-6 size-3"}`}
        style={{ background: planets[(index + 2) % planets.length] }}
      />
      <div
        className={`relative transition-transform duration-500 ease-out ${large ? "size-40 sm:size-48" : "size-28 sm:size-32"} ${
          interactive ? "scale-90 group-hover:scale-100 group-hover:-rotate-3" : ""
        }`}
      >
        <Image src={src} alt={alt} fill sizes={large ? "192px" : "128px"} className="object-contain drop-shadow-[0_8px_30px_rgba(0,0,0,0.6)]" />
      </div>
    </div>
  );
}
