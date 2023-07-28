import {
  FaGithubAlt,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaMailBulk,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const MediaBar = () => {
  const media = [
    { icon: <FaGithubAlt />, link: 'https://github.com/Bayusetiawan45' },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/in/bayu-setiawan99/',
    },
    { icon: <FaInstagram />, link: 'https://github.com/Bayusetiawan45' },
    { icon: <FaTwitter />, link: 'https://github.com/Bayusetiawan45' },
    { icon: <FaMailBulk />, link: 'https://github.com/Bayusetiawan45' },
  ];
  return (
    <motion.div
      initial={{
        x: -100,
      }}
      animate={{
        x: 0,
      }}
      transition={{
        delay: 0.5,
        duration: 0.5,
      }}
      className="flex absolute flex-col w-10 p-2 bg-teal-500 items-center rounded-md top-80 space-y-4"
    >
      {media.map((item) => (
        <Link
          to={item.link}
          key={item.link}
          className="text-black hover:text-white"
        >
          {item.icon}
        </Link>
      ))}
    </motion.div>
  );
};
