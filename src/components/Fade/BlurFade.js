'use client';

import { useRef } from 'react';
import { AnimatePresence, m, useInView } from 'framer-motion';

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 6,
  inView = false,
  inViewMargin = '-50px',
  blur = '6px',
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
  const isInViewFinal = !inView || inViewResult;

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -yOffset, opacity: 1, filter: 'blur(0px)' },
  };

  const motionVariants = variant || defaultVariants;

  return (
    <AnimatePresence>
      <m.div
        ref={ref}
        initial="hidden"
        animate={isInViewFinal ? 'visible' : 'hidden'}
        exit="hidden"
        variants={motionVariants}
        transition={{ delay: 0.04 + delay, duration, ease: 'easeOut' }}
        className={className}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
}
