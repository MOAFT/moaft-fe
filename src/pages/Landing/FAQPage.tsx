import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import LandingHeader from './LandingHeader';
import chevronDown from '../../assets/landing/faq-chevron-down.svg';
import chevronUp from '../../assets/landing/faq-chevron-up.svg';

type FaqItem = {
  number: string;
  question: string;
  answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
  {
    number: '01',
    question: 'MOAFT는 어떤 서비스인가요?',
    answer:
      'MOAFT는 AI를 활용해 만든 결과물과 그 제작 과정을 기록하고 공유하는 서비스입니다.\n\nAI 대화 공유 링크, 캡처 이미지, 직접 입력한 내용을 바탕으로 프롬프트와 작업 단계를 정리해 한곳에 보관할 수 있어요.\n저장한 기록은 다시 사용하거나 링크로 공유하고, 다른 사람의 공개 기록도 둘러볼 수 있습니다.',
  },
  {
    number: '02',
    question: '기존 프롬프트 저장 서비스와 무엇이 다른가요?',
    answer:
      'MOAFT는 최종 프롬프트만 저장하는 것이 아니라 결과물이 만들어지고 변화한 과정까지 함께 기록합니다.\n\n사용한 AI 도구, 입력 자료, 단계별 프롬프트와 결과물을 하나의 흐름으로 연결해 남길 수 있어요.\n기록을 공유하면 받은 사람도 전체 제작 과정을 확인하고 필요한 기록을 자신의 보관함에 저장할 수 있습니다.',
  },
  {
    number: '03',
    question: '변화 과정 기록과 제작 과정 기록은 어떻게 다른가요?',
    answer:
      '변화 과정 기록은 프롬프트를 수정할 때마다 하나의 결과물이 어떻게 달라졌는지 기록하는 방식입니다.\n수정 전후의 프롬프트와 결과물을 연결해 최종 결과가 만들어진 흐름을 확인할 수 있어요.\n\n제작 과정 기록은 여러 AI 도구와 입력 자료, 프롬프트, 결과물을 작업 순서대로 기록하는 방식입니다.\n기획부터 이미지 생성, 영상 제작, 최종 편집처럼 여러 단계가 연결된 작업에 적합합니다.',
  },
  {
    number: '04',
    question: '여러 프롬프트와 결과물을 하나의 기록에 담을 수 있나요?',
    answer:
      '네. 하나의 기록 안에 여러 프롬프트와 결과물을 단계별로 추가할 수 있습니다.\n\n프롬프트를 수정하며 결과가 달라진 과정은 변화 과정 기록으로,\n여러 도구와 작업 단계가 연결된 과정은 제작 과정 기록으로 정리할 수 있어요.',
  },
];

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-border-neutral-default">
      <button
        className="w-full flex gap-[16px] items-start py-[32px] text-left bg-transparent border-0 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-fg-neutral-title"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span
          className={`typo-eng-heading-1-bold shrink-0 transition-colors duration-150 ${
            isOpen ? 'text-fg-primary-default' : 'text-fg-neutral-title'
          }`}
        >
          {item.number}
        </span>
        <span className="typo-ko-heading-1-bold text-fg-neutral-title flex-1">
          {item.question}
        </span>
        <span className="shrink-0 size-[32px] flex items-center justify-center">
          <img src={isOpen ? chevronUp : chevronDown} alt="" width={24} height={24} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            {/* invisible number spacer to align answer with question */}
            <div className="flex gap-[16px] pb-[32px]">
              <span className="typo-eng-heading-1-bold shrink-0 opacity-0 select-none" aria-hidden>
                {item.number}
              </span>
              <p className="typo-ko-body-regular text-fg-neutral-description whitespace-pre-line flex-1">
                {item.answer}
              </p>
              <span className="shrink-0 size-[32px]" aria-hidden />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="bg-surface-light flex flex-col items-start w-full min-h-screen">
      <LandingHeader activeTab="faq" />

      <main className="w-full pt-[97px]">
        <div className="px-[148px]">
          <div className="pt-[60px] pb-[60px] flex flex-col gap-[20px]">
            <p className="typo-ko-display-2-bold text-fg-neutral-title">자주 묻는 질문</p>
            <p className="font-ko-brand font-moaft-regular text-moaft-20 leading-moaft-28 tracking-moaft-normal text-fg-neutral-description">
              시작하기 전에 궁금한 점을 확인하세요
            </p>
          </div>

          <div className="w-[871px] border-t border-border-neutral-default pb-[120px]">
            {FAQ_ITEMS.map((item, idx) => (
              <FaqAccordionItem
                key={item.number}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
