import React, { useEffect, useState } from "react";
import { BadgeCheck, GraduationCap, Mail, UserRound } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { QRCodeSVG } from "qrcode.react";
import { auth, db, isFirebaseConfigured } from "../services/firebase";

const PROFILE_FIELDS = [
  { key: "name", label: "Nama lengkap", icon: UserRound },
  { key: "email", label: "Email", icon: Mail },
  { key: "nim", label: "NIM", icon: BadgeCheck },
  { key: "faculty", label: "Fakultas", icon: GraduationCap },
  { key: "role", label: "Peran anggota", icon: BadgeCheck }
];

export default function ProfilePage({ onOpenLogin }) {
  const [status, setStatus] = useState("loading");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth || !db) {
      setStatus("unconfigured");
      return undefined;
    }

    let isActive = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setProfile(null);
        setStatus("signed-out");
        return;
      }

      const email = user.email || "";
      const documentId = email.replace(/[^a-zA-Z0-9]/g, "_");

      try {
        if (!documentId) {
          setStatus("not-found");
          return;
        }

        const snapshot = await getDoc(doc(db, "users", documentId));
        if (!isActive) return;

        if (!snapshot.exists()) {
          setProfile(null);
          setStatus("not-found");
          return;
        }

        const data = snapshot.data();
        setProfile({
          name: data.nama || data.name || user.displayName || "",
          email: data.email || email,
          nim: data.nim || "",
          faculty: data.fakultas || data.faculty || "",
          role: data.role || "anggota"
        });
        setStatus("ready");
      } catch (error) {
        console.error("Gagal memuat profil anggota:", error);
        if (isActive) setStatus("error");
      }
    });

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  const initials = profile?.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const pageMessage = {
    loading: "Memuat data profil...",
    unconfigured: "Konfigurasi Firebase belum tersedia. Silakan hubungi administrator.",
    error: "Data profil gagal dimuat. Periksa koneksi atau hubungi administrator.",
    "not-found": "Data akun belum ditemukan di database anggota. Silakan hubungi administrator."
  };

  return (
    <main style={{ padding: "128px 24px 88px" }}>
      <section style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <header style={{ marginBottom: "32px" }}>
          <p style={{ color: "var(--color-slate)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "8px" }}>
            Portal Anggota UBG
          </p>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: 1.2, marginBottom: "10px" }}>
            Profil Pengguna
          </h1>
          <p style={{ maxWidth: "680px", color: "var(--color-frost)", lineHeight: 1.7 }}>
            Informasi keanggotaan yang terhubung dengan akun Anda.
          </p>
        </header>

        {status === "signed-out" ? (
          <section style={{ padding: "28px", border: "1px solid rgba(216, 223, 229, 0.16)", borderRadius: "12px", background: "rgba(17, 29, 73, 0.42)" }}>
            <h2 style={{ fontSize: "1.2rem", marginBottom: "8px" }}>Masuk untuk melihat profil</h2>
            <p style={{ color: "var(--color-frost)", lineHeight: 1.6, marginBottom: "20px" }}>
              Data profil hanya tersedia untuk akun anggota yang sudah login.
            </p>
            <button type="button" className="btn btn-primary" onClick={onOpenLogin} style={{ padding: "12px 22px" }}>
              Masuk ke akun
            </button>
          </section>
        ) : status !== "ready" ? (
          <p role={status === "loading" ? "status" : "alert"} style={{ color: "var(--color-frost)", lineHeight: 1.7 }}>
            {pageMessage[status]}
          </p>
        ) : (
          <div className="profile-layout" style={{ display: "grid", gridTemplateColumns: "minmax(240px, 0.8fr) minmax(0, 1.6fr)", gap: "24px", alignItems: "start" }}>
            <aside
              style={{
                padding: "28px",
                border: "1px solid rgba(216, 223, 229, 0.16)",
                borderRadius: "12px",
                background: "linear-gradient(145deg, rgba(17, 29, 73, 0.76), rgba(7, 11, 24, 0.9))"
              }}
            >
              <div style={{ display: "grid", placeItems: "center", width: "72px", height: "72px", marginBottom: "18px", borderRadius: "50%", border: "1px solid rgba(253, 246, 229, 0.28)", background: "rgba(99, 134, 172, 0.22)", color: "var(--color-ivory)", fontSize: "1.4rem", fontWeight: 700 }}>
                {initials || <UserRound size={28} />}
              </div>
              <h2 style={{ fontSize: "1.25rem", lineHeight: 1.35, marginBottom: "6px", overflowWrap: "anywhere" }}>
                {profile.name || "Nama Anggota"}
              </h2>
              <p style={{ color: "var(--color-slate)", fontSize: "0.9rem", marginBottom: "22px", overflowWrap: "anywhere" }}>
                {profile.email}
              </p>
              <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", paddingTop: "18px", borderTop: "1px solid rgba(216, 223, 229, 0.14)" }}>
                <GraduationCap size={18} color="var(--color-slate)" style={{ flexShrink: 0, marginTop: "2px" }} />
                <span style={{ color: "var(--color-frost)", fontSize: "0.88rem", lineHeight: 1.5, overflowWrap: "anywhere" }}>
                  {profile.faculty || "Fakultas belum tersedia"}
                </span>
              </div>
              {profile.nim && (
                <div style={{ marginTop: "24px", paddingTop: "22px", borderTop: "1px solid rgba(216, 223, 229, 0.14)" }}>
                  <h3 style={{ color: "var(--color-ivory)", fontSize: "1rem", marginBottom: "6px" }}>QR Kehadiran</h3>
                  <p style={{ color: "var(--color-frost)", fontSize: "0.82rem", lineHeight: 1.5, marginBottom: "14px" }}>
                    Tunjukkan kode ini kepada admin saat presensi.
                  </p>
                  <div style={{ display: "grid", placeItems: "center", width: "fit-content", padding: "12px", borderRadius: "8px", background: "#fff" }}>
                    <QRCodeSVG value={profile.nim} size={176} level="M" includeMargin />
                  </div>
                </div>
              )}
            </aside>

            <section
              aria-labelledby="profile-details-title"
              style={{ padding: "28px", border: "1px solid rgba(216, 223, 229, 0.16)", borderRadius: "12px", background: "rgba(17, 29, 73, 0.42)" }}
            >
              <h2 id="profile-details-title" style={{ fontSize: "1.25rem", marginBottom: "6px" }}>Informasi Anggota</h2>  

              <dl className="profile-fields" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px", margin: 0 }}>
                {PROFILE_FIELDS.map(({ key, label, icon: Icon }) => (
                  <div key={key} style={{ minWidth: 0 }}>
                    <dt style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "8px", color: "var(--color-frost)", fontSize: "0.86rem", fontWeight: 600 }}>
                      <Icon size={16} aria-hidden="true" />
                      {label}
                    </dt>
                    <dd style={{ margin: 0, color: "var(--color-ivory)", overflowWrap: "anywhere" }}>
                      {profile[key] || "Belum tersedia"}
                    </dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        )}
      </section>

      <style>{`
        @media (max-width: 720px) {
          .profile-layout { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .profile-fields { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}