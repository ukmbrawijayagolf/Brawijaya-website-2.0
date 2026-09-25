import React from "react";
import { Award, ChevronDown, Compass, Play, Trophy, Sparkles, ArrowUpRight } from "lucide-react";

export default function Hero({ onOpenRegister }) {


  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "140px",
        paddingBottom: "80px",
        overflow: "hidden"
      }}
    >
      {/* Background with Cinematic Golf Imagery & Navy Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(180deg, rgba(7, 11, 24, 0.78) 0%, rgba(17, 29, 73, 0.88) 50%, rgba(0, 0, 0, 0.96) 100%),
            url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=85')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          zIndex: 0
        }}
      />

      {/* Subtle Fairway Texture & Ambient Glows */}
      <div className="golf-pattern-overlay" />
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "650px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(99, 134, 172, 0.22) 0%, rgba(17, 29, 73, 0) 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
          zIndex: 1
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
        {/* Top Collegiate Badge */}
        {/* <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "8px 22px",
            borderRadius: "999px",
            background: "rgba(17, 29, 73, 0.75)",
            border: "1px solid rgba(253, 246, 229, 0.3)",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
            marginBottom: "28px",
            backdropFilter: "blur(10px)"
          }}
        >
          <Trophy size={16} color="#FDF6E5" />
          <span
            style={{
              fontSize: "0.82rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-ivory)"
            }}
          >
            Unit Kegiatan Mahasiswa Universitas Brawijaya
          </span>
          <span
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: "#6386AC"
            }}
          />
        </div> */}

        {/* Static Subhead */}
        {/* <div
          style={{
            marginBottom: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px"
          }}
        >
          <Sparkles size={16} color="#6386AC" />
          <span
            style={{
              color: "var(--color-slate)",
              fontSize: "1.05rem",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase"
            }}
          >
            Pusat Prestasi &amp; Sportivitas
          </span>
        </div> */}

        {/* Main Title: Brawijaya Golf */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 6.5vw, 5.2rem)",
            fontFamily: "var(--font-serif)",
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: "0.04em",
            marginBottom: "10px",
            textShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
            color: "var(--color-ivory)"
          }}
        >
          Brawijaya Golf
        </h1>

        {/* Brand Subtitle: ALBATROS */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            margin: "0 auto 28px auto",
            position: "relative"
          }}
        >
          <span
            style={{
              height: "1.5px",
              width: "48px",
              background: "linear-gradient(90deg, transparent, #6386AC)"
            }}
          />
          <img
            src="/assets/logo/albatros_ivory.png"
            alt="ALBATROS"
            style={{
              height: "clamp(34px, 5vw, 54px)",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 20px rgba(253, 246, 229, 0.45))"
            }}
          />
          <span
            style={{
              height: "1.5px",
              width: "48px",
              background: "linear-gradient(90deg, #6386AC, transparent)"
            }}
          />
        </div>

        {/* Tagline from User's Inspiration */}
        <p
          style={{
            maxWidth: "740px",
            margin: "0 auto 40px auto",
            fontSize: "clamp(1rem, 1.3vw, 1.15rem)",
            color: "var(--color-frost)",
            lineHeight: 1.8,
            fontWeight: 400,
            textShadow: "0 2px 12px rgba(0, 0, 0, 0.9)"
          }}
        >
          Menyatukan semangat dan keharmonisan di atas hijau rumput. Brawijaya Golf bukan sekadar olahraga — ini tentang kebersamaan, strategi, dan elegansi dalam setiap ayunan.
        </p>

        {/* Dual Call-To-Action Buttons */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            marginBottom: "64px"
          }}
        >
          <a
            href="#about"
            className="btn btn-primary"
            style={{
              padding: "16px 36px",
              fontSize: "1rem"
            }}
          >
            Tentang Kami
            <ArrowUpRight size={18} />
          </a>

          <a
            href="#kegiatan"
            className="btn btn-secondary"
            style={{
              padding: "16px 36px",
              fontSize: "1rem"
            }}
          >
            Lihat Kegiatan
          </a>
        </div>

        {/* Floating Quick Stat Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            maxWidth: "1050px",
            margin: "0 auto"
          }}
        >
          <div
            className="luxury-card"
            style={{
              padding: "20px 24px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(99, 134, 172, 0.2)",
                border: "1px solid rgba(216, 223, 229, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Trophy size={24} color="#FDF6E5" />
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-ivory)" }}>Top 3</div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-frost)" }}>Kejuaraan Golf Kampus Nasional</div>
            </div>
          </div>

          <div
            className="luxury-card"
            style={{
              padding: "20px 24px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(99, 134, 172, 0.2)",
                border: "1px solid rgba(216, 223, 229, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Compass size={24} color="#FDF6E5" />
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-ivory)" }}>18 Hole</div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-frost)" }}>Partner Lapangan Championship</div>
            </div>
          </div>

          <div
            className="luxury-card"
            style={{
              padding: "20px 24px",
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              gap: "16px"
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(99, 134, 172, 0.2)",
                border: "1px solid rgba(216, 223, 229, 0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0
              }}
            >
              <Award size={24} color="#FDF6E5" />
            </div>
            <div>
              <div style={{ fontSize: "1.4rem", fontWeight: 700, color: "var(--color-ivory)" }}>120+</div>
              <div style={{ fontSize: "0.8rem", color: "var(--color-frost)" }}>Anggota & Atlet Mahasiswa Aktif</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            marginTop: "48px",
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
            color: "var(--color-slate)",
            fontSize: "0.8rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase"
          }}
        >
          <span>Scroll to Discover</span>
          <ChevronDown size={18} style={{ animation: "floatUpAndDown 2s infinite" }} />
        </div>
      </div>
    </section>
  );
}
