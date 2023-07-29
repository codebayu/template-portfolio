import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
    </motion.section>
  );
};
