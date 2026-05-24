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
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-purple-300">
            Who I am
          </span>

          <h2
            className="mt-3 font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
            }}
          >
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div className="space-y-6 text-[1.05rem] leading-relaxed text-gray-400">

            <p>
              I am a BS Computer Science graduate from Riphah International University (CGPA: 3.88/4.00)
              with hands-on experience in machine learning, data engineering, full-stack development,
              and embedded systems.
            </p>

            <p>
              I have completed 3 industry internships across data science, analytics, and enterprise
              development — working on ML pipelines, MERN applications, and hardware-integrated systems.
            </p>

            <p>
              I am actively seeking opportunities in Data Science, ML Engineering, or Full-Stack Development
              where I can contribute to real-world production systems.
            </p>

            {/* Social Links */}
            <div className="flex flex-wrap gap-3 pt-4">
              {[
                { label: "GitHub ↗", href: "https://github.com/HajiraImran" },
                { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/hajira-imran-861837354" },
                { label: "Email ↗", href: "mailto:hajiraimran900@gmail.com" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-sm rounded-xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    color: "#cfcfd6",
                    background: "rgba(255,255,255,0.02)",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(200,180,255,0.3)")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)")
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE - PREMIUM CARD */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative rounded-3xl p-8 overflow-hidden border backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015))",
              borderColor: "rgba(255,255,255,0.08)",
            }}
          >
            {/* Top glow line */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px]"
              style={{
                background:
                  "linear-gradient(90deg, #c8b4ff, #7ee8c4, #f0a0d0)",
              }}
            />

            <div className="space-y-8">

              {/* Education */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Education
                </div>

                <h3 className="text-lg font-semibold text-white">
                  BS Computer Science
                </h3>

                <p className="text-sm text-gray-400">
                  Riphah International University, Islamabad
                </p>

                <p className="text-xs text-gray-500 mt-1">
                  Sep 2022 – May 2026
                </p>

                <div className="mt-3 inline-block px-3 py-1 rounded-md text-xs font-semibold border"
                  style={{
                    background: "rgba(126,232,196,0.08)",
                    borderColor: "rgba(126,232,196,0.25)",
                    color: "#7ee8c4",
                  }}>
                  CGPA 3.88 / 4.00
                </div>

                <p className="text-xs text-gray-500 mt-3">
                  FYP: Real-Time Electrolytes Imbalance Detection using ECG Signals (ML + Embedded System)
                </p>
              </div>

              {/* Contact */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Contact
                </div>

                <div className="text-sm text-gray-300 space-y-1">
                  <div>📧 hajiraimran900@gmail.com</div>
                  <div>📞 (+92) 308 9755389</div>
                  <div>📍 Islamabad, Pakistan</div>
                </div>
              </div>

              {/* Goals */}
              <div>
                <div className="text-xs tracking-[0.25em] uppercase text-gray-400 mb-2">
                  Seeking Roles
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Data Science", "ML Engineering", "Full-Stack Dev"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs rounded-lg border"
                        style={{
                          background: "rgba(200,180,255,0.06)",
                          borderColor: "rgba(200,180,255,0.2)",
                          color: "#c8b4ff",
                        }}
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  )
}

export default About