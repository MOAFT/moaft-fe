import checkRoundIcon from "../../assets/icons/IconCheckRound.svg";

type TextFieldProps = {
  placeholder?: string;
  caption?: string;
  value: string;
  disabled?: boolean;
  errorMessage?: string;
  label?: string;
  showLabel?: boolean;
  showCaption?: boolean;
  id: string;
  maxLength?: number;
  trailingItem?: boolean;
  onChange: (value: string) => void;
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
    <div>
      {showLabel && (
        <div className="mb-2 flex items-center justify-between">
          {label && (
            <label
              htmlFor={id}
              className="text-moaft-14 text-text-neutral-title"
            >
              {label}
            </label>
          )}

          {maxLength !== undefined && (
            <span className="text-moaft-12 text-text-neutral-caption">
              {value.length}/{maxLength}
            </span>
          )}
        </div>
      )}
      <div className="relative">
        <input
          className={`w-full h-[52px] rounded-moaft-m border py-2 pl-3 ${trailingItem ? "pr-12" : "pr-3"}
        ${
          errorMessage
            ? "border-border-system-error focus:border-border-system-error"
            : "border-border-neutral-default focus:border-border-primary-default"
        }
        bg-surface-light enabled:hover:bg-fill-state-hover text-text-neutral-title
        placeholder:text-text-neutral-caption
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
          <p className="mt-1 text-moaft-12 text-text-system-strong">
            {errorMessage}
          </p>
        ) : (
          caption && (
            <p className="mt-1 text-moaft-12 text-text-neutral-caption">
              {caption}
            </p>
          )
        ))}
    </div>
  );
}
