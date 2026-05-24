import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Award, Briefcase, FolderGit2, Code2 } from "lucide-react"

import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function useCounter(target, duration = 1200) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    let start = 0
    const step = target / (duration / 16)

    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setValue(target)
        clearInterval(timer)
      } else {
        setValue(start)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [target, duration])

  return value
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  const cgpa = useCounter(3.88)
  const internships = useCounter(3)
  const projects = useCounter(5)
  const years = useCounter(4)

  useEffect(() => {
    const handleScroll = () => {
      const total =
        document.documentElement.scrollHeight - window.innerHeight

      if (total > 0) {
        setScrollProgress((window.scrollY / total) * 100)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className="bg-[#060608] min-h-screen text-white relative overflow-x-hidden scroll-smooth selection:bg-white selection:text-black"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500&display=swap');

        :root {
          --accent: #c8b4ff;
          --accent2: #7ee8c4;
          --accent3: #f0a0d0;
          --surface: #0e0e12;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.14);
          --muted: #7a7a8a;
        }

        html { scroll-behavior: smooth; }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-thumb {
          background: rgba(200,180,255,0.3);
          border-radius: 2px;
        }
      `}</style>

      {/* Scroll Progress */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50 bg-white/5">
        <div
          className="h-full transition-all duration-150"
          style={{
            width: `${scrollProgress}%`,
            background: "linear-gradient(90deg, #c8b4ff, #7ee8c4)",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-10 py-5 border-b"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(6,6,8,0.75)",
          borderColor: "var(--border)",
        }}
      >
        <a
          href="#hero"
          className="text-xl font-extrabold"
          style={{
            fontFamily: "'Playfair Display', serif",
            background:
              "linear-gradient(135deg, #f0f0f4 40%, #c8b4ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          HI.
        </a>

        <ul className="hidden md:flex gap-8">
          {["About", "Skills", "Experience", "Projects", "Gallery", "Contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium transition-colors"
                  style={{ color: "var(--muted)" }}
                  onMouseOver={(e) => (e.target.style.color = "#f0f0f4")}
                  onMouseOut={(e) => (e.target.style.color = "var(--muted)")}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>

        <a
          href="/gallery/Hajira_Imran_CV-1.pdf"
          target="_blank"
          className="hidden md:inline-flex text-sm px-4 py-2 rounded-full"
          style={{
            background: "rgba(200,180,255,0.1)",
            border: "1px solid rgba(200,180,255,0.25)",
            color: "var(--accent)",
          }}
        >
          Resume ↗
        </a>

        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="absolute top-[70px] left-4 right-4 rounded-2xl p-6 flex flex-col gap-5 md:hidden z-50"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border2)",
            }}
          >
            {["About", "Skills", "Experience", "Projects", "Gallery", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  style={{ color: "var(--muted)" }}
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </nav>

      {/* HERO */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 min-h-screen flex items-center pt-32 pb-20"
      >
        <div className="w-full px-6 md:px-10 max-w-6xl mx-auto">

          <div className="mb-6 text-sm uppercase tracking-[0.3em] text-green-300">
            Available for opportunities
          </div>

          <h1
            className="font-extrabold leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 8vw, 6rem)",
            }}
          >
            Hajira{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-green-300 bg-clip-text text-transparent">
              Imran
            </span>
          </h1>

          <p className="text-gray-400 mt-4">
            AI Engineer · Full-Stack Developer · ML Engineer
          </p>

          <p className="text-gray-500 mt-6 max-w-xl">
            Building intelligent systems, scalable applications, and real-world AI solutions.
          </p>

          {/* KPI DASHBOARD */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-5">

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-5 rounded-2xl border backdrop-blur-xl bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Award className="text-purple-300 mb-3" />
              <div className="text-2xl font-bold">
                {cgpa.toFixed(2)}
              </div>
              <div className="text-xs uppercase text-gray-400 mt-1">
                CGPA / 4.0
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-5 rounded-2xl border backdrop-blur-xl bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Briefcase className="text-green-300 mb-3" />
              <div className="text-2xl font-bold">
                {Math.round(internships)}+
              </div>
              <div className="text-xs uppercase text-gray-400 mt-1">
                Internships
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-5 rounded-2xl border backdrop-blur-xl bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <FolderGit2 className="text-pink-300 mb-3" />
              <div className="text-2xl font-bold">
                {Math.round(projects)}+
              </div>
              <div className="text-xs uppercase text-gray-400 mt-1">
                Projects
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -8, scale: 1.03 }}
              className="p-5 rounded-2xl border backdrop-blur-xl bg-white/5"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <Code2 className="text-cyan-300 mb-3" />
              <div className="text-2xl font-bold">
                {Math.round(years)}+
              </div>
              <div className="text-xs uppercase text-gray-400 mt-1">
                Years Coding
              </div>
            </motion.div>

          </div>
        </div>
      </motion.section>

      {/* SECTIONS */}
      <div className="relative z-10">
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Gallery />
        <Contact />
      </div>

      <Footer />
    </div>
  )
}

export default App