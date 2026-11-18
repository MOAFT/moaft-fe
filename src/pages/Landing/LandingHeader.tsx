import { useNavigate } from 'react-router-dom';
import headerLogo from '../../assets/landing/header-logo.svg';

export type LandingTab = 'about' | 'explore' | 'faq';

const NAV_ITEMS: { label: string; tab: LandingTab; path: string }[] = [
  { label: '모아프트는?', tab: 'about', path: '/' },
  { label: '둘러보기', tab: 'explore', path: '/discover' },
  { label: '자주 묻는 질문', tab: 'faq', path: '/faq' },
];

function NavItem({ label, selected = false, onClick }: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-moaft-padding-m py-moaft-padding-s rounded-moaft-m text-text-neutral-inverse text-moaft-16 leading-moaft-24 font-ko-body cursor-pointer bg-transparent border-0 ${
        selected
          ? 'font-semibold tracking-moaft-normal'
          : 'font-normal tracking-moaft-reading hover:bg-white/10 active:bg-white/20'
      }`}
    >
      {label}
    </button>
  );
}

export default function LandingHeader({ activeTab }: { activeTab: LandingTab }) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fill-primary-default flex items-center justify-between min-h-[97px] px-[32px] py-[4px]">
      <img
        src={headerLogo}
        alt="Moaft"
        className="w-[89px] h-[89px] cursor-pointer"
        onClick={() => navigate('/')}
      />
      <nav className="flex gap-moaft-gap-s items-center">
        {NAV_ITEMS.map(({ label, tab, path }) => (
          <NavItem
            key={tab}
            label={label}
            selected={activeTab === tab}
            onClick={() => navigate(path)}
          />
        ))}
      </nav>
      <button
        onClick={() => navigate('/login')}
        className="bg-fill-primary-assistive flex items-center justify-center h-[48px] min-w-[76px] px-moaft-padding-xl py-moaft-padding-m rounded-moaft-s text-text-primary-default text-moaft-16 leading-moaft-24 tracking-moaft-normal font-ko-body font-normal cursor-pointer border-0"
      >
        시작하기
      </button>
    </header>
  );
}
