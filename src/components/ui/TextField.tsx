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
