import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import {
  Brain,
  Code2,
  Database,
  Wrench,
  Terminal,
  Cpu,
} from "lucide-react"

const skillCategories = [
  {
    label: "Machine Learning & AI",
    color: "#c8b4ff",
    icon: Brain,
    skills: [
      "Python",
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "CNNs",
      "ANNs",
      "LSTM",
      "SHAP",
      "EDA",
      "Deep Learning",
      "Computer Vision",
    ],
  },
  {
    label: "Full-Stack Development",
    color: "#7ee8c4",
    icon: Code2,
    skills: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "ASP.NET 8 Blazor",
      "Entity Framework Core",
      "REST APIs",
      "JavaScript (ES6+)",
      "HTML/CSS",
    ],
  },
  {
    label: "Data Engineering",
    color: "#f0a0d0",
    icon: Database,
    skills: [
      "Hopsworks",
      "PostgreSQL",
      "MS SQL Server",
      "AWS",
      "SQL Validation",
      "Looker Studio",
      "Feature Engineering",
    ],
  },
  {
    label: "DevOps & Deployment",
    color: "#ffd97d",
    icon: Wrench,
    skills: [
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Git",
      "Linux",
      "Nginx",
      "Vercel",
      "Firebase",
      "Streamlit",
      "Hugging Face Spaces",
      "IIS Deployment",
    ],
  },
  {
    label: "Embedded Systems & IoT",
    color: "#ff8a65",
    icon: Cpu,
    skills: [
      "ESP32 Microcontroller",
      "Arduino",
      "AD8232 ECG Sensor",
      "Ultrasonic (Sonar) Sensors",
      "IoT Systems",
      "Sensor Data Acquisition",
      "Embedded C / Arduino Programming",
      "Hardware Integration",
    ],
  },
  {
    label: "Programming Languages",
    color: "#7eb8f0",
    icon: Terminal,
    skills: ["Python", "JavaScript", "C++", "Java (OOP)", "PHP"],
  },
]

// 3D Card Component
function SkillCard({ skill, color }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useSpring(useTransform(y, [-50, 50], [10, -10]), {
    stiffness: 150,
    damping: 15,
  })

  const rotateY = useSpring(useTransform(x, [-50, 50], [-10, 10]), {
    stiffness: 150,
    damping: 15,
  })

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xVal = e.clientX - rect.left - rect.width / 2
    const yVal = e.clientY - rect.top - rect.height / 2
    x.set(xVal)
    y.set(yVal)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      whileHover={{ scale: 1.05 }}
      className="relative h-[95px] rounded-2xl cursor-pointer"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 transition"
        style={{
          background: `radial-gradient(circle at center, ${color}25, transparent 70%)`,
        }}
      />

      {/* Card */}
      <div
        className="relative h-full w-full rounded-2xl border backdrop-blur-xl flex items-center gap-3 px-4"
        style={{
          background: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {/* Left accent bar */}
        <div
          className="w-1 h-10 rounded-full"
          style={{ background: color }}
        />

        {/* Skill text */}
        <div>
          <p className="text-white text-sm font-medium">{skill}</p>
          <div
            className="w-12 h-[2px] mt-1 rounded-full"
            style={{ background: color }}
          />
        </div>

        {/* Shine effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 hover:opacity-40 transition"
          style={{
            background:
              "linear-gradient(120deg, transparent, rgba(255,255,255,0.08), transparent)",
          }}
        />
      </div>
    </motion.div>
  )
}

// Main Section
function Skills() {
  return (
<section id="skills" className="w-full py-24 px-6 md:px-10 bg-[#0b0b10] text-white overflow-hidden">

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-gray-400">
            Skills Engine
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Skills & Technologies
          </h2>

          <p className="text-gray-400 mt-3 max-w-xl">
            AI, Full-Stack, Data Engineering, DevOps, and Embedded Systems — a complete engineering stack.
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-14">

          {skillCategories.map((cat) => {
            const CatIcon = cat.icon

            return (
              <div key={cat.label}>

                {/* Category Title */}
                <div className="flex items-center gap-3 mb-6">
                  <CatIcon size={18} style={{ color: cat.color }} />
                  <h3 className="text-lg font-semibold">
                    {cat.label}
                  </h3>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                  {cat.skills.map((skill) => (
                    <SkillCard
                      key={skill}
                      skill={skill}
                      color={cat.color}
                    />
                  ))}
                </div>

              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default Skills