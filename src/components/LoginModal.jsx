import React, { useState } from "react";
import { X, Lock, Mail, User, Phone, GraduationCap, CheckCircle2, Sparkles, LogIn, AlertCircle } from "lucide-react";
import { submitRegistration } from "../services/kegiatanService";

export default function LoginModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode); // "login" | "register"
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // Registration form state
  const [regData, setRegData] = useState({
    fullName: "",
    nim: "",
    faculty: "Fakultas Ekonomi dan Bisnis (FEB)",
    phone: "",
    experience: "Pemula (Belum pernah bermain)",
    motivation: ""
  });

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Autentikasi Berhasil! Selamat datang di Portal Anggota UBG Albatros.");
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 1800);
    }, 1000);
  };

  const handleRegSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const res = await submitRegistration(regData);
      setIsSubmitting(false);
      setSuccessMessage(
        `Pendaftaran Berhasil Terkirim! Nomor Registrasi: ${res.id.slice(0, 10)}. Tim pengurus UBG akan menghubungi via WhatsApp.`
      );
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 2500);
    } catch (err) {
      setIsSubmitting(false);
      setErrorMessage("Terjadi kendala saat mengirimkan data. Silakan coba lagi.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 3000,
        backgroundColor: "rgba(0, 0, 0, 0.85)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px"
      }}
      onClick={onClose}
    >
      <div
        className="luxury-card"
        style={{
          width: "100%",
          maxWidth: "520px",
          background: "linear-gradient(145deg, rgba(17, 29, 73, 0.98) 0%, rgba(7, 11, 24, 0.98) 100%)",
          border: "1.5px solid var(--border-gold)",
          borderRadius: "var(--radius-xl)",
          padding: "36px",
          boxShadow: "0 25px 60px rgba(0, 0, 0, 0.95)",
          position: "relative"
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "rgba(99, 134, 172, 0.15)",
            border: "1px solid rgba(216, 223, 229, 0.2)",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-frost)",
            cursor: "pointer"
          }}
        >
          <X size={18} />
        </button>

        {/* Tab Switch: Login vs Register */}
        <div
          style={{
            display: "flex",
            background: "rgba(7, 11, 24, 0.6)",
            padding: "4px",
            borderRadius: "999px",
            border: "1px solid rgba(216, 223, 229, 0.15)",
            marginBottom: "28px"
          }}
        >
          <button
            type="button"
            onClick={() => {
              setMode("login");
              setSuccessMessage("");
              setErrorMessage("");
            }}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "999px",
              fontSize: "0.88rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.25s ease",
              background: mode === "login" ? "var(--color-ivory)" : "transparent",
              color: mode === "login" ? "var(--color-navy)" : "var(--color-frost)"
            }}
          >
            Member Login
          </button>
          <button
            type="button"
            onClick={() => {
              setMode("register");
              setSuccessMessage("");
              setErrorMessage("");
            }}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "999px",
              fontSize: "0.88rem",
              fontWeight: 700,
              cursor: "pointer",
              transition: "all 0.25s ease",
              background: mode === "register" ? "var(--color-ivory)" : "transparent",
              color: mode === "register" ? "var(--color-navy)" : "var(--color-frost)"
            }}
          >
            Pendaftaran Anggota
          </button>
        </div>

        {/* Success / Error Banners */}
        {successMessage && (
          <div
            style={{
              padding: "14px 18px",
              borderRadius: "10px",
              background: "rgba(46, 125, 50, 0.2)",
              border: "1px solid rgba(129, 199, 132, 0.5)",
              color: "#e8f5e9",
              fontSize: "0.88rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}
          >
            <CheckCircle2 size={20} color="#81c784" />
            <span>{successMessage}</span>
          </div>
        )}

        {errorMessage && (
          <div
            style={{
              padding: "14px 18px",
              borderRadius: "10px",
              background: "rgba(198, 40, 40, 0.2)",
              border: "1px solid rgba(229, 115, 115, 0.5)",
              color: "#ffebee",
              fontSize: "0.88rem",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px"
            }}
          >
            <AlertCircle size={20} color="#e57373" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* LOGIN FORM */}
        {mode === "login" ? (
          <form onSubmit={handleLoginSubmit}>
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              <h3 style={{ fontSize: "1.45rem", color: "var(--color-ivory)", marginBottom: "6px" }}>
                Portal Anggota & E-Learning
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-frost)" }}>
                Masukkan akun terdaftar UKM Brawijaya Golf Albatros
              </p>
            </div>

            <div style={{ marginBottom: "18px" }}>
              <label style={{ display: "block", fontSize: "0.82rem", color: "var(--color-frost)", marginBottom: "8px", fontWeight: 600 }}>
                Email Mahasiswa / NIM
              </label>
              <div style={{ position: "relative" }}>
                <Mail size={18} color="#6386AC" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  type="text"
                  required
                  placeholder="contoh@student.ub.ac.id"
                  value={loginData.email}
                  onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 42px",
                    borderRadius: "10px",
                    background: "rgba(7, 11, 24, 0.8)",
                    border: "1px solid rgba(216, 223, 229, 0.2)",
                    color: "var(--color-ivory)",
                    fontSize: "0.92rem",
                    outline: "none"
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label style={{ display: "block", fontSize: "0.82rem", color: "var(--color-frost)", marginBottom: "8px", fontWeight: 600 }}>
                Kata Sandi
              </label>
              <div style={{ position: "relative" }}>
                <Lock size={18} color="#6386AC" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={loginData.password}
                  onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "12px 14px 12px 42px",
                    borderRadius: "10px",
                    background: "rgba(7, 11, 24, 0.8)",
                    border: "1px solid rgba(216, 223, 229, 0.2)",
                    color: "var(--color-ivory)",
                    fontSize: "0.92rem",
                    outline: "none"
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: "100%", padding: "14px", fontSize: "0.95rem" }}
            >
              <LogIn size={18} />
              {isSubmitting ? "Memverifikasi..." : "Masuk ke Akun"}
            </button>
          </form>
        ) : (
          /* REGISTRATION FORM */
          <form onSubmit={handleRegSubmit}>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <h3 style={{ fontSize: "1.45rem", color: "var(--color-ivory)", marginBottom: "6px" }}>
                Formulir Calon Anggota
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--color-frost)" }}>
                Terbuka bagi seluruh mahasiswa aktif Universitas Brawijaya
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "14px" }}>
              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--color-frost)", marginBottom: "6px", fontWeight: 600 }}>
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  required
                  placeholder="Nama sesuai KTM"
                  value={regData.fullName}
                  onChange={(e) => setRegData({ ...regData, fullName: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    background: "rgba(7, 11, 24, 0.8)",
                    border: "1px solid rgba(216, 223, 229, 0.2)",
                    color: "var(--color-ivory)",
                    fontSize: "0.88rem",
                    outline: "none"
                  }}
                />
              </div>

              <div>
                <label style={{ display: "block", fontSize: "0.8rem", color: "var(--color-frost)", marginBottom: "6px", fontWeight: 600 }}>
                  NIM Mahasiswa
                </label>
                <input
                  type="text"
                  required
                  placeholder="2350xxxx"
                  value={regData.nim}
                  onChange={(e) => setRegData({ ...regData, nim: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 12px",
                    borderRadius: "8px",
                    background: "rgba(7, 11, 24, 0.8)",
                    border: "1px solid rgba(216, 223, 229, 0.2)",
                    color: "var(--color-ivory)",
                    fontSize: "0.88rem",
                    outline: "none"
                  }}
                />
              </div>
            </div>

            <div style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", fontSize: "0.8rem", color: "var(--color-frost)", marginBottom: "6px", fontWeight: 600 }}>
                Fakultas di Universitas Brawijaya
              </label>
              <select
                value={regData.faculty}
                onChange={(e) => setRegData({ ...regData, faculty: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "rgba(7, 11, 24, 0.95)",
                  border: "1px solid rgba(216, 223, 229, 0.2)",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  outline: "none"
                }}
              >
                <option value="Fakultas Ekonomi dan Bisnis (FEB)">Fakultas Ekonomi dan Bisnis (FEB)</option>
                <option value="Fakultas Hukum (FH)">Fakultas Hukum (FH)</option>
                <option value="Fakultas Ilmu Administrasi (FIA)">Fakultas Ilmu Administrasi (FIA)</option>
                <option value="Fakultas Teknik (FT)">Fakultas Teknik (FT)</option>
                <option value="Fakultas Ilmu Komputer (FILKOM)">Fakultas Ilmu Komputer (FILKOM)</option>
                <option value="Fakultas Kedokteran (FK)">Fakultas Kedokteran (FK)</option>
                <option value="Fakultas Ilmu Sosial dan Ilmu Politik (FISIP)">Fakultas Ilmu Sosial dan Ilmu Politik (FISIP)</option>
                <option value="Fakultas Lainnya">Fakultas Lainnya di UB</option>
              </select>
            </div>

            <div style={{ marginBottom: "14px" }}>
              <label style={{ display: "block", fontSize: "0.8rem", color: "var(--color-frost)", marginBottom: "6px", fontWeight: 600 }}>
                Nomor WhatsApp Aktif
              </label>
              <input
                type="tel"
                required
                placeholder="081234567890"
                value={regData.phone}
                onChange={(e) => setRegData({ ...regData, phone: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "rgba(7, 11, 24, 0.8)",
                  border: "1px solid rgba(216, 223, 229, 0.2)",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  outline: "none"
                }}
              />
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "0.8rem", color: "var(--color-frost)", marginBottom: "6px", fontWeight: 600 }}>
                Pengalaman Bermain Golf
              </label>
              <select
                value={regData.experience}
                onChange={(e) => setRegData({ ...regData, experience: e.target.value })}
                style={{
                  width: "100%",
                  padding: "10px 12px",
                  borderRadius: "8px",
                  background: "rgba(7, 11, 24, 0.95)",
                  border: "1px solid rgba(216, 223, 229, 0.2)",
                  color: "var(--color-ivory)",
                  fontSize: "0.88rem",
                  outline: "none"
                }}
              >
                <option value="Pemula (Belum pernah bermain)">Pemula (Belum pernah bermain)</option>
                <option value="Pernah ke Driving Range">Pernah ke Driving Range beberapa kali</option>
                <option value="Pernah turun lapangan 18 Hole">Pernah turun lapangan 18 Hole</option>
                <option value="Atlet Berpengalaman (Punya Handicap Resmi)">Atlet Berpengalaman (Punya Handicap Resmi)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary"
              style={{ width: "100%", padding: "14px", fontSize: "0.95rem" }}
            >
              <Sparkles size={18} />
              {isSubmitting ? "Mengirim Data ke Firebase..." : "Kirim Formulir Pendaftaran"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
