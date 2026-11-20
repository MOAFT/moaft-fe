import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from 'framer-motion';
import heroLogo from '../../assets/landing/hero-logo.svg';
import problemVisual from '../../assets/landing/problem-visual.png';
import howGraphicText from '../../assets/landing/how-graphic-text.png';
import howGraphicLink from '../../assets/landing/how-graphic-link.png';
import howGraphicCapture from '../../assets/landing/how-graphic-capture.png';
import cyclerImageIcon from '../../assets/landing/cycler-image.png';
import cyclerVideoIcon from '../../assets/landing/cycler-video.png';
import cyclerDocumentIcon from '../../assets/landing/cycler-document.png';
import cyclerCodeIcon from '../../assets/landing/cycler-project.png';
import LandingHeader from './LandingHeader';

function MoaftWordmark({ height = 18 }: { height?: number }) {
  const viewW = 82.0469;
  const viewH = 23.7871;
  return (
    <svg
      viewBox={`0 0 ${viewW} ${viewH}`}
      width={(viewW / viewH) * height}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="MOAFT"
      role="img"
      style={{ display: 'inline-block', flexShrink: 0, verticalAlign: 'middle' }}
    >
      <path d="M65.7891 0C66.8261 1.46252e-05 67.7455 0.131954 68.5469 0.395508C69.3718 0.65906 70.1145 1.05399 70.7744 1.58105L70.3496 5.96289C69.69 5.50196 69.0656 5.16198 68.4766 4.94238C67.8873 4.70081 67.2741 4.57913 66.6377 4.5791C65.8834 4.5791 65.2703 4.75506 64.7988 5.10645C64.351 5.43585 64.127 5.93013 64.127 6.58887C64.127 6.98422 64.2332 7.3473 64.4453 7.67676C64.6575 8.00611 64.9878 8.26917 65.4355 8.4668C65.8834 8.66446 66.4493 8.76367 67.1328 8.76367H70.5977V8.76562H70.7676C72.064 8.63384 73.2727 7.45478 73.8438 5.72852C74.4147 4.00265 74.433 3.88763 74.5508 2.57031L74.5859 2.1416H77.627V8.10645H82.0469V11.9609H77.627V17.1982C77.627 18.0327 77.8395 18.6364 78.2637 19.0098C78.7115 19.3832 79.2658 19.5703 79.9258 19.5703C80.2792 19.5703 80.6329 19.5263 80.9863 19.4385C81.3634 19.3287 81.7169 19.1855 82.0469 19.0098V23.2266C81.3633 23.4023 80.7502 23.524 80.208 23.5898C79.6661 23.6557 79.1713 23.6885 78.7236 23.6885C76.6731 23.6885 75.129 23.1942 74.0918 22.2061C73.0782 21.2177 72.5713 19.6906 72.5713 17.626V12.4658H70.4854V12.4541H66.4609V23.3262H61.4395V12.4541H58.499C58.5212 12.7626 58.5361 13.0809 58.5361 13.4092V21.0859C58.5597 21.8326 58.5713 22.5795 58.5713 23.3262H54.0811C54.1046 22.4916 54.1278 21.6456 54.1514 20.7891C54.1749 19.9325 54.1865 19.0426 54.1865 18.1201H53.9746C53.8568 19.1524 53.4918 20.0975 52.8789 20.9541C52.2661 21.8106 51.4644 22.5022 50.4746 23.0293C49.4846 23.5344 48.3529 23.7871 47.0801 23.7871C46.1137 23.7871 45.206 23.6336 44.3574 23.3262C43.5325 22.9967 42.8488 22.4913 42.3066 21.8105C41.9418 21.3315 41.7078 20.7376 41.5996 20.0303C40.808 21.2865 39.7471 22.2215 38.4141 22.832C37.047 23.4688 35.5028 23.7871 33.7822 23.7871C32.0146 23.7871 30.4355 23.4576 29.0449 22.7988C27.6778 22.1179 26.605 21.1074 25.8271 19.7676C25.1843 18.6257 24.8167 17.2285 24.7217 15.5762C24.4336 18.1801 24.0017 20.7358 23.6895 22.7402H15.998C17.9565 18.2014 21.2291 9.12305 19.0195 9.12305C16.81 9.12311 14.5169 18.2014 13.6465 22.7402H8.07227V10.293H4.89062V22.7402H0V4.11621L12.832 4.12207V16.2539H13.0156C13.9322 8.02002 16.1622 2.9209 20.751 2.9209C24.3454 2.92108 25.1673 7.00467 25.0098 11.7881C25.21 10.9544 25.5056 10.2098 25.8975 9.55469C26.6988 8.21503 27.7834 7.21556 29.1504 6.55664C30.5411 5.89772 32.0976 5.56738 33.8184 5.56738C35.6095 5.56743 37.1887 5.90814 38.5557 6.58887C39.9228 7.24778 40.984 8.25836 41.7383 9.62012C41.9986 10.0685 42.2135 10.5569 42.3867 11.084C42.4913 10.3069 42.6991 9.63225 43.0137 9.06055C43.5087 8.18198 44.1691 7.48955 44.9941 6.98438C45.8191 6.47931 46.7269 6.11707 47.7168 5.89746C48.7067 5.67788 49.6851 5.56738 50.6514 5.56738C52.3955 5.56742 53.8451 5.87531 55 6.49023C56.1375 7.06257 56.9993 7.90162 57.5879 9.00586L64.1982 9.32422V9.06055C62.8783 8.90681 61.8644 8.59889 61.1572 8.1377C60.4738 7.67657 60.0025 7.14948 59.7432 6.55664C59.4839 5.9418 59.3536 5.35953 59.3535 4.81055C59.3535 3.84417 59.6249 2.99823 60.167 2.27344C60.7091 1.54865 61.4633 0.988125 62.4297 0.592773C63.4197 0.197421 64.5398 0 65.7891 0ZM53.4795 15.1221C53.0081 15.2978 52.4779 15.441 51.8887 15.5508C51.2994 15.6386 50.6978 15.7369 50.085 15.8467C49.4722 15.9565 48.9062 16.0997 48.3877 16.2754C47.8693 16.4511 47.4452 16.7038 47.1152 17.0332C46.8088 17.3407 46.6553 17.7693 46.6553 18.3184C46.6554 18.9331 46.8795 19.4162 47.3271 19.7676C47.7749 20.097 48.3526 20.2617 49.0596 20.2617C49.531 20.2617 50.0263 20.1738 50.5449 19.998C51.0871 19.8004 51.5824 19.515 52.0303 19.1416C52.478 18.7463 52.8432 18.2409 53.126 17.626C53.4088 16.9891 53.5507 16.2206 53.5508 15.3203L53.5605 15.0898C53.5338 15.1001 53.5072 15.1122 53.4795 15.1221ZM33.6768 9.32324C32.8755 9.32324 32.18 9.53212 31.5908 9.94922C31.0251 10.3665 30.5887 10.9823 30.2822 11.7949C29.9994 12.5856 29.8584 13.5411 29.8584 14.6611C29.8584 16.3962 30.2118 17.7577 30.9189 18.7461C31.6261 19.7345 32.6158 20.2285 33.8887 20.2285C34.7137 20.2285 35.4089 20.0199 35.9746 19.6025C36.5403 19.1852 36.9768 18.5817 37.2832 17.791C37.5896 17.0003 37.7432 16.0552 37.7432 14.957C37.7431 13.7494 37.5779 12.7393 37.248 11.9268C36.918 11.0921 36.4459 10.4549 35.833 10.0156C35.2438 9.55453 34.5252 9.32328 33.6768 9.32324ZM50.4746 9.38965C49.9325 9.38965 49.3782 9.48885 48.8125 9.68652C48.2468 9.86224 47.7756 10.1916 47.3984 10.6748C47.0449 11.158 46.8682 11.828 46.8682 12.6846L42.7061 12.3535C42.8375 13.0744 42.9053 13.8547 42.9053 14.6943C42.9053 15.0279 42.8931 15.3517 42.873 15.666C43.193 15.3659 43.5578 15.107 43.9688 14.8916C44.723 14.4963 45.5477 14.1884 46.4434 13.9688C47.3391 13.7491 48.2467 13.5629 49.166 13.4092C50.4151 13.1896 51.3461 13.0249 51.959 12.915C52.5954 12.7833 53.0203 12.6288 53.2324 12.4531C53.4443 12.2555 53.5507 11.9923 53.5508 11.6631C53.5508 10.9164 53.2678 10.3558 52.7021 9.98242C52.1365 9.58712 51.3937 9.3897 50.4746 9.38965Z" fill="#654CE5" />
    </svg>
  );
}

