import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaMailBulk,
  FaWhatsapp,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MediaBarMotion } from '../common/motion/MediaBar';

export const MediaBar = () => {
  const media = [
    { icon: <FaGithubAlt />, link: 'https://github.com/Bayusetiawan45' },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/bayu-setiawan99/',
    },
    { icon: <FaInstagram />, link: 'https://www.instagram.com/bayustr__/' },
    { icon: <FaWhatsapp />, link: 'https://wa.me/+62887676546' },
    { icon: <FaMailBulk />, link: 'mailto:bayusetiawanipb@gmail.com' },
  ];
  const { container } = MediaBarMotion;
  return (
    <motion.div
      initial={container.initial}
      animate={container.animated}
      transition={container.transition}
      className="hidden md:flex absolute z-10 flex-col w-10 p-2 bg-teal-500 items-center rounded-md bottom-0 md:bottom-auto md:top-80 space-y-4"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className="text-black hover:text-white"
          aria-label={item.link}
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};
