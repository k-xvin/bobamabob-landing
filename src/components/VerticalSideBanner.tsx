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
        className={`animate-verticalScroll whitespace-nowrap text-2xl font-bold text-[#051f37] tracking-widest [writing-mode:vertical-rl] ${
          side === 'left' ? 'rotate-180' : ''
        }`}
      >
        {Array(20).fill('BOBAMABOB').join(' ')}
      </div>
    </div>
  );
}