function AnalysisGauge({ progress }: { progress: MotionValue<number> }) {
  const size = 220;
  const strokeWidth = 24;
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = useTransform(progress, [0, 100], [circumference, 0]);
  const [count, setCount] = useState(0);
  useMotionValueEvent(progress, 'change', (v) => {
    setCount(Math.round(Math.min(100, Math.max(0, v))));
  });
  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0" style={{ transform: 'rotate(-90deg)' }} aria-hidden>
        <circle cx={size / 2} cy={size / 2} r={size / 2} fill="white" />
        <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="#F0EDFC" strokeWidth={strokeWidth} />
        <motion.circle
          cx={size / 2} cy={size / 2} r={r}
          fill="none" stroke="#654CE5" strokeWidth={strokeWidth} strokeLinecap="round"
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
        />
      </svg>
      <div className="relative flex items-baseline gap-[6px]">
        <span className="font-ko-brand font-moaft-semi-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-fill-primary-default tabular-nums">
          {count}
        </span>
        <span className="font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal text-text-neutral-title">
          %
        </span>
      </div>
    </div>
  );
}

const PROBLEM_ITEMS = [
  { icon: cyclerImageIcon,    label: '이미지' },
  { icon: cyclerVideoIcon,    label: '영상' },
  { icon: cyclerDocumentIcon, label: '문서' },
  { icon: cyclerCodeIcon,     label: '코드' },
];

