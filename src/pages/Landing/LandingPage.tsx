import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import heroLogo from '../../assets/landing/hero-logo.svg';
import problemVisual from '../../assets/landing/problem-visual.png';
import LandingHeader from './LandingHeader';

// ① Problem section: cycling label (2s, hover/focus/reduced-motion pause)
const PROBLEM_TYPES = ['이미지', '영상', '글', '링크'];

function ProblemCycler() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % PROBLEM_TYPES.length), 2000);
    return () => clearInterval(id);
  }, [paused, prefersReduced]);

  return (
    <div
      className="inline-flex items-center justify-center w-[200px] h-[80px] rounded-moaft-m bg-purple-200 overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-live="polite"
      aria-label={`결과물 유형: ${PROBLEM_TYPES[index]}`}
    >
      <motion.span
        key={index}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-fill-primary-strong"
      >
        {PROBLEM_TYPES[index]}
      </motion.span>
    </div>
  );
}

export default function Landing() {
  const navigate = useNavigate();

  // ⑤ Hero scroll
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  const heroLogoY = useTransform(heroProgress, [0, 0.6], [0, -380]);
  const heroCTAY  = useTransform(heroProgress, [0, 0.6], [0, 340]);

  // ② Feature 01 sticky scroll
  const feature01Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: f01Progress } = useScroll({
    target: feature01Ref,
    offset: ['start start', 'end end'],
  });
  const feature01Y = useTransform(f01Progress, [0.05, 0.95], [0, -420]);

  // ③ Feature 02 sticky scroll
  const feature02Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: f02Progress } = useScroll({
    target: feature02Ref,
    offset: ['start start', 'end end'],
  });
  const feature02Y = useTransform(f02Progress, [0.05, 0.95], [0, -320]);

  // ④ HOW section 4-phase scroll
  const howRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: howProgress } = useScroll({
    target: howRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1 (0–25%): 3 boxes converge to center
  const g1Left = useTransform(howProgress, [0, 0.25], [0,   376]);
  const g1Top  = useTransform(howProgress, [0, 0.25], [31,  114]);
  const g2Left = useTransform(howProgress, [0, 0.25], [366, 376]);
  const g2Top  = useTransform(howProgress, [0, 0.25], [228, 114]);
  const g3Left = useTransform(howProgress, [0, 0.25], [752, 376]);
  const g3Top  = useTransform(howProgress, [0, 0.25], [0,   114]);

  // Boxes fade out as result appears (50–75%)
  const boxesOpacity    = useTransform(howProgress, [0.5, 0.75], [1, 0]);
  // Analysis modal: in 25–35%, out 65–75%
  const analysisOpacity = useTransform(howProgress, [0.25, 0.35, 0.65, 0.75], [0, 1, 1, 0]);
  // Result: fade in 50–75%
  const resultOpacity   = useTransform(howProgress, [0.5, 0.75], [0, 1]);

  const handleStart = () => navigate('/login');

  return (
    <div className="bg-white flex flex-col items-start w-full">

      <LandingHeader activeTab="about" />

      {/* ⑤ Hero section */}
      <section
        ref={heroRef}
        className="relative flex flex-col items-start w-full pt-[337px] px-[148px] pb-0 overflow-hidden"
        style={{ minHeight: '100vh' }}
      >
        <div className="absolute inset-0 bg-fill-primary-default" />

        {/* Title + subtitle */}
        <div className="relative z-10 flex flex-col gap-moaft-gap-l items-start text-text-neutral-inverse">
          <div className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight whitespace-nowrap">
            <p className="mb-0">AI로 만든 결과물,</p>
            <p>만드는 법도 쉽게 기록해요</p>
          </div>
          <div className="font-ko-brand font-semibold text-moaft-24 leading-moaft-32 tracking-moaft-normal">
            <p className="mb-0 whitespace-pre">어떤 프롬프트를 사용했고 어떻게 수정했는지 정리해 </p>
            <p className="whitespace-pre">다음 작업과 공유에 다시 활용할 수 있어요.</p>
          </div>
        </div>

        {/* CTA – floats down on scroll */}
        <motion.button
          onClick={handleStart}
          style={{ y: heroCTAY }}
          className="relative z-10 mt-moaft-gap-xl bg-fill-primary-assistive flex items-center justify-center h-[48px] min-w-[76px] px-moaft-padding-xl py-moaft-padding-m rounded-moaft-s text-text-primary-default text-moaft-16 leading-moaft-24 tracking-moaft-normal font-ko-body font-medium cursor-pointer border-0"
        >
          Moaft 시작하기
        </motion.button>

        {/* hero-visual: Moaft logo, moves up on scroll */}
        <motion.div
          style={{ y: heroLogoY }}
          className="relative z-10 mt-[60px] flex items-center overflow-hidden h-[229px]"
        >
          <div className="relative w-[671px] h-[671px] flex-shrink-0">
            <div
              className="absolute"
              style={{ left: 27.52, top: 246.38, width: 618.578, height: 179.339 }}
            >
              <img src={heroLogo} alt="" className="block w-full h-full" />
            </div>
          </div>
        </motion.div>
      </section>

      {/* hero-fade: purple → purple-200 → white */}
      <div
        className="relative flex-shrink-0 w-full h-[370px]"
        style={{
          background:
            'linear-gradient(to bottom, var(--color-fill-primary-default) 0%, var(--color-purple-200) 55.769%, white 100%)',
        }}
      />

      {/* ① Problem section */}
      <section className="flex flex-col gap-moaft-gap-xxl items-start pt-[120px] px-[148px] pb-0 relative w-full">
        <div className="flex flex-col gap-moaft-gap-s items-start">
          <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-fill-primary-strong whitespace-nowrap">
            결과는 남았는데,
          </p>
          <div className="flex gap-moaft-gap-l items-center">
            <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-fill-primary-strong whitespace-nowrap">
              어떻게
            </p>
            <ProblemCycler />
            <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-fill-primary-strong whitespace-nowrap">
              만들었는지는 사라집니다
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-moaft-gap-l items-start font-ko-brand font-semibold text-moaft-24 leading-moaft-32 tracking-moaft-normal text-text-neutral-title whitespace-nowrap pb-[120px]">
          <p>
            AI 대화가 길어질수록 최종 프롬프트를 다시 찾기 어렵고,
            <br />
            작업에 사용한 도구와 수정 과정은 여러 곳에 흩어집니다.
          </p>
          <p>
            결국 같은 작업을 다시 할 때
            <br />
            대화를 처음부터 확인하고 필요한 내용을 다시 정리하게 됩니다.
          </p>
        </div>
      </section>

      {/* ② Feature 01 – sticky: 제작 과정 기록하기 */}
      <div
        ref={feature01Ref}
        className="relative w-full"
        style={{ height: 'calc(100vh - 97px + 520px)' }}
      >
        <div className="sticky top-[97px] h-[calc(100vh-97px)] flex items-center gap-moaft-gap-xxl px-[148px] overflow-hidden">
          {/* feature-head (left, 459px) */}
          <div className="flex flex-col gap-moaft-gap-l items-start text-text-neutral-title w-[459px] flex-shrink-0">
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight w-full">01</p>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight w-full">제작 과정 기록하기</p>
            <div className="font-ko-brand font-semibold text-moaft-28 leading-moaft-38 tracking-moaft-normal w-full">
              <p className="mb-0">여러 단계로 이어진 작업을</p>
              <p>하나의 제작 과정으로 남기세요</p>
            </div>
            <div className="font-ko-brand font-semibold text-moaft-20 leading-moaft-28 tracking-moaft-normal w-full">
              <p className="mb-0">사용한 도구와 프롬프트, 입력 자료, 결과물을</p>
              <p className="mb-0">작업 순서대로 연결해 기록해요. </p>
              <p className="mb-0">여러 AI 도구를 오간 작업도 처음부터 완성까지</p>
              <p>한눈에 확인할 수 있어요.</p>
            </div>
          </div>

          {/* feature-01-visual (right, placeholder) */}
          <div className="w-[625px] h-[559px] flex-shrink-0 rounded-[12px] overflow-hidden">
            <motion.div style={{ y: feature01Y }}>
              <img
                src={problemVisual}
                alt=""
                className="w-[625px] pointer-events-none"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ③ Feature 02 – sticky: 변화 과정 기록하기 */}
      <div
        ref={feature02Ref}
        className="relative w-full"
        style={{ height: 'calc(100vh - 97px + 420px)' }}
      >
        <div className="sticky top-[97px] h-[calc(100vh-97px)] flex items-center gap-moaft-gap-xxl px-[148px] overflow-hidden">
          {/* feature-02-visual (left, placeholder) */}
          <div className="w-[625px] h-[559px] flex-shrink-0 rounded-[12px] overflow-hidden">
            <motion.div style={{ y: feature02Y }}>
              <img
                src={problemVisual}
                alt=""
                className="w-[625px] pointer-events-none"
                style={{ objectFit: 'cover' }}
              />
            </motion.div>
          </div>

          {/* feature-head (right, 459px) */}
          <div className="flex flex-col gap-moaft-gap-l items-start text-text-neutral-title w-[459px] flex-shrink-0">
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight w-full">02</p>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight w-full">변화 과정 기록하기</p>
            <div className="font-ko-brand font-semibold text-moaft-28 leading-moaft-38 tracking-moaft-normal w-full">
              <p className="mb-0">결과가 어떻게 달라졌는지</p>
              <p>변화의 흐름을 남기세요</p>
            </div>
            <div className="font-ko-brand font-semibold text-moaft-20 leading-moaft-28 tracking-moaft-normal w-full">
              <p className="mb-0">프롬프트를 수정할 때마다 결과물이 어떻게 달라졌는지</p>
              <p className="mb-0">연결해 기록해요. </p>
              <p className="mb-0">최종 결과만 봐서는 알 수 없는 수정 과정과 선택 이유를</p>
              <p>다시 확인할 수 있어요.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ④ HOW section – 4-phase scroll animation */}
      <div
        ref={howRef}
        className="relative w-full"
        style={{ height: 'calc(100vh - 97px + 1200px)' }}
      >
        <div
          className="sticky flex flex-col gap-moaft-gap-xxl items-center w-full overflow-hidden pt-[80px]"
          style={{ top: 97, height: 'calc(100vh - 97px)' }}
        >
          {/* how-heading */}
          <div className="flex flex-col gap-moaft-gap-l items-center text-text-neutral-title text-center whitespace-nowrap">
            <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight">HOW?</p>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight">기록은 편한 방법으로 시작하세요</p>
            <div className="font-ko-brand font-semibold text-moaft-28 leading-moaft-38 tracking-moaft-normal text-center">
              <p className="mb-0">이미 나눈 AI 대화는 공유 링크나 캡처 이미지로 가져오고, 새로운 작업은 직접 작성할 수 있어요.</p>
              <p>MOAFT가 필요한 내용을 AI로 정리하면 저장하기 전에 확인하고 수정할 수 있어요.</p>
            </div>
          </div>

          {/* how-graphics */}
          <div className="relative w-[1041px] h-[250px] flex-shrink-0">
            <motion.div
              style={{ left: g1Left, top: g1Top, opacity: boxesOpacity }}
              className="absolute overflow-hidden rounded-[8px] shadow-sm bg-white w-[289px] h-[222px] flex items-center justify-center"
            >
              <img src={problemVisual} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              <span className="relative font-light text-[27px] leading-[55px] text-text-neutral-title whitespace-nowrap">텍스트 전문</span>
            </motion.div>

            <motion.div
              style={{ left: g2Left, top: g2Top, opacity: boxesOpacity }}
              className="absolute overflow-hidden rounded-[8px] shadow-sm bg-white w-[289px] h-[222px] flex items-center justify-center"
            >
              <img src={problemVisual} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              <span className="relative font-light text-[27px] leading-[55px] text-text-neutral-title whitespace-nowrap">캡처 이미지</span>
            </motion.div>

            <motion.div
              style={{ left: g3Left, top: g3Top, opacity: boxesOpacity }}
              className="absolute overflow-hidden rounded-[8px] shadow-sm bg-white w-[289px] h-[222px] flex items-center justify-center"
            >
              <img src={problemVisual} alt="" className="absolute inset-0 w-full h-full object-cover pointer-events-none" />
              <span className="relative font-light text-[27px] leading-[55px] text-text-neutral-title whitespace-nowrap">공유 링크</span>
            </motion.div>

            {/* analysis-modal */}
            <motion.div
              style={{ opacity: analysisOpacity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="bg-white/90 backdrop-blur-[50px] flex flex-col gap-moaft-gap-xl items-center p-[48px] rounded-[12px] w-[343px]">
                <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-text-neutral-title text-center w-full">
                  AI 분석 중...
                </p>
                <div className="flex gap-[4px] items-center w-full">
                  <div className="bg-fill-primary-default h-[4px] rounded-moaft-full flex-1" />
                  <div className="bg-fill-tertiary-assistive h-[4px] rounded-moaft-full flex-1" />
                  <div className="bg-fill-tertiary-assistive h-[4px] rounded-moaft-full flex-1" />
                </div>
              </div>
            </motion.div>

            {/* result-visual */}
            <motion.div
              style={{ opacity: resultOpacity }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="relative w-full h-[222px] rounded-[12px] overflow-hidden flex items-center justify-center">
                <img src={problemVisual} alt="" className="absolute inset-0 w-full h-full object-cover" />
                <p className="relative font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-text-neutral-title text-center whitespace-nowrap">
                  완성본
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ⑦ CTA section */}
      <section className="relative flex flex-col gap-moaft-gap-xxl items-start px-[148px] py-[240px] w-full">
        <div className="absolute inset-0 bg-fill-primary-default" />
        <div className="relative flex flex-col gap-moaft-gap-l items-start text-text-neutral-inverse whitespace-nowrap">
          <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight">
            만든 과정을 남기고,
            <br />
            다음 아이디어를 발견하세요
          </p>
          <div className="font-ko-brand font-semibold text-moaft-24 leading-moaft-32 tracking-moaft-normal">
            <p className="mb-0">내 프롬프트와 과정을 기록해 필요할 때 다시 사용해 보세요.</p>
            <p>다른 사람의 공개 기록을 둘러보며 새로운 프롬프트와 제작 방법도 발견할 수 있어요.</p>
          </div>
        </div>
        <div className="relative flex gap-moaft-gap-l items-start">
          <button
            onClick={handleStart}
            className="bg-fill-primary-assistive flex items-center justify-center h-[48px] min-w-[76px] px-moaft-padding-xl py-moaft-padding-m rounded-moaft-s text-text-primary-default text-moaft-16 leading-moaft-24 tracking-moaft-normal font-ko-body font-medium cursor-pointer border-0 hover:opacity-90 active:opacity-80"
          >
            기록 구경하기
          </button>
          <button
            onClick={handleStart}
            className="bg-fill-primary-assistive flex items-center justify-center h-[48px] min-w-[76px] px-moaft-padding-xl py-moaft-padding-m rounded-moaft-s text-text-primary-default text-moaft-16 leading-moaft-24 tracking-moaft-normal font-ko-body font-medium cursor-pointer border-0 hover:opacity-90 active:opacity-80"
          >
            내 기록 만들기
          </button>
        </div>
      </section>
    </div>
  );
}
