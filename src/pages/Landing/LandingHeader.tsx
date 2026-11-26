import { useNavigate } from 'react-router-dom';
import headerLogo from '../../assets/landing/header-logo.svg';
import NavItemBrand from '../../components/layout/_NavItemBrand';
import ActionButton from '../../components/ui/ActionButton';

export type LandingTab = 'about' | 'explore' | 'faq';

const NAV_ITEMS: { label: string; tab: LandingTab; path: string }[] = [
  { label: '모아프트는?', tab: 'about', path: '/' },
  { label: '둘러보기', tab: 'explore', path: '/discover' },
  { label: '자주 묻는 질문', tab: 'faq', path: '/faq' },
];

export default function LandingHeader({ activeTab }: { activeTab: LandingTab }) {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-fill-primary-default flex items-center justify-between min-h-[97px] px-[32px] py-[4px]">
      <div
        className="relative overflow-hidden size-[89px] shrink-0 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <img
          src={headerLogo}
          alt="Moaft"
          className="absolute block"
          style={{ width: 82.047, height: 23.787, left: 3.65, top: 32.68 }}
        />
      </div>
      <nav className="flex gap-moaft-gap-s items-center">
        {NAV_ITEMS.map(({ label, tab, path }) => (
          <NavItemBrand
            key={tab}
            label={label}
            href={path}
            selected={activeTab === tab}
          />
        ))}
      </nav>
      <ActionButton label="시작하기" variant="secondary" onClick={() => navigate('/login')} />
    </header>
  );
}
