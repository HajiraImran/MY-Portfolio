import { motion } from "framer-motion"

const skillCategories = [
  {
    label: "Machine Learning & AI",
    color: "#c8b4ff",
    skills: ["Python", "Scikit-learn", "TensorFlow", "PyTorch", "CNNs", "ANNs", "LSTM", "SHAP", "LIME", "EDA"],
  },
  {
    label: "Full-Stack Development",
    color: "#7ee8c4",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "ASP.NET 8 Blazor", "Entity Framework Core", "Flask", "FastAPI", "Streamlit"],
  },
  {
    label: "Data Engineering",
    color: "#f0a0d0",
    skills: ["Hopsworks", "PostgreSQL", "MS SQL Server", "MongoDB", "AWS", "SQL Validation", "Looker Studio"],
  },
  {
    label: "DevOps & Tools",
    color: "#ffd97d",
    skills: ["GitHub Actions", "Git", "IIS Deployment", "Linux", "Streamlit", "Flask", "FastAPI"],
  },
  {
    label: "Programming Languages",
    color: "#7eb8f0",
    skills: ["Python", "JavaScript", "C++", "Java (OOP)", "PHP", "Assembly Language"],
  },
]

function Skills() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-28 px-6 md:px-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <span className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          Technical Expertise
        </span>
        <h2 className="font-extrabold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
          Skills
        </h2>
        <p className="font-light mb-12" style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "500px" }}>
          A full-spectrum toolkit from model training to production deployment.
        </p>

        {skillCategories.map((cat) => (
          <div key={cat.label} className="mb-10">
            <div className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: "var(--muted)" }}>
              {cat.label}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: si * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-2.5 px-4 py-3.5 rounded-xl cursor-default transition-all duration-200"
                  style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
                  onMouseOver={e => e.currentTarget.style.borderColor = "var(--border2)"}
                  onMouseOut={e => e.currentTarget.style.borderColor = "var(--border)"}
                >
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                  <span className="text-sm font-medium" style={{ color: "#f0f0f4" }}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </motion.section>
  )
}

export default Skills