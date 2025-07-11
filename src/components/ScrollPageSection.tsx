// src/pages/ScrollPage.tsx
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx([className, "max-w-3xl mx-auto my-32 px-4 text-center"])}
    >
      {children}
    </motion.div>
  );
};

