import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaProjectDiagram, FaTools, FaBriefcase, FaQuoteRight, FaEnvelope, FaHome } from "react-icons/fa";

const navLinks = [
  { label: "Home", to: "#home", icon: <FaHome /> },
  { label: "About", to: "#about", icon: <FaUser /> },
  { label: "Projects", to: "#projects", icon: <FaProjectDiagram /> },
  { label: "Skills", to: "#skills", icon: <FaTools /> },
  { label: "Experience", to: "#experience", icon: <FaBriefcase /> },
  { label: "Testimonials", to: "#testimonials", icon: <FaQuoteRight /> },
  { label: "Contact", to: "#contact", icon: <FaEnvelope /> },
];

export default function NavBar({ onNavigate, activeSection }) {
  const handleClick = (label, e) => {
    e.preventDefault();
    if (onNavigate) onNavigate(label);
  };

  return (
    <motion.nav
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-black/40 backdrop-blur-md rounded-full px-2 py-2 flex gap-1 sm:gap-2 md:gap-4 shadow-lg border border-purple-700/20 max-w-full overflow-x-auto scrollbar-thin scrollbar-thumb-purple-400/30 scrollbar-track-transparent text-white"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ WebkitOverflowScrolling: "touch" }}
    >
      {navLinks.map(link => {
        const isActive = activeSection === link.label;
        return (
          <div key={link.label} className="relative flex">
            <a
              href={link.to}
              className={`flex items-center gap-1 px-2 sm:px-3 py-1 rounded-full font-medium transition text-xs sm:text-sm z-10 ${
                isActive
                  ? "text-white"
                  : "text-purple-200 hover:text-white hover:bg-purple-700/60"
              }`}
              onClick={e => handleClick(link.label, e)}
              style={{ position: "relative" }}
            >
              {link.icon}
              <span className="hidden xs:inline sm:inline">{link.label}</span>
            </a>
            {isActive && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 rounded-full bg-purple-700/80 shadow-lg z-0"
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3,
                }}
              />
            )}
          </div>
        );
      })}
    </motion.nav>
  );
} 