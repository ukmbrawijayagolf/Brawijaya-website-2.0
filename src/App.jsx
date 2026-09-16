import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProfileAbout from "./components/ProfileAbout";
import BentoPrestasi from "./components/BentoPrestasi";
import KegiatanSlider from "./components/KegiatanSlider";
import ELearningPreview from "./components/ELearningPreview";
import BoardOfDirectors from "./components/BoardOfDirectors";
import Footer from "./components/Footer";
import LoginModal from "./components/LoginModal";

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
      {/* Global Navigation */}
      <Navbar
        onOpenLogin={handleOpenLogin}
        onOpenRegister={handleOpenRegister}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Animated Typing, Tagline & Action Buttons */}
        <Hero
          onOpenRegister={handleOpenRegister}
        />

        {/* 2. Company Profile: Sejarah, Visi Misi, & Filosofi Albatros */}
        <ProfileAbout />

        {/* 3. "Dari UBG untuk Brawijaya" (Bento Showcase & Rekor Prestasi) */}
        <BentoPrestasi />

        {/* 4. "Kegiatan Kami" (Photo Slider & Event Carousel) */}
        <KegiatanSlider />

        {/* 5. E-Learning & Kurikulum Pegolf Mahasiswa */}
        <ELearningPreview
          onOpenRegister={handleOpenRegister}
        />

        {/* 6. Badan Pengurus Harian & Testimoni Anggota */}
        <BoardOfDirectors />
      </main>

      {/* Official Footer */}
      <Footer />

      {/* Login & Registrasi Member Modal (Firebase Integrated) */}
      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMode={modalMode}
      />
    </div>
  );
}
