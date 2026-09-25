import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
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

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("login");

  const handleOpenLogin = () => {
    setModalMode("login");
    setIsModalOpen(true);
  };

  const handleOpenRegister = () => {
    setModalMode("register");
    setIsModalOpen(true);
  };

  return (
    <div className="app-layout" style={{ minHeight: "100vh", position: "relative" }}>
      <ScrollToTop />

      {/* Global Navigation */}
      <Navbar
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
        </Routes>
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Login & Registrasi Member Modal */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
      />
    </div>
  );
}
