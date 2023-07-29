import { motion } from 'framer-motion';
import { IconCodeCircle } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';

export const Portfolio = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my portfolio projects';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Portfolio"
        description={sectionDescription}
      />
    </motion.section>
  );
};
