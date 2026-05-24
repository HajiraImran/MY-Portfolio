import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Gallery from "./components/Gallery"
import Footer from "./components/Footer"

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight <= 0) return
      setScrollProgress((window.scrollY / totalHeight) * 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="bg-[#060608] min-h-screen text-white relative overflow-x-hidden scroll-smooth selection:bg-white selection:text-black" style={{ fontFamily: "'DM Sans', sans-serif" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap');
        :root {
          --accent: #c8b4ff;
          --accent2: #7ee8c4;
          --accent3: #f0a0d0;
          --surface: #0e0e12;
          --surface2: #14141a;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.14);
          --muted: #7a7a8a;
        }
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060608; }
        ::-webkit-scrollbar-thumb { background: rgba(200,180,255,0.3); border-radius: 2px; }
      `}</style>

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-50" style={{ background: "rgba(255,255,255,0.05)" }}>
        <div
          className="h-full transition-all duration-150"
          style={{ width: `${scrollProgress}%`, background: "linear-gradient(90deg, #c8b4ff, #7ee8c4)" }}
        />
      </div>

      {/* Ambient Glow Orbs */}
      <div className="fixed -top-32 -left-32 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 70%)" }} />
      <div className="fixed -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{ background: "radial-gradient(circle, rgba(126,232,196,0.12) 0%, transparent 70%)" }} />
      <div className="fixed pointer-events-none z-0"
        style={{ top: "50%", left: "60%", width: "400px", height: "400px", background: "radial-gradient(circle, rgba(240,160,208,0.08) 0%, transparent 70%)" }} />

      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-6 md:px-10 py-5 fixed top-0 left-0 right-0 z-50 border-b"
        style={{ backdropFilter: "blur(20px)", background: "rgba(6,6,8,0.75)", borderColor: "var(--border)" }}>

        <a href="#hero" className="text-xl font-extrabold tracking-tight"
          style={{ fontFamily: "'Playfair Display', serif", background: "linear-gradient(135deg, #f0f0f4 40%, #c8b4ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
          HI.
        </a>

        <ul className="hidden md:flex gap-8" style={{ listStyle: "none" }}>
          {["About", "Skills", "Experience", "Projects", "Gallery", "Contact"].map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`}
                className="transition-colors duration-200 text-sm font-medium"
                style={{ color: "var(--muted)", textDecoration: "none" }}
                onMouseOver={e => e.target.style.color = "#f0f0f4"}
                onMouseOut={e => e.target.style.color = "var(--muted)"}>
                {item}
              </a>
            </li>
          ))}
        </ul>

        <a href="/gallery/Hajira_Imran_CV-1.pdf" target="_blank"
          className="hidden md:inline-flex items-center text-sm font-medium px-4 py-2 rounded-full transition-all duration-200"
          style={{ background: "rgba(200,180,255,0.1)", border: "1px solid rgba(200,180,255,0.25)", color: "var(--accent)", textDecoration: "none" }}
          onMouseOver={e => e.currentTarget.style.background = "rgba(200,180,255,0.18)"}
          onMouseOut={e => e.currentTarget.style.background = "rgba(200,180,255,0.1)"}>
          Resume ↗
        </a>

        <button className="md:hidden text-2xl text-white bg-transparent border-none cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        {menuOpen && (
          <div className="absolute top-[70px] left-4 right-4 rounded-2xl p-6 flex flex-col gap-5 md:hidden z-50 shadow-2xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border2)" }}>
            {["About", "Skills", "Experience", "Projects", "Gallery", "Contact"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{ color: "var(--muted)", textDecoration: "none", fontSize: "1rem", fontWeight: 500 }}
                onMouseOver={e => e.target.style.color = "#f0f0f4"}
                onMouseOut={e => e.target.style.color = "var(--muted)"}>
                {item}
              </a>
            ))}
            <a href="/gallery/Hajira_Imran_CV-1.pdf" target="_blank"
              style={{ color: "var(--accent)", textDecoration: "none", fontSize: "1rem", fontWeight: 500 }}>
              Download Resume ↗
            </a>
          </div>
        )}
      </nav>

      {/* HERO */}
      <motion.section
        id="hero"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full min-h-screen flex flex-col justify-center pt-32 pb-20"
      >
      <div className="w-full px-6 md:px-10" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Available badge */}
        <div className="inline-flex items-center gap-2 mb-7 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
          style={{ background: "rgba(126,232,196,0.08)", border: "1px solid rgba(126,232,196,0.2)", color: "var(--accent2)", width: "fit-content" }}>
          <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "var(--accent2)" }} />
          Available for opportunities
        </div>

        <h1 className="font-extrabold leading-none mb-5"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 8vw, 6.5rem)", letterSpacing: "-0.01em" }}>
          Hajira<br />
          <span style={{ background: "linear-gradient(135deg, #c8b4ff 0%, #f0a0d0 50%, #7ee8c4 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Imran
          </span>
        </h1>

        <p className="mb-4 font-light" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "var(--muted)", letterSpacing: "0.01em" }}>
          AI Engineer &nbsp;·&nbsp; Full-Stack Developer &nbsp;·&nbsp; ML Engineer
        </p>

        <p className="mb-10 font-light leading-relaxed" style={{ maxWidth: "580px", color: "rgba(240,240,244,0.6)", fontSize: "1.05rem" }}>
          BS Computer Science graduate with hands-on experience in machine learning, data engineering,
          and full-stack development. Seeking a full-time role in Data Science, ML Engineering, or Full-Stack Development.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#projects"
            className="px-7 py-3 rounded-xl font-semibold text-base transition-all duration-200"
            style={{ background: "#f0f0f4", color: "#060608", textDecoration: "none" }}
            onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(200,180,255,0.2)" }}
            onMouseOut={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "" }}>
            View My Work
          </a>
          <a href="#contact"
            className="px-7 py-3 rounded-xl font-medium text-base transition-all duration-200"
            style={{ background: "transparent", color: "#f0f0f4", border: "1px solid var(--border2)", textDecoration: "none" }}
            onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.transform = "translateY(-2px)" }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.transform = "" }}>
            Get in Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-10 mt-16 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          {[
            { num: "3.88", label: "CGPA / 4.0" },
            { num: "3×", label: "Industry Internships" },
            { num: "5+", label: "Projects Built" },
            { num: "5+", label: "Years Coding" },
          ].map(s => (
            <div key={s.label}>
              <div className="font-extrabold" style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", letterSpacing: "-0.01em" }}>{s.num}</div>
              <div className="text-xs font-semibold tracking-widest uppercase mt-1" style={{ color: "var(--muted)" }}>{s.label}</div>
            </div>
          ))}
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