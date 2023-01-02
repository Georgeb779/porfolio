import { NavBar } from '@/components';

import style from './style.module.scss';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={style.app__container}>
      <NavBar />
      <main>{children}</main>
    </div>
  );
}
