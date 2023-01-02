import { motion, useCycle } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { useDimensions } from '@/utils';

import { MenuToggle } from '../MenuToggle';
import { SidebarItems } from '../SidebarItems';
import SocialSection from '../SocialSection';
import style from './style.module.scss';

export const NavBar = () => {
  const [isOpen, cycleOpen] = useCycle(false, true);
  const containerRef = React.useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav className={style.navbar__container}>
        <div className={style.navbar__logo}>
          <Link href="/">G</Link>
        </div>
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
        <SocialSection />
      </motion.nav>
    </>
  );
};
