import { forwardRef } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaJs, FaCss3Alt, FaHtml5, FaGitAlt, FaPython } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" />, special: true },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" />, special: true },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, special: true },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" />, special: true },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" />, special: true },
  { name: "Python", icon: <FaPython className="text-blue-400" />, special: false },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-300" />, special: false },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" />, special: false },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, special: false },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" />, special: false },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" />, special: false },
];

// Animation variants for the grid and tiles
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const tileVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1.05,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 30,
      duration: 0.35,
    },
  },
};

const Skills = forwardRef((props, ref) => (
  <motion.section
    ref={ref}
    id="skills"
    className="py-24 flex flex-col items-center"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    transition={{ staggerChildren: 0.07 }}
  >
    <motion.h2
      className="text-4xl font-bold text-white mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      Skills
    </motion.h2>
    <motion.div
      className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {skills.map((skill, idx) => (
        <motion.div
          key={skill.name}
          className="relative flex flex-col items-center justify-center bg-[#ffeedd]/80 dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-purple-700/30 transition-all cursor-pointer group"
          variants={tileVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 4px 32px 0px #a78bfa55",
          }}
        >
          <div className="text-4xl mb-3 group-hover:scale-105 transition-transform">{skill.icon}</div>
          <div className="text-lg font-semibold text-purple-900 dark:text-purple-100">{skill.name}</div>
          {skill.special && (
            <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold text-black px-2 py-0.5 rounded-full shadow">
              Coding
            </span>
          )}
        </motion.div>
      ))}
    </motion.div>
    <p className="mt-8 text-purple-700 dark:text-purple-200 text-center max-w-xl">
      <span className="font-bold text-yellow-300">Coding</span> skills are my specialty! I love building with modern frameworks and tools.
    </p>
  </motion.section>
));

export default Skills; 