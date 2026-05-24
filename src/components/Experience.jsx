import { motion } from "framer-motion"

const experience = [
  {
    role: "Data Science Intern",
    company: "10Pearls",
    period: "Dec 2025 – Feb 2026",
    points: [
      "Built a serverless ML pipeline to forecast AQI (3-day horizon) using automated API data ingestion.",
      "Trained and evaluated Random Forest & Ridge Regression models; tracked RMSE/R² metrics; managed features and models via Hopsworks feature store.",
      "Deployed a Streamlit application for real-time AQI predictions with SHAP-based model explainability.",
    ],
  },
  {
    role: "Data Analyst Associate Intern",
    company: "Excelerate",
    period: "Sep 2025 – Oct 2025",
    points: [
      "Validated and standardized Outreach, Applicant, and Campaign datasets using PostgreSQL.",
      "Performed data quality checks including record counts, duplicate detection, and business rule validation.",
      "Built Looker Studio dashboards to monitor KPIs including connectivity rates and agent performance.",
    ],
  },
  {
    role: "BTT Development Team Intern",
    company: "Fauji Fertilizer Company (FFC)",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Contributed to a full-stack Employee Portal built with ASP.NET 8 Blazor and Entity Framework Core.",
      "Implemented Single Sign-On (SSO) and Multi-Factor Authentication (MFA) to strengthen enterprise security.",
      "Managed GitHub version control and handled IIS-based production deployment.",
    ],
  },

  {
    role: "Machine Learning Intern",
    company: "Rhombix Technologies",
    period: "April 2025 – July 2025",
    points: [
      "Trained various ML models on different datasets to predict outcomes and evaluate performance.",
      "Each Task involved data preprocessing, model selection, training, and evaluation using metrics.",
    ],
  },
]

function Experience() {
  return (
    <motion.section
      id="experience"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-28 px-6 md:px-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <span className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          Work History
        </span>
        <h2 className="font-extrabold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
          Experience
        </h2>
        <p className="font-light mb-14" style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "500px" }}>
          Three industry placements across AI, analytics, and enterprise development.
        </p>

        {/* Timeline */}
        <div className="relative pl-6" style={{ borderLeft: "1px solid var(--border)" }}>
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Dot */}
              <div className="absolute rounded-full"
                style={{
                  left: "-1.6rem",
                  top: "6px",
                  width: "10px",
                  height: "10px",
                  background: "var(--accent)",
                  boxShadow: "0 0 12px rgba(200,180,255,0.5)",
                }} />

              <div className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: "var(--accent2)" }}>
                {exp.period}
              </div>
              <h3 className="font-bold text-xl mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
                {exp.role}
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>{exp.company}</p>

              <ul className="space-y-2.5">
                {exp.points.map((point, i) => (
                  <li key={i} className="flex gap-3 text-sm font-light leading-relaxed"
                    style={{ color: "rgba(240,240,244,0.65)" }}>
                    <span className="mt-0.5 flex-shrink-0 text-xs" style={{ color: "var(--accent)" }}>↳</span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  )
}

export default Experience