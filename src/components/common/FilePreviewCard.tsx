import IconButton from "../ui/IconButton";
import iconClose from "../../assets/icons/IconClose.svg";

type FilePreviewCardProps = {
  fileName: string; // 업로드한 파일의 이름
  fileType: string; // 파일 유형 (이미지, PDF 등)
  previewSrc: string; // 파일 미리보기 이미지 주소
  state?: "default" | "hover" | "pressed" | "error"; // 카드 상태. 기본값은 default
  onClick?: () => void; // 카드를 클릭했을 때 실행할 함수
  onRemove?: () => void; // 닫기 아이콘을 클릭했을 때 실행할 함수
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function FilePreviewCard({
  fileName,
  fileType,
  previewSrc,
  state = "default",
  onClick,
  onRemove,
  className = "",
}: FilePreviewCardProps) {
  const isError = state === "error";
  const isHover = state === "hover";
  const isPressed = state === "pressed";

  // Error 상태를 제외하고 Hover, Pressed 상태를 적용
  const stateClasses = isError
    ? "border-border-system-error bg-fill-system-default"
    : `bg-fill-tertiary-inverse hover:border-border-primary-default active:border-border-primary-default active:shadow-[inset_0_0_0_9999px_var(--color-fill-state-pressed)] ${
        isHover || isPressed
          ? "border-border-primary-default"
          : "border-transparent"
      } ${
        isPressed
          ? "shadow-[inset_0_0_0_9999px_var(--color-fill-state-pressed)]"
          : ""
      }`;

  // Hover 상태에서는 닫기 버튼을 표시
  const showRemoveButton = Boolean(onRemove) && !isError && !isPressed;

  const removeButtonClasses = isHover
    ? "opacity-100"
    : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100";

  const textPaddingClasses = showRemoveButton
    ? `group-hover:pr-8 group-focus-within:pr-8 ${isHover ? "pr-8" : ""}`
    : "";

  return (
    <div
      className={`group relative flex h-[84px] w-[280px] shrink-0 items-center gap-moaft-gap-s rounded-moaft-m border p-[11px] ${stateClasses} ${className}`}
    >
      {/* 카드 클릭 영역 */}
      {onClick && (
        <button
          type="button"
          aria-label={`${fileName} 파일 열기`}
          onClick={onClick}
          className="absolute inset-0 z-10 cursor-pointer rounded-moaft-m focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
        />
      )}

      {/* 파일 미리보기 이미지 */}
      <img
        src={previewSrc}
        alt=""
        className="pointer-events-none h-[60px] w-[60px] shrink-0 rounded-moaft-s object-cover"
      />

      {/* 파일 이름 및 유형 */}
      <div
        className={`pointer-events-none flex min-w-0 flex-1 flex-col gap-moaft-gap-xs ${textPaddingClasses}`}
      >
        <p
          className="w-full truncate typo-ko-label-1-medium text-fg-neutral-title"
          title={fileName}
        >
          {fileName}
        </p>

        <p className="w-full truncate typo-ko-label-2-regular text-fg-neutral-weak">
          {fileType}
        </p>
      </div>

      {/* Hover 상태에서 표시되는 파일 삭제 버튼 */}
      {showRemoveButton && (
        <div
          className={`absolute right-3 top-3 z-20 ${removeButtonClasses}`}
        >
          <IconButton
            icon={<img src={iconClose} alt="" />}
            size="S"
            variant="default"
            ariaLabel={`${fileName} 파일 삭제`}
            onClick={onRemove}
          />
        </div>
      )}
    </div>
  );
}
