import clsx from "clsx";

// src/components/VerticalSideBanner.tsx
type VerticalSideBannerProps = {
  side: 'left' | 'right';
};

export default function VerticalSideBanner({ side }: VerticalSideBannerProps) {
  const alignment = side === 'left' ? 'left-0' : 'right-0';

  return (
    <div
      className={`fixed gluten ${alignment} top-0 bottom-0 w-16 z-50 hidden sm:flex items-center justify-center overflow-hidden bg-[#8FF0F0]`}
    >
      <div
        className={clsx([
          'whitespace-nowrap text-2xl font-bold text-[#051f37]',
          `animate-verticalScroll`,
          'tracking-widest [writing-mode:vertical-rl]',
          side === 'left' ? 'rotate-180' : '',
        ])}
      >
        {Array(20).fill('BOBAMABOB').join(' ')}
      </div>
    </div>
  );
}

export function HorizontalSideBanner({ side }: VerticalSideBannerProps) {
  const alignment = side === 'left' ? 'top-0' : 'bottom-0';

  return (
    <div
      className={`fixed gluten ${alignment} left-0 right-0 h-16 z-50 flex items-center justify-center overflow-hidden bg-[#8FF0F0] sm:hidden`}
    >
      <div
        className={clsx([
          'whitespace-nowrap text-2xl font-bold text-[#051f37]',
          `animate-horizontalScroll`,
          'tracking-widest',
          side === 'right' ? 'rotate-180' : '',
        ])}
      >
        {Array(20).fill('BOBAMABOB').join(' ')}
      </div>
    </div>
  );
}