import React, { useState } from "react";
import { Check, GraduationCap, Save, UserRound } from "lucide-react";

const PROFILE_STORAGE_KEY = "ubg_user_profile";
const EMPTY_PROFILE = {
  name: "",
  faculty: "",
  nim: "",
  ubgClass: ""
};

function readProfile() {
  try {
    const savedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
    return savedProfile ? { ...EMPTY_PROFILE, ...JSON.parse(savedProfile) } : EMPTY_PROFILE;
  } catch {
    return EMPTY_PROFILE;
  }
}

export default function ProfilePage() {
  const [profile, setProfile] = useState(readProfile);
  const [saved, setSaved] = useState(false);
  const initials = profile.name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");

  const updateField = (event) => {
    setSaved(false);
    setProfile((currentProfile) => ({
      ...currentProfile,
      [event.target.name]: event.target.value
    }));
  };

  const saveProfile = (event) => {
    event.preventDefault();
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
      setSaved(true);
    } catch {
      setSaved(false);
    }
  };

  const fieldStyle = {
    width: "100%",
    minHeight: "48px",
    padding: "12px 14px",
    borderRadius: "8px",
    border: "1px solid rgba(216, 223, 229, 0.22)",
    background: "rgba(7, 11, 24, 0.72)",
    color: "var(--color-ivory)",
    font: "inherit",
    fontSize: "0.94rem"
  };

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "var(--color-frost)",
    fontSize: "0.86rem",
    fontWeight: 600
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
            Lengkapi informasi keanggotaan Brawijaya Golf Anda.
          </p>
        </header>

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
            <p style={{ color: "var(--color-slate)", fontSize: "0.9rem", marginBottom: "22px" }}>
              {profile.ubgClass ? `Kelas ${profile.ubgClass}` : "Anggota Brawijaya Golf"}
            </p>
            <div style={{ display: "flex", gap: "10px", alignItems: "flex-start", paddingTop: "18px", borderTop: "1px solid rgba(216, 223, 229,  0.14)" }}>
              <GraduationCap size={18} color="var(--color-slate)" style={{ flexShrink: 0, marginTop: "2px" }} />
              <span style={{ color: "var(--color-frost)", fontSize: "0.88rem", lineHeight: 1.5, overflowWrap: "anywhere" }}>
                {profile.faculty || "Fakultas belum diisi"}
              </span>
            </div>
          </aside>

          <section
            aria-labelledby="profile-details-title"
            style={{ padding: "28px", border: "1px solid rgba(216, 223, 229, 0.16)", borderRadius: "12px", background: "rgba(17, 29, 73, 0.42)" }}
          >
            <h2 id="profile-details-title" style={{ fontSize: "1.25rem", marginBottom: "6px" }}>Informasi Anggota</h2>
            <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.6, marginBottom: "24px" }}>
              Data profil disimpan pada browser/perangkat ini dan belum tersambung ke akun login.
            </p>

            <form onSubmit={saveProfile}>
              <div className="profile-fields" style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "20px" }}>
                <label style={labelStyle}>
                  Nama lengkap
                  <input autoComplete="name" name="name" value={profile.name} onChange={updateField} placeholder="Masukkan nama lengkap" required style={{ ...fieldStyle, display: "block", marginTop: "8px" }} />
                </label>
                <label style={labelStyle}>
                  Fakultas
                  <input name="faculty" value={profile.faculty} onChange={updateField} placeholder="Contoh: Fakultas Ilmu Administrasi" required style={{ ...fieldStyle, display: "block", marginTop: "8px" }} />
                </label>
                <label style={labelStyle}>
                  NIM
                  <input autoComplete="off" inputMode="numeric" name="nim" value={profile.nim} onChange={updateField} placeholder="Masukkan NIM" required style={{ ...fieldStyle, display: "block", marginTop: "8px" }} />
                </label>
                <label style={labelStyle}>
                  Kelas di UBG
                  <select name="ubgClass" value={profile.ubgClass} onChange={updateField} required style={{ ...fieldStyle, display: "block", marginTop: "8px" }}>
                    <option value="" disabled>Pilih kelas</option>
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="Atlet UBG">Atlet UBG</option>
                  </select>
                </label>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", marginTop: "28px" }}>
                <button type="submit" className="btn btn-primary" style={{ padding: "12px 22px", fontSize: "0.92rem" }}>
                  <Save size={17} />
                  Simpan Profil
                </button>
                {saved && (
                  <span role="status" style={{ display: "inline-flex", alignItems: "center", gap: "7px", color: "var(--color-frost)", fontSize: "0.88rem" }}>
                    <Check size={17} color="var(--color-slate)" />
                    Profil tersimpan di perangkat ini
                  </span>
                )}
              </div>
            </form>
          </section>
        </div>
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