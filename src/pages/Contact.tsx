import { motion } from 'framer-motion';
import { IconCodeCircle } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Find me on other platform';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Contact"
        description={sectionDescription}
      />
    </motion.section>
  );
};
