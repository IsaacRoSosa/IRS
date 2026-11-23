import { linkIcon, ExternalIcon } from "./Icons";

// External link styled as a button, with an icon chosen by link type.
export default function LinkButton({ label, url, type, variant = "ghost" }) {
  const Icon = linkIcon[type] ?? ExternalIcon;
  const styles =
    variant === "solid"
      ? "bg-ink text-paper hover:bg-vermilion hover:text-on-wash"
      : "border border-line text-ink hover:border-rust hover:text-rust";
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${styles}`}
    >
      <Icon width={16} height={16} />
      {label}
    </a>
  );
}
