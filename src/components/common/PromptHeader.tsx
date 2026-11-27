import { useState } from "react";
import Badge from "../ui/Badge";
import CheckBox from "../ui/CheckBox";
import TagChip from "../ui/TagChip";

type PromptHeaderProps = {
  mode?: "edit" | "view"; // 선택용 또는 읽기용 모드
  status?: "filled" | "empty"; // 이름 입력 상태
  badge?: boolean; // 확인 필요 Badge 표시 여부
  titleValue: string; // 단계·변화 이름
  placeholder?: string; // 이름이 비었을 때 안내 문구
  stepNumber?: number; // 읽기용 모드(mode="view")에서 표시할 단계 번호. view 모드에서는 전달해야 함
  models: string[]; // 사용한 모델 태그 목록
  checked?: boolean; // 기록 체크박스 선택 상태
  onCheckedChange?: (checked: boolean) => void; // 체크 상태 변경 시 호출
  className?: string; // 바깥 요소에 추가할 클래스
};

export default function PromptHeader({
  mode = "edit",
  status = "filled",
  badge = true,
  titleValue,
  placeholder = "이름을 추려내지 못했어요",
  stepNumber,
  models,
  checked,
  onCheckedChange,
  className = "",
}: PromptHeaderProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isEmpty = status === "empty";
  const isEditMode = mode === "edit";
  const currentChecked = checked ?? internalChecked;

  const handleCheckedChange = (nextChecked: boolean) => {
    if (checked === undefined) {
      setInternalChecked(nextChecked);
    }

    onCheckedChange?.(nextChecked);
  };

  return (
    <div
      className={`flex w-full items-center justify-between rounded-moaft-m bg-surface-light px-moaft-padding-xl py-moaft-padding-l ${className}`}
    >
      {isEditMode ? (
        <>
          <div className="flex min-w-0 flex-1 flex-col items-start gap-moaft-gap-s">
            <div className="flex items-center gap-moaft-gap-xs">
              {models.map((model) => (
                <TagChip
                  key={model}
                  label={model}
                  style="neutral"
                  removeButton={false}
                  className="!h-7"
                />
              ))}
            </div>

            <p
              className={`typo-ko-heading-1-semibold ${
                isEmpty ? "text-fg-neutral-weak" : "text-fg-neutral-title"
              }`}
            >
              {isEmpty ? placeholder : titleValue}
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-end justify-end gap-moaft-gap-m">
            {badge && <Badge label="확인 필요" type="solid" size="S" />}

            <div className="[&_label]:gap-moaft-gap-xs">
              <CheckBox
                checked={currentChecked}
                label="이 베리에이션을 기록할게요"
                onChange={handleCheckedChange}
              />
            </div>
          </div>
        </>
      ) : (
        <div className="flex min-w-0 flex-1 items-center justify-between gap-moaft-gap-m">
          <div className="flex min-w-0 flex-1 items-center gap-moaft-gap-m">
            <div className="flex size-6 shrink-0 items-center justify-center rounded-moaft-s bg-fill-primary-assistive">
              <span className="typo-ko-body-semibold text-fg-neutral-title">
                {stepNumber}
              </span>
            </div>

            <p className="min-w-0 flex-1 whitespace-normal break-words typo-ko-heading-1-semibold text-fg-neutral-title">
              {titleValue}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-moaft-gap-xs">
            {models.map((model) => (
              <TagChip
                key={model}
                label={model}
                style="neutral"
                removeButton={false}
                className="!h-7"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}