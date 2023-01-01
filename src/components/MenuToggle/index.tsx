import type { SVGMotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import style from './style.module.scss';

export const MenuToggle = ({ isOpen }: { isOpen: boolean }) => {
  const Path = (
    props: JSX.IntrinsicAttributes &
      SVGMotionProps<SVGPathElement> &
      React.RefAttributes<SVGPathElement>
  ) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
    />
  );
  return (
    <svg className={style.svg}>
      <AnimatePresence>
        {isOpen ? (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="open"
          >
            <Path
              d="M 2 2.5 L 20 2.5"
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </motion.g>
        ) : (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key="closed"
          >
            <Path
              variants={{
                closed: { d: 'M 2 2.5 L 20 2.5' },
                open: { d: 'M 3 16.5 L 17 2.5' },
              }}
            />
            <Path
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
              transition={{ duration: 0.1 }}
            />
            <Path
              d="M 2 16.346 L 20 16.346"
              variants={{
                closed: { d: 'M 2 16.346 L 20 16.346' },
                open: { d: 'M 3 2.5 L 17 16.346' },
              }}
            />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
};
