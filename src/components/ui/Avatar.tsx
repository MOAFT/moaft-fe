type AvatarProps = {
  src?: string; // 사용자 프로필 이미지 주소
  fallbackSrc: string; // 기본 프로필 이미지 주소
  alt?: string; // 이미지 대체 텍스트
  size?: "L" | "M" | "S"; // 아바타 크기
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function Avatar({
  src,
  fallbackSrc,
  alt = "프로필 이미지",
  size = "L",
  className = "",
}: AvatarProps) {
  const sizeClass =
    size === "L"
      ? "size-[100px]"
      : size === "M"
        ? "size-[60px]"
        : "size-[40px]";

  return (
    <img
      src={src || fallbackSrc}
      alt={alt}
      onError={(event) => {
        if (event.currentTarget.getAttribute("src") !== fallbackSrc) {
          event.currentTarget.src = fallbackSrc;
        }
      }}
      className={`block shrink-0 rounded-moaft-full border border-border-neutral-default object-cover ${sizeClass} ${className}`}
    />
  );
}
