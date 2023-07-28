import { motion } from 'framer-motion';

export const Home = () => {
  return (
    <section className="flex h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6"
        initial={{
          y: 50,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          delay: 0.2,
          duration: 0.8,
        }}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Hi there!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-6xl">Bayu Setiawan</h1>
        <h2 className="text-teal-500 font-bold text-3xl">Software Engineer</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam,
          neque illo. Vel repudiandae culpa dolorum, accusantium odit rerum
          commodi totam?
        </p>
        <motion.button
          initial={{
            opacity: 0,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.4,
            delay: 1,
          }}
          className="rounded-3xl w-max hover:bg-transparent border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
        >
          Download Resume
        </motion.button>
      </motion.div>
      <motion.div
        initial={{
          borderEndEndRadius: '100px',
          borderStartStartRadius: '100px',
        }}
        animate={{
          borderEndEndRadius: '500px',
          borderStartStartRadius: '500px',
        }}
        transition={{
          delay: 0.3,
          duration: 0.5,
        }}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden"
      >
        <motion.img
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.8,
          }}
          src="/bayu-no-bg.webp"
          alt="profile"
          width="100%"
          height="100%"
        />
      </motion.div>
    </section>
  );
};
