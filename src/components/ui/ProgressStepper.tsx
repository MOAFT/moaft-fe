type ProgressStepperProps = {
  totalSteps: number; // 전체 진행 단계 수
  currentStep: number; // 현재 진행 단계 (1부터 시작)
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function ProgressStepper({
  totalSteps,
  currentStep,
  className = "",
}: ProgressStepperProps) {
  return (
    <div
      role="progressbar"
      aria-label="진행 단계"
      aria-valuemin={1}
      aria-valuemax={totalSteps}
      aria-valuenow={currentStep}
      className={`flex w-full items-center gap-moaft-gap-s py-moaft-padding-l ${className}`}
    >
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          aria-hidden="true"
          className={`h-[4px] min-w-px flex-1 rounded-moaft-full ${
            index < currentStep
              ? "bg-fill-primary-default"
              : "bg-fill-tertiary-assistive"
          }`}
        />
      ))}
    </div>
  );
}
