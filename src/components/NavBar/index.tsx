import { AnimatePresence, motion, useCycle } from 'framer-motion';
import * as React from 'react';

import { useDimensions } from '@/utils';

export const NavBar = () => {
  const [isOpen, cycleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };

  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };

  const sidebar = {
    // eslint-disable-next-line @typescript-eslint/no-shadow
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(20px at 20px 20px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
        className="background"
        variants={sidebar}
      >
        <button onClick={() => cycleOpen}>{isOpen ? 'Open' : 'Close'}</button>
        <motion.div>
          <AnimatePresence>
            {isOpen && (
              <motion.aside
                initial={{ width: 0 }}
                animate={{
                  width: 300,
                }}
                exit={{
                  width: 0,
                  transition: { delay: 0.7, duration: 0.3 },
                }}
              >
                <motion.div
                  className="container"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={sideVariants}
                >
                  <motion.div variants={itemVariants}>Item 1</motion.div>
                  <motion.div variants={itemVariants}>Item 2</motion.div>
                  <motion.div variants={itemVariants}>Item 3</motion.div>
                  <motion.div variants={itemVariants}>Item 4</motion.div>
                </motion.div>
              </motion.aside>
            )}
          </AnimatePresence>
        </motion.div>
      </motion.nav>
    </>
  );
};
