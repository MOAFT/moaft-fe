import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import ProfileButton from "../ui/ProfileButton";

import homeIcon from "../../assets/icons/IconHome.svg";
import folderIcon from "../../assets/icons/IconFolder.svg";
import globeIcon from "../../assets/icons/IconGlobe.svg";
import masterSymbol from "../../assets/icons/MasterSymbol.svg";

// SVG 파일의 색상을 현재 텍스트 색상으로 표시
function SidebarIcon({ src }: { src: string }) {
  return (
    <span
      className="block h-6 w-6 bg-current"
      style={{
        maskImage: `url("${src}")`,
        WebkitMaskImage: `url("${src}")`,
        maskSize: "contain",
        WebkitMaskSize: "contain",
        maskPosition: "center",
        WebkitMaskPosition: "center",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
      }}
    />
  );
}

type SidebarMenuItem = {
  label: string; // 메뉴에 표시할 텍스트
  href: string; // 메뉴 클릭 시 이동할 경로
  icon: ReactNode; // 기본 상태의 24x24 아이콘
  selectedIcon?: ReactNode; // 선택 상태의 아이콘
  selected?: boolean; // 현재 선택된 메뉴 여부
};

type SidebarProps = {
  items?: SidebarMenuItem[]; // 사이드바에 표시할 메뉴 목록
  brandIcon?: ReactNode; // 상단 브랜드 아이콘
  onBrandClick?: () => void; // 브랜드 버튼 클릭 시 실행할 함수
  profileSrc: string; // 하단 프로필 이미지 주소
  profileAlt?: string; // 프로필 이미지 대체 텍스트
  onProfileClick?: () => void; // 프로필 버튼 클릭 시 실행할 함수
  className?: string; // 외부에서 전달할 추가 스타일
};

export default function Sidebar({
  items,
  brandIcon,
  onBrandClick,
  profileSrc,
  profileAlt = "프로필 이미지",
  onProfileClick,
  className = "",
}: SidebarProps) {
  const { pathname } = useLocation();

  // 기본 메뉴 목록. 필요하면 items로 다른 메뉴를 전달할 수 있음
  const defaultItems: SidebarMenuItem[] = [
    {
      label: "홈",
      href: "/home",
      icon: <SidebarIcon src={homeIcon} />,
    },
    {
      label: "보관함",
      href: "/library",
      icon: <SidebarIcon src={folderIcon} />,
    },
    {
      label: "탐색",
      href: "/explore",
      icon: <SidebarIcon src={globeIcon} />,
    },
  ];

  const menuItems = items ?? defaultItems;

  return (
    <aside
      aria-label="사이드바"
      className={`flex h-dvh w-[85px] shrink-0 flex-col items-center justify-between border-r border-border-neutral-weak bg-surface-light px-moaft-padding-m py-moaft-padding-l ${className}`}
    >
      {/* 상단 브랜드 버튼 및 메뉴 영역 */}
      <div className="flex flex-col items-center gap-moaft-gap-l">
        <button
          type="button"
          aria-label="MOAFT 로고"
          onClick={onBrandClick}
          className="flex h-10 w-10 shrink-0 items-center justify-center focus-visible:rounded-moaft-s focus-visible:outline-2 focus-visible:outline-border-primary-default"
        >
          {brandIcon ?? (
            <img
              src={masterSymbol}
              alt=""
              className="h-10 w-10"
            />
          )}
        </button>

        {/* 메뉴 목록 */}
        <nav
          aria-label="주 메뉴"
          className="flex flex-col items-center gap-moaft-gap-m"
        >
          {menuItems.map((item) => {
            const selected =
              item.selected ??
              (pathname === item.href ||
                pathname.startsWith(`${item.href}/`));

            return (
              <SidebarItem
                key={item.href}
                label={item.label}
                href={item.href}
                icon={item.icon}
                selectedIcon={item.selectedIcon}
                selected={selected}
              />
            );
          })}
        </nav>
      </div>

      {/* 하단 프로필 버튼 */}
      <div className="flex shrink-0 items-center justify-center">
        <ProfileButton
          src={profileSrc}
          alt={profileAlt}
          size="S"
          onClick={onProfileClick}
        />
      </div>
    </aside>
  );
}
