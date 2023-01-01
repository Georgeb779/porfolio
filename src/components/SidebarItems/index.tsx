import { motion } from 'framer-motion';
import React from 'react';

import { itemVariants } from '@/animations';

import style from './style.module.scss';

export const SidebarItems = () => {
  const routes = ['Home', 'About', 'Portfolio', 'Contact'];
  return (
    <motion.aside
      className={style.sidebar}
      data-testid="sidebar-items"
      variants={{
        open: {
          position: 'absolute',
          visibility: 'visible',
          opacity: 1,
          x: 50,
          transition: {
            delay: 0.3,
            stiffness: 20,
            duration: 0.5,
            type: 'spring',
          },
        },
        closed: {
          x: -100,
          position: 'absolute',
          opacity: 0,
          zIndex: -1,
          transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 400,
            damping: 40,
          },
        },
      }}
    >
      <motion.ul className="container">
        {routes.map((route, index) => (
          <motion.li key={index} variants={itemVariants(index)}>
            {route}
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
};
