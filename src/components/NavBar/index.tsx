import { motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import { MenuToggle } from '../MenuToggle';
import { SidebarItems } from '../SidebarItems';
import SocialSection from '../SocialSection';
import style from './style.module.scss';

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    const main = document.querySelector('main');
    if (main) {
      main.addEventListener('click', () => {
        if (isOpen) {
          setIsOpen(false);
        }
      });
    }
  }, [isOpen]);

  return (
    <>
      <motion.nav className={style.navbar__container}>
        <div className={style.navbar__logo}>
          <Link href="/" onClick={() => setIsOpen(false)}>
            G
          </Link>
        </div>
        <motion.div
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className="background"
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            title="Toggle Menu"
            type="button"
            className={style.toggle_btn}
          >
            <MenuToggle isOpen={isOpen} />
          </motion.button>
          <SidebarItems isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
        <SocialSection />
      </motion.nav>
    </>
  );
};
