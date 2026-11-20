type NavItemBrandProps = {
  label: string; // 메뉴에 표시할 텍스트
  href: string; // 이동할 경로 또는 앵커
  selected?: boolean; // 현재 선택된 메뉴 여부
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function NavItemBrand({
  label,
  href,
  selected = false,
  className = "",
}: NavItemBrandProps) {
  const textClass = selected
    ? "typo-ko-body-semibold"
    : "typo-ko-body-regular";

  return (
    <a
      href={href}
      aria-current={selected ? "page" : undefined}
      className={`
        inline-flex items-center justify-center
        whitespace-nowrap
        rounded-moaft-m
        px-moaft-padding-m py-moaft-padding-s
        text-fg-neutral-inverse
        hover:bg-fill-tertiary-inverse/10
        active:bg-fill-tertiary-inverse/20
        focus-visible:outline
        focus-visible:outline-1
        focus-visible:outline-fg-neutral-inverse
        ${textClass}
        ${className}
      `}
    >
      {label}
    </a>
  );
}
