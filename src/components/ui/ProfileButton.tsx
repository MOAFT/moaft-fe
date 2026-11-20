type ProfileButtonProps = {
  src: string; // 프로필 이미지 주소
  alt: string; // 이미지 대체 텍스트. 장식용 이미지가 아니라면 사용자를 설명하는 문구를 전달
  size?: "S" | "M"; // 버튼 크기. 기본값은 M
  onClick?: () => void; // 프로필 버튼을 클릭했을 때 실행할 함수
};

export default function ProfileButton({
  src, 
  alt,
  size = "M",
  onClick,
}: ProfileButtonProps) {
  const sizeClass = size === "S" ? "h-10 w-10" : "h-[60px] w-[60px]";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`group relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-moaft-full border border-border-neutral-default bg-transparent p-0 focus-visible:border-border-primary-default focus-visible:outline-none ${sizeClass}`}
    >
      <img
        src={src}
        alt={alt}
        className="h-full w-full rounded-moaft-full object-cover"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-10 rounded-moaft-full group-hover:bg-fill-state-hover group-active:bg-fill-state-pressed"
      />
    </button>
  );
}
