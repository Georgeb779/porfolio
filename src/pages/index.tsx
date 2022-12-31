import { motion } from 'framer-motion';

import { NavBar } from '@/components';

const Index = () => {
  const variants = {
    hidden: {
      scale: 0.8,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <>
      <motion.div initial="hidden" animate="visible" variants={variants}>
        <NavBar />
      </motion.div>
    </>
  );
};

export default Index;
