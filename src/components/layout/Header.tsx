
import IconButton from "../ui/IconButton";
import Breadcrumb from "./Breadcrumb";

import iconBack from "../../assets/icons/IconBack.svg";
import iconMeatball from "../../assets/icons/IconMeatball.svg";

type HeaderProps = {
  type?: "record" | "explore"; // 헤더 종류. 기본값은 record
  title?: string; // 헤더 왼쪽에 표시할 제목
  breadcrumbType?: "step1" | "step2" | "step3"; // 기록 작성의 현재 단계
  onBackClick?: () => void; // 뒤로가기 버튼 클릭 시 실행할 함수
  onSaveClick?: () => void; // 임시저장 버튼 클릭 시 실행할 함수
  onMoreClick?: () => void; // 세부 액션 버튼 클릭 시 실행할 함수
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function Header({
  type = "record",
  title = "제작 과정 기록하기",
  breadcrumbType = "step1",
  onBackClick,
  onSaveClick,
  onMoreClick,
  className = "",
}: HeaderProps) {
  const isRecord = type === "record";

  return (
    <header
      className={`sticky top-0 z-40 flex h-[84px] w-full shrink-0 items-center gap-moaft-gap-l border-b border-border-neutral-weak bg-surface-light px-moaft-padding-xl py-moaft-padding-l ${className}`}
    >
      {/* 왼쪽 뒤로가기 버튼 및 제목 */}
      <div className="flex min-w-0 flex-1 items-center gap-moaft-gap-s">
        <IconButton
          icon={<img src={iconBack} alt="" />}
          size="L"
          variant="default"
          ariaLabel="뒤로가기"
          onClick={onBackClick}
        />

        <h1 className="min-w-0 truncate typo-ko-heading-2-bold text-fg-neutral-title">
          {title}
        </h1>
      </div>

      {/* Record 타입의 진행 단계 */}
      {isRecord && (
        <div className="shrink-0">
          <Breadcrumb
            type={breadcrumbType}
            step1Label="기록 정리"
            step2Label="내용 편집"
            step3Label="설정 및 미리보기"
          />
        </div>
      )}

      {/* 오른쪽 액션 영역 */}
      <div className="flex min-w-0 flex-1 items-center justify-end">
        {isRecord ? (
          <button
            type="button"
            onClick={onSaveClick}
            className="inline-flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap border-0 bg-transparent typo-ko-label-2-medium text-fg-primary-default"
          >
            임시저장
          </button>
        ) : (
          <IconButton
            icon={<img src={iconMeatball} alt="" />}
            size="L"
            variant="fill"
            ariaLabel="더보기"
            onClick={onMoreClick}
          />
        )}
      </div>
    </header>
  );
}
