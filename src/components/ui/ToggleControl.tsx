type ToggleControlProps = {
  checked: boolean;
  label: string;
  disabled?: boolean;
  onChange: (checked: boolean) => void;
};

export default function ToggleControl({
  checked,
  label,
  disabled = false,
  onChange,
}: ToggleControlProps) {
  const trackColor = checked ? "bg-purple-500" : "bg-gray-100";
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
        className={`font-ko-body text-moaft-16 font-moaft-regular leading-moaft-24 tracking-moaft-normal ${
          disabled ? "text-text-neutral-weak" : "text-text-neutral-title"
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
            className={`h-7 w-7 rounded-moaft-full bg-common-white transition-transform ${thumbPosition}`}
          />
        </span>
      </span>
    </label>
  );
}
