import type { ReactNode } from "react";

type TextButtonProps = {
  label: string; //버튼에 표시할 문구
  trailingIcon?: ReactNode; //문구 오른쪽에 표시할 선택 아이콘
  onClick?: () => void; //버튼을 클릭했을 때 실행할 함수
};

export default function TextButton({
  label,
  trailingIcon,
  onClick,
}: TextButtonProps) {
  return (
    <button
      className="inline-flex min-h-[44px] min-w-[44px] w-fit items-center justify-center gap-0 border-0 bg-transparent p-0 font-ko-body text-moaft-14 font-moaft-medium leading-moaft-20 tracking-moaft-normal text-fg-neutral-description underline"
      type="button"
      onClick={onClick}
    >
      <span>{label}</span>

      {trailingIcon && (
        <span
          className="[&_svg]:h-5 [&_svg]:w-5 [&_img]:h-5 [&_img]:w-5 text-common-black"
          aria-hidden="true"
        >
          {trailingIcon}
        </span>
      )}
    </button>
  );
}
