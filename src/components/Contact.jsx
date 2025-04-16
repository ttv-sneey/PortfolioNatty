import { forwardRef, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SERVICE_ID = "service_4oq0esp";
const TEMPLATE_ID = "template_2tn4dqt";
const PUBLIC_KEY = "HBHsc9EJs53EGmpLO";

const Contact = forwardRef((props, ref) => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTime(new Date().toLocaleString());

    setTimeout(() => {
      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
        .then(
          (result) => {
            setSent(true);
            setLoading(false);
          },
          (error) => {
            setError("Something went wrong. Please check your form and try again.");
            setLoading(false);
            console.error(error);
          }
        );
    }, 0);
  };

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="py-24 flex flex-col items-center"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 to-indigo-400 text-transparent bg-clip-text"
        initial={false}
        animate={false}
      >
        Contact
      </motion.h2>
      <motion.div
        className="w-full max-w-lg bg-black/40 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-purple-700/30 flex flex-col gap-6 items-center"
        initial={false}
        animate={false}
      >
        <p className="text-lg text-purple-100 text-center mb-2">
          Want to work together or just say hi? <br />
          <span className="font-semibold text-purple-300">Let's connect!</span>
        </p>
        {sent ? (
          <div className="text-green-400 text-center text-lg font-semibold py-8">
            Thank you! Your message has been sent.
          </div>
        ) : (
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-4"
            autoComplete="off"
          >
            <input
              name="from_name"
              placeholder="Your Name"
              className="p-3 rounded bg-purple-900/60 text-white placeholder-purple-400 outline-none"
              required
            />
            <input
              name="reply_to"
              type="email"
              placeholder="Your Email"
              className="p-3 rounded bg-purple-900/60 text-white placeholder-purple-400 outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="p-3 rounded bg-purple-900/60 text-white placeholder-purple-400 outline-none"
              rows={4}
              required
            />
            <input type="hidden" name="time" value={time || new Date().toLocaleString()} />
            <motion.button
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-full shadow-lg transition-all text-lg flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              disabled={loading}
            >
              <FaEnvelope className="inline-block mb-1" />
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
            {error && (
              <div className="text-red-400 text-center text-sm mt-2">{error}</div>
            )}
          </form>
        )}
        <div className="mt-6 flex flex-col items-center gap-2">
          <span className="text-purple-200">Or email me directly:</span>
          <a
            href="mailto:arjunnatt56@gmail.com"
            className="text-lg font-semibold text-purple-300 hover:underline flex items-center gap-2"
          >
            <FaEnvelope /> arjunnatt56@gmail.com
          </a>
          {/* Optionally add more contact links below */}
          {/* <div className="flex gap-4 mt-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white text-2xl"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white text-2xl"><FaLinkedin /></a>
          </div> */}
        </div>
      </motion.div>
    </motion.section>
  );
});

export default Contact; 