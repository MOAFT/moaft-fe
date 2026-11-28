import LandingHeader from './LandingHeader';

export default function DiscoverPage() {
  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <LandingHeader activeTab="explore" />
    </div>
  );
}
