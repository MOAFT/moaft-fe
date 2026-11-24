import spinnerIcon from "../../assets/icons/spinner.svg";
import checkRoundIcon from "../../assets/icons/IconCheckRound.svg";

type AutoSaveIndicatorProps = {
  status: "saving" | "saved"; // 현재 저장 상태
  savedAtText: string; // 마지막 저장 시각을 표시하는 문구. 예: "마지막 저장: 10초 전"
};

export default function AutoSaveIndicator({
  status,
  savedAtText,
}: AutoSaveIndicatorProps) {
  const isSaving = status === "saving";

  return (
    <div
      className="flex w-full max-w-[892px] items-center justify-end gap-moaft-gap-xs"
      aria-live="polite"
    >
      <img
        src={isSaving ? spinnerIcon : checkRoundIcon}
        alt=""
        aria-hidden="true"
        className={`h-4 w-4 shrink-0 ${isSaving ? "animate-spin" : ""}`}
      />

      <p className="typo-ko-caption-medium text-fg-neutral-caption">
        {isSaving ? "저장 중..." : savedAtText}
      </p>
    </div>
  );
}