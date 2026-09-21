import React, { useState } from "react";
import { Calendar, MapPin, Users, Award, X, ExternalLink, ChevronRight, Filter } from "lucide-react";
import { INITIAL_KEGIATAN } from "../services/kegiatanService";

export default function KegiatanPage() {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedKegiatan, setSelectedKegiatan] = useState(null);

  const categories = ["Semua", "Turnamen", "Latihan", "Pelatihan"];

  const filteredKegiatan = activeCategory === "Semua"
    ? INITIAL_KEGIATAN
    : INITIAL_KEGIATAN.filter((k) => k.category.toLowerCase() === activeCategory.toLowerCase());

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Page Header */}
      <section className="container" style={{ marginBottom: "50px" }}>
        <div style={{ maxWidth: "760px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "0.8rem",
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--color-slate)",
              marginBottom: "12px"
            }}
          >
            Agenda & Kegiatan
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.4rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              color: "var(--color-ivory)",
              lineHeight: 1.15,
              marginBottom: "20px"
            }}
          >
            Aktivitas di Fairway & Green
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-frost)", lineHeight: 1.8, fontWeight: 300 }}>
            Dari latihan rutin di driving range Malang, coaching clinic bersama pelatih bersertifikasi PGA, hingga kejuaraan resmi Indonesian College Golf Championship (ICGC).
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="container" style={{ marginBottom: "40px" }}>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: "6px", marginRight: "6px" }}>
            <Filter size={14} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "8px 20px",
                borderRadius: "999px",
                fontSize: "0.85rem",
                fontWeight: activeCategory === cat ? 600 : 400,
                backgroundColor: activeCategory === cat ? "var(--color-ivory)" : "rgba(17, 29, 73, 0.6)",
                color: activeCategory === cat ? "var(--color-navy)" : "var(--color-frost)",
                border: activeCategory === cat ? "1px solid var(--color-ivory)" : "1px solid rgba(216, 223, 229, 0.15)",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Activities Grid */}
      <section className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "32px"
          }}
        >
          {filteredKegiatan.map((item) => (
            <div
              key={item.id}
              className="luxury-card"
              style={{
                padding: 0,
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                cursor: "pointer"
              }}
              onClick={() => setSelectedKegiatan(item)}
            >
              <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1.0)"; }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: "14px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(17, 29, 73, 0.9)",
                    border: "1px solid rgba(253, 246, 229, 0.3)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    color: "var(--color-ivory)"
                  }}
                >
                  {item.category}
                </div>
              </div>

              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "var(--color-slate)", marginBottom: "8px" }}>
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>

                  <h3 style={{ fontSize: "1.2rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600, lineHeight: 1.4 }}>
                    {item.title}
                  </h3>

                  <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "16px" }}>
                    <MapPin size={14} color="#6386AC" />
                    <span>{item.location}</span>
                  </div>

                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300 }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "24px",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(216, 223, 229, 0.1)",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <span style={{ fontSize: "0.8rem", color: "var(--color-ivory)", fontWeight: 500 }}>
                    {item.highlight}
                  </span>
                  <span style={{ fontSize: "0.8rem", color: "var(--color-slate)", display: "flex", alignItems: "center", gap: "4px" }}>
                    Detail <ChevronRight size={14} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Detail Kegiatan */}
      {selectedKegiatan && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 1100,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px"
          }}
          onClick={() => setSelectedKegiatan(null)}
        >
          <div
            className="luxury-card"
            style={{
              maxWidth: "650px",
              width: "100%",
              padding: "36px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedKegiatan(null)}
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "rgba(255, 255, 255, 0.1)",
                color: "#FDF6E5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer"
              }}
            >
              <X size={18} />
            </button>

            <div style={{ height: "240px", borderRadius: "12px", overflow: "hidden", marginBottom: "24px" }}>
              <img
                src={selectedKegiatan.image}
                alt={selectedKegiatan.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: "999px", background: "rgba(99, 134, 172, 0.2)", color: "var(--color-ivory)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "12px" }}>
              {selectedKegiatan.category}
            </div>

            <h2 style={{ fontSize: "1.5rem", color: "var(--color-ivory)", marginBottom: "16px", lineHeight: 1.3 }}>
              {selectedKegiatan.title}
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "20px", fontSize: "0.9rem", color: "var(--color-frost)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Calendar size={16} color="#6386AC" /> {selectedKegiatan.date}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin size={16} color="#6386AC" /> {selectedKegiatan.location}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Users size={16} color="#6386AC" /> {selectedKegiatan.participants}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Award size={16} color="#FDF6E5" /> {selectedKegiatan.highlight}
              </div>
            </div>

            <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", fontWeight: 300 }}>
              {selectedKegiatan.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
