import { IconX } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { INavLink } from '../types/common';
import { Link } from 'react-router-dom';

interface DrawerProps {
  onClick(): void;
  links: INavLink[];
}

export const Drawer = ({ onClick, links }: DrawerProps) => {
  return (
    <motion.nav
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="bg-black p-4 fixed top-0 left-0 right-0 border-b border-teal-500 rounded-b-xl"
    >
      <div
        onClick={onClick}
        className="flex justify-between font-bold text-lg mb-4 border-b border-white py-2 w-full"
      >
        <Link to="/" className="text-white hover:text-teal-500">
          Bayu Setiawan
        </Link>
        <IconX />
      </div>
      <div className="flex flex-col space-y-2 text-center">
        {links.map((link) => (
          <Link
            to={link.path}
            onClick={onClick}
            className="text-white hover:text-teal-500"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};
