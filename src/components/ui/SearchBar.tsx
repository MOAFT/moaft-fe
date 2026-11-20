import IconButton from "../ui/IconButton";
import searchIcon from "../../assets/icons/IconSearch.svg";
import closeIcon from "../../assets/icons/IconClose.svg";
import closeIconDisabled from "../../assets/icons/IconCloseDisabled.svg";

type SearchBarProps = {
  value: string; // 현재 검색어
  placeholder?: string; // 검색어가 비어 있을 때 표시할 안내 문구. 기본값: "프롬프트 검색"
  disabled?: boolean; // true이면 검색창과 지우기 버튼을 비활성화
  onChange: (value: string) => void; // 검색어가 바뀔 때 새 값을 전달. 지우기 버튼을 누르면 빈 문자열 전달
};

export default function SearchBar({
  value,
  placeholder = "프롬프트 검색",
  disabled = false,
  onChange,
}: SearchBarProps) {
  const filled = value.length > 0;
  const containerStateClass = disabled
    ? "border-border-neutral-weak shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
    : "border-border-neutral-default hover:not-focus-within:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)] focus-within:border-border-primary-default";
  return (
    <div
      className={`flex h-[52px] w-[360px] items-center gap-moaft-gap-s rounded-moaft-l border bg-surface-light px-moaft-padding-m ${containerStateClass}`}
    >
      <img
        src={searchIcon}
        alt=""
        aria-hidden="true"
        className="h-6 w-6 shrink-0"
      />

      <input
        type="text"
        aria-label="검색"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={(event) => onChange(event.target.value)}
        className="min-w-0 flex-1 bg-transparent typo-ko-body-regular text-fg-neutral-title placeholder:text-fg-neutral-caption focus:outline-none disabled:text-fg-neutral-weak disabled:placeholder:text-fg-neutral-weak"
      />
      {filled && (
        <IconButton
          icon={
            <img
              src={disabled ? closeIconDisabled : closeIcon}
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          }
          ariaLabel="검색어 지우기"
          disabled={disabled}
          onClick={() => onChange("")}
          iconSize={24}
        />
      )}
    </div>
  );
}
