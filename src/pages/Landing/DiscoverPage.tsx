import LandingHeader from './LandingHeader';

export default function DiscoverPage() {
  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <LandingHeader activeTab="explore" />

      <main className="w-full pt-[97px] flex flex-col items-start">
        {/* 페이지 헤더 */}
        <section className="w-full px-[148px] pt-[80px] pb-[60px] flex flex-col gap-moaft-gap-m">
          <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-fill-primary-strong">
            둘러보기
          </p>
          <p className="font-ko-brand font-semibold text-moaft-24 leading-moaft-32 tracking-moaft-normal text-text-neutral-title">
            다른 사람들의 AI 제작 기록을 구경해 보세요.
          </p>
        </section>

        {/* 기록 목록 (추후 구현) */}
        <section className="w-full px-[148px] pb-[120px]">
          <div className="grid grid-cols-3 gap-moaft-gap-l">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="rounded-moaft-m bg-purple-50 h-[280px] flex items-center justify-center"
              >
                <span className="font-ko-body text-moaft-16 leading-moaft-24 text-text-neutral-secondary">
                  기록 카드
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
