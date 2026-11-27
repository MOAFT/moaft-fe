import Avatar from "../ui/Avatar";

type SumBoxProps = {
  category: string; // 세부 카테고리
  tools: string[]; // 사용한 도구 목록
  authorId: string; // 작성자 아이디
  authorAvatar: string; // 작성자 프로필 이미지 주소
  authorFallbackSrc: string; // 기본 프로필 이미지 주소
  date: string; // 표시할 날짜 문구
  className?: string; // 바깥 영역에 추가할 클래스
};

export default function SumBox({
  category,
  tools,
  authorId,
  authorAvatar,
  authorFallbackSrc,
  date,
  className = "",
}: SumBoxProps) {
  return (
    <div
      className={`flex w-full flex-col gap-moaft-gap-m rounded-moaft-m bg-fill-tertiary-assistive p-moaft-padding-l ${className}`}
    >
      <div className="flex w-full items-center justify-between">
        <p className="typo-ko-label-2-regular text-fg-neutral-caption">
          세부 카테고리
        </p>
        <p className="typo-ko-label-1-regular text-fg-neutral-description">
          {category}
        </p>
      </div>

      <div className="flex w-full items-center justify-between">
        <p className="typo-ko-label-2-regular text-fg-neutral-caption">
          사용도구
        </p>
        <p className="typo-eng-body-regular text-fg-neutral-description">
          {tools.join(", ")}
        </p>
      </div>

      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-moaft-gap-s">
          <Avatar
            src={authorAvatar}
            fallbackSrc={authorFallbackSrc}
            alt={`${authorId} 프로필 이미지`}
            size="S"
            className="!size-8"
          />
          <p className="typo-ko-label-2-regular text-fg-neutral-description">
            @{authorId}
          </p>
        </div>

        <p className="typo-ko-label-2-regular text-fg-neutral-caption">
          {date}
        </p>
      </div>
    </div>
  );
}