
import type { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode; // 버튼 안에 표시할 아이콘
  variant?: "default" | "fill"; // 버튼 배경 스타일
  ariaLabel: string; // 아이콘만으로 버튼의 목적을 알 수 있도록 설명을 전달
  onClick?: () => void; // 버튼을 클릭했을 때 실행할 함수
  disabled?: boolean; // true이면 버튼을 조작할 수 없음
  size?: "L" | "S"; // 버튼 크기 (L: 아이콘 24px, S: 아이콘 20px)
};

export default function IconButton({
  icon,
  variant = "default",
  ariaLabel,
  onClick,
  disabled = false,
  size = "L",
}: IconButtonProps) {

  const iconSizeClass =
    size === "S"
      ? "[&_svg]:h-5 [&_svg]:w-5 [&_img]:h-5 [&_img]:w-5"
      : "[&_svg]:h-6 [&_svg]:w-6 [&_img]:h-6 [&_img]:w-6";

  const buttonSizeClass =
    size === "S"
      ? "h-[32px] w-[32px]"
      : "h-[44px] w-[44px]";

  return (
    <div>
      <button
        type="button"
        className={`inline-flex ${buttonSizeClass} items-center justify-center rounded-moaft-full border-0 p-0 text-common-black ${
          variant === "fill" ? "bg-gray-700" : "bg-transparent"
        }`}
        aria-label={ariaLabel}
        onClick={onClick}
        disabled={disabled}
      >
        <span
          className={`${iconSizeClass} ${
            variant === "fill"
              ? "[&_img]:brightness-0 [&_img]:invert [&_svg]:brightness-0 [&_svg]:invert"
              : ""
          }`}
        >
          {icon}
        </span>
      </button>
    </div>
  );
}
