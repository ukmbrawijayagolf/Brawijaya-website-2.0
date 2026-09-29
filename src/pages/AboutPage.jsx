import React from "react";
import { Link } from "react-router-dom";
import { Shield, Target, Award, HeartHandshake, Flame, Users, Quote } from "lucide-react";
import ketuaUmumImage from "../assets/pengurus/ketuaumum.png";
import wakilKetuaUmumImage from "../assets/pengurus/wakilketuaumu.png";
import bendaharaImage from "../assets/pengurus/bendahara 1.png";
import bendahara2Image from "../assets/pengurus/bendahara 2.png";
import sekretarisImage from "../assets/pengurus/sekretaris.png";
import strategicRelationImage from "../assets/pengurus/strategicnrelation.png";
import humanCapitalImage from "../assets/pengurus/humancapital.png";
import academicImage from "../assets/pengurus/academic.png";
import mediaCommunicationImage from "../assets/pengurus/mediancommunication.png";

export default function AboutPage() {
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

  const leadership = {
    topTier: [
      {
        name: "Naufaldi Alfaghani",
        role: "Ketua Umum",
        image: ketuaUmumImage
      },
      {
        name: "Tsaabitha Puti Calista",
        role: "Wakil Ketua Umum",
        image: wakilKetuaUmumImage
      }
    ],
    midTier: [
      {
        name: "Azzahra Dineza Giviantari",
        role: "Bendahara 1",
        image: bendaharaImage
      },
      {
        name: "Nabila Regita Cahyani Az zahro",
        role: "Bendahara 2",
        image: bendahara2Image
      },
      {
        name: "Nadiyah Nasywa Amirah",
        role: "Sekretaris",
        image: sekretarisImage
      }
    ],
    divisionTier: [
      {
        name: "Candra Van Deo",
        role: "Ketua Divisi Strategic and External Relation",
        image: strategicRelationImage
      },
      {
        name: "Ghani Akbar Ariyadi Putra",
        role: "Ketua Divisi Human Capital",
        image: humanCapitalImage
      },
      {
        name: "Byrne Paddy Azalea",
        role: "Ketua Divisi Academic",
        image: academicImage
      },
      {
        name: "Qoid Kafi",
        role: "Ketua Divisi Media and Communication",
        image: mediaCommunicationImage
      }
    ]
  };

  const renderMemberCard = (member, idx) => (
    <div
      key={idx}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        width: "200px"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "250px",
          borderRadius: "18px",
          overflow: "hidden",
          border: "1px solid rgba(216, 223, 229, 0.2)",
          background: "rgba(99, 134, 172, 0.15)",
          boxShadow: "var(--shadow-md)",
          marginBottom: "14px"
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease"
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>
      <h3
        style={{
          fontSize: "1.05rem",
          fontWeight: 600,
          color: "var(--color-ivory)",
          marginBottom: "4px"
        }}
      >
        {member.name}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          color: "var(--color-slate)",
          fontWeight: 500,
          margin: 0,
          textTransform: "capitalize",
          lineHeight: 1.4
        }}
      >
        {member.role}
      </p>
    </div>
  );

  const testimonials = [
    // {
    //   quote: "Bergabung dengan UBG Albatros membuka relasi yang luar biasa luas dan mempercepat perkembangan swing saya dari nol hingga sekarang bisa bersaing di kejuaraan mahasiswa.",
    //   author: "Kevin Anindito",
    //   role: "Member Angkatan 2023 • FEB UB"
    // },
    // {
    //   quote: "Latihan rutin terstruktur dengan pelatih berlisensi PGA membuat atmosfer latihan di Araya selalu seru, kompetitif, dan penuh kehangatan kekeluargaan.",
    //   author: "Nabila Putri",
    //   role: "Atlet ICGC Putri • FIA UB"
    // }
  ];

  return (
    <div style={{ paddingTop: "120px", paddingBottom: "100px" }}>
      {/* Page Header */}
      <section className="container" style={{ marginBottom: "64px" }}>
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
            Profil Organisasi
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
            Mengenal Lebih Dekat Brawijaya Golf
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--color-frost)", lineHeight: 1.8, fontWeight: 300 }}>
            Unit Kegiatan Mahasiswa resmi Universitas Brawijaya yang mewadahi prestasi olahraga, penanaman etiket kehormatan, serta pembangunan jejaring antarmahasiswa sejak tahun 2021.
          </p>
        </div>
      </section>

      {/* Philosophy & History */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div
          className="luxury-card"
          style={{
            padding: "48px 40px",
            background: "linear-gradient(135deg, rgba(17, 29, 73, 0.85) 0%, rgba(7, 11, 24, 0.95) 100%)",
            border: "1px solid rgba(253, 246, 229, 0.25)"
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "48px",
              alignItems: "center"
            }}
          >
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
                  fontWeight: 600,
                  marginBottom: "16px"
                }}
              >
                <Flame size={14} color="#FDF6E5" />
                FILOSOFI LOGO & IDENTITAS
              </div>
              <div style={{ marginBottom: "18px" }}>
                <img
                  src="/assets/logo/albatros_ivory.png"
                  alt="Albatros"
                  style={{
                    height: "clamp(32px, 4.5vw, 46px)",
                    width: "auto",
                    objectFit: "contain",
                    filter: "drop-shadow(0 4px 16px rgba(253, 246, 229, 0.25))"
                  }}
                />
              </div>
              <h2
                style={{
                  fontSize: "clamp(1.7rem, 2.5vw, 2.2rem)",
                  fontFamily: "var(--font-display)",
                  marginBottom: "16px",
                  color: "var(--color-ivory)",
                  fontWeight: 700
                }}
              >
                Pencapaian Langka, Dedikasi Tanpa Batas
              </h2>
              <p style={{ color: "var(--color-frost)", marginBottom: "16px", lineHeight: 1.8, fontWeight: 300 }}>
                Dalam olahraga golf dunia, <strong>Albatross</strong> (atau <em>double eagle</em>) adalah skor 3 pukulan di bawah par (-3) pada satu hole. Peluang mencetaknya diperkirakan <strong>1 banding 6.000.000</strong> — jauh lebih langka daripada Hole-in-One.
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, fontWeight: 300 }}>
                Filosofi ini menjadi kompas UKM Brawijaya Golf: menanamkan keyakinan bahwa mahasiswa Universitas Brawijaya mampu menorehkan prestasi gemilang yang luar biasa melalui latihan tekun, kalkulasi tajam, dan karakter tangguh di setiap tantangan fairway.
              </p>
            </div>

            <div
              style={{
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid rgba(216, 223, 229, 0.2)",
                boxShadow: "var(--shadow-lg)"
              }}
            >
              <img
                src="/assets/fotopengurus.webp"
                alt="Filosofi Golf UKM Brawijaya"
                style={{
                  width: "100%",
                  height: "360px",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visi & Misi */}
      <section className="container" style={{ marginBottom: "80px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px"
          }}
        >
          <div className="luxury-card" style={{ padding: "40px" }}>
            <h3
              style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--color-ivory)",
                marginBottom: "16px"
              }}
            >
              Visi Kami
            </h3>
            <p style={{ color: "var(--color-frost)", lineHeight: 1.8, fontSize: "1rem", fontWeight: 300 }}>
              Menjadikan UKM Brawijaya Golf sebagai rumah yang nyaman bagi seluruh anggota dan pengurus untuk bertumbuh, berprestasi, dan mempererat kekeluargaan.
               </p>
          </div>

          <div className="luxury-card" style={{ padding: "40px" }}>
            <h3
              style={{
                fontSize: "1.4rem",
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                color: "var(--color-ivory)",
                marginBottom: "16px"
              }}
            >
              Misi Kami
            </h3>
            <ul style={{ color: "var(--color-frost)", lineHeight: 1.8, paddingLeft: "20px", fontWeight: 300 }}>
              <li style={{ marginBottom: "10px" }}>
                Membangun Kekeluargaan dan Kepercayaan
                </li>
              <li style={{ marginBottom: "10px" }}>
               Mencetak Prestasi yang Gemilang
               </li>
              <li>
                Memperkuat Branding & Kemandirian
                </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4 Pilar Utama
      <section className="container" style={{ marginBottom: "80px" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--color-ivory)",
              marginBottom: "12px"
            }}
          >
            Nilai & Pilar Luhur
          </h2>
          <p style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            Landasan etika dan sportivitas yang kami jaga dalam setiap ayunan dan langkah di lapangan.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px"
          }}
        >
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div key={idx} className="luxury-card" style={{ padding: "32px" }}>
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background: "rgba(99, 134, 172, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "20px"
                  }}
                >
                  <Icon size={24} color="#FDF6E5" />
                </div>
                <h3 style={{ fontSize: "1.15rem", color: "var(--color-ivory)", marginBottom: "10px", fontWeight: 600 }}>
                  {pil.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.88rem", lineHeight: 1.7, fontWeight: 300 }}>
                  {pil.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Kepengurusan Brawijaya Golf */}
      <section className="container" style={{ marginBottom: "100px" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 48px auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 2.8vw, 2.3rem)",
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "var(--color-ivory)",
              marginBottom: "12px"
            }}
          >
            Kepengurusan Brawijaya Golf
          </h2>
          <p style={{ color: "var(--text-secondary)", fontWeight: 300 }}>
            Badan Pengurus Harian (BPH) dan Ketua Divisi UKM Brawijaya Golf periode aktif.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "48px"
          }}
        >
          {/* Baris 1: Ketua Umum & Wakil Ketua Umum */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "36px"
            }}
          >
            {leadership.topTier.map(renderMemberCard)}
          </div>

          {/* Baris 2: Bendahara & Sekretaris */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "36px"
            }}
          >
            {leadership.midTier.map(renderMemberCard)}
          </div>

          {/* Baris 3: 4 Ketua Divisi */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: "28px"
            }}
          >
            {leadership.divisionTier.map(renderMemberCard)}
          </div>
        </div>
      </section>

      {/* Member Testimonials */}
      <section className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px"
          }}
        >
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="luxury-card"
              style={{
                padding: "36px",
                background: "rgba(17, 29, 73, 0.4)",
                border: "1px solid rgba(216, 223, 229, 0.12)"
              }}
            >
              <Quote size={32} color="#6386AC" style={{ opacity: 0.6, marginBottom: "16px" }} />
              <p style={{ color: "var(--color-frost)", fontSize: "0.95rem", lineHeight: 1.8, fontStyle: "italic", marginBottom: "20px", fontWeight: 300 }}>
                "{t.quote}"
              </p>
              <div>
                <div style={{ fontWeight: 600, color: "var(--color-ivory)", fontSize: "0.95rem" }}>
                  {t.author}
                </div>
                <div style={{ color: "var(--color-slate)", fontSize: "0.82rem" }}>
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
