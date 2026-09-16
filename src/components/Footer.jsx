import { Mail, Phone, MapPin, ExternalLink, ArrowUp, Flag } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "linear-gradient(180deg, rgba(7, 11, 24, 0.95) 0%, #000000 100%)",
        borderTop: "1px solid rgba(216, 223, 229, 0.15)",
        padding: "80px 0 32px 0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "48px",
            marginBottom: "56px"
          }}
        >
          {/* Brand & About */}
          <div style={{ maxWidth: "340px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "18px" }}>
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "linear-gradient(135deg, #111D49 0%, #1e3375 100%)",
                  border: "1.5px solid #FDF6E5",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Flag size={20} color="#FDF6E5" />
              </div>
              <div>
                <div style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontWeight: 700, color: "var(--color-ivory)" }}>
                  BRAWIJAYA GOLF
                </div>
                <div style={{ fontSize: "0.7rem", letterSpacing: "0.2em", color: "var(--color-frost)" }}>
                  ALBATROS • EST. 2021
                </div>
              </div>
            </div>

            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "20px" }}>
              Unit Kegiatan Mahasiswa resmi di bawah naungan Rektorat Universitas Brawijaya, mewadahi minat, bakat, serta prestasi olahraga golf mahasiswa di kancah nasional.
            </p>

            <div style={{ display: "flex", gap: "12px" }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(17, 29, 73, 0.8)",
                  border: "1px solid rgba(216, 223, 229, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-ivory)",
                  transition: "all 0.2s ease"
                }}
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(17, 29, 73, 0.8)",
                  border: "1px solid rgba(216, 223, 229, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-ivory)",
                  transition: "all 0.2s ease"
                }}
                aria-label="YouTube"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
              <a
                href="mailto:golf@ub.ac.id"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "50%",
                  background: "rgba(17, 29, 73, 0.8)",
                  border: "1px solid rgba(216, 223, 229, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-ivory)",
                  transition: "all 0.2s ease"
                }}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "var(--color-ivory)", marginBottom: "20px", letterSpacing: "0.05em" }}>
              Navigasi Halaman
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { name: "Beranda Utama", href: "#home" },
                { name: "E-Learning & Kurikulum", href: "#elearning" },
                { name: "Profil UKM & Filosofi Albatros", href: "#about" },
                { name: "Galeri Prestasi Kampus", href: "#prestasi" },
                { name: "Agenda & Slide Kegiatan", href: "#kegiatan" }
              ].map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--color-frost)",
                      transition: "color 0.2s ease"
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-ivory)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-frost)")}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Home Courses & Partners */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "var(--color-ivory)", marginBottom: "20px", letterSpacing: "0.05em" }}>
              Home Course & Venue
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--color-frost)" }}>
              <li>⛳ Araya Golf & Family Club, Malang</li>
              <li>⛳ Taman Dayu Golf Club & Resort, Pasuruan</li>
              <li>⛳ Finna Golf & Country Club Resort</li>
              <li>⛳ Driving Range Dirgantara Malang</li>
            </ul>
          </div>

          {/* Secretariat Contact */}
          <div>
            <h4 style={{ fontSize: "1.05rem", color: "var(--color-ivory)", marginBottom: "20px", letterSpacing: "0.05em" }}>
              Sekretariat & Informasi
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "0.88rem", color: "var(--color-frost)" }}>
              <div style={{ display: "flex", gap: "10px" }}>
                <MapPin size={18} color="#6386AC" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>Gedung UKM Universitas Brawijaya Lt. 2, Jl. Veteran, Kota Malang, Jawa Timur 65145</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Phone size={18} color="#6386AC" style={{ flexShrink: 0 }} />
                <span>+62 812-3456-7890 (Humas UBG)</span>
              </div>
              <div style={{ display: "flex", gap: "10px" }}>
                <Mail size={18} color="#6386AC" style={{ flexShrink: 0 }} />
                <span>ukm.golf@ub.ac.id</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            paddingTop: "24px",
            borderTop: "1px solid rgba(216, 223, 229, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px"
          }}
        >
          <div style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} UKM Brawijaya Golf (ALBATROS) Universitas Brawijaya. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.82rem",
              color: "var(--color-ivory)",
              background: "rgba(17, 29, 73, 0.6)",
              padding: "8px 16px",
              borderRadius: "999px",
              border: "1px solid rgba(216, 223, 229, 0.2)",
              cursor: "pointer"
            }}
          >
            <span>Kembali ke Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
