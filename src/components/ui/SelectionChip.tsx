type SelectionChipProps = {
  label: string;
  selected: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function SelectionChip({
  label,
  selected,
  disabled = false,
  onClick,
}: SelectionChipProps) {
  const stateClasses = disabled
    ? selected
      ? "border-border-neutral-weak bg-fill-primary-assistive text-text-primary-weak shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
      : "border-border-neutral-weak bg-common-white text-text-neutral-weak shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
    : selected
      ? "border-border-primary-default bg-fill-primary-assistive text-text-primary-default hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)]"
      : "border-border-neutral-default bg-common-white text-text-neutral-title hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)]";

  return (
    <button
      type="button"
      aria-pressed={selected}
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex h-10 w-fit items-center justify-center whitespace-nowrap rounded-moaft-full border px-[11px] font-ko-body text-moaft-14 font-moaft-medium leading-moaft-20 tracking-moaft-normal disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 ${stateClasses}`}
    >
      {label}
    </button>
  );
}
