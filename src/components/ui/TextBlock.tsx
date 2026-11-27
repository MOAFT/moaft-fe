import { useRef, useState } from "react";
import TextButton from "./TextButton";
import iconDown from "../../assets/icons/IconDown.svg";
import iconUp from "../../assets/icons/IconUp.svg";
import iconCopy from "../../assets/icons/IconCopy.svg";
import checkIcon from "../../assets/icons/IconCheck.svg";

type TextBlockProps = {
  text: string; // 읽기 전용으로 표시할 본문
  expanded?: boolean; // true이면 펼친 상태로 시작
  lang?: "ko" | "eng"; // 본문 언어
  expandButton?: boolean; // 전체보기·접기 버튼 표시 여부
  copyButton?: boolean; // 복사 버튼 표시 여부
};

export default function TextBlock({
  text,
  expanded = false,
  lang = "ko",
  expandButton = true,
  copyButton = true,
}: TextBlockProps) {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const [isCopied, setIsCopied] = useState(false);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);

      if (copiedTimeoutRef.current) {
        clearTimeout(copiedTimeoutRef.current);
      }

      copiedTimeoutRef.current = setTimeout(() => {
        setIsCopied(false);
        copiedTimeoutRef.current = null;
      }, 1500);
    } catch (error) {
      console.error("본문 복사에 실패했습니다.", error);
    }
  };

  return (
    <div className="w-full">
      <div
        className={`relative flex w-full flex-col rounded-moaft-m border border-border-neutral-default bg-surface-light p-moaft-padding-l ${
          isExpanded
            ? "min-h-[200px] max-h-[520px] overflow-hidden"
            : "h-[200px] overflow-hidden"
        }`}
      >
        <div
          className={`relative min-h-0 flex-1 ${
            isExpanded ? "overflow-y-auto" : "overflow-hidden"
          }`}
        >
          <p
            className={`whitespace-pre-wrap break-words ${
              lang === "ko"
                ? "typo-ko-label-2-regular"
                : "typo-eng-label-2-regular"
            } text-fg-neutral-description`}
          >
            {text}
          </p>
        </div>
        {!isExpanded && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-[118px] z-10 h-[80px] rounded-b-moaft-m bg-gradient-to-b from-transparent to-surface-light"
          />
        )}

        {expandButton && (
          <div className="relative z-20 flex h-8 shrink-0 justify-end">
            <TextButton
              label={isExpanded ? "접기" : "전체보기"}
              underline={false}
              trailingIcon={
                <img
                  src={isExpanded ? iconUp : iconDown}
                  alt=""
                  aria-hidden="true"
                />
              }
              onClick={() => setIsExpanded((current) => !current)}
            />
          </div>
        )}
      </div>

      {copyButton && (
        <div className="flex w-full justify-end [&_button>span:first-child]:transition-colors [&_button>span:last-child]:transition-opacity [&_button:active>span:first-child]:text-fg-neutral-caption [&_button:active>span:last-child]:opacity-50">
          <TextButton
            label="복사"
            underline={false}
            trailingIcon={
              <img
                src={isCopied ? checkIcon : iconCopy}
                alt=""
                aria-hidden="true"
              />
            }
            onClick={handleCopy}
          />
        </div>
      )}
    </div>
  );
}
