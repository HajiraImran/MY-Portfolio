import { motion } from "framer-motion"

const projects = [
  {
    icon: "🌫️",
    title: "AQI Forecasting System",
    description:
      "End-to-end serverless ML pipeline with automated retraining, real-time prediction dashboard, and SHAP explainability. Forecasts AQI over a 3-day horizon using Random Forest & Ridge Regression.",
    tech: ["Python", "Scikit-learn", "Hopsworks", "Streamlit", "GitHub Actions", "SHAP"],
    github: "https://github.com/HajiraImran/10Pearls_Project",
    live: null,
    featured: true,
  },
  {
    icon: "🧠",
    title: "Mind Fuel",
    description:
      "A React Native mobile app with Firebase integration supporting two roles (Admin & User). Features include browsing & searching computing books fetched via APIs, motivational quotes, a trivia quiz section, and full CRUD operations on books. Admins can also manage the user list.",
    tech: ["React Native", "Firebase", "Firebase Auth", "REST APIs", "Expo"],
    github: "https://github.com/HajiraImran/Mad_Project",
    live: null,
    featured: false,
  },
  {
    icon: "🏢",
    title: "FFC Employee Portal",
    description:
      "Full-stack enterprise Employee Portal built with ASP.NET 8 Blazor and Entity Framework Core during internship at Fauji Fertilizer Company. Includes role-based access control, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and IIS-based production deployment.",
    tech: ["ASP.NET 8 Blazor", "Entity Framework Core", "SSO", "MFA", "IIS", "GitHub"],
    github: "https://github.com/HajiraImran/FFCProject1",
    live: null,
    featured: false,
  },
  {
    icon: "🫀",
    title: "Electrolyte Imbalance Detection",
    description:
      "MLP-based ECG signal analysis system for detecting electrolyte imbalances using AD8232 sensor with ESP32. Combines embedded hardware with deep learning for real-time biomedical signal classification.",
    tech: ["Python", "TensorFlow", "MLP", "ESP32", "AD8232", "Embedded ML"],
    github: "https://github.com/HajiraImran/FinalYearProjectApp",
    live: null,
    featured: false,
  },
  {
    icon: "🏔️",
    title: "Highland Escapes Travelers",
    description:
      "Full MERN stack tour and travel platform built and deployed end-to-end from development to production. Includes authentication, tour management APIs, and booking workflows.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github: "https://github.com/HajiraImran/Tour_Website",
    live: "https://highlandescapestravelers.com/",
    featured: false,
  },
]

function Projects() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-28 px-6 md:px-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <span className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          Selected Work
        </span>
        <h2 className="font-extrabold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
          Projects
        </h2>
        <p className="font-light mb-12" style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "500px" }}>
          Things I've built across AI, data engineering, and full-stack development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="rounded-2xl p-7 flex flex-col transition-all duration-300"
              style={{
                background: project.featured
                  ? "linear-gradient(135deg, rgba(200,180,255,0.05), var(--surface))"
                  : "var(--surface)",
                border: `1px solid ${project.featured ? "rgba(200,180,255,0.2)" : "var(--border)"}`,
              }}
              onMouseOver={e => e.currentTarget.style.borderColor = "var(--border2)"}
              onMouseOut={e => e.currentTarget.style.borderColor = project.featured ? "rgba(200,180,255,0.2)" : "var(--border)"}
            >
              {/* Header row */}
              <div className="flex justify-between items-start mb-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(200,180,255,0.1)", border: "1px solid rgba(200,180,255,0.2)" }}>
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer"
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                      style={{ color: "var(--muted)", border: "1px solid var(--border)", textDecoration: "none" }}
                      onMouseOver={e => { e.currentTarget.style.color = "#f0f0f4"; e.currentTarget.style.borderColor = "var(--border2)" }}
                      onMouseOut={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)" }}>
                      GitHub ↗
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noreferrer"
                      className="text-xs font-medium px-3 py-1.5 rounded-lg transition-all duration-200"
                      style={{ color: "var(--muted)", border: "1px solid var(--border)", textDecoration: "none" }}
                      onMouseOver={e => { e.currentTarget.style.color = "#f0f0f4"; e.currentTarget.style.borderColor = "var(--border2)" }}
                      onMouseOut={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)" }}>
                      Live ↗
                    </a>
                  )}
                </div>
              </div>

              {project.featured && (
                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: "var(--accent)" }}>
                  Featured
                </div>
              )}

              <h3 className="font-bold text-xl mb-2.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                {project.title}
              </h3>
              <p className="text-sm font-light leading-relaxed flex-1" style={{ color: "rgba(240,240,244,0.6)" }}>
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-5">
                {project.tech.map(t => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-md"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--muted)" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

export default Projects