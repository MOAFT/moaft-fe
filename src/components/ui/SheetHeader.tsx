import IconButton from "./IconButton";
import closeIcon from "../../assets/icons/IconClose.svg";

type SheetHeaderProps = {
  title?: string; // 헤더에 표시할 제목
  description?: string; // 제목 아래에 표시할 설명
  showDescription?: boolean; // false이면 설명을 숨김
  showCloseButton?: boolean; // false이면 오른쪽 닫기 버튼을 숨김
  onClose?: () => void; // 닫기 버튼을 눌렀을 때 실행할 함수
};

export default function SheetHeader({
  title = "타이틀",
  description = "모달에 대한 설명이 포함됩니다.",
  showDescription = true,
  showCloseButton = true,
  onClose,
}: SheetHeaderProps) {
  return (
    <div className="flex w-full max-w-[640px] items-start justify-between">
      <div className="flex min-w-0 flex-1 flex-col justify-center gap-moaft-gap-xs">
        <h2 className="typo-ko-heading-2-semibold text-fg-neutral-title">
          {title}
        </h2>

        {showDescription && (
          <p className="typo-ko-body-regular text-fg-neutral-description">
            {description}
          </p>
        )}
      </div>

      {showCloseButton && (
        <IconButton
          icon={
            <img
              src={closeIcon}
              alt=""
              aria-hidden="true"
              className="h-6 w-6"
            />
          }
          ariaLabel="닫기"
          onClick={onClose}
          size="L"
        />
      )}
    </div>
  );
}