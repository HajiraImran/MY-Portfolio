function Footer() {
  const links = ["About", "Skills", "Experience", "Projects", "Gallery", "Contact"]

  return (
    <footer className="relative z-10" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="px-6 md:px-10 py-10" style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left */}
          <div className="text-center md:text-left">
            <div className="font-extrabold text-base" style={{ fontFamily: "'Playfair Display', serif" }}>
              Hajira Imran
            </div>
            <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
              AI Engineer · Full-Stack Developer
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map(link => (
              <a key={link} href={`#${link.toLowerCase()}`}
                className="text-sm transition-colors duration-200"
                style={{ color: "var(--muted)", textDecoration: "none" }}
                onMouseOver={e => e.target.style.color = "#f0f0f4"}
                onMouseOut={e => e.target.style.color = "var(--muted)"}>
                {link}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="text-xs text-center md:text-right" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} · All rights reserved
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer