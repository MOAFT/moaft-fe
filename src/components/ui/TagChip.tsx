
import iconClose from "../../assets/icons/IconClose.svg";

type TagChipProps = {
  label?: string; // 태그에 표시할 문구
  removeButton?: boolean; // 삭제 버튼 표시 여부
  style?: "neutral" | "primary" | "secondary" | "tertiary"; // 태그 색상
  state?: "default" | "hover"; // 태그 표시 상태
  onRemove?: () => void; // 삭제 버튼 클릭 시 실행할 함수
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function TagChip({
  label = "라벨",
  removeButton = true,
  style: chipStyle = "primary",
  state = "default",
  onRemove,
  className = "",
}: TagChipProps) {
  // 태그 스타일별 배경색과 텍스트 색상
  const styleClasses = {
    neutral: "bg-fill-tertiary-assistive text-fg-neutral-title",
    primary: "bg-fill-primary-assistive text-fg-primary-strong",
    secondary: "bg-fill-secondary-assistive text-fg-accent-strong",
    tertiary: "bg-fill-tertiary-assistive text-fg-primary-default",
  };

  // Hover 상태에서는 배경 위에 8% 오버레이 적용
  const hoverClass =
    "shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)]";

  return (
    <span
      className={`
        inline-flex h-8 w-fit shrink-0
        items-center justify-center
        gap-moaft-gap-xs overflow-hidden
        rounded-moaft-s
        px-moaft-padding-s py-moaft-padding-xs
        typo-ko-label-2-medium whitespace-nowrap
        hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)]
        ${state === "hover" ? hoverClass : ""}
        ${styleClasses[chipStyle]}
        ${className}
      `}
    >
      {/* 태그 라벨 */}
      <span>{label}</span>

      {/* 편집 모드에서 표시하는 삭제 버튼 */}
      {removeButton && (
        <button
          type="button"
          aria-label={`${label} 태그 삭제`}
          onClick={onRemove}
          disabled={!onRemove}
          className="inline-flex size-4 shrink-0 items-center justify-center rounded-moaft-s border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-border-primary-default"
        >
          <img
            src={iconClose}
            alt=""
            aria-hidden="true"
            className="size-4"
          />
        </button>
      )}
    </span>
  );
}