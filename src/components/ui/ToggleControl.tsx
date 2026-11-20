type ToggleControlProps = {
  checked: boolean; // 현재 켜짐 여부
  label: string; // 토글 옆에 표시할 문구
  disabled?: boolean;// true이면 조작할 수 없는 비활성 상태로 표시
  onChange: (checked: boolean) => void; // 토글 상태가 바뀌면 새 상태를 부모 컴포넌트에 전달
};

export default function ToggleControl({
  checked,
  label,
  disabled = false,
  onChange,
}: ToggleControlProps) {
  const trackColor = checked ? "bg-fill-primary-default" : "bg-fill-tertiary-assistive";
  const disabledOverlay = disabled
    ? "shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
    : "";
  const thumbPosition = checked ? "translate-x-6" : "translate-x-0";

  return (
    <label
      className={`inline-flex min-h-8 items-center gap-2 ${
        disabled ? "cursor-not-allowed" : "cursor-pointer"
      }`}
    >
      <span
        className={`typo-ko-label-1-regular ${
          disabled ? "text-fg-neutral-weak" : "text-fg-neutral-title"
        }`}
      >
        {label}
      </span>

      <span className="relative inline-flex h-8 w-14 shrink-0">
        <input
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          onChange={(event) => onChange(event.currentTarget.checked)}
          className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        />

        <span
          aria-hidden="true"
          className={`pointer-events-none inline-flex h-full w-full items-center rounded-moaft-full p-[2px] transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-purple-500 peer-focus-visible:ring-offset-2 ${trackColor} ${disabledOverlay}`}
        >
          <span
            className={`h-7 w-7 rounded-moaft-full bg-fill-tertiary-inverse transition-transform ${thumbPosition}`}
          />
        </span>
      </span>
    </label>
  );
}
