import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const galleryItems = [
  {
    project: "Mind Fuel",
    caption: "Mind fule mobile app splash screen",
    image: "/gallery/11.jpeg",
    type: "mobile",
  },

  {
    project: "Mind Fuel",
    caption: "login screen",
    image: "/gallery/mlogin.jpeg",
    type: "mobile",
  },
  {
    project: "Mind Fuel",
    caption: "Admin dashboard",
    image: "/gallery/12.jpeg",
    type: "mobile",
  },
  
  {
    project: "Mind Fuel",
    caption: "Adding a book to the reading list with personalized recommendations",
    image: "/gallery/13.jpeg",
    type: "mobile",
  },

  {
    project: "Mind Fuel",
    caption: "Books recommendation screen with personalized suggestions",
    image: "/gallery/122.jpeg",
    type: "mobile",
  },

  {
    project: "Trilyte",
    caption: "Electrolytes Results — predicted imbalances from ECG signals",
    image: "/gallery/ecg-output.jpeg",
    type: "mobile",
  },

  {
    project: "Trilyte",
    caption: "  Trilyte mobile app splash screen",
    image: "/gallery/T1.jpeg",
    type: "mobile",
  },

  {
    project: "Trilyte",
    caption: "ECG capture screen with live signal visualization",
    image: "/gallery/t2.jpeg",
    type: "mobile",
  },

  

  
  {
    project: "FFC Employee Portal",
    caption: "Employee portal dashboard showing key metrics and insights",
    image: "/gallery/my33.png",
    type: "web",
  },
  {
    project: "FFC Employee Portal",
    caption: "Dashboard of the system",
    image: "/gallery/myy3.png",
    type: "web",
  },
  {
    project: "Highland Escapes Travelers",
    caption: "Tour listings page",
    image: "/gallery/myyy4.PNG",
    type: "web",
  },
  {
    project: "Highland Escapes Travelers",
    caption: "Home page with dynamic tour search",
    image: "/gallery/myyy2.PNG",
    type: "web",
  },
{
    project: "Highland Escapes Travelers",
    caption: "Booking workflow",
    image: "/gallery/tour1.PNG",
    type: "web",
  },

  {
    project: "Highland Escapes Travelers",
    caption: "Home page with dynamic tour search",
    image: "/gallery/tour2.PNG",
    type: "web",
  },



  {
    project: "Highland Escapes Travelers",
    caption: "Home page with dynamic tour search",
    image: "/gallery/myyy1.PNG",
    type: "web",
  },
]

const allProjects = ["All", ...Array.from(new Set(galleryItems.map(i => i.project)))]

