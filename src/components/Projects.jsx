import { forwardRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Animated Portfolio",
    description: "A stunning, interactive portfolio site with rich animations and smooth transitions.",
    link: "#",
  },
  {
    title: "Creative Landing Page",
    description: "A visually engaging landing page with custom SVG backgrounds and scroll-based animations.",
    link: "#",
  },
  {
    title: "UI Component Library",
    description: "A set of reusable, animated UI components built with React and Framer Motion.",
    link: "#",
  },
];

const Projects = forwardRef((props, ref) => (
  <motion.section
    ref={ref}
    id="projects"
    className="py-24 flex flex-col items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl font-extrabold mb-10 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text">
      Projects
    </h2>
    <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl">
      {projects.map((project, idx) => (
        <motion.a
          key={project.title}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#ffeedd]/80 dark:bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-700/30 hover:scale-105 hover:shadow-2xl transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-purple-200 mb-2">{project.title}</h3>
          <p className="text-purple-100">{project.description}</p>
        </motion.a>
      ))}
    </div>
  </motion.section>
));

export default Projects; 