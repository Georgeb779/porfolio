import { motion, useCycle } from 'framer-motion';
import * as React from 'react';

import { useDimensions } from '@/utils';

import { MenuToggle } from '../MenuToggle';
import { SidebarItems } from '../SidebarItems';
import style from './style.module.scss';

export const NavBar = () => {
  const [isOpen, cycleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav>
        <div>Hello peter</div>

        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          custom={height}
          ref={containerRef}
          className="background"
        >
          <motion.button
            onClick={() => cycleOpen()}
            title="Toggle Menu"
            type="button"
            className={style.toggle_btn}
          >
            <MenuToggle isOpen={isOpen} />
          </motion.button>

          <SidebarItems />
        </motion.div>
        <div>Hello peter</div>
      </motion.nav>
    </>
  );
};
