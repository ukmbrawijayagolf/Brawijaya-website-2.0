import React, { useState } from "react";
import { Target, Flag, Shield, Users, Award, CheckCircle2, Flame, HeartHandshake } from "lucide-react";

export default function ProfileAbout() {
  const [activeTab, setActiveTab] = useState("filosofi");

  const pillars = [
    {
      icon: Shield,
      title: "Integritas & Etiket",
      desc: "Golf adalah satu-satunya olahraga tanpa wasit langsung di lapangan. Kami menjunjung tinggi kejujuran, sportivitas, dan rasa hormat terhadap lawan maupun lapangan."
    },
    {
      icon: Target,
      title: "Ketepatan Strategi",
      desc: "Setiap pukulan membutuhkan kalkulasi angin, kontur tanah, dan manajemen risiko mental. Mengasah pemikiran analitis yang berguna bagi dunia profesional."
    },
    {
      icon: HeartHandshake,
      title: "Kekeluargaan Inklusif",
      desc: "Membuka pintu selebar-lebarnya bagi mahasiswa pemula hingga atlet berpengalaman dari seluruh fakultas di Universitas Brawijaya."
    },
    {
      icon: Award,
      title: "Mental Juara Nasional",
      desc: "Didukung program pelatihan berjenjang, driving range rutin, dan partisipasi aktif dalam turnamen Indonesian College Golf Championship (ICGC)."
    }
  ];

  return (
    <section id="about" className="section" style={{ position: "relative" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Flag size={14} color="#FDF6E5" />
            Company Profile & Nilai Luhur
          </div>
          <h2 className="section-title" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
            <span>Mengenal <span className="highlight">Brawijaya Golf</span></span>
            <img
              src="/assets/logo/albatros_ivory.png"
              alt="ALBATROS"
              style={{
                height: "36px",
                width: "auto",
                objectFit: "contain",
                verticalAlign: "middle"
              }}
            />
          </h2>
          <p className="section-subtitle">
            Wadah resmi pembinaan olahraga golf civitas akademika Universitas Brawijaya yang menggabungkan kedisiplinan atletik, kecerdasan taktis, dan etika eksekutif sejak 2021.
          </p>
        </div>

        {/* Philosophy Spotlight: What is Albatros */}
        <div
          className="luxury-card"
          style={{
            marginBottom: "48px",
            padding: "40px",
            background: "linear-gradient(135deg, rgba(17, 29, 73, 0.85) 0%, rgba(7, 11, 24, 0.95) 100%)",
            border: "1px solid rgba(253, 246, 229, 0.25)"
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "40px", alignItems: "center" }}>
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "rgba(99, 134, 172, 0.2)",
                  color: "var(--color-ivory)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  marginBottom: "16px"
                }}
              >
                <Flame size={14} color="#FDF6E5" />
                FILOSOFI LOGO & IDENTITAS
              </div>
              <div style={{ marginBottom: "16px" }}>
                <img
                  src="/assets/logo/albatros_ivory.png"
                  alt="Albatros"
                  style={{
                    height: "36px",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 12px rgba(253, 246, 229, 0.2))"
                  }}
                />
              </div>
              <h3 style={{ fontSize: "1.9rem", marginBottom: "16px", color: "var(--color-ivory)" }}>
                Pencapaian Langka, Dedikasi Tanpa Batas
              </h3>
              <p style={{ color: "var(--color-frost)", marginBottom: "16px", lineHeight: 1.8 }}>
                Dalam olahraga golf dunia, <strong>Albatross</strong> (atau <em>double eagle</em>) adalah skor 3 pukulan di bawah par (-3) pada satu hole. Peluang mencetaknya diperkirakan <strong>1 banding 6.000.000</strong> — bahkan jauh lebih langka daripada Hole-in-One.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Filosofi ini menjadi kompas UKM Brawijaya Golf: menanamkan keyakinan bahwa mahasiswa Universitas Brawijaya mampu menorehkan prestasi gemilang yang luar biasa melalui latihan tekun, kalkulasi tajam, dan karakter tangguh di setiap tantangan fairway.
              </p>
            </div>

            <div
              style={{
                position: "relative",
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid rgba(216, 223, 229, 0.2)",
                boxShadow: "var(--shadow-lg)"
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1593111774642-a16223a54b41?auto=format&fit=crop&w=1000&q=80"
                alt="Filosofi Golf UKM Brawijaya"
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                  display: "block",
                  filter: "brightness(0.9) contrast(1.05)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "20px",
                  background: "linear-gradient(180deg, transparent 0%, rgba(17, 29, 73, 0.95) 100%)",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <div>
                  <div style={{ color: "var(--color-ivory)", fontWeight: 700, fontSize: "0.95rem" }}>
                    Tradisi Keunggulan Albatros
                  </div>
                  <div style={{ color: "var(--color-frost)", fontSize: "0.78rem" }}>
                    Universitas Brawijaya • Malang
                  </div>
                </div>
                <div
                  style={{
                    padding: "6px 14px",
                    borderRadius: "999px",
                    background: "rgba(253, 246, 229, 0.15)",
                    border: "1px solid rgba(253, 246, 229, 0.4)",
                    color: "var(--color-ivory)",
                    fontSize: "0.75rem",
                    fontWeight: 700
                  }}
                >
                  3 Under Par
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visi & Misi Tabbed Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "28px", marginBottom: "56px" }}>
          {/* Visi Card */}
          <div className="luxury-card" style={{ padding: "36px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(99, 134, 172, 0.25)",
                border: "1px solid rgba(216, 223, 229, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}
            >
              <Target size={28} color="#FDF6E5" />
            </div>
            <h3 style={{ fontSize: "1.45rem", marginBottom: "14px", color: "var(--color-ivory)" }}>
              Visi Organisasi
            </h3>
            <p style={{ color: "var(--color-frost)", lineHeight: 1.8, fontSize: "0.98rem" }}>
              "Menjadi Unit Kegiatan Mahasiswa olahraga golf terdepan dan paling disegani di kancah perguruan tinggi nasional, yang mencetak atlet berprestasi, berintegritas tinggi, dan berjiwa kepemimpinan global berbasis nilai luhur Universitas Brawijaya."
            </p>
          </div>

          {/* Misi Card */}
          <div className="luxury-card" style={{ padding: "36px" }}>
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "14px",
                background: "rgba(99, 134, 172, 0.25)",
                border: "1px solid rgba(216, 223, 229, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px"
              }}
            >
              <Flag size={28} color="#FDF6E5" />
            </div>
            <h3 style={{ fontSize: "1.45rem", marginBottom: "14px", color: "var(--color-ivory)" }}>
              Misi Organisasi
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Menyediakan fasilitas pelatihan berstandar PGA dengan bimbingan pelatih profesional berlisensi.",
                "Mengembangkan kompetensi etiket golf, manajemen emosi, dan jejaring relasi industri bagi anggota.",
                "Berkompetisi secara aktif dan meraih podium tertinggi dalam Indonesian College Golf Championship (ICGC).",
                "Memasyarakatkan olahraga golf secara inklusif dan terjangkau di lingkungan civitas akademika UB."
              ].map((misiItem, idx) => (
                <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "var(--color-frost)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                  <CheckCircle2 size={18} color="#6386AC" style={{ flexShrink: 0, marginTop: "3px" }} />
                  <span>{misiItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div style={{ marginTop: "24px" }}>
          <div style={{ textAlign: "center", marginBottom: "36px" }}>
            <h3 style={{ fontSize: "1.6rem", color: "var(--color-ivory)", marginBottom: "8px" }}>
              Empat Pilar Keunggulan UBG
            </h3>
            <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem" }}>
              Fondasi yang membentuk kepribadian setiap anggota Brawijaya Golf
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "24px" }}>
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div key={idx} className="luxury-card" style={{ padding: "28px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(17, 29, 73, 0.9)",
                      border: "1px solid rgba(253, 246, 229, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "16px"
                    }}
                  >
                    <IconComp size={22} color="#FDF6E5" />
                  </div>
                  <h4 style={{ fontSize: "1.15rem", marginBottom: "10px", color: "var(--color-ivory)" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.7 }}>
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
