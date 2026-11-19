import Image from "next/image";

// A technology label. Logos are drawn as white silhouettes so the set looks uniform;
// technologies without a logo get a small lavender dot instead.
export default function TechChip({ name, logo, className = "", style }) {
  return (
    <li style={style} className={`${className} inline-flex items-center gap-2 rounded-full border border-line bg-deep-2/60 py-1.5 pr-3.5 pl-2 text-sm text-star/90`}>
      {logo ? (
        <Image src={logo} alt="" width={16} height={16} className="ml-1 size-4 object-contain brightness-0 invert" />
      ) : (
        <span aria-hidden="true" className="ml-1 size-1.5 rounded-full bg-lavender" />
      )}
      {name}
    </li>
  );
}
