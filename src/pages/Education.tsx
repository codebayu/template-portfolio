import { motion } from 'framer-motion';
import { IconCodeCircle } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';

export const Education = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My education history';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconCodeCircle />}
        label="Education"
        description={sectionDescription}
      />
    </motion.section>
  );
};
