import type { ReactNode } from "react";

type IconButtonProps = {
  icon: ReactNode; // 버튼 안에 표시할 아이콘
  variant?: "default" | "fill"; // 버튼 배경 스타일
  ariaLabel: string; // 아이콘만으로 버튼의 목적을 알 수 있도록 설명을 전달
  onClick?: () => void; // 버튼을 클릭했을 때 실행할 함수
  disabled?: boolean; // true이면 버튼을 조작할 수 없음
  iconSize?: 24 | 28; // 아이콘 크기
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
