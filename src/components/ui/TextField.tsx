import checkRoundIcon from "../../assets/icons/IconCheckRound.svg";

type TextFieldProps = {
  placeholder?: string; //입력창에 표시할 안내 문구
  caption?: string; //오류가 없을 때 표시할 보조 설명. 오류 문구가 있으면 대체
  value: string; //입력값
  disabled?: boolean; //true이면 입력할 수 없는 비활성 상태로 표시
  errorMessage?: string;// 전달하면 입력창을 오류 상태로 표시하고 이 문구를 보여줌
  label?: string; //입력창 위에 표시할 라벨
  showLabel?: boolean; //false이면 라벨 영역과 글자 수 표시를 숨김
  showCaption?: boolean; //false이면 보조 설명이나 오류 문구를 숨김
  id: string; //label과 입력창을 연결하는 고유한 HTML id
  maxLength?: number; //입력 가능한 최대 글자 수
  trailingItem?: boolean; //true이면 입력창 오른쪽에 완료 아이콘을 표시
  onChange: (value: string) => void; //입력값이 바뀌면 새 문자열을 부모 컴포넌트에 전달
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
  return (
    <div className="w-full max-w-[320px]">
      {showLabel && (
        <div className="mb-2 flex items-center justify-between">
          {label && (
            <label
              htmlFor={id}
              className="font-ko-body text-moaft-14 font-medium leading-moaft-20 tracking-moaft-normal text-text-neutral-description"
            >
              {label}
            </label>
          )}

          {maxLength !== undefined && (
            <span className="font-ko-body font-medium leading-moaft-16 tracking-moaft-reading text-moaft-12 text-text-neutral-caption">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      )}
      <div className="relative">
        <input
          className={`w-full h-[52px] rounded-moaft-m border py-2 pl-3 ${trailingItem ? "pr-11" : "pr-3"}
        ${
          errorMessage
            ? "border-border-system-error focus:border-border-system-error"
            : "border-border-neutral-default focus:border-border-primary-default"
        }
        bg-surface-light font-ko-body text-moaft-16 font-normal leading-moaft-24 tracking-moaft-reading
        enabled:hover:not-focus:bg-fill-state-hover text-text-neutral-title
        placeholder:text-text-neutral-caption
        disabled:placeholder:text-text-neutral-weak
        focus:outline-none
        disabled:border-border-neutral-weak
        disabled:bg-fill-state-disabled
        disabled:text-text-neutral-weak
        disabled:cursor-not-allowed`}
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
      {showCaption &&
        (errorMessage ? (
          <p
            className="font-ko-body font-normal leading-moaft-16 tracking-moaft-reading
           mt-2 text-moaft-12 text-text-system-strong"
          >
            {errorMessage}
          </p>
        ) : (
          caption && (
            <p
              className={`font-ko-body font-normal leading-moaft-16 tracking-moaft-reading 
                mt-2 text-moaft-12 ${
                  disabled
                    ? "text-text-neutral-weak"
                    : "text-text-neutral-description"
                }`}
            >
              {caption}
            </p>
          )
        ))}
    </div>
  );
}
