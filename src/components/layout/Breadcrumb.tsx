import { Fragment } from "react";
import { Link } from "react-router-dom";
import iconForward from "../../assets/icons/icon-forward.svg";

type BreadcrumbProps = {
  type?: "step1" | "step2" | "step3"; // 현재 단계
  step1Label?: string; // 첫 번째 단계 이름
  step2Label?: string; // 두 번째 단계 이름
  step3Label?: string; // 세 번째 단계 이름
  step1To?: string; // 첫 번째 단계 이동 경로
  step2To?: string; // 두 번째 단계 이동 경로
  step3To?: string; // 세 번째 단계 이동 경로
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function Breadcrumb({
  type = "step1",
  step1Label = "라벨",
  step2Label = "라벨",
  step3Label = "라벨",
  step1To,
  step2To,
  step3To,
  className = "",
}: BreadcrumbProps) {
  const steps = [
    { type: "step1", label: step1Label, to: step1To },
    { type: "step2", label: step2Label, to: step2To },
    { type: "step3", label: step3Label, to: step3To },
  ];

  return (
    <nav
      aria-label="진행 단계"
      className={`flex items-center gap-moaft-gap-s ${className}`}
    >
      {steps.map((step, index) => {
        const isCurrent = step.type === type;

        const textClass = isCurrent
          ? "typo-ko-label-2-semibold text-fg-neutral-title"
          : "typo-ko-label-2-medium text-fg-neutral-caption";

        const classNames = `
          shrink-0 whitespace-nowrap
          ${textClass}
        `;

        return (
          <Fragment key={step.type}>
            {step.to ? (
              <Link
                to={step.to}
                aria-current={isCurrent ? "step" : undefined}
                className={classNames}
              >
                {step.label}
              </Link>
            ) : (
              <span
                aria-current={isCurrent ? "step" : undefined}
                className={classNames}
              >
                {step.label}
              </span>
            )}

            {index < steps.length - 1 && (
              <img
                src={iconForward}
                alt=""
                aria-hidden="true"
                className="size-[24px] shrink-0"
              />
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
