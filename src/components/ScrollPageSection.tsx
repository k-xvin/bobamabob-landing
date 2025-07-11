// src/components/ScrollPageSection.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

type ScrollPageSectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function ScrollPageSection({ children, className }: ScrollPageSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll within this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when top enters viewport to when it leaves top
  });

  // Fade in and out based on scroll progress
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.8], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
