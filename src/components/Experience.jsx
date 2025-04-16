import { forwardRef } from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Frontend Developer",
    company: "Creative Studio",
    period: "2022 - Present",
    description: "Building interactive UIs and animations for client projects.",
  },
  {
    role: "UI/UX Designer",
    company: "Design Agency",
    period: "2020 - 2022",
    description: "Designed and prototyped user interfaces for web and mobile.",
  },
  {
    role: "Web Developer",
    company: "Freelance",
    period: "2018 - 2020",
    description: "Developed custom websites and landing pages for startups.",
  },
];

const Experience = forwardRef((props, ref) => (
  <motion.section
    ref={ref}
    id="experience"
    className="py-24 flex flex-col items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl font-bold text-white mb-10"
      initial={false}
      animate={false}
    >
      Experience
    </motion.h2>
    <div className="w-full max-w-3xl space-y-8">
      {experiences.map((exp, idx) => (
        <motion.div
          key={exp.role}
          className="bg-[#ffeedd]/80 dark:bg-black/40 backdrop-blur-md rounded-xl p-6 shadow-lg border border-purple-700/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * idx, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-between items-center mb-2">
            <span className="text-xl font-semibold text-purple-200">{exp.role}</span>
            <span className="text-sm text-purple-300">{exp.period}</span>
          </div>
          <div className="text-purple-400 font-medium mb-1">{exp.company}</div>
          <div className="text-purple-100">{exp.description}</div>
        </motion.div>
      ))}
    </div>
  </motion.section>
));

export default Experience; 