import React, { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "./services/firebase";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";
import ScrollToTop from "./components/ScrollToTop";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ELearningPage from "./pages/ELearningPage";
import KegiatanPage from "./pages/KegiatanPage";
import PrestasiPage from "./pages/PrestasiPage";
import ProfilePage from "./pages/ProfilePage";

const AttendancePage = lazy(() => import("./pages/AttendancePage"));

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login");
  const [isLoggedIn, setIsLoggedIn] = useState(() => Boolean(auth?.currentUser));
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!auth) return undefined;
    let isActive = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setIsLoggedIn(Boolean(user));
      setIsAdmin(false);
      if (!user?.email || !db) return;

      try {
        const userDocumentId = user.email.replace(/[^a-zA-Z0-9]/g, "_");
        const userSnapshot = await getDoc(doc(db, "users", userDocumentId));
        if (isActive) {
          setIsAdmin(userSnapshot.exists() && String(userSnapshot.data().role).trim().toLowerCase() === "admin");
        }
      } catch (error) {
        console.error("Gagal memeriksa role akun:", error);
      }
    });
    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  const handleOpenLogin = () => {
    setModalMode("login");
    setIsModalOpen(true);
  };

  const handleOpenRegister = () => {
    setModalMode("register");
    setIsModalOpen(true);
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => auth ? signOut(auth) : Promise.resolve();

  return (
    <div className="app-layout" style={{ minHeight: "100vh", position: "relative" }}>
      <ScrollToTop />

      {/* Global Navigation */}
      <Navbar
        isLoggedIn={isLoggedIn}
        isAdmin={isAdmin}
        onLogout={handleLogout}
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />

      {/* Page Routes */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage onOpenRegister={handleOpenRegister} />} />
          <Route path="/tentang" element={<AboutPage />} />
          <Route path="/elearning" element={<ELearningPage onOpenRegister={handleOpenRegister} />} />
          <Route path="/kegiatan" element={<KegiatanPage />} />
          <Route path="/prestasi" element={<PrestasiPage />} />
          <Route path="/profil" element={<ProfilePage onOpenLogin={handleOpenLogin} />} />
          <Route path="/presensi" element={(
            <Suspense fallback={<p role="status" style={{ padding: "140px 24px", color: "var(--color-frost)" }}>Memuat halaman presensi...</p>}>
              <AttendancePage onOpenLogin={handleOpenLogin} />
            </Suspense>
          )} />
        </Routes>
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Login & Registrasi Member Modal */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        initialMode={modalMode}
      />
    </div>
  );
}
