import React from "react";
import { Users, Award, Shield, Mail } from "lucide-react";

export default function BoardOfDirectors() {
  const board = [
    {
      name: "Raditya Pratama",
      role: "Ketua Umum UKM Brawijaya Golf",
      faculty: "Fakultas Ilmu Administrasi '22",
      handicap: "HDCP 6.4",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Salsabila Amanda",
      role: "Wakil Ketua & Operasional Lapangan",
      faculty: "Fakultas Ekonomi dan Bisnis '22",
      handicap: "HDCP 9.8",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Coach Denny Wijaya, PGA",
      role: "Head Coach & Direktur Teknis",
      faculty: "PGA Teaching Professional",
      handicap: "Scratch Golfer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Farhan Mahendra",
      role: "Kepala Divisi Prestasi & Turnamen",
      faculty: "Fakultas Teknik '23",
      handicap: "HDCP 7.2",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const testimonials = [
    {
      quote: "Bergabung dengan UBG Albatros membuka relasi yang luar biasa luas dan mempercepat perkembangan swing saya dari nol hingga sekarang bisa bersaing di kejuaraan mahasiswa.",
      author: "Kevin Anindito",
      role: "Member Angkatan 2023 • FEB UB"
    },
    {
      quote: "Latihan rutin terstruktur dengan pelatih berlisensi PGA membuat atmosfer latihan di Araya selalu seru, kompetitif, dan penuh kehangatan kekeluargaan.",
      author: "Nabila Putri",
      role: "Atlet ICGC Putri • FIA UB"
    }
  ];

  return (
    <section className="section" style={{ position: "relative" }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Users size={14} color="#FDF6E5" />
            Badan Pengurus Harian
          </div>
          <h2 className="section-title">
            Struktur <span className="highlight">Kepengurusan & Pelatih</span>
          </h2>
          <p className="section-subtitle">
            Dikelola secara profesional oleh mahasiswa dan didampingi pelatih berlisensi untuk menjaga standar pembinaan tertinggi.
          </p>
        </div>

        {/* Board Members Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
            marginBottom: "64px"
          }}
        >
          {board.map((member, idx) => (
            <div
              key={idx}
              className="luxury-card"
              style={{
                padding: 0,
                overflow: "hidden",
                textAlign: "center"
              }}
            >
              <div style={{ height: "240px", position: "relative", overflow: "hidden" }}>
                <img
                  src={member.image}
                  alt={member.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 40%, rgba(17, 29, 73, 0.95) 100%)"
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "4px 12px",
                    borderRadius: "999px",
                    background: "rgba(253, 246, 229, 0.15)",
                    border: "1px solid rgba(253, 246, 229, 0.35)",
                    color: "var(--color-ivory)",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    whiteSpace: "nowrap"
                  }}
                >
                  {member.handicap}
                </div>
              </div>

              <div style={{ padding: "20px 20px 24px 20px" }}>
                <h3 style={{ fontSize: "1.2rem", color: "var(--color-ivory)", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <div style={{ fontSize: "0.85rem", color: "var(--color-slate)", fontWeight: 600, marginBottom: "4px" }}>
                  {member.role}
                </div>
                <div style={{ fontSize: "0.78rem", color: "var(--color-frost)" }}>
                  {member.faculty}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }}>
          {testimonials.map((testi, idx) => (
            <div
              key={idx}
              className="luxury-card"
              style={{
                padding: "32px",
                background: "rgba(17, 29, 73, 0.65)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              <p style={{ fontStyle: "italic", color: "var(--color-frost)", fontSize: "1rem", lineHeight: 1.8, marginBottom: "20px" }}>
                "{testi.quote}"
              </p>
              <div style={{ borderTop: "1px solid rgba(216, 223, 229, 0.12)", paddingTop: "14px" }}>
                <div style={{ fontWeight: 700, color: "var(--color-ivory)", fontSize: "0.95rem" }}>
                  {testi.author}
                </div>
                <div style={{ color: "var(--color-slate)", fontSize: "0.82rem" }}>
                  {testi.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
