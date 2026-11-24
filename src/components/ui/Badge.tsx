
import iconWarning from "../../assets/icons/IconWarning.svg";

type BadgeProps = {
  label?: string; // 배지에 표시할 문구
  leadingIcon?: boolean; // 앞쪽 아이콘 표시 여부
  type?: "solid" | "subtle" | "outline"; // 배지 스타일
  size?: "S" | "M"; // 배지 크기
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function Badge({
  label = "라벨",
  leadingIcon = true,
  type = "solid",
  size = "S",
  className = "",
}: BadgeProps) {
  // 배지 타입별 배경색, 텍스트 색상 및 테두리
  const typeClasses = {
    solid: "bg-fill-tertiary-default text-fg-neutral-inverse",
    subtle: "bg-fill-tertiary-assistive text-fg-neutral-title",
    outline:
      "border border-border-neutral-default bg-surface-light text-fg-neutral-description",
  };

  // S: Caption/medium, M: Label 2/medium
  const sizeClass =
    size === "S"
      ? "typo-ko-caption-medium"
      : "typo-ko-label-2-medium";

  return (
    <span
      className={`
        inline-flex box-content w-fit shrink-0
        items-center justify-center
        gap-moaft-gap-xs whitespace-nowrap
        rounded-moaft-full
        px-moaft-padding-s py-moaft-padding-xs
        ${typeClasses[type]}
        ${sizeClass}
        ${className}
      `}
    >
      {/* 앞쪽 16x16 아이콘 */}
      {leadingIcon && (
        <span
          aria-hidden="true"
          className="block size-4 shrink-0 bg-fill-primary-default"
          style={{
            maskImage: `url("${iconWarning}")`,
            WebkitMaskImage: `url("${iconWarning}")`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        />
      )}

      {/* 배지 라벨 */}
      <span>{label}</span>
    </span>
  );
}
