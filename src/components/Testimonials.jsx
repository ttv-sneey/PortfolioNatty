import { forwardRef } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Jane Doe",
    text: "Arjun is a creative genius! His attention to detail and animation skills are top-notch.",
  },
  {
    name: "John Smith",
    text: "Working with Arjun was a pleasure. He brought our vision to life with stunning visuals.",
  },
  {
    name: "Emily Lee",
    text: "Highly recommend Arjun for any web project. His work is both beautiful and functional.",
  },
];

const Testimonials = forwardRef((props, ref) => (
  <motion.section
    ref={ref}
    id="testimonials"
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
      Testimonials
    </motion.h2>
    <div className="w-full max-w-3xl flex flex-col md:flex-row gap-8">
      {testimonials.map((t, idx) => (
        <motion.div
          key={t.name}
          className="flex-1 bg-[#ffeedd]/80 dark:bg-black/40 backdrop-blur-md rounded-xl p-8 shadow-lg border border-purple-700/30"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * idx, duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-purple-100 mb-4">&ldquo;{t.text}&rdquo;</div>
          <div className="text-purple-300 font-semibold text-right">- {t.name}</div>
        </motion.div>
      ))}
    </div>
  </motion.section>
));

export default Testimonials; 