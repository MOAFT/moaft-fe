type SelectionChipProps = {
  label: string; // 칩에 표시할 문구
  selected: boolean; // 현재 선택 여부
  disabled?: boolean; // true이면 칩을 선택할 수 없음
  onClick?: () => void; // 칩을 클릭했을 때 실행할 함수
};

export default function SelectionChip({
  label,
  selected,
  disabled = false,
  onClick,
}: SelectionChipProps) {
  const stateClasses = disabled
    ? selected
      ? "border-border-neutral-weak bg-fill-primary-assistive text-fg-primary-weak shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
      : "border-border-neutral-weak bg-surface-light text-fg-neutral-weak shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
    : selected
      ? "border-border-primary-default bg-fill-primary-assistive text-fg-primary-default hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)]"
      : "border-border-neutral-default bg-surface-light text-fg-neutral-title hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)]";

  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex h-10 w-fit items-center justify-center whitespace-nowrap rounded-moaft-full border px-[11px] typo-ko-label-2-medium disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${stateClasses}`}
    >
      {label}
    </button>
  );
}
