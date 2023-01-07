import '@/styles/global.scss';

import { motion } from 'framer-motion';
import type { AppProps } from 'next/app';

import MainLayout from '@/layout/main';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 20,
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  </MainLayout>
);

export default MyApp;
