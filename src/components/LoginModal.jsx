import React, { useState } from "react";
import { X, Lock, Mail, CheckCircle2, LogIn, AlertCircle } from "lucide-react";

export default function LoginModal({ isOpen, onClose }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
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
          maxWidth: "460px",
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
          aria-label="Tutup"
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ textAlign: "center", marginBottom: "26px", marginTop: "8px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              background: "rgba(99, 134, 172, 0.2)",
              border: "1px solid rgba(216, 223, 229, 0.25)",
              color: "var(--color-ivory)",
              marginBottom: "14px"
            }}
          >
            <LogIn size={22} />
          </div>
          <h3 style={{ fontSize: "1.45rem", color: "var(--color-ivory)", marginBottom: "6px" }}>
            Member Login
          </h3>
          <p style={{ fontSize: "0.85rem", color: "var(--color-frost)" }}>
            Portal Anggota & E-Learning UBG Albatros
          </p>
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
        <form onSubmit={handleLoginSubmit}>
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
      </div>
    </div>
  );
}
