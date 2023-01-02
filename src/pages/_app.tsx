import '@/styles/global.scss';

import type { AppProps } from 'next/app';

import MainLayout from '@/layout/main';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default MyApp;
