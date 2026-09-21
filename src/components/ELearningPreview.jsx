import React, { useState } from "react";
import { BookOpen, ShieldCheck, Compass, Target, PlayCircle, Lock, ArrowRight, CheckCircle } from "lucide-react";
import { ELEARNING_MODULES } from "../services/kegiatanService";

export default function ELearningPreview({ onOpenRegister }) {
  const [activeModule, setActiveModule] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck size={26} color="#FDF6E5" />;
      case "Compass": return <Compass size={26} color="#FDF6E5" />;
      case "Target": return <Target size={26} color="#FDF6E5" />;
      case "BookOpen": return <BookOpen size={26} color="#FDF6E5" />;
      default: return <BookOpen size={26} color="#FDF6E5" />;
    }
  };

  return (
    <section id="elearning" className="section" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <BookOpen size={14} color="#FDF6E5" />
            E-Learning Golf
          </div>
          <h2 className="section-title">
            Kurikulum Pembinaan <span className="highlight">Pegolf Mahasiswa</span>
          </h2>
          <p className="section-subtitle">
            Dari pemula tanpa pengalaman hingga atlet ber-handicap single-digit. Akses modul video, etiket resmi R&A, dan strategi lapangan eksklusif bagi anggota UKM Brawijaya Golf.
          </p>
        </div>

        {/* Modules Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            marginBottom: "48px"
          }}
        >
          {ELEARNING_MODULES.map((mod) => (
            <div
              key={mod.id}
              className="luxury-card"
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "32px",
                cursor: "pointer"
              }}
              onClick={() => setActiveModule(mod)}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "12px",
                      background: "rgba(99, 134, 172, 0.25)",
                      border: "1px solid rgba(216, 223, 229, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {getIcon(mod.icon)}
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      padding: "4px 12px",
                      borderRadius: "999px",
                      background: "rgba(17, 29, 73, 0.9)",
                      border: "1px solid rgba(253, 246, 229, 0.3)",
                      color: "var(--color-ivory)"
                    }}
                  >
                    {mod.level}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.25rem", color: "var(--color-ivory)", marginBottom: "12px", lineHeight: 1.35 }}>
                  {mod.title}
                </h3>

                <div style={{ fontSize: "0.82rem", color: "var(--color-slate)", fontWeight: 600, marginBottom: "12px" }}>
                  ⏱️ {mod.duration}
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {mod.description}
                </p>
              </div>

              <div
                style={{
                  paddingTop: "16px",
                  borderTop: "1px solid rgba(216, 223, 229, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  fontWeight: 600
                }}
              >
                <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <PlayCircle size={16} color="#FDF6E5" /> Pelajari Modul
                </span>
                <ArrowRight size={16} color="#6386AC" />
              </div>
            </div>
          ))}
        </div>



        {/* Modal Video/Modul Preview */}
        {activeModule && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2500,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(14px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
            onClick={() => setActiveModule(null)}
          >
            <div
              className="luxury-card"
              style={{
                maxWidth: "600px",
                width: "100%",
                padding: "36px",
                background: "rgba(17, 29, 73, 0.98)",
                border: "1.5px solid var(--border-gold)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(99, 134, 172, 0.25)",
                    color: "var(--color-ivory)",
                    fontSize: "0.8rem",
                    fontWeight: 700
                  }}
                >
                  {activeModule.level}
                </span>
                <button onClick={() => setActiveModule(null)} style={{ color: "var(--color-frost)", cursor: "pointer" }}>
                  ✕
                </button>
              </div>

              <h3 style={{ fontSize: "1.6rem", color: "var(--color-ivory)", marginBottom: "12px" }}>
                {activeModule.title}
              </h3>
              <p style={{ color: "var(--color-frost)", lineHeight: 1.8, marginBottom: "20px", fontSize: "0.95rem" }}>
                {activeModule.description}
              </p>

              <div
                style={{
                  padding: "16px",
                  borderRadius: "12px",
                  background: "rgba(7, 11, 24, 0.6)",
                  border: "1px solid rgba(216, 223, 229, 0.15)",
                  marginBottom: "24px"
                }}
              >
                <div style={{ color: "var(--color-ivory)", fontWeight: 600, fontSize: "0.9rem", marginBottom: "10px" }}>
                  Materi yang akan dipelajari:
                </div>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem", color: "var(--text-secondary)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={15} color="#6386AC" /> Pengantar teori & sejarah standar kompetisi
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={15} color="#6386AC" /> Demonstrasi slow-motion oleh pelatih profesional
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CheckCircle size={15} color="#6386AC" /> Kuis interaktif dan verifikasi pemahaman
                  </li>
                </ul>
              </div>

              <div style={{ display: "flex", gap: "12px" }}>
                <button onClick={() => setActiveModule(null)} className="btn btn-secondary" style={{ flex: 1, padding: "12px" }}>
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setActiveModule(null);
                    onOpenRegister();
                  }}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: "12px" }}
                >
                  Buka Akses Penuh
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
