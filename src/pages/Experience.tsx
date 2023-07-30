import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My proffesional career journey';
  // mockup experience data
  const experiences = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'X Code',
      position: 'Frontend Developer',
      startDate: 'Mar 2022',
      endDate: 'Present',
      duration: '3 Months',
      location: 'Jakarta',
    },
    {
      id: 2,
      image: '/vite.svg',
      name: 'Y Code',
      position: 'Backend Developer',
      startDate: 'Mar 2021',
      endDate: 'Februari 2022',
      duration: '11 Months',
      location: 'Bandung',
    },
  ];
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
