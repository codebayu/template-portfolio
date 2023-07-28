import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, i'm Bayu</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am Software Engineer proficient in TypeScript and well-versed in
        popular frameworks such as React JS, Next JS, Vue JS, and Nuxt Js. Not
        just coding. I am passionate about creating clean and efficient code,
        automating testing code, and implementing modern design principles to
        deliver intuitive user experiences. With my technical expertise, I am
        able to create highly performant and elegant solutions that are easy to
        maintain and scale. I am always eager to learn new technologies and
        improve my skills
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione sequi
        officiis quas, facilis molestiae adipisci reprehenderit itaque alias
        atque tempora odit perferendis, nulla voluptatem quo voluptatum enim
        expedita, numquam nemo! Vel necessitatibus provident fugiat asperiores
        velit? Illum amet cum dignissimos? Quo perferendis vitae eos dolores
        sunt delectus voluptate ab omnis asperiores dicta, dolor reprehenderit
        blanditiis et a quod esse. Aut omnis rerum distinctio ducimus animi
        delectus eum architecto voluptatem, tenetur labore eveniet aliquid
        voluptas facere culpa autem saepe veniam enim et modi minus quod beatae
        voluptatibus libero blanditiis. Harum ratione quod sunt vero quisquam
        iste accusantium numquam distinctio. Recusandae, aut!
      </p>
    </motion.section>
  );
};
