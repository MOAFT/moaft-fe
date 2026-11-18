type CheckBoxProps = {
  checked: boolean;
  label: string;
  showLabel?: boolean;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export default function CheckBox({
  checked,
  label,
  showLabel = true,
  disabled = false,
  onChange,
}: CheckBoxProps) {
  const boxClasses = checked
    ? "border-purple-500 bg-purple-500 text-white"
    : "border-border-neutral-default bg-common-white";

  const disabledClasses = disabled
    ? checked
      ? "shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
      : "border-gray-100 shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)]"
    : "";

  return (
    <label className="inline-flex min-h-8 items-center gap-2">
      <span className="relative inline-flex h-8 w-8 shrink-0 items-center justify-center">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          aria-label={!showLabel ? label : undefined}
          onChange={(event) => onChange(event.currentTarget.checked)}
          className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0 disabled:cursor-not-allowed"
        />

        <span
          aria-hidden="true"
          className={`inline-flex h-5 w-5 items-center justify-center rounded-moaft-s border ${boxClasses} ${disabledClasses}`}
        >
          {checked && (
            <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4">
              <path
                d="m4 10 4 4 8-8"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
      </span>

      {showLabel && label && (
        <span
          className={`font-ko-body text-moaft-16 font-moaft-regular leading-moaft-24 tracking-moaft-normal ${
            disabled ? "text-text-neutral-weak" : "text-text-neutral-title"
          }`}
        >
          {label}
        </span>
      )}
    </label>
  );
}
