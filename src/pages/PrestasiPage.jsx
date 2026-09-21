import React, { useState } from "react";
import { Trophy, Award, Medal, X, ChevronRight, Sparkles } from "lucide-react";
import { PRESTASI_LIST } from "../services/kegiatanService";

export default function PrestasiPage() {
  const [selectedPrestasi, setSelectedPrestasi] = useState(null);

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
            Rekor & Pencapaian
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
            Dari UBG untuk Brawijaya
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-frost)", lineHeight: 1.8, fontWeight: 300 }}>
            Berbagai prestasi telah diraih oleh anggota UKM Brawijaya Golf untuk mengharumkan nama almamater Universitas Brawijaya di kancah golf mahasiswa nasional.
          </p>
        </div>
      </section>

      {/* Stats Summary Banner */}
      <section className="container" style={{ marginBottom: "60px" }}>
        <div
          className="luxury-card"
          style={{
            padding: "40px",
            background: "linear-gradient(135deg, rgba(17, 29, 73, 0.85) 0%, rgba(7, 11, 24, 0.95) 100%)",
            border: "1px solid rgba(253, 246, 229, 0.25)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "32px",
              textAlign: "center"
            }}
          >
            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-display)" }}>
                14+
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--color-frost)", marginTop: "4px" }}>
                Trofi Nasional & Regional
              </div>
            </div>

            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-display)" }}>
                73
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--color-frost)", marginTop: "4px" }}>
                Best 18-Hole Stroke Record
              </div>
            </div>

            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-display)" }}>
                100%
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--color-frost)", marginTop: "4px" }}>
                Komitmen Fairplay & Etiket
              </div>
            </div>

            <div>
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-display)" }}>
                Top 3
              </div>
              <div style={{ fontSize: "0.88rem", color: "var(--color-frost)", marginTop: "4px" }}>
                Peringkat Nasional ICGC
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prestasi Grid */}
      <section className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "32px"
          }}
        >
          {PRESTASI_LIST.map((item) => (
            <div
              key={item.id}
              className="luxury-card"
              onClick={() => setSelectedPrestasi(item)}
              style={{
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ position: "relative", height: "230px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.4s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
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
                  {item.badge}
                </div>
              </div>

              <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.82rem", color: "var(--color-slate)", marginBottom: "8px", fontWeight: 500 }}>
                    {item.year}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600, lineHeight: 1.4 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300 }}>
                    {item.desc}
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
                    {item.stats}
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

      {/* Modal Detail Prestasi */}
      {selectedPrestasi && (
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
          onClick={() => setSelectedPrestasi(null)}
        >
          <div
            className="luxury-card"
            style={{
              maxWidth: "620px",
              width: "100%",
              padding: "36px",
              maxHeight: "90vh",
              overflowY: "auto",
              position: "relative"
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPrestasi(null)}
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
                src={selectedPrestasi.image}
                alt={selectedPrestasi.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div style={{ display: "inline-block", padding: "4px 12px", borderRadius: "999px", background: "rgba(99, 134, 172, 0.2)", color: "var(--color-ivory)", fontSize: "0.78rem", fontWeight: 600, marginBottom: "12px" }}>
              {selectedPrestasi.badge} • {selectedPrestasi.year}
            </div>

            <h2 style={{ fontSize: "1.5rem", color: "var(--color-ivory)", marginBottom: "16px", lineHeight: 1.3 }}>
              {selectedPrestasi.title}
            </h2>

            <p style={{ color: "var(--color-frost)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "20px", fontWeight: 300 }}>
              {selectedPrestasi.desc}
            </p>

            <div style={{ padding: "16px", borderRadius: "10px", background: "rgba(17, 29, 73, 0.6)", border: "1px solid rgba(216, 223, 229, 0.15)" }}>
              <div style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--color-slate)", letterSpacing: "0.1em", marginBottom: "4px" }}>
                Rekor & Catatan Resmi
              </div>
              <div style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--color-ivory)" }}>
                {selectedPrestasi.stats}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
