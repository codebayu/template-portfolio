import { motion } from 'framer-motion';
interface CommonCardProps {
  id: number;
  image: string;
  name: string;
  position: string;
  startDate: string;
  endDate: string;
  duration: string;
  location: string;
}

export const CommonCard = (props: CommonCardProps) => {
  const { image, name, position, startDate, endDate, duration, location } =
    props;
  return (
    <motion.div
      initial={{
        scale: 1,
      }}
      whileHover={{
        scale: 1.02,
        boxShadow:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset',
      }}
      transition={{
        duration: 0.2,
      }}
      className="flex items-center space-x-10 w-full md:w-max py-4 px-8 rounded-xl bg-gray-900"
    >
      <div className="w-20 h-20">
        <img src={image} alt={name} width="100%" height="100%" />
      </div>
      <div className="flex flex-col text-gray-400 text-sm">
        <h2 className="text-lg font-bold text-white">{position}</h2>
        <span>
          {name} • {location}
        </span>
        <span className="mt-2">
          {startDate} - {endDate}
        </span>
        <span>~ {duration}</span>
      </div>
    </motion.div>
  );
};
