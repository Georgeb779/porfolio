export const itemVariants = (index: number) => {
  return {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000 },
        delay: 1.3 + index * 0.1,
      },
    },
    closed: {
      opacity: 0,
      y: 50,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };
};
