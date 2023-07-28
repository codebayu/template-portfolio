import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="h-1 fixed  top-0 left-0 right-0 bg-teal-500 origin-[0%]"
      style={{ scaleX: scrollYProgress }}
    />
  );
};
