type TextAreaProps = {
  id: string; // label과 입력 영역을 연결하는 고유한 HTML id
  value: string; // 입력값
  onChange: (value: string) => void; // 입력값 변경 시 부모에 전달
  label?: string; // 입력 영역 위에 표시할 라벨
  placeholder?: string; // 입력 영역 안내 문구
  caption?: string; // 입력 영역 아래 보조 설명
  errorMessage?: string; // 오류 상태와 오류 문구
  lang?: "ko" | "en"; // 입력값의 언어
  showLabel?: boolean; // 라벨 표시 여부
  showCaption?: boolean; // 보조 설명 표시 여부
  showCounter?: boolean; // 글자 수 표시 여부
  disabled?: boolean; // 비활성 상태 여부
  className?: string; // 바깥 영역에 추가할 클래스
};

export default function TextArea({
  id,
  value,
  onChange,
  label = "프롬프트",
  placeholder = "프롬프트를 입력하세요",
  caption = "국문과 영문 프롬프트를 모두 입력할 수 있어요",
  errorMessage,
  lang = "ko",
  showLabel = true,
  showCaption = true,
  showCounter = true,
  disabled = false,
  className = "",
}: TextAreaProps) {
  const hasBottomContent =
    (showCaption && Boolean(errorMessage || caption)) || showCounter;

  return (
    <div className={`flex w-full flex-col gap-moaft-gap-s ${className}`}>
      {showLabel && label && (
        <label
          htmlFor={id}
          className={`typo-ko-label-2-medium ${
            disabled ? "text-fg-neutral-weak" : "text-fg-neutral-title"
          }`}
        >
          {label}
        </label>
      )}

      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={Boolean(errorMessage)}
        aria-describedby={
          showCaption && (errorMessage || caption) ? `${id}-caption` : undefined
        }
        onChange={(event) => onChange(event.target.value)}
        className={`min-h-[120px] max-h-[520px] w-full resize-none overflow-y-auto rounded-moaft-m border bg-surface-light p-moaft-padding-m ${
          lang === "ko" ? "typo-ko-body-regular" : "typo-eng-body-regular"
        } text-fg-neutral-title placeholder:typo-ko-label-2-regular placeholder:text-fg-neutral-caption focus:outline-none enabled:hover:not-focus:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)] ${
          errorMessage
            ? "border-border-system-error focus:border-border-system-error"
            : "border-border-neutral-default focus:border-border-primary-default"
        } disabled:cursor-not-allowed disabled:border-border-neutral-weak disabled:text-fg-neutral-weak disabled:shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)] disabled:placeholder:text-fg-neutral-weak`}
      />

      {hasBottomContent && (
        <div className="flex w-full items-start justify-between gap-moaft-gap-xs">
          {showCaption && (errorMessage || caption) ? (
            <p
              id={`${id}-caption`}
              className={`min-w-0 typo-ko-caption-regular ${
                errorMessage
                  ? "text-fg-system-default"
                  : disabled
                    ? "text-fg-neutral-weak"
                    : "text-fg-neutral-description"
              }`}
            >
              {errorMessage || caption}
            </p>
          ) : (
            <span />
          )}

          {showCounter && (
            <span
              className={`shrink-0 typo-ko-caption-regular ${
                disabled
                  ? "text-fg-neutral-weak"
                  : "text-fg-neutral-description"
              }`}
            >
              {value.length}자
            </span>
          )}
        </div>
      )}
    </div>
  );
}
