import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Trophy, Calendar, BookOpen, Compass, ChevronRight, MapPin, Sparkles } from "lucide-react";
import { INITIAL_KEGIATAN } from "../services/kegiatanService";

export default function HomePage({ onOpenRegister }) {
  // Ambil 2 kegiatan teratas sebagai sekilas info
  const recentActivities = INITIAL_KEGIATAN.slice(0, 2);

  return (
    <div>
      {/* 1. Executive Hero */}
      <section
        style={{
          position: "relative",
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "140px",
          paddingBottom: "80px",
          overflow: "hidden"
        }}
      >
        {/* Background photo & elegant gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(180deg, rgba(7, 11, 24, 0.82) 0%, rgba(17, 29, 73, 0.88) 60%, rgba(0, 0, 0, 0.98) 100%),
              url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=2000&q=85')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center 35%",
            zIndex: 0
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
          {/* Subtle Tag */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "6px 18px",
              borderRadius: "999px",
              background: "rgba(17, 29, 73, 0.75)",
              border: "1px solid rgba(253, 246, 229, 0.25)",
              marginBottom: "24px",
              backdropFilter: "blur(8px)"
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-ivory)"
              }}
            >
              UKM Resmi Universitas Brawijaya • Est. 2021
            </span>
          </div>

          {/* Main Title */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 5.5vw, 4.4rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: "0.02em",
              marginBottom: "20px",
              color: "var(--color-ivory)"
            }}
          >
            BRAWIJAYA GOLF
            <span
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "14px"
              }}
            >
              <img
                src="/assets/logo/albatros_ivory.png"
                alt="ALBATROS Golf"
                style={{
                  height: "clamp(38px, 6vw, 64px)",
                  width: "auto",
                  objectFit: "contain",
                  filter: "drop-shadow(0 4px 18px rgba(253, 246, 229, 0.35))"
                }}
              />
            </span>
          </h1>

          {/* Clean Subtitle */}
          <p
            style={{
              maxWidth: "680px",
              margin: "0 auto 36px auto",
              fontSize: "clamp(1rem, 1.2vw, 1.12rem)",
              color: "var(--color-frost)",
              lineHeight: 1.8,
              fontWeight: 300
            }}
          >
            Wadah pembinaan, komunitas, dan prestasi olahraga golf mahasiswa Universitas Brawijaya. Menggabungkan kedisiplinan mental, etiket, dan sportivitas di atas fairway.
          </p>

          {/* Primary Actions */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              flexWrap: "wrap"
            }}
          >
            <Link
              to="/tentang"
              className="btn btn-primary"
              style={{
                padding: "14px 32px",
                fontSize: "0.95rem"
              }}
            >
              Tentang Kami
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/kegiatan"
              className="btn btn-secondary"
              style={{
                padding: "14px 32px",
                fontSize: "0.95rem"
              }}
            >
              Agenda Kegiatan
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Sekilas Tentang Kami (Overview Ringkas) */}
      <section style={{ padding: "90px 0", position: "relative" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "56px",
              alignItems: "center"
            }}
          >
            <div>
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
                Sekilas Tentang Kami
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--color-ivory)",
                  lineHeight: 1.25,
                  marginBottom: "20px"
                }}
              >
                Membuka Peluang Golf Bagi Setiap Mahasiswa
              </h2>
              <p style={{ color: "var(--color-frost)", lineHeight: 1.8, marginBottom: "16px", fontWeight: 300 }}>
                Didirikan pada tahun 2021 di bawah naungan Rektorat Universitas Brawijaya, <strong>Brawijaya Golf</strong>{" "}
                <img
                  src="/assets/logo/albatros_ivory.png"
                  alt="ALBATROS"
                  style={{
                    height: "19px",
                    display: "inline-block",
                    verticalAlign: "middle",
                    margin: "0 4px 3px 4px",
                    filter: "drop-shadow(0 2px 6px rgba(253, 246, 229, 0.25))"
                  }}
                />{" "}
                hadir mematahkan stigma bahwa golf adalah olahraga yang eksklusif dan sulit dijangkau.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "28px", fontWeight: 300 }}>
                Kami memfasilitasi mahasiswa dari nol — mulai dari pemahaman grip, stance, dan etiket lapangan — hingga pembinaan atlet mahasiswa yang siap mewakili Brawijaya di kejuaraan nasional perguruan tinggi.
              </p>

              <Link
                to="/tentang"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "var(--color-ivory)",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  borderBottom: "1px solid var(--color-slate)",
                  paddingBottom: "4px",
                  transition: "all 0.2s ease"
                }}
              >
                Pelajari Filosofi Albatros & Sejarah Lengkap
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Quick Highlights Box */}
            <div
              className="luxury-card"
              style={{
                padding: "36px",
                background: "linear-gradient(145deg, rgba(17, 29, 73, 0.7) 0%, rgba(7, 11, 24, 0.9) 100%)",
                border: "1px solid rgba(216, 223, 229, 0.16)"
              }}
            >
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  color: "var(--color-ivory)",
                  marginBottom: "24px"
                }}
              >
                Fakta Singkat UBG
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(99, 134, 172, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <Compass size={20} color="#FDF6E5" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-ivory)", fontSize: "0.95rem" }}>
                      Terbuka untuk Semua Jenjang
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>
                      Dari mahasiswa yang belum pernah memegang klab golf hingga pemain berpengalaman.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(99, 134, 172, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <MapPin size={20} color="#FDF6E5" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-ivory)", fontSize: "0.95rem" }}>
                      Homebase & Driving Range Malang
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>
                      Latihan rutin terpusat di Abdurrahman Saleh Padang Golf & Araya Golf Family Club.
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "rgba(99, 134, 172, 0.2)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0
                    }}
                  >
                    <Trophy size={20} color="#FDF6E5" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: "var(--color-ivory)", fontSize: "0.95rem" }}>
                      Kejuaraan Tingkat Nasional
                    </div>
                    <div style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>
                      Turut berkompetisi dalam Indonesian College Golf Championship (ICGC) Series.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tiga Pilar Navigasi Utama (Direct Cards) */}
      <section style={{ padding: "60px 0 90px 0", position: "relative", backgroundColor: "rgba(17, 29, 73, 0.15)" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px auto" }}>
            <div
              style={{
                fontSize: "0.8rem",
                fontWeight: 600,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--color-slate)",
                marginBottom: "10px"
              }}
            >
              Fokus Utama
            </div>
            <h2
              style={{
                fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--color-ivory)"
              }}
            >
              Jelajahi Brawijaya Golf
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "28px"
            }}
          >
            {/* Card 1: E-Learning */}
            <Link
              to="/elearning"
              className="luxury-card"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(99, 134, 172, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px"
                  }}
                >
                  <BookOpen size={24} color="#FDF6E5" />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600 }}>
                  E-Learning & Kurikulum
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Modul terstruktur mengenai etiket resmi R&A, fundamental grip & swing, hingga course management bagi anggota.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  marginTop: "24px"
                }}
              >
                Buka Modul Pembelajaran
                <ChevronRight size={16} />
              </div>
            </Link>

            {/* Card 2: Kegiatan */}
            <Link
              to="/kegiatan"
              className="luxury-card"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(99, 134, 172, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px"
                  }}
                >
                  <Calendar size={24} color="#FDF6E5" />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600 }}>
                  Agenda & Kegiatan
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Jadwal sesi driving range mingguan, coaching clinic bersama pelatih PGA, serta partisipasi turnamen resmi.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  marginTop: "24px"
                }}
              >
                Lihat Jadwal & Turnamen
                <ChevronRight size={16} />
              </div>
            </Link>

            {/* Card 3: Prestasi */}
            <Link
              to="/prestasi"
              className="luxury-card"
              style={{
                padding: "36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                textDecoration: "none",
                transition: "all 0.3s ease"
              }}
            >
              <div>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(99, 134, 172, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px"
                  }}
                >
                  <Trophy size={24} color="#FDF6E5" />
                </div>
                <h3 style={{ fontSize: "1.25rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600 }}>
                  Rekor Prestasi
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.7, fontWeight: 300 }}>
                  Pencapaian mahasiswa UB di panggung kompetisi golf mahasiswa nasional dan rekam jejak atlet Albatros.
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  marginTop: "24px"
                }}
              >
                Lihat Galeri Prestasi
                <ChevronRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Sekilas Kegiatan Terdekat */}
      {/* <section style={{ padding: "90px 0", position: "relative" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "20px" }}>
            <div>
              <div
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--color-slate)",
                  marginBottom: "8px"
                }}
              >
                Agenda Lapangan
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  color: "var(--color-ivory)"
                }}
              >
                Kegiatan Terkini
              </h2>
            </div>

            <Link
              to="/kegiatan"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--color-ivory)",
                fontWeight: 600,
                fontSize: "0.92rem",
                textDecoration: "none"
              }}
            >
              Semua Kegiatan
              <ArrowRight size={16} />
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "28px"
            }}
          >
            {recentActivities.map((act) => (
              <div
                key={act.id}
                className="luxury-card"
                style={{
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  padding: 0
                }}
              >
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={act.image}
                    alt={act.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover"
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: "14px",
                      left: "14px",
                      padding: "4px 12px",
                      borderRadius: "999px",
                      background: "rgba(17, 29, 73, 0.85)",
                      border: "1px solid rgba(216, 223, 229, 0.2)",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "var(--color-ivory)"
                    }}
                  >
                    {act.category}
                  </div>
                </div>

                <div style={{ padding: "28px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <div style={{ fontSize: "0.82rem", color: "var(--color-slate)", marginBottom: "8px", fontWeight: 500 }}>
                      {act.date} • {act.location}
                    </div>
                    <h3 style={{ fontSize: "1.15rem", color: "var(--color-ivory)", marginBottom: "12px", fontWeight: 600 }}>
                      {act.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300 }}>
                      {act.description}
                    </p>
                  </div>

                  <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid rgba(216, 223, 229, 0.1)" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--color-ivory)", fontWeight: 500 }}>
                      {act.highlight}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* 5. Clean Call to Action */}
      <section style={{ padding: "80px 0 100px 0", position: "relative" }}>
        <div className="container">
          <div
            className="luxury-card"
            style={{
              padding: "56px 40px",
              textAlign: "center",
              background: "linear-gradient(135deg, rgba(17, 29, 73, 0.95) 0%, rgba(7, 11, 24, 0.98) 100%)",
              border: "1px solid rgba(253, 246, 229, 0.25)"
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--color-ivory)",
                marginBottom: "16px"
              }}
            >
              Bergabung Bersama Brawijaya Golf
            </h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "0 auto 32px auto",
                color: "var(--color-frost)",
                lineHeight: 1.8,
                fontSize: "1rem",
                fontWeight: 300
              }}
            >
              Terbuka bagi seluruh mahasiswa aktif Universitas Brawijaya Malang. Jadilah bagian dari tradisi kebersamaan, integritas, dan prestasi di lapangan hijau.
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
              <button
                onClick={onOpenRegister}
                className="btn btn-primary"
                style={{ padding: "14px 36px", fontSize: "0.95rem" }}
              >
                Daftar Member Sekarang
              </button>
              <Link
                to="/tentang"
                className="btn btn-secondary"
                style={{ padding: "14px 32px", fontSize: "0.95rem" }}
              >
                Kenali Kami Lebih Dekat
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
