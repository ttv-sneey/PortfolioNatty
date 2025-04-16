import { forwardRef } from "react";
import { motion } from "framer-motion";

const About = forwardRef((props, ref) => (
  <motion.section
    ref={ref}
    id="about"
    className="py-24 flex flex-col items-center"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <motion.h2
      className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-700 to-indigo-700 dark:from-purple-400 dark:to-indigo-400 text-transparent bg-clip-text"
      initial={false}
      animate={false}
    >
      About Me
    </motion.h2>
    <motion.div
      className="max-w-2xl text-lg text-indigo-900 dark:text-purple-100 text-center"
      initial={false}
      animate={false}
    >
      <p>
        Hi! I'm <span className="font-semibold text-purple-700 dark:text-purple-300">Arjun Natt</span>, a creative developer passionate about building beautiful, interactive web experiences. I love blending design, animation, and technology to craft memorable digital products.
      </p>
      <p className="mt-4">
        My journey spans frontend development, UI/UX design, and motion graphics. I thrive on learning new tools and pushing the boundaries of what's possible on the web.
      </p>
    </motion.div>
  </motion.section>
));

export default About; 