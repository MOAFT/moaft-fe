type ProfileButtonProps = {
  src: string;
  alt: string;
  size?: "S" | "M";
  onClick?: () => void;
};

export default function ProfileButton({
  src,
  alt,
  size = "M",
  onClick,
}: ProfileButtonProps) {
  const sizeClass = size === "S" ? "h-10 w-10" : "h-[60px] w-[60px]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-moaft-full border border-border-neutral-default bg-transparent p-0 focus-visible:border-border-primary-default focus-visible:outline-none ${sizeClass}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-moaft-full object-cover"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-moaft-full group-hover:bg-gray-alpha-100 group-active:bg-gray-alpha-200"
      />
    </button>
  );
}
