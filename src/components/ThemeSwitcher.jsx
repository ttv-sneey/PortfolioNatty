import { motion, AnimatePresence } from "framer-motion";

export default function ThemeSwitcher({ dark, setDark }) {
  function toggleTheme() {
    setDark(d => !d);
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 bg-purple-700 text-white p-3 rounded-full shadow-lg hover:bg-purple-800 transition"
      aria-label="Toggle theme"
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={dark ? "moon" : "sun"}
          initial={{ rotate: 90, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: -90, scale: 0.7, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {dark ? "🌙" : "☀️"}
        </motion.span>
      </AnimatePresence>
    </button>
  );
} 