import { motion } from "framer-motion"

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-28 px-6 md:px-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <span className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          Who I am
        </span>
        <h2 className="font-extrabold mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
          About Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mt-12 items-start">

          {/* LEFT — Text */}
          <div>
            <div className="space-y-5 font-light leading-relaxed mb-8" style={{ color: "rgba(240,240,244,0.65)", fontSize: "1.05rem" }}>
              <p>
                I did  BS Computer Science student from Riphah International University (CGPA: 3.88/4.00)
                with hands-on experience in machine learning, data engineering, and full-stack development.
              </p>
              <p>
                I've completed 3 industry internships across data science, data analytics, and enterprise
                development — building and deploying end-to-end ML pipelines, MERN-based applications,
                and signal processing systems.
              </p>
              <p>
                I'm seeking a full-time role in Data Science, ML Engineering, or Full-Stack Development
                where I can apply my skills to real-world, production-level problems.
              </p>
            </div>

            {/* Contact quick links */}
            <div className="flex gap-3 flex-wrap">
              {[
                { label: "GitHub ↗", href: "https://github.com/HajiraImran" },
                { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/hajira-imran-861837354" },
                { label: "Email ↗", href: "mailto:hajiraimran900@gmail.com" },
              ].map(link => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  className="text-sm font-medium px-4 py-1.5 rounded-lg transition-all duration-200"
                  style={{ color: "var(--muted)", border: "1px solid var(--border)", textDecoration: "none" }}
                  onMouseOver={e => { e.currentTarget.style.color = "#f0f0f4"; e.currentTarget.style.borderColor = "var(--border2)" }}
                  onMouseOut={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)" }}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT — Card */}
          <div className="rounded-2xl p-8 relative overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))" }} />

            <div className="space-y-7">

              {/* Education */}
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>Education</div>
                <div className="font-bold text-lg mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>BS Computer Science</div>
                <div className="text-sm mb-1" style={{ color: "var(--muted)" }}>Riphah International University, Islamabad</div>
                <div className="text-xs mb-2" style={{ color: "var(--muted)" }}>Sep 2022 – May 2026</div>
                <span className="inline-block text-xs font-semibold px-3 py-1 rounded-md"
                  style={{ background: "rgba(126,232,196,0.1)", border: "1px solid rgba(126,232,196,0.2)", color: "var(--accent2)" }}>
                  CGPA 3.88 / 4.00
                </span>
                <p className="text-xs mt-2 font-light" style={{ color: "var(--muted)" }}>
                  FYP: Real-Time Electrolytes Imbalance Detection using ECG Signals (MLP + embedded hardware)
                </p>
              </div>

              {/* Contact */}
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>Contact</div>
                <div className="text-sm space-y-1 font-light" style={{ color: "rgba(240,240,244,0.7)" }}>
                  <div>📧 hajiraimran900@gmail.com</div>
                  <div>📞 (+92) 308 9755389</div>
                  <div>📍 Islamabad, Pakistan</div>
                </div>
              </div>

              {/* Specializations */}
              <div>
                <div className="text-xs font-semibold tracking-widest uppercase mb-2" style={{ color: "var(--muted)" }}>Seeking Roles In</div>
                <div className="flex flex-wrap gap-2">
                  {["Data Science", "ML Engineering", "Full-Stack Dev"].map(tag => (
                    <span key={tag} className="text-xs font-semibold px-3 py-1 rounded-md"
                      style={{ background: "rgba(200,180,255,0.08)", border: "1px solid rgba(200,180,255,0.2)", color: "var(--accent)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default About