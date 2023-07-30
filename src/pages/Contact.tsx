import { motion } from 'framer-motion';
import {
  IconBrandWhatsapp,
  IconBrandCampaignmonitor,
  IconBrandInstagram,
  IconBrandGithub,
  IconBrandLinkedin,
  IconHeadphones,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { ContactCard } from '../components/ContactCard';

export const Contact = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'Feel free to contact me';
  const iconStyles = { width: '100%', height: '100%' };
  const contacts = [
    {
      id: 1,
      name: 'Whatsapp',
      image: <IconBrandWhatsapp style={iconStyles} />,
      description: '+62887676546',
      link: 'https://wa.me/+62887676546',
    },
    {
      id: 2,
      name: 'Email',
      image: <IconBrandCampaignmonitor style={iconStyles} />,
      description: 'bayusetiawanipb@gmail.com',
      link: 'mailto:bayusetiawanipb@gmail.com',
    },
    {
      id: 3,
      name: 'Instagram',
      image: <IconBrandInstagram style={iconStyles} />,
      description: 'bayustr__',
      link: 'https://www.instagram.com/bayustr__',
    },
    {
      id: 4,
      name: 'Github',
      image: <IconBrandGithub style={iconStyles} />,
      description: 'Bayusetiawan45',
      link: 'https://github.com/Bayusetiawan45',
    },
    {
      id: 5,
      name: 'Linkedin',
      image: <IconBrandLinkedin style={iconStyles} />,
      description: 'bayu-setiawan99',
      link: 'https://www.linkedin.com/in/bayu-setiawan99/',
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
        icon={<IconHeadphones />}
        label="Contact"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} {...contact} />
        ))}
      </div>
    </motion.section>
  );
};
