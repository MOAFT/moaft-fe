import type { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode;
  variant?: "default" | "fill";
  ariaLabel: string;
  onClick?: () => void;
  disabled?: boolean;
  iconSize?: 24 | 28;
};

export default function IconButton({
  icon,
  variant = "default",
  ariaLabel,
  onClick,
  disabled = false,
  iconSize = 24,
}: IconButtonProps) {

  const iconSizeClass =
    iconSize === 28
      ? "[&_svg]:h-7 [&_svg]:w-7 [&_img]:h-7 [&_img]:w-7"
      : "[&_svg]:h-6 [&_svg]:w-6 [&_img]:h-6 [&_img]:w-6";
      
  return (
    <div>
      <button
        type="button"
        className={`inline-flex h-[44px] w-[44px] items-center justify-center rounded-moaft-full border-0 p-0 text-common-black ${
          variant === "fill" ? "bg-gray-700" : "bg-transparent"
        }`}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={disabled}
      >
        <span
          className={`${iconSizeClass} ${
            variant === "fill" ? "[&_img]:brightness-0 [&_img]:invert" : ""
          }`}
        >
          {icon}
        </span>
      </button>
    </div>
  );
}
