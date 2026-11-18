import { useState } from 'react';
import LandingHeader from './LandingHeader';

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: 'Moaft는 무료로 사용할 수 있나요?',
    answer: '네, 현재 Moaft는 무료로 사용할 수 있습니다.',
  },
  {
    question: '어떤 AI 도구와 함께 사용할 수 있나요?',
    answer: 'ChatGPT, Claude, Midjourney, Stable Diffusion 등 다양한 AI 도구와 함께 사용할 수 있습니다. 특정 도구에 종속되지 않고, 직접 작성하거나 대화 링크·캡처 이미지를 가져오는 방식으로 기록할 수 있습니다.',
  },
  {
    question: '다른 사람의 기록을 볼 수 있나요?',
    answer: '공개 설정된 기록은 로그인 없이도 둘러볼 수 있습니다. 기록을 작성할 때 공개·비공개를 직접 선택할 수 있습니다.',
  },
  {
    question: '기록을 다른 사람과 공유할 수 있나요?',
    answer: '네, 각 기록에는 외부 공유 링크가 제공됩니다. 링크를 통해 Moaft 계정이 없는 사람에게도 기록을 공유할 수 있습니다.',
  },
  {
    question: '작성한 기록을 수정하거나 삭제할 수 있나요?',
    answer: '네, 본인이 작성한 기록은 언제든지 수정하거나 삭제할 수 있습니다.',
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-stroke-neutral-default">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between py-[28px] text-left bg-transparent border-0 cursor-pointer gap-moaft-gap-l"
        aria-expanded={open}
      >
        <span className="font-ko-brand font-semibold text-moaft-20 leading-moaft-28 tracking-moaft-normal text-text-neutral-title">
          {question}
        </span>
        <span
          className="flex-shrink-0 w-[24px] h-[24px] flex items-center justify-center text-text-neutral-secondary transition-transform duration-200"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
          aria-hidden
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      {open && (
        <div className="pb-[28px]">
          <p className="font-ko-brand font-normal text-moaft-18 leading-moaft-28 tracking-moaft-reading text-text-neutral-body">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  return (
    <div className="bg-white flex flex-col items-start w-full min-h-screen">
      <LandingHeader activeTab="faq" />

      <main className="w-full pt-[97px] flex flex-col items-start">
        {/* 페이지 헤더 */}
        <section className="w-full px-[148px] pt-[80px] pb-[60px] flex flex-col gap-moaft-gap-m">
          <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-fill-primary-strong">
            자주 묻는 질문
          </p>
          <p className="font-ko-brand font-semibold text-moaft-24 leading-moaft-32 tracking-moaft-normal text-text-neutral-title">
            궁금한 점이 있으신가요?
          </p>
        </section>

        {/* FAQ 목록 */}
        <section className="w-full px-[148px] pb-[120px]">
          <div className="border-t border-stroke-neutral-default">
            {FAQ_ITEMS.map((item) => (
              <FAQItem key={item.question} question={item.question} answer={item.answer} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