function Gallery() {
  const [active, setActive] = useState("All")
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === "All"
    ? galleryItems
    : galleryItems.filter(i => i.project === active)

  const col1 = filtered.filter((_, i) => i % 3 === 0)
  const col2 = filtered.filter((_, i) => i % 3 === 1)
  const col3 = filtered.filter((_, i) => i % 3 === 2)

  return (
    <motion.section
      id="gallery"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full py-28 px-6 md:px-10"
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Header */}
        <span className="block text-xs font-semibold tracking-widest uppercase mb-3"
          style={{ color: "var(--accent)" }}>
          Visual Showcase
        </span>
        <h2 className="font-extrabold mb-3"
          style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", letterSpacing: "-0.01em" }}>
          Gallery
        </h2>
        <p className="font-light mb-10"
          style={{ color: "var(--muted)", fontSize: "1.05rem", maxWidth: "500px" }}>
          Screenshots from my projects — dashboards, mobile screens, and web apps.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {allProjects.map(proj => (
            <button
              key={proj}
              onClick={() => setActive(proj)}
              className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200"
              style={{
                background: active === proj ? "var(--accent)" : "var(--surface)",
                color: active === proj ? "#060608" : "var(--muted)",
                border: `1px solid ${active === proj ? "var(--accent)" : "var(--border)"}`,
                cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif",
              }}
              onMouseOver={e => { if (active !== proj) e.currentTarget.style.borderColor = "var(--border2)" }}
              onMouseOut={e => { if (active !== proj) e.currentTarget.style.borderColor = "var(--border)" }}
            >
              {proj}
            </button>
          ))}
        </div>

        {/* Masonry Grid — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 items-start">
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex flex-col gap-4">
              {col.map((item, idx) => {
                const globalIdx = filtered.indexOf(item)
                return (
                  <motion.div
                    key={item.image}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -3 }}
                    onClick={() => setLightbox(globalIdx)}
                    className="rounded-2xl overflow-hidden cursor-pointer group relative"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    {/* Image container */}
                    <div className="relative overflow-hidden">
                      {item.type === "mobile" ? (
                        // Phone frame for mobile screenshots
                        <div className="flex items-center justify-center py-4 px-4"
                          style={{ background: "var(--surface2)", minHeight: "220px" }}>
                          <div className="relative rounded-2xl overflow-hidden"
                            style={{
                              width: "110px",
                              border: "4px solid #2a2a35",
                              boxShadow: "0 0 0 1px rgba(255,255,255,0.06), 0 16px 32px rgba(0,0,0,0.6)",
                            }}>
                            <img
                              src={item.image}
                              alt={item.caption}
                              className="w-full block transition-transform duration-500 group-hover:scale-105"
                              onError={e => {
                                e.target.style.display = "none"
                                e.target.parentNode.innerHTML += `<div style="min-height:200px;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0.25"><div style="font-size:1.5rem">📱</div><div style="font-size:11px;margin-top:4px;color:#7a7a8a;text-align:center;padding:0 8px">Add image</div></div>`
                              }}
                            />
                          </div>
                        </div>
                      ) : (
                        // Normal web screenshot
                        <div className="w-full relative overflow-hidden"
                          style={{ background: "var(--surface2)", minHeight: "140px" }}>
                          <img
                            src={item.image}
                            alt={item.caption}
                            className="w-full block object-cover transition-transform duration-500 group-hover:scale-105"
                            onError={e => {
                              e.target.style.display = "none"
                              e.target.parentNode.innerHTML += `<div style="min-height:140px;display:flex;flex-direction:column;align-items:center;justify-content:center;opacity:0.25"><div style="font-size:1.5rem">🖥️</div><div style="font-size:11px;margin-top:4px;color:#7a7a8a">Add image</div></div>`
                            }}
                          />
                        </div>
                      )}

                      {/* Hover overlay — shared */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: "rgba(6,6,8,0.55)" }}>
                        <div className="text-sm font-semibold px-4 py-2 rounded-full"
                          style={{ background: "rgba(200,180,255,0.15)", border: "1px solid rgba(200,180,255,0.3)", color: "var(--accent)" }}>
                          View ↗
                        </div>
                      </div>
                    </div>

                    {/* Caption */}
                    <div className="px-4 py-3" style={{ background: "var(--surface)" }}>
                      <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--accent)" }}>
                        {item.project}
                      </div>
                      <div className="text-sm font-light" style={{ color: "rgba(240,240,244,0.7)" }}>
                        {item.caption}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10"
            style={{ background: "rgba(6,6,8,0.92)", backdropFilter: "blur(12px)" }}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              className="relative rounded-2xl overflow-hidden"
              style={{
                maxWidth: filtered[lightbox]?.type === "mobile" ? "400px" : "900px",
                width: "100%",
                border: "1px solid var(--border2)"
              }}
            >
              <img
                src={filtered[lightbox]?.image}
                alt={filtered[lightbox]?.caption}
                className="w-full object-contain"
                style={{ maxHeight: "75vh", background: "var(--surface)" }}
              />
              {/* Caption bar */}
              <div className="px-5 py-3 flex justify-between items-center"
                style={{ background: "var(--surface)" }}>
                <div>
                  <div className="text-xs font-semibold mb-0.5" style={{ color: "var(--accent)" }}>
                    {filtered[lightbox]?.project}
                  </div>
                  <div className="text-sm font-light" style={{ color: "rgba(240,240,244,0.7)" }}>
                    {filtered[lightbox]?.caption}
                  </div>
                </div>
                <button onClick={() => setLightbox(null)}
                  className="text-xl font-light ml-4 flex-shrink-0"
                  style={{ color: "var(--muted)", background: "none", border: "none", cursor: "pointer" }}>
                  ✕
                </button>
              </div>

              {/* Prev / Next */}
              {lightbox > 0 && (
                <button
                  onClick={e => { e.stopPropagation(); setLightbox(lightbox - 1) }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(6,6,8,0.7)", border: "1px solid var(--border2)", color: "#f0f0f4", cursor: "pointer" }}>
                  ←
                </button>
              )}
              {lightbox < filtered.length - 1 && (
                <button
                  onClick={e => { e.stopPropagation(); setLightbox(lightbox + 1) }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: "rgba(6,6,8,0.7)", border: "1px solid var(--border2)", color: "#f0f0f4", cursor: "pointer" }}>
                  →
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.section>
  )
}

export default Gallery