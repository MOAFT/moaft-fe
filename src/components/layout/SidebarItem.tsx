import type { ReactNode } from "react";

type SidebarItemProps = {
  label: string; // 메뉴에 표시할 텍스트
  href: string; // 메뉴 클릭 시 이동할 경로
  icon: ReactNode; // 기본 상태의 24x24 아이콘
  selectedIcon?: ReactNode; // 선택 상태의 아이콘
  selected?: boolean; // 현재 선택된 메뉴 여부
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function SidebarItem({
  label,
  href,
  icon,
  selectedIcon,
  selected = false,
  className = "",
}: SidebarItemProps) {
  const stateClass = selected
    ? "bg-fill-primary-assistive text-fill-primary-default"
    : "text-fg-neutral-description hover:bg-fill-state-hover";

  return (
    <a
      href={href}
      aria-current={selected ? "page" : undefined}
      title={label}
      className={`
        flex h-[64px] w-[60px] shrink-0
        flex-col items-center justify-center
        gap-moaft-gap-xs overflow-hidden
        rounded-moaft-m
        px-moaft-padding-m py-moaft-padding-s
        typo-ko-label-2-regular
        focus-visible:outline-2
        focus-visible:outline-fill-primary-default
        ${stateClass}
        ${className}
      `}
    >
      <span
        aria-hidden="true"
        className="flex size-[24px] shrink-0 items-center justify-center"
      >
        {selected && selectedIcon ? selectedIcon : icon}
      </span>

      <span className="max-w-full truncate text-center">
        {label}
      </span>
    </a>
  );
}
