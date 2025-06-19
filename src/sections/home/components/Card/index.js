'use client';
import Image from 'next/image';

import styles from './style.module.scss';

import { useTransform, m, useScroll } from 'framer-motion';
import { useRef } from 'react';

// hooks
import { useBoolean } from 'src/hooks/use-boolean';
import FullScreenDialog from '../dialog/full-screen-dialog';

const Card = ({ color, progress, range, targetScale, i, shouldBlur, totalCards }) => {
  const container = useRef(null);

  const dialog = useBoolean();

  const scale = useTransform(progress, range, [1, targetScale]);

  // Calculate blur based on card position and scroll progress
  const blurRange = [i / totalCards, (i + 1) / totalCards];
  const nextCardStart = (i + 1) / totalCards;
  const blurDelay = 0.05; // Delay blur until next card is visible

  const blurValue = useTransform(
    progress,
    [0, blurRange[0], blurRange[1], nextCardStart + blurDelay, 1],
    [0, 0, 0, 5, 5]
  );

  // Create blur filter string
  const blurFilter = useTransform(blurValue, (value) => `blur(${value}px)`);

  return (
    <>
      <div ref={container} className={styles.cardContainer}>
        <m.div
          style={{
            backgroundColor: color,
            scale,
            top: `0px`,
            // filter: opacity,
            filter: blurFilter,
            // opacity,
          }}
          className={styles.card}
        >
          <div className={styles.body}>
            <Image
              style={{ objectFit: 'cover' }}
              fill
              src={'/assets/liux.jpg'}
              alt="image"
              onClick={dialog.onTrue}
            />
          </div>
        </m.div>
      </div>
      <FullScreenDialog dialog={dialog} />
    </>
  );
};

export default Card;
