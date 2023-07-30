import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
interface ContactCardProps {
  id: number;
  image: React.ReactNode;
  name: string;
  description: string;
  link: string;
}

export const ContactCard = (props: ContactCardProps) => {
  const { image, name, description, link } = props;
  return (
    <motion.div className="flex items-center space-x-4 w-full md:w-max min-w-[300px] p-4 rounded-xl bg-gray-900">
      <div className="w-20 h-20">{image}</div>
      <div className="flex flex-col space-y-2 items-start text-gray-400 text-sm">
        <div>
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <span>{description}</span>
        </div>
        <Link
          to={link}
          target="_blank"
          className="text-teal-600 hover:text-white hover:bg-teal-600 rounded-md p-1"
        >
          Send a message
        </Link>
      </div>
    </motion.div>
  );
};