function ProblemCycler() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (paused || prefersReduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % PROBLEM_ITEMS.length), 2000);
    return () => clearInterval(id);
  }, [paused, prefersReduced]);

  const item = PROBLEM_ITEMS[index];

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="inline-flex items-center justify-center gap-moaft-gap-s w-[220px] pr-moaft-gap-s"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      tabIndex={0}
      aria-live="polite"
      aria-label={`결과물 유형: ${item.label}`}
    >
      <img alt="" className="shrink-0 size-[80px] object-contain" src={item.icon} />
      <span className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-fill-primary-default whitespace-nowrap">
        {item.label}
      </span>
    </motion.div>
  );
}


export default function Landing() {
  const navigate = useNavigate();

  // ⑤ Hero scroll – sticky
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });
  const copyOpacity  = useTransform(heroProgress, [0, 0.28], [1, 0]);
  const copySlideY   = useTransform(heroProgress, [0, 0.28], [0, -24]);

  // 뷰포트 기준 비주얼 중앙 이동량 + CTA가 로고 아래에 오는 드리프트 계산
  const { heroVisualTarget, heroCTATargetY } = useMemo(() => {
    if (typeof window === 'undefined') return { heroVisualTarget: -287, heroCTATargetY: 120 };
    const vh = window.innerHeight;
    const vt = -Math.round((vh - 97 - 229) / 2);
    // 로고 bottom_final = (vh + 276) / 2, 버튼 top_initial ≈ 456px (헤더는 별도 컴포넌트)
    // 타겟: 버튼 top_final = 로고 bottom_final + 48
    const cta = Math.max(0, Math.round(vh / 2 - 270));
    return { heroVisualTarget: vt, heroCTATargetY: cta };
  }, []);

  const heroVisualY  = useTransform(heroProgress, [0.05, 0.55], [-50, heroVisualTarget]);
  const heroCTAY     = useTransform(heroProgress, [0.05, 0.55], [0, heroCTATargetY]);

  // ① Problem section – 단락 순차 fade-in
  const problemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: problemProgress } = useScroll({
    target: problemRef,
    offset: ['start start', 'end end'],
  });
  const l1Opacity = useTransform(problemProgress, [0.05, 0.25], [0, 1]);
  const l1Y       = useTransform(problemProgress, [0.05, 0.25], [24, 0]);
  const l2Opacity = useTransform(problemProgress, [0.30, 0.50], [0, 1]);
  const l2Y       = useTransform(problemProgress, [0.30, 0.50], [24, 0]);
  const l3Opacity = useTransform(problemProgress, [0.60, 0.78], [0, 1]);
  const l3Y       = useTransform(problemProgress, [0.60, 0.78], [24, 0]);
  const l4Opacity = useTransform(problemProgress, [0.82, 0.95], [0, 1]);
  const l4Y       = useTransform(problemProgress, [0.82, 0.95], [24, 0]);

  // ② Feature 01 sticky scroll
  const feature01Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: f01Progress } = useScroll({
    target: feature01Ref,
    offset: ['start start', 'end end'],
  });
  const feature01Y          = useTransform(f01Progress, [0.05, 0.95], [0, -420]);
  const f01HighlightScale   = useTransform(f01Progress, [0.08, 0.35], [0, 1]);
  const f01HighlightOpacity = useTransform(f01Progress, [0.06, 0.15], [0, 1]);
  const f01TextColor        = useTransform(f01Progress, [0.08, 0.35], ['#5C45D0', '#ffffff']);

  // ③ Feature 02 sticky scroll
  const feature02Ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress: f02Progress } = useScroll({
    target: feature02Ref,
    offset: ['start start', 'end end'],
  });
  const feature02Y          = useTransform(f02Progress, [0.05, 0.95], [0, -320]);
  const f02HighlightScale   = useTransform(f02Progress, [0.08, 0.35], [0, 1]);
  const f02HighlightOpacity = useTransform(f02Progress, [0.06, 0.15], [0, 1]);
  const f02TextColor        = useTransform(f02Progress, [0.08, 0.35], ['#5C45D0', '#ffffff']);

  // ④ HOW section 4-phase scroll
  const howRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: howProgress } = useScroll({
    target: howRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1 (0–25%): 3 graphics converge to center (container: 780×340, images: 210×210, center: 285,65)
  const g1Left = useTransform(howProgress, [0, 0.25], [0,   285]);
  const g1Top  = useTransform(howProgress, [0, 0.25], [9,   65]);
  const g2Left = useTransform(howProgress, [0, 0.25], [570, 285]);
  const g2Top  = useTransform(howProgress, [0, 0.25], [52,  65]);
  const g3Left = useTransform(howProgress, [0, 0.25], [285, 285]);
  const g3Top  = useTransform(howProgress, [0, 0.25], [127, 65]);

  const howHighlightScale = useTransform(howProgress, [0.04, 0.18], [0, 1]);
  const howTextColor      = useTransform(howProgress, [0.04, 0.18], ['#5C45D0', '#ffffff']);

  // Phase 2 (45–60%): icons fade out as gauge appears
  const boxesOpacity    = useTransform(howProgress, [0.45, 0.60], [1, 0]);
  // Analysis modal: fade in (45–55%), hold, fade out AFTER gauge completes (78–86%)
  const analysisOpacity = useTransform(howProgress, [0.45, 0.55, 0.78, 0.86], [0, 1, 1, 0]);
  // Gauge fills 0→100 (50%→78%)
  const gaugeProgress   = useTransform(howProgress, [0.50, 0.78], [0, 100]);
  // Result fades in after gauge completes (78–90%) — still used for opacity
  const resultOpacity   = useTransform(howProgress, [0.78, 0.90], [0, 1]);

  const handleStart = () => navigate('/login');

  return (
    <div className="bg-white flex flex-col items-start w-full">

      <LandingHeader activeTab="about" />

      {/* ⑤ Hero section – sticky scroll wrapper */}
      <div
        ref={heroRef}
        className="relative w-full"
        style={{ height: 'calc(100vh + 1200px)' }}
      >
        <section
          className="sticky top-0 h-screen overflow-hidden flex flex-col items-start pt-[168px] px-[148px] pb-0"
        >
          <div className="absolute inset-0 bg-fill-primary-default" />

          {/* Title + subtitle – fades and lifts out on scroll */}
          <motion.div
            style={{ opacity: copyOpacity, y: copySlideY }}
            className="relative z-20 flex flex-col gap-moaft-gap-l items-start text-text-neutral-inverse"
          >
            <div className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight whitespace-nowrap">
              <p className="mb-0">AI로 만든 결과물,</p>
              <p>만드는 법도 쉽게 기록해요</p>
            </div>
            <p className="font-ko-brand font-moaft-regular text-moaft-20 leading-moaft-28 tracking-moaft-normal">
              어떤 프롬프트를 사용했고 어떻게 수정했는지 정리해<br />다음 작업과 공유에 다시 활용할 수 있어요.
            </p>
          </motion.div>

          {/* CTA – drifts down to below hero-visual */}
          <motion.button
            onClick={handleStart}
            style={{ y: heroCTAY }}
            className="relative z-20 mt-moaft-gap-xl bg-fill-primary-assistive flex items-center justify-center h-[48px] min-w-[76px] px-moaft-padding-xl py-moaft-padding-m rounded-moaft-s text-text-primary-default text-moaft-16 leading-moaft-24 tracking-moaft-normal font-ko-body font-medium cursor-pointer border-0"
          >
            Moaft 시작하기
          </motion.button>

          {/* hero-visual – 초기 위치: 뷰포트 하단, 스크롤 시 중앙으로 이동 */}
          <motion.div
            style={{ y: heroVisualY }}
            className="absolute bottom-0 left-[148px] z-10 flex items-center overflow-hidden h-[229px]"
          >
            <div className="relative w-[671px] h-[671px] flex-shrink-0">
              <div
                className="absolute"
                style={{ left: 0, top: 246.38, width: 618.578, height: 179.339 }}
              >
                <img src={heroLogo} alt="" className="block w-full h-full" />
              </div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* hero-fade: ease-in-out curve로 purple → white */}
      <div
        className="relative shrink-0 w-full h-[370px]"
        style={{
          background: `linear-gradient(
            to bottom,
            var(--color-fill-primary-default) 0%,
            color-mix(in srgb, var(--color-fill-primary-default) 92%, white) 10%,
            color-mix(in srgb, var(--color-fill-primary-default) 75%, white) 24%,
            color-mix(in srgb, var(--color-fill-primary-default) 52%, white) 40%,
            color-mix(in srgb, var(--color-fill-primary-default) 30%, white) 57%,
            color-mix(in srgb, var(--color-fill-primary-default) 13%, white) 72%,
            color-mix(in srgb, var(--color-fill-primary-default) 4%, white) 85%,
            white 100%
          )`,
        }}
      />

      {/* ① Problem section – sticky, 단락 순차 fade-in */}
      <div
        ref={problemRef}
        className="relative w-full"
        style={{ height: 'calc(100vh - 97px + 2400px)' }}
      >
        <section className="sticky top-[97px] h-[calc(100vh-97px)] flex flex-col items-start pt-[120px] px-[148px] pb-0 overflow-hidden">
          <div className="flex flex-col gap-moaft-gap-xxl items-start">
            <div className="flex flex-col gap-moaft-gap-s items-start">
              <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-text-neutral-title whitespace-nowrap">
                결과는 남았는데,
              </p>
              <div className="flex gap-moaft-gap-l items-center">
                <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-text-neutral-title whitespace-nowrap">
                  어떻게
                </p>
                <ProblemCycler />
                <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight text-text-neutral-title whitespace-nowrap">
                  만들었는지는 사라집니다
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-moaft-gap-s items-start font-ko-brand font-moaft-regular text-moaft-20 leading-moaft-28 tracking-moaft-normal text-text-neutral-description whitespace-nowrap">
              <motion.p style={{ opacity: l1Opacity, y: l1Y }}>
                AI 대화가 길어질수록 최종 프롬프트를 다시 찾기 어렵고,
              </motion.p>
              <motion.p style={{ opacity: l2Opacity, y: l2Y }}>
                작업에 사용한 도구와 수정 과정은 여러 곳에 흩어집니다.
              </motion.p>
              <motion.p style={{ opacity: l3Opacity, y: l3Y }} className="mt-moaft-gap-xxl">
                결국 같은 작업을 다시 할 때
              </motion.p>
              <motion.p style={{ opacity: l4Opacity, y: l4Y }}>
                대화를 처음부터 확인하고 필요한 내용을 다시 정리하게 됩니다.
              </motion.p>
            </div>
          </div>
        </section>
      </div>

      {/* ② Feature 01 – sticky: 제작 과정 기록하기 */}
      <div
        ref={feature01Ref}
        className="relative w-full"
        style={{ height: 'calc(100vh - 97px + 1000px)' }}
      >
        <div className="sticky top-[97px] h-[calc(100vh-97px)] flex items-center justify-center gap-moaft-gap-xxl overflow-hidden">
          {/* feature-head (left, 459px) */}
          <div className="flex flex-col items-start w-[459px] flex-shrink-0" style={{ gap: '21px' }}>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-fill-primary-default w-full">01</p>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-text-neutral-title w-full">제작 과정 기록하기</p>
            <div className="flex flex-col gap-moaft-gap-s items-start w-full">
              <p className="font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal text-text-primary-default w-full">여러 단계로 이어진 작업을</p>
              <div className="flex gap-[4px] items-center">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-fill-primary-default origin-left"
                    style={{ scaleX: f01HighlightScale }}
                  />
                  <motion.p
                    className="relative font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal whitespace-nowrap"
                    style={{ color: f01TextColor }}
                  >하나의 제작 과정</motion.p>
                </div>
                <p className="font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal text-text-primary-default whitespace-nowrap">으로 남기세요</p>
              </div>
            </div>
            <div className="font-ko-body font-moaft-regular text-moaft-16 leading-moaft-24 tracking-moaft-normal text-text-neutral-description w-full">
              <p className="mb-0">사용한 도구와 프롬프트, 입력 자료, 결과물을</p>
              <p className="mb-0">작업 순서대로 연결해 기록해요.</p>
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
        style={{ height: 'calc(100vh - 97px + 900px)' }}
      >
        <div className="sticky top-[97px] h-[calc(100vh-97px)] flex items-center justify-center gap-moaft-gap-xxl overflow-hidden">
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
          <div className="flex flex-col items-start w-[459px] flex-shrink-0" style={{ gap: '21px' }}>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-fill-primary-default w-full">02</p>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-text-neutral-title w-full">변화 과정 기록하기</p>
            <div className="flex flex-col gap-moaft-gap-s items-start w-full">
              <p className="font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal text-text-primary-default w-full">결과가 어떻게 달라졌는지</p>
              <div className="flex gap-[4px] items-center">
                <div className="relative flex items-center justify-center overflow-hidden">
                  <motion.div
                    className="absolute inset-0 bg-fill-primary-default origin-left"
                    style={{ scaleX: f02HighlightScale }}
                  />
                  <motion.p
                    className="relative font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal whitespace-nowrap"
                    style={{ color: f02TextColor }}
                  >변화의 흐름</motion.p>
                </div>
                <p className="font-ko-brand font-moaft-semi-bold text-moaft-28 leading-moaft-38 tracking-moaft-normal text-text-primary-default whitespace-nowrap">을 남기세요</p>
              </div>
            </div>
            <div className="font-ko-body font-moaft-regular text-moaft-16 leading-moaft-24 tracking-moaft-normal text-text-neutral-description w-full">
              <p className="mb-0">프롬프트를 수정할 때마다 결과물이 어떻게 달라졌는지</p>
              <p className="mb-0">연결해 기록해요.</p>
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
        style={{ height: 'calc(100vh - 97px + 1300px)' }}
      >
        <div
          className="sticky flex flex-col gap-moaft-gap-xxl items-center w-full pt-[40px] pb-[80px]"
          style={{ top: 97, height: 'calc(100vh - 97px)' }}
        >
          {/* how-heading */}
          <div className="flex flex-col items-center text-center" style={{ gap: '14px' }}>
            <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-text-neutral-title">HOW?</p>
            <div className="flex items-center gap-[4px]">
              <div className="relative flex items-center justify-center overflow-hidden">
                <motion.div
                  className="absolute inset-0 bg-fill-primary-default origin-left"
                  style={{ scaleX: howHighlightScale }}
                />
                <motion.p
                  className="relative font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight whitespace-nowrap"
                  style={{ color: howTextColor }}
                >편한 방법</motion.p>
              </div>
              <p className="font-ko-brand font-bold text-moaft-48 leading-moaft-60 tracking-moaft-tight text-text-primary-default whitespace-nowrap">으로 기록을 시작하세요</p>
            </div>
            <div className="font-ko-brand font-moaft-regular text-moaft-20 leading-moaft-28 tracking-moaft-normal text-text-neutral-title text-center">
              <p className="mb-0">이미 나눈 AI 대화는 공유 링크나 캡처 이미지로 가져오고, 새로운 작업은 직접 작성할 수 있어요.</p>
              <p className="flex items-center justify-center gap-[4px] flex-wrap">
                <MoaftWordmark height={18} />
                가 필요한 내용을 AI로 정리하면 저장하기 전에 확인하고 수정할 수 있어요.
              </p>
            </div>
          </div>

          {/* how-graphics */}
          <div className="relative w-[780px] h-[500px] flex-shrink-0">
            <motion.div
              style={{ left: g1Left, top: g1Top, opacity: boxesOpacity }}
              className="absolute size-[210px]"
            >
              <img src={howGraphicText} alt="" className="w-full h-full object-contain pointer-events-none" />
            </motion.div>

            <motion.div
              style={{ left: g2Left, top: g2Top, opacity: boxesOpacity }}
              className="absolute size-[210px]"
            >
              <img src={howGraphicLink} alt="" className="w-full h-full object-contain pointer-events-none" />
            </motion.div>

            <motion.div
              style={{ left: g3Left, top: g3Top, opacity: boxesOpacity }}
              className="absolute size-[210px]"
            >
              <img src={howGraphicCapture} alt="" className="w-full h-full object-contain pointer-events-none" style={{ transform: 'scaleX(-1)' }} />
            </motion.div>

            {/* analysis-modal */}
            <motion.div
              style={{ opacity: analysisOpacity }}
              className="absolute top-[12px] left-1/2 -translate-x-1/2 pointer-events-none"
            >
              <div className="bg-white/90 backdrop-blur-[50px] flex flex-col gap-moaft-gap-m items-center px-[48px] pt-[48px] pb-[40px] rounded-[12px] w-[343px]">
                <AnalysisGauge progress={gaugeProgress} />
                <div className="flex items-end font-ko-brand font-moaft-regular text-moaft-16 leading-moaft-24 tracking-moaft-normal text-text-neutral-description">
                  <span>AI 분석 중</span>
                  <span className="inline-flex items-end gap-[1px] ml-[4px]">
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.7, repeat: Infinity, delay: i * 0.15, ease: 'easeInOut' }}
                    >.</motion.span>
                  ))}</span>
                </div>
              </div>
            </motion.div>

            {/* result-visual */}
            <motion.div
              style={{ opacity: resultOpacity }}
              className="absolute top-0 left-0 right-0 pointer-events-none"
            >
              <img src={problemVisual} alt="완성본 예시" className="w-full h-auto rounded-[12px]" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* ⑥ Result section – 완성본 전체 이미지 (전체 페이지 스크롤) */}
      <section className="relative w-full flex flex-col items-center py-[80px]">
        <img src={problemVisual} alt="완성본 예시" className="w-[780px] rounded-[12px]" />
      </section>

      {/* ⑦ CTA section */}
      <section className="relative flex flex-col gap-moaft-gap-xxl items-start px-[148px] py-[240px] w-full">
        <div className="absolute inset-0 bg-fill-primary-default" />
        <div className="relative flex flex-col gap-moaft-gap-l items-start text-text-neutral-inverse whitespace-nowrap">
          <p className="font-ko-brand font-bold text-moaft-64 leading-moaft-80 tracking-moaft-tight">
            만든 과정을 남기고,
            <br />
            다음 아이디어를 발견하세요
          </p>
          <p className="font-ko-brand font-moaft-regular text-moaft-20 leading-moaft-28 tracking-moaft-normal">
            내 프롬프트와 과정을 기록해 필요할 때 다시 사용해 보세요.<br />다른 사람의 공개 기록을 둘러보며 새로운 프롬프트와 제작 방법도 발견할 수 있어요.
          </p>
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
