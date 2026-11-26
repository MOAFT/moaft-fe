import { useEffect, useId, useRef, useState } from "react";
import IconButton from "../ui/IconButton";
import TextButton from "../ui/TextButton";
import TextField from "../ui/TextField";
import TextArea from "../ui/TextArea";
import iconCopy from "../../assets/icons/IconCopy.svg";
import iconDown from "../../assets/icons/IconDown.svg";
import iconUp from "../../assets/icons/IconUp.svg";
import checkIcon from "../../assets/icons/IconCheck.svg";
import iconTrash from "../../assets/icons/IconTrash.svg";

type PromptCardProps = {
  description: string; // 단계 설명
  prompt?: string; // 프롬프트 본문. type이 "prompt"일 때 표시
  type?: "prompt" | "description-only"; // 본문 포함 여부. 기본값은 "prompt"
  mode?: "view" | "edit"; // 보기 또는 편집 모드. 기본값은 "view"
  state?: "default" | "active"; // 기본 또는 활성 상태. 활성 상태는 테두리에 반영
  expanded?: boolean; // 보기 모드에서 펼친 상태로 시작할지 여부. 기본값은 false
  copyButton?: boolean; // 보기 모드의 복사 버튼 표시 여부. 기본값은 true
  onCopy?: (text: string) => void | Promise<void>; // 복사할 텍스트를 전달받아 실행
  className?: string; // 카드 최상위 요소에 추가할 CSS 클래스
  onDescriptionChange?: (value: string) => void; // 설명 변경 시 새 값을 전달
  onPromptChange?: (value: string) => void; // 프롬프트 변경 시 새 값을 전달
  trailingAction?: boolean; // 편집 모드의 삭제 버튼 표시 여부. 기본값은 true
  onDelete?: () => void; // 삭제 버튼 클릭 시 실행
};

export default function PromptCard({
  description,
  prompt = "",
  type = "prompt",
  mode = "view",
  state = "default",
  expanded = false,
  copyButton = true,
  onCopy,
  onDescriptionChange,
  onPromptChange,
  className = "",
  trailingAction = true,
  onDelete,
}: PromptCardProps) {
  const [isCollapsed, setIsCollapsed] = useState(!expanded);
  const [isCopied, setIsCopied] = useState(false);

  const copyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isDescriptionOnly = type === "description-only";
  const descriptionId = useId();
  const promptId = useId();

  const borderClass =
    state === "active"
      ? mode === "view"
        ? "border-purple-300"
        : "border-border-primary-default"
      : "border-border-neutral-default";

  const fieldLayoutClass =
    mode === "edit"
      ? isDescriptionOnly
        ? "gap-moaft-gap-s p-moaft-padding-m"
        : "gap-moaft-gap-m p-moaft-padding-m"
      : isDescriptionOnly
        ? "gap-moaft-gap-s p-moaft-padding-m"
        : "gap-moaft-gap-m px-moaft-padding-s py-moaft-padding-m";

  const headerPaddingClass =
    mode === "view" && !isDescriptionOnly ? "px-moaft-padding-s" : "";

  const handleCopy = async () => {
    const copyText = isDescriptionOnly ? description : prompt;

    try {
      if (onCopy) {
        await onCopy(copyText);
      } else {
        await navigator.clipboard.writeText(copyText);
      }

      setIsCopied(true);

      if (copyTimerRef.current) {
        clearTimeout(copyTimerRef.current);
      }

      copyTimerRef.current = setTimeout(() => {
        setIsCopied(false);
        copyTimerRef.current = null;
      }, 1500);
    } catch (error) {
      console.error("내용 복사에 실패했습니다.", error);
    }
  };

  useEffect(() => {
    return () => {
      if (copyTimerRef.current) clearTimeout(copyTimerRef.current);
    };
  }, []);

  return (
    <article className={`flex w-full max-w-[440px] flex-col ${className}`}>
      <div
        className={`flex w-full flex-col overflow-hidden rounded-moaft-m border bg-fill-tertiary-assistive ${borderClass} ${fieldLayoutClass} ${
          mode === "edit"
            ? "focus-within:border-border-primary-default [&_input:focus]:border-border-neutral-default [&_textarea:focus]:border-border-neutral-default"
            : ""
        }`}
      >
        <div
          className={`flex w-full items-start justify-between ${headerPaddingClass}`}
        >
          {mode === "view" ? (
            <p className="min-w-0 flex-1 typo-ko-body-medium text-fg-neutral-description">
              {description}
            </p>
          ) : (
            <TextField
              id={descriptionId}
              label="설명"
              value={description}
              onChange={(value) => onDescriptionChange?.(value)}
            />
          )}

          {mode === "view" && copyButton && (
            <IconButton
              icon={
                <img
                  src={isCopied ? checkIcon : iconCopy}
                  alt=""
                  aria-hidden="true"
                />
              }
              ariaLabel={
                isCopied
                  ? "복사 완료"
                  : isDescriptionOnly
                    ? "설명 복사"
                    : "프롬프트 복사"
              }
              onClick={handleCopy}
              size="L"
            />
          )}
        </div>

        {mode === "view" && !isDescriptionOnly && (
          <div className="relative flex w-full flex-col overflow-hidden rounded-[6px] bg-surface-light px-moaft-padding-l py-moaft-padding-m">
            <p
              className={`whitespace-pre-wrap break-words typo-ko-label-2-regular text-fg-neutral-description ${
                isCollapsed ? "h-[60px] overflow-hidden" : ""
              }`}
            >
              {prompt}
            </p>

            {isCollapsed && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-b from-transparent to-[80%] to-surface-light"
              />
            )}

            <div className="relative z-10 flex h-8 w-full flex-col items-end overflow-hidden">
              <TextButton
                label={isCollapsed ? "전체보기" : "접기"}
                underline={false}
                trailingIcon={
                  <img
                    src={isCollapsed ? iconDown : iconUp}
                    alt=""
                    aria-hidden="true"
                  />
                }
                onClick={() => setIsCollapsed((current) => !current)}
              />
            </div>
          </div>
        )}

        {mode === "edit" && !isDescriptionOnly && (
          <TextArea
            id={promptId}
            label="프롬프트"
            value={prompt}
            onChange={(value) => onPromptChange?.(value)}
            className="[&_textarea]:min-h-[160px]"
            showCaption={false}
          />
        )}
      </div>

      {mode === "edit" && trailingAction && (
        <div className="flex w-full justify-end">
          <TextButton
            label="삭제"
            underline={false}
            trailingIcon={<img src={iconTrash} alt="" aria-hidden="true" />}
            onClick={onDelete}
          />
        </div>
      )}
    </article>
  );
}
