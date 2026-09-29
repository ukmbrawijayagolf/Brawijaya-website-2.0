import React, { useState } from "react";
import { X, Lock, Mail, CheckCircle2, LogIn, AlertCircle } from "lucide-react";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { auth, db, isFirebaseConfigured } from "../services/firebase";

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Login form state
  const [loginData, setLoginData] = useState({
    email: "",
    nim: ""
  });

  if (!isOpen) return null;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      if (!isFirebaseConfigured) {
        setErrorMessage("Konfigurasi Firebase belum tersedia. Silakan hubungi administrator.");
        return;
      }

      const userCredential = await signInWithEmailAndPassword(
        auth,
        loginData.email.toLowerCase().trim(),
        loginData.nim.trim()
      );
      const user = userCredential.user;
      const documentId = (user.email || loginData.email).replace(/[^a-zA-Z0-9]/g, "_");
      const userSnapshot = await getDoc(doc(db, "users", documentId));

      if (!userSnapshot.exists()) {
        await signOut(auth);
        setErrorMessage("Data akun tidak ditemukan di database.");
        return;
      }

      const userData = userSnapshot.data();
      setSuccessMessage("Autentikasi berhasil. Selamat datang di Portal Anggota UBG Albatros.");
      onLoginSuccess?.(user, userData);
      navigate("/");
      setTimeout(() => {
        setSuccessMessage("");
        onClose();
      }, 1800);
    } catch (error) {
      console.error("Login Error:", error);
      if (["auth/invalid-credential", "auth/wrong-password", "auth/user-not-found", "auth/invalid-email"].includes(error.code)) {
        setErrorMessage("Email atau NIM yang Anda masukkan salah!");
      } else if (error.code === "auth/too-many-requests") {
        setErrorMessage("Terlalu banyak percobaan login. Silakan coba lagi nanti.");
      } else {
        setErrorMessage("Gagal login: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
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
              Email Student / Gmail
            </label>
            <div style={{ position: "relative" }}>
              <Mail size={18} color="#6386AC" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="email"
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
              Password (NIM)
            </label>
            <div style={{ position: "relative" }}>
              <Lock size={18} color="#6386AC" style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)" }} />
              <input
                type="password"
                required
                placeholder="Masukkan NIM Anda"
                value={loginData.nim}
                onChange={(e) => setLoginData({ ...loginData, nim: e.target.value })}
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
