import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const [dark, setDark] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");
  const [highlighted, setHighlighted] = useState("");
  const sectionRefs = {
    Home: useRef(null),
    About: useRef(null),
    Projects: useRef(null),
    Skills: useRef(null),
    Experience: useRef(null),
    Testimonials: useRef(null),
    Contact: useRef(null),
  };

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  // Scrollspy effect
  useEffect(() => {
    const handleScroll = () => {
      const sectionOrder = [
        "Home",
        "About",
        "Projects",
        "Skills",
        "Experience",
        "Testimonials",
        "Contact",
      ];
      let current = "Home";
      for (const key of sectionOrder) {
        const ref = sectionRefs[key];
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.3) {
            current = key;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionRefs]);

  const scrollToSection = (section) => {
    const ref = sectionRefs[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
      setHighlighted(section);
      setTimeout(() => setHighlighted(""), 1200);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      {/* Blurred, animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute w-96 h-96 bg-purple-500 opacity-30 rounded-full blur-3xl top-[-10%] left-[-10%] animate-blob1" />
        <div className="absolute w-80 h-80 bg-indigo-400 opacity-20 rounded-full blur-2xl bottom-[-10%] right-[-10%] animate-blob2" />
      </div>
      <NavBar onNavigate={scrollToSection} activeSection={activeSection} />
      {/* Landing Section */}
      <section ref={sectionRefs.Home} id="home" className="w-full min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-purple-500 opacity-20 rounded-full blur-2xl pointer-events-none"
          style={{ top: "-4rem", left: "-4rem" }}
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 0] }}
          transition={{ repeat: Infinity, duration: 16, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-56 h-56 bg-indigo-400 opacity-10 rounded-full blur-xl pointer-events-none"
          style={{ bottom: "-2rem", right: "-2rem" }}
          animate={{ scale: [1, 1.05, 1], rotate: [0, -180, 0] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        />
        <motion.div
          className="z-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-extrabold text-white mb-4 drop-shadow-lg"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          >
            Arjun Natt
          </motion.h1>
          <motion.h2
            className="text-xl md:text-3xl text-purple-200 font-medium mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Creative Developer & Designer
          </motion.h2>
          <motion.p
            className="text-lg text-white/80 max-w-xl text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            I build beautiful, interactive web experiences with a passion for animation, design, and technology.
          </motion.p>
          <motion.a
            href="#projects"
            className="px-8 py-3 bg-purple-600 text-white rounded-full font-semibold shadow-lg hover:bg-purple-700 transition"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
          >
            See My Work
          </motion.a>
        </motion.div>
      </section>

      {/* Animated Sections */}
      <About ref={sectionRefs.About} highlight={highlighted === "About"} />
      <Projects ref={sectionRefs.Projects} highlight={highlighted === "Projects"} />
      <Skills ref={sectionRefs.Skills} highlight={highlighted === "Skills"} />
      <Experience ref={sectionRefs.Experience} highlight={highlighted === "Experience"} />
      <Testimonials ref={sectionRefs.Testimonials} highlight={highlighted === "Testimonials"} />
      <Contact ref={sectionRefs.Contact} highlight={highlighted === "Contact"} />
    </div>
  );
}

export default App;
