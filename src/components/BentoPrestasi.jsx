import React, { useState } from "react";
import { Trophy, Award, Medal, Sparkles, ExternalLink, X, ChevronRight } from "lucide-react";
import { PRESTASI_LIST } from "../services/kegiatanService";

export default function BentoPrestasi() {
  const [selectedPrestasi, setSelectedPrestasi] = useState(null);

  return (
    <section id="prestasi" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Main Bento Container */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(12, 1fr)",
            gap: "28px",
            alignItems: "stretch"
          }}
        >
          {/* Left Narrative Column (Inspired by "Dari UBG untuk Brawijaya") */}
          <div
            className="luxury-card"
            style={{
              gridColumn: "span 12",
              padding: "44px 36px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "linear-gradient(145deg, rgba(17, 29, 73, 0.95) 0%, rgba(7, 11, 24, 0.98) 100%)",
              border: "1px solid rgba(253, 246, 229, 0.3)",
              position: "relative"
            }}
          >
            {/* Ambient gold glow */}
            <div
              style={{
                position: "absolute",
                top: "-40px",
                right: "-40px",
                width: "240px",
                height: "240px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(253, 246, 229, 0.08) 0%, transparent 70%)",
                filter: "blur(40px)",
                pointerEvents: "none"
              }}
            />

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "6px 16px",
                borderRadius: "999px",
                background: "rgba(99, 134, 172, 0.2)",
                border: "1px solid rgba(216, 223, 229, 0.25)",
                color: "var(--color-ivory)",
                fontSize: "0.8rem",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                width: "fit-content"
              }}
            >
              <Trophy size={14} color="#FDF6E5" />
              DEDIKASI & KEJAYAAN KAMPUS
            </div>

            <h2
              style={{
                fontSize: "clamp(2.2rem, 3.8vw, 3.2rem)",
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                color: "var(--color-ivory)",
                marginBottom: "20px",
                lineHeight: 1.2
              }}
            >
              Dari UBG untuk Brawijaya
            </h2>

            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-frost)",
                lineHeight: 1.8,
                maxWidth: "850px",
                marginBottom: "32px"
              }}
            >
              Berbagai prestasi telah diraih oleh anggota UKM Brawijaya Golf untuk mengharumkan nama Universitas Brawijaya di kancah nasional. Setiap piala dan gelar juara mencerminkan ribuan jam latihan intensif di putting green dan keteguhan mental di setiap tee box.
            </p>

            {/* Quick Achievement Stats Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "18px",
                paddingTop: "24px",
                borderTop: "1px solid rgba(216, 223, 229, 0.12)"
              }}
            >
              <div>
                <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-serif)" }}>
                  14+
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-frost)", marginTop: "4px" }}>
                  Trofi Nasional & Regional
                </div>
              </div>

              <div>
                <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-serif)" }}>
                  73
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-frost)", marginTop: "4px" }}>
                  Best 18-Hole Stroke Record
                </div>
              </div>

              <div>
                <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-serif)" }}>
                  100%
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-frost)", marginTop: "4px" }}>
                  Komitmen Fairplay & Etiket
                </div>
              </div>

              <div>
                <div style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--color-ivory)", fontFamily: "var(--font-serif)" }}>
                  #1
                </div>
                <div style={{ fontSize: "0.82rem", color: "var(--color-frost)", marginTop: "4px" }}>
                  UKM Golf Kampus Jawa Timur
                </div>
              </div>
            </div>
          </div>

          {/* Prestasi Interactive Bento Grid Cards */}
          {PRESTASI_LIST.map((item, idx) => (
            <div
              key={item.id}
              className="luxury-card"
              onClick={() => setSelectedPrestasi(item)}
              style={{
                gridColumn: idx === 0 || idx === 3 ? "span 12" : "span 12",
                padding: 0,
                cursor: "pointer",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                position: "relative"
              }}
            >
              <div style={{ position: "relative", height: "260px", overflow: "hidden" }}>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease"
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, rgba(7, 11, 24, 0.2) 0%, rgba(17, 29, 73, 0.9) 100%)"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    left: "16px",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(17, 29, 73, 0.85)",
                    border: "1px solid rgba(253, 246, 229, 0.4)",
                    color: "var(--color-ivory)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    backdropFilter: "blur(6px)"
                  }}
                >
                  {item.badge}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    background: "rgba(0, 0, 0, 0.6)",
                    color: "var(--color-frost)",
                    fontSize: "0.75rem",
                    fontWeight: 600
                  }}
                >
                  {item.year}
                </div>
              </div>

              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--color-slate)", fontWeight: 600, textTransform: "uppercase", marginBottom: "6px" }}>
                    {item.event}
                  </div>
                  <h3 style={{ fontSize: "1.25rem", color: "var(--color-ivory)", marginBottom: "10px" }}>
                    {item.title}
                  </h3>
                  <div style={{ fontSize: "0.88rem", color: "var(--color-frost)", fontWeight: 600, marginBottom: "8px" }}>
                    👤 {item.athlete}
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>

                <div
                  style={{
                    marginTop: "18px",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(216, 223, 229, 0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    color: "var(--color-ivory)",
                    fontSize: "0.85rem",
                    fontWeight: 600
                  }}
                >
                  <span>Lihat Detail Prestasi</span>
                  <ChevronRight size={16} color="#6386AC" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Detail Prestasi */}
        {selectedPrestasi && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2000,
              background: "rgba(0, 0, 0, 0.8)",
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
                maxWidth: "600px",
                width: "100%",
                padding: "32px",
                background: "rgba(17, 29, 73, 0.98)",
                border: "1.5px solid var(--border-gold)",
                boxShadow: "0 25px 60px rgba(0, 0, 0, 0.9)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <span
                  style={{
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(99, 134, 172, 0.2)",
                    color: "var(--color-ivory)",
                    fontSize: "0.8rem",
                    fontWeight: 700
                  }}
                >
                  {selectedPrestasi.badge} • {selectedPrestasi.year}
                </span>
                <button
                  onClick={() => setSelectedPrestasi(null)}
                  style={{
                    color: "var(--color-frost)",
                    cursor: "pointer",
                    padding: "4px",
                    borderRadius: "6px"
                  }}
                >
                  <X size={22} />
                </button>
              </div>

              <div style={{ borderRadius: "12px", overflow: "hidden", marginBottom: "20px", maxHeight: "280px" }}>
                <img
                  src={selectedPrestasi.image}
                  alt={selectedPrestasi.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h3 style={{ fontSize: "1.6rem", color: "var(--color-ivory)", marginBottom: "8px" }}>
                {selectedPrestasi.title}
              </h3>
              <div style={{ color: "var(--color-slate)", fontWeight: 600, marginBottom: "12px" }}>
                {selectedPrestasi.event}
              </div>
              <div style={{ color: "var(--color-frost)", fontSize: "0.95rem", marginBottom: "16px" }}>
                Peraih: <strong>{selectedPrestasi.athlete}</strong>
              </div>
              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.92rem", marginBottom: "24px" }}>
                {selectedPrestasi.description}
              </p>

              <button
                onClick={() => setSelectedPrestasi(null)}
                className="btn btn-primary"
                style={{ width: "100%", padding: "12px" }}
              >
                Tutup Jendela
              </button>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 900px) {
          #prestasi .luxury-card[style*="gridColumn: span 12"]:not(:first-child) {
            grid-column: span 6 !important;
          }
        }
      `}</style>
    </section>
  );
}
