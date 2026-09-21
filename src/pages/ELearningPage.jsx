import React, { useState } from "react";
import { BookOpen, ShieldCheck, Compass, Target, PlayCircle, Lock, ArrowRight, CheckCircle, X } from "lucide-react";
import { ELEARNING_MODULES } from "../services/kegiatanService";

export default function ELearningPage({ onOpenRegister }) {
  const [activeModule, setActiveModule] = useState(null);

  const getIcon = (iconName) => {
    switch (iconName) {
      case "ShieldCheck": return <ShieldCheck size={24} color="#FDF6E5" />;
      case "Compass": return <Compass size={24} color="#FDF6E5" />;
      case "Target": return <Target size={24} color="#FDF6E5" />;
      case "BookOpen": return <BookOpen size={24} color="#FDF6E5" />;
      default: return <BookOpen size={24} color="#FDF6E5" />;
    }
  };

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Page Header */}
      <section className="container" style={{ marginBottom: "60px" }}>
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
            Kurikulum Pembinaan
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
            E-Learning Brawijaya Golf
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-frost)", lineHeight: 1.8, fontWeight: 300 }}>
            Dari pemula tanpa latar belakang olahraga golf hingga pemain turnamen mahasiswa ber-handicap rendah. Panduan taktis, video analisis swing, dan pemahaman peraturan resmi R&A Golf Rules.
          </p>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container" style={{ marginBottom: "60px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "28px"
          }}
        >
          {ELEARNING_MODULES.map((mod) => (
            <div
              key={mod.id}
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "36px",
                cursor: "pointer"
              }}
              onClick={() => setActiveModule(mod)}
            >
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "12px",
                      background: "rgba(99, 134, 172, 0.2)",
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
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "999px",
                      backgroundColor: "rgba(216, 223, 229, 0.1)",
                      color: "var(--color-ivory)",
                      border: "1px solid rgba(216, 223, 229, 0.2)"
                    }}
                  >
                    {mod.level}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.2rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600 }}>
                  {mod.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "20px", fontWeight: 300 }}>
                  {mod.description}
                </p>
              </div>

              <div>
                <div style={{ fontSize: "0.8rem", color: "var(--color-slate)", marginBottom: "12px", display: "flex", justifyContent: "space-between" }}>
                  <span>{mod.duration}</span>
                  <span>{mod.lessonsCount} Video & Modul</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    color: "var(--color-ivory)",
                    fontSize: "0.88rem",
                    fontWeight: 600
                  }}
                >
                  Buka Silabus Modul
                  <ArrowRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Member Exclusive Banner */}
      <section className="container">
        <div
          className="luxury-card"
          style={{
            padding: "48px 40px",
            background: "linear-gradient(135deg, rgba(17, 29, 73, 0.9) 0%, rgba(7, 11, 24, 0.95) 100%)",
            border: "1px solid rgba(253, 246, 229, 0.2)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "28px"
          }}
        >
          <div style={{ maxWidth: "600px" }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 700 }}>
              Akses Penuh Video Analisis Swing Launch Monitor
            </h3>
            <p style={{ color: "var(--color-frost)", lineHeight: 1.7, fontSize: "0.95rem", fontWeight: 300 }}>
              Member aktif UKM Brawijaya Golf mendapatkan akses rekaman sesi driving range, feedback mekanika swing langsung dari Coach Denny Wijaya PGA, dan tracking statistik handicap personal.
            </p>
          </div>

          <button
            onClick={onOpenRegister}
            className="btn btn-primary"
            style={{ padding: "14px 32px", fontSize: "0.92rem", flexShrink: 0 }}
          >
            Registrasi Akun Anggota
          </button>
        </div>
      </section>

      {/* Modal Detail Kurikulum Modul */}
      {activeModule && (
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
          onClick={() => setActiveModule(null)}
        >
          <div
            className="luxury-card"
            style={{
              maxWidth: "640px",
              width: "100%",
              padding: "36px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveModule(null)}
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

            <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: "999px", background: "rgba(99, 134, 172, 0.2)", color: "var(--color-ivory)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "12px" }}>
              {activeModule.level} • {activeModule.duration}
            </div>

            <h2 style={{ fontSize: "1.6rem", color: "var(--color-ivory)", marginBottom: "14px", lineHeight: 1.3 }}>
              {activeModule.title}
            </h2>

            <p style={{ color: "var(--color-frost)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "28px", fontWeight: 300 }}>
              {activeModule.description}
            </p>

            <h4 style={{ fontSize: "1rem", color: "var(--color-ivory)", marginBottom: "16px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
              Silabus Pelatihan & Topik Bahasan:
            </h4>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              {activeModule.topics.map((topic, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px 16px",
                    borderRadius: "10px",
                    background: "rgba(17, 29, 73, 0.5)",
                    border: "1px solid rgba(216, 223, 229, 0.1)"
                  }}
                >
                  <CheckCircle size={18} color="#6386AC" style={{ flexShrink: 0 }} />
                  <span style={{ color: "var(--color-ivory)", fontSize: "0.9rem" }}>{topic}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setActiveModule(null);
                onOpenRegister();
              }}
              className="btn btn-primary"
              style={{ width: "100%", padding: "14px", textAlign: "center", fontSize: "0.95rem" }}
            >
              Gabung Member untuk Akses Modul Lengkap
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
