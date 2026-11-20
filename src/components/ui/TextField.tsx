import checkRoundIcon from "../../assets/icons/IconCheckRound.svg";

type TextFieldProps = {
  placeholder?: string; // 입력창에 표시할 안내 문구
  caption?: string; // 오류가 없을 때 표시할 보조 설명
  value: string; // 입력값
  disabled?: boolean; // 비활성 상태 여부
  errorMessage?: string; // 전달하면 오류 상태와 오류 문구를 표시
  label?: string; // 입력창 위에 표시할 라벨
  showLabel?: boolean; // false이면 라벨과 글자 수 표시를 숨김
  showCaption?: boolean; // false이면 입력창 아래 영역을 숨김
  id: string; // label과 입력창을 연결하는 고유한 HTML id
  maxLength?: number; // 입력 가능한 최대 글자 수
  trailingItem?: boolean; // true이면 입력창 오른쪽에 완료 아이콘 표시
  onChange: (value: string) => void; // 입력값 변경 시 부모 컴포넌트에 전달
};

export default function TextField({
  placeholder,
  caption,
  value,
  disabled = false,
  errorMessage,
  label,
  showLabel = true,
  showCaption = true,
  id,
  maxLength,
  trailingItem = false,
  onChange,
}: TextFieldProps) {
  const showLimitMarker = showLabel && maxLength !== undefined;
  const hasCaptionContent = Boolean(
    errorMessage || caption || showLimitMarker,
  );

  return (
    <div className="w-full">
      {showLabel && label && (
        <div className="mb-moaft-gap-s">
          <label
            htmlFor={id}
            className="typo-ko-label-2-medium text-fg-neutral-description"
          >
            {label}
          </label>
        </div>
      )}

      <div className="relative">
        <input
          className={`h-[52px] w-full rounded-moaft-m border py-2 pl-3 ${
            trailingItem ? "pr-11" : "pr-3"
          } ${
            errorMessage
              ? "border-border-system-error focus:border-border-system-error"
              : "border-border-neutral-default focus:border-border-primary-default"
          } bg-surface-light typo-ko-body-regular text-fg-neutral-title enabled:hover:not-focus:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)] placeholder:text-fg-neutral-caption disabled:placeholder:text-fg-neutral-weak focus:outline-none disabled:border-border-neutral-weak disabled:shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)] disabled:text-fg-neutral-weak disabled:cursor-not-allowed`}
          type="text"
          id={id}
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          maxLength={maxLength}
          onChange={(event) => {
            const nextValue = event.target.value;

            if (maxLength !== undefined && nextValue.length > maxLength) {
              return;
            }

            onChange(nextValue);
          }}
        />

        {trailingItem && (
          <img
            src={checkRoundIcon}
            alt=""
            aria-hidden="true"
            className="absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2"
          />
        )}
      </div>

      {showCaption && hasCaptionContent && (
        <div className="mt-moaft-gap-s flex items-center justify-between gap-moaft-gap-s">
          {errorMessage ? (
            <p className="min-w-0 typo-ko-caption-regular text-fg-system-strong">
              {errorMessage}
            </p>
          ) : caption ? (
            <p
              className={`min-w-0 typo-ko-caption-regular ${
                disabled
                  ? "text-fg-neutral-weak"
                  : "text-fg-neutral-description"
              }`}
            >
              {caption}
            </p>
          ) : (
            <span />
          )}

          {showLimitMarker && (
            <span className="shrink-0 typo-ko-caption-medium text-fg-neutral-caption">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      )}
    </div>
  );
}