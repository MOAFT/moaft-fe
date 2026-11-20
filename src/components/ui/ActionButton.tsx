import type { ReactNode } from "react";

type ActionButtonProps = {
  label: string; //버튼에 표시할 문구
  variant?: "primary" | "secondary" | "tertiary"; //버튼의 강조 스타일. 기본값은 primary
  size?: "S" | "M" | "L"; //버튼 크기. 기본값은 M
  trailingIcon?: ReactNode; //문구 오른쪽에 표시할 아이콘
  disabled?: boolean; //true이면 버튼을 조작할 수 없음
  onClick?: () => void; //버튼을 클릭했을 때 실행할 함수
};

export default function ActionButton({
  label,
  variant = "primary",
  size = "M",
  trailingIcon,
  disabled = false,
  onClick,
}: ActionButtonProps) {
  const sizeClasses = {
    S: "h-[36px] px-moaft-padding-l text-moaft-14 leading-moaft-20",
    M: "h-[48px] px-moaft-padding-xl text-moaft-16 leading-[22px]",
    L: "h-[52px] px-moaft-padding-xl text-moaft-16 leading-[22px]",
  }[size];

  const variantClasses = {
    primary: "bg-fill-primary-default text-fg-neutral-inverse",
    secondary: "bg-fill-primary-assistive text-fg-primary-default",
    tertiary: "bg-fill-tertiary-assistive text-fg-neutral-title",
  }[variant];

  const iconSizeClass =
    size === "L"
      ? "[&_svg]:h-6 [&_svg]:w-6 [&_img]:h-6 [&_img]:w-6"
      : "[&_svg]:h-5 [&_svg]:w-5 [&_img]:h-5 [&_img]:w-5";

  const interactionClasses = {
    primary:
      "hover:shadow-[inset_0_0_0_9999px_var(--color-fill-state-hover)] active:shadow-[inset_0_0_0_9999px_var(--color-fill-state-pressed)]",
    secondary: "hover:bg-purple-100 active:bg-purple-200",
    tertiary: "hover:bg-gray-300 active:bg-gray-400",
  }[variant];

  const disabledTextClass =
    variant === "tertiary"
      ? "disabled:text-fg-neutral-weak"
      : "disabled:text-fg-primary-weak";

  return (
    <button
      className={`inline-flex w-fit items-center justify-center gap-moaft-gap-xs rounded-moaft-s border-0 font-ko-body font-moaft-medium whitespace-nowrap ${sizeClasses} ${variantClasses} ${interactionClasses} ${disabledTextClass} disabled:shadow-[inset_0_0_0_9999px_var(--color-fill-state-disabled)] disabled:cursor-not-allowed`}
      type="button"
      onClick={onClick}
      disabled={disabled}
    >
      <span>{label}</span>

      {trailingIcon && (
        <span className={iconSizeClass} aria-hidden="true">
          {trailingIcon}
        </span>
      )}
    </button>
  );
}
