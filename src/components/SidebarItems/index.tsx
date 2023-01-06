import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import { itemVariants } from '@/animations';

import style from './style.module.scss';

export const SidebarItems = ({
  setIsOpen,
  isOpen,
}: {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) => {
  const routes = [
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
    { name: 'Portfolio', url: '/portfolio' },
    { name: 'Contact', url: '/contact' },
  ];
  const { asPath } = useRouter();

  return (
    <motion.aside
      className={style.sidebar}
      data-testid="sidebar-items"
      variants={{
        open: {
          position: 'absolute',
          visibility: 'visible',
          opacity: 1,
          x: 45,
          transition: {
            delay: 0.3,
            stiffness: 20,
            duration: 0.3,
            type: 'spring',
          },
        },
        closed: {
          x: -250,
          position: 'absolute',
          opacity: 0,
          zIndex: -1,
          transition: {
            duration: 0.3,
            delay: 0.3,
            stiffness: 400,
            damping: 40,
            type: 'spring',
          },
        },
      }}
    >
      <motion.ul className="container">
        {routes.map((route, index) => (
          <motion.li
            key={index}
            variants={itemVariants(index)}
            className={asPath === route.url ? style.active : ''}
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link href={route.url}>{route.name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.aside>
  );
};
