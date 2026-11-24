import { Lottie } from "lottie-react";
import spinnerAnimation from "../../assets/animations/spinner.json";
import checkRoundIcon from "../../assets/icons/IconCheckRound.svg";

type AutoSaveIndicatorProps = {
  status: "saving" | "saved"; // 현재 저장 상태
  savedAtText: string; // 마지막 저장 시각 문구
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
      {isSaving ? (
        <span className="h-4 w-4 shrink-0" aria-hidden="true">
          <Lottie
            src={spinnerAnimation}
            autoplay
            loop
            style={{ width: "100%", height: "100%" }}
          />
        </span>
      ) : (
        <img
          src={checkRoundIcon}
          alt=""
          aria-hidden="true"
          className="h-4 w-4 shrink-0"
        />
      )}

      <p className="typo-ko-caption-medium text-fg-neutral-caption">
        {isSaving ? "저장 중..." : savedAtText}
      </p>
    </div>
  );
}
