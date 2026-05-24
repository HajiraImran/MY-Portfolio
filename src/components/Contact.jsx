import { useState } from "react"
import { motion } from "framer-motion"

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" })
  const [status, setStatus] = useState("")
  const [statusType, setStatusType] = useState("success")

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) {
      setStatusType("error")
      setStatus("Please fill in all required fields.")
      return
    }
    setStatusType("success")
    setStatus("✓ Message sent! I'll get back to you soon.")
    setForm({ name: "", email: "", subject: "", message: "" })
    setTimeout(() => setStatus(""), 5000)
  }

  const inputStyle = {
    width: "100%",
    background: "#060608",
    border: "1px solid var(--border)",
    borderRadius: "10px",
    padding: "0.75rem 1rem",
    color: "#f0f0f4",
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
  }

  const contactLinks = [
    {
      icon: "✉",
      iconBg: "rgba(200,180,255,0.1)",
      iconColor: "var(--accent)",
      label: "Email",
      value: "hajiraimran900@gmail.com",
      href: "mailto:hajiraimran900@gmail.com",
    },
    {
      icon: "📞",
      iconBg: "rgba(126,232,196,0.1)",
      iconColor: "var(--accent2)",
      label: "Phone",
      value: "(+92) 308 9755389",
      href: "tel:+923089755389",
    },
    {
      icon: "in",
      iconBg: "rgba(126,232,196,0.1)",
      iconColor: "var(--accent2)",
      label: "LinkedIn",
      value: "hajira-imran-861837354",
      href: "https://www.linkedin.com/in/hajira-imran-861837354",
    },
    {
      icon: "⌥",
      iconBg: "rgba(240,160,208,0.1)",
      iconColor: "var(--accent3)",
      label: "GitHub",
      value: "HajiraImran",
      href: "https://github.com/HajiraImran",
    },
  ]

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-28 px-6 md:px-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        <span className="block text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: "var(--accent)" }}>
          Let's Connect
        </span>
        <h2 className="font-extrabold mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
          Get In Touch
        </h2>
        <p className="font-light mb-14" style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "500px" }}>
          Open to full-time roles in Data Science, ML Engineering, and Full-Stack Development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

          {/* LEFT — Contact links */}
          <div className="flex flex-col gap-3">
            {contactLinks.map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                className="flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200"
                style={{ background: "var(--surface)", border: "1px solid var(--border)", textDecoration: "none" }}
                onMouseOver={e => { e.currentTarget.style.borderColor = "var(--border2)"; e.currentTarget.style.transform = "translateX(4px)" }}
                onMouseOut={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.transform = "" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold flex-shrink-0"
                  style={{ background: link.iconBg, color: link.iconColor }}>
                  {link.icon}
                </div>
                <div>
                  <div className="text-xs font-semibold tracking-widest uppercase mb-0.5" style={{ color: "var(--muted)" }}>
                    {link.label}
                  </div>
                  <div className="text-sm font-medium" style={{ color: "#f0f0f4" }}>
                    {link.value}
                  </div>
                </div>
              </a>
            ))}

            {/* Location card */}
            <div className="px-5 py-4 rounded-2xl mt-1"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
              <div className="text-xs font-semibold tracking-widest uppercase mb-1.5" style={{ color: "var(--muted)" }}>
                Based in
              </div>
              <div className="font-semibold text-base">Islamabad, Pakistan 🇵🇰</div>
              <div className="text-sm font-light mt-0.5" style={{ color: "var(--muted)" }}>Open to remote &amp; on-site roles</div>
            </div>
          </div>

          {/* RIGHT — Form */}
          <div className="rounded-2xl p-7 relative overflow-hidden"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: "linear-gradient(90deg, var(--accent2), var(--accent))" }} />

            <div className="grid grid-cols-2 gap-3 mb-3">
              <input name="name" value={form.name} onChange={handleChange}
                type="text" placeholder="Your name" style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(200,180,255,0.4)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"} />
              <input name="email" value={form.email} onChange={handleChange}
                type="email" placeholder="Your email" style={inputStyle}
                onFocus={e => e.target.style.borderColor = "rgba(200,180,255,0.4)"}
                onBlur={e => e.target.style.borderColor = "var(--border)"} />
            </div>

            <input name="subject" value={form.subject} onChange={handleChange}
              type="text" placeholder="Subject" style={{ ...inputStyle, marginBottom: "0.75rem" }}
              onFocus={e => e.target.style.borderColor = "rgba(200,180,255,0.4)"}
              onBlur={e => e.target.style.borderColor = "var(--border)"} />

            <textarea name="message" value={form.message} onChange={handleChange}
              rows={5} placeholder="Your message..."
              style={{ ...inputStyle, resize: "none", marginBottom: "1rem" }}
              onFocus={e => e.target.style.borderColor = "rgba(200,180,255,0.4)"}
              onBlur={e => e.target.style.borderColor = "var(--border)"} />

            <button onClick={handleSubmit}
              className="w-full py-3 rounded-xl font-semibold text-base transition-all duration-200"
              style={{ background: "#f0f0f4", color: "#060608", border: "none", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(200,180,255,0.2)" }}
              onMouseOut={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "" }}>
              Send Message
            </button>

            {status && (
              <p className="text-center text-sm mt-3" style={{ color: statusType === "error" ? "#ff6b6b" : "var(--accent2)" }}>
                {status}
              </p>
            )}
          </div>

        </div>
      </div>
    </motion.section>
  )
}

export default Contact