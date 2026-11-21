import ActionButton from "../ui/ActionButton";

type BottomCTAProps = {
  primaryLabel: string; // 주요 버튼에 표시할 문구
  secondaryLabel?: string; // 두 버튼 배치 시 보조 버튼에 표시할 문구
  layout?: "single" | "vertical" | "horizontal"; // 버튼 배치. 기본값은 single
  caption?: string; // 버튼 위에 표시할 안내 또는 오류 문구
  showCaption?: boolean; // 캡션 표시 여부. 기본값은 true
  weakButton?: "secondary" | "tertiary"; // 보조 버튼 스타일
  primaryDisabled?: boolean; // 주요 버튼 비활성화 여부
  secondaryDisabled?: boolean; // 보조 버튼 비활성화 여부
  onPrimaryClick?: () => void; // 주요 버튼 클릭 시 실행
  onSecondaryClick?: () => void; // 보조 버튼 클릭 시 실행
};

export default function BottomCTA({
  primaryLabel,
  secondaryLabel,
  layout = "single",
  caption,
  showCaption = true,
  weakButton = "secondary",
  primaryDisabled = false,
  secondaryDisabled = false,
  onPrimaryClick,
  onSecondaryClick,
}: BottomCTAProps) {
  const primaryButton = (
    <ActionButton
      label={primaryLabel}
      variant="primary"
      fullWidth
      disabled={primaryDisabled}
      onClick={onPrimaryClick}
    />
  );

  const secondaryButton = (
    <ActionButton
      label={secondaryLabel ?? ""}
      variant={weakButton}
      fullWidth
      disabled={secondaryDisabled}
      onClick={onSecondaryClick}
    />
  );
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex w-full flex-col gap-moaft-gap-m bg-surface-light">
      {showCaption && caption && (
        <p className="typo-ko-caption-medium text-center text-fg-neutral-description">
          {caption}
        </p>
      )}

      {layout === "single" || !secondaryLabel ? (
        primaryButton
      ) : (
        <div
          className={`flex w-full gap-moaft-gap-s ${
            layout === "horizontal" ? "flex-row" : "flex-col"
          }`}
        >
          {layout === "horizontal" ? (
            <>
              <div className="min-w-0 flex-1">{secondaryButton}</div>
              <div className="min-w-0 flex-1">{primaryButton}</div>
            </>
          ) : (
            <>
              {primaryButton}
              {secondaryButton}
            </>
          )}
        </div>
      )}
    </div>
  );
}
