import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin, Users, Play, Pause, Sparkles, X, Trophy } from "lucide-react";
import { INITIAL_KEGIATAN } from "../services/kegiatanService";

export default function KegiatanSlider({ onSelectKegiatan }) {
  const [kegiatanList] = useState(INITIAL_KEGIATAN);
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeModalItem, setActiveModalItem] = useState(null);

  const categories = ["Semua", "Turnamen", "Pelatihan", "Latihan", "Seminar"];

  const filteredKegiatan = selectedCategory === "Semua" 
    ? kegiatanList 
    : kegiatanList.filter(item => item.category === selectedCategory);

  // Autoplay handler
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % filteredKegiatan.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying, filteredKegiatan.length]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? filteredKegiatan.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev + 1) % filteredKegiatan.length);
  };

  return (
    <section id="kegiatan" className="section" style={{ position: "relative", overflow: "hidden" }}>
      {/* Background ambient lighting */}
      <div
        style={{
          position: "absolute",
          top: "40%",
          right: "-10%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(17, 29, 73, 0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none"
        }}
      />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={14} color="#FDF6E5" />
            Agenda & Dokumentasi
          </div>
          <h2
            className="section-title"
            style={{
              fontStyle: "italic",
              fontFamily: "var(--font-serif)"
            }}
          >
            Kegiatan Kami
          </h2>
          <p className="section-subtitle">
            Mulai dari turnamen bergengsi antar perguruan tinggi, pelatihan manajemen hole, turnamen internal, hingga klinik driving range mingguan.
          </p>
        </div>

        {/* Category Filter Pills & Controls */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px"
          }}
        >
          {/* Filters */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentIndex(0);
                }}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                  background: selectedCategory === cat ? "var(--color-ivory)" : "rgba(17, 29, 73, 0.7)",
                  color: selectedCategory === cat ? "var(--color-navy)" : "var(--color-frost)",
                  border: selectedCategory === cat ? "1px solid #FFFFFF" : "1px solid rgba(216, 223, 229, 0.2)",
                  boxShadow: selectedCategory === cat ? "0 4px 15px rgba(253, 246, 229, 0.3)" : "none"
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Slider Navigation Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(17, 29, 73, 0.7)",
                border: "1px solid rgba(216, 223, 229, 0.2)",
                color: "var(--color-ivory)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              title={isPlaying ? "Jeda Slider Otomatis" : "Putar Slider Otomatis"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} />}
            </button>

            <button
              onClick={handlePrev}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "rgba(17, 29, 73, 0.7)",
                border: "1px solid rgba(216, 223, 229, 0.2)",
                color: "var(--color-ivory)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease"
              }}
              aria-label="Kegiatan Sebelumnya"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={handleNext}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background: "var(--color-ivory)",
                color: "var(--color-navy)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 15px rgba(253, 246, 229, 0.3)"
              }}
              aria-label="Kegiatan Selanjutnya"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Featured Card Slide Spotlight */}
        {filteredKegiatan.length > 0 && (
          <div
            className="luxury-card"
            style={{
              padding: 0,
              overflow: "hidden",
              marginBottom: "32px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              minHeight: "440px"
            }}
          >
            {/* Image Box */}
            <div style={{ position: "relative", minHeight: "320px", overflow: "hidden" }}>
              <img
                src={filteredKegiatan[currentIndex].image}
                alt={filteredKegiatan[currentIndex].title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(90deg, rgba(7, 11, 24, 0.1) 0%, rgba(17, 29, 73, 0.75) 100%)"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  padding: "6px 14px",
                  borderRadius: "999px",
                  background: "rgba(17, 29, 73, 0.85)",
                  border: "1px solid rgba(253, 246, 229, 0.4)",
                  color: "var(--color-ivory)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  backdropFilter: "blur(6px)"
                }}
              >
                {filteredKegiatan[currentIndex].category}
              </div>
            </div>

            {/* Content Box */}
            <div
              style={{
                padding: "44px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                background: "rgba(17, 29, 73, 0.95)"
              }}
            >
              <div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    color: "var(--color-ivory)",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    marginBottom: "12px",
                    background: "rgba(99, 134, 172, 0.2)",
                    padding: "4px 12px",
                    borderRadius: "6px"
                  }}
                >
                  <Trophy size={14} color="#FDF6E5" />
                  {filteredKegiatan[currentIndex].highlight}
                </div>

                <h3
                  style={{
                    fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)",
                    color: "var(--color-ivory)",
                    marginBottom: "16px",
                    lineHeight: 1.3
                  }}
                >
                  {filteredKegiatan[currentIndex].title}
                </h3>

                <p
                  style={{
                    color: "var(--color-frost)",
                    fontSize: "0.96rem",
                    lineHeight: 1.8,
                    marginBottom: "24px"
                  }}
                >
                  {filteredKegiatan[currentIndex].description}
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "28px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                    <Calendar size={16} color="#6386AC" />
                    <span>{filteredKegiatan[currentIndex].date}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                    <MapPin size={16} color="#6386AC" />
                    <span>{filteredKegiatan[currentIndex].location}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-secondary)", fontSize: "0.88rem" }}>
                    <Users size={16} color="#6386AC" />
                    <span>{filteredKegiatan[currentIndex].participants}</span>
                  </div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "14px" }}>
                <button
                  onClick={() => setActiveModalItem(filteredKegiatan[currentIndex])}
                  className="btn btn-primary"
                  style={{ padding: "12px 24px" }}
                >
                  Lihat Dokumentasi Lengkap
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Thumbnail Carousel Track */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "16px"
          }}
        >
          {filteredKegiatan.map((item, idx) => {
            const isSelected = idx === currentIndex;
            return (
              <div
                key={item.id}
                onClick={() => setCurrentIndex(idx)}
                style={{
                  borderRadius: "14px",
                  overflow: "hidden",
                  cursor: "pointer",
                  border: isSelected ? "2px solid var(--color-ivory)" : "1px solid rgba(216, 223, 229, 0.15)",
                  background: "rgba(17, 29, 73, 0.6)",
                  transition: "all 0.3s ease",
                  transform: isSelected ? "translateY(-4px)" : "none",
                  boxShadow: isSelected ? "0 8px 25px rgba(253, 246, 229, 0.25)" : "none"
                }}
              >
                <div style={{ height: "110px", position: "relative" }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: isSelected ? "rgba(17, 29, 73, 0.3)" : "rgba(0, 0, 0, 0.45)"
                    }}
                  />
                </div>
                <div style={{ padding: "12px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--color-slate)", fontWeight: 700, textTransform: "uppercase" }}>
                    {item.category}
                  </div>
                  <div
                    style={{
                      fontSize: "0.85rem",
                      fontWeight: 600,
                      color: isSelected ? "var(--color-ivory)" : "var(--color-frost)",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis"
                    }}
                  >
                    {item.title}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Lightbox Popup */}
        {activeModalItem && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 2500,
              background: "rgba(0, 0, 0, 0.85)",
              backdropFilter: "blur(14px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px"
            }}
            onClick={() => setActiveModalItem(null)}
          >
            <div
              className="luxury-card"
              style={{
                maxWidth: "680px",
                width: "100%",
                padding: "36px",
                background: "rgba(17, 29, 73, 0.98)",
                border: "1.5px solid var(--border-gold)",
                boxShadow: "0 30px 70px rgba(0, 0, 0, 0.95)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
                <div
                  style={{
                    padding: "4px 14px",
                    borderRadius: "999px",
                    background: "rgba(99, 134, 172, 0.25)",
                    color: "var(--color-ivory)",
                    fontSize: "0.82rem",
                    fontWeight: 700
                  }}
                >
                  {activeModalItem.category} • {activeModalItem.highlight}
                </div>
                <button
                  onClick={() => setActiveModalItem(null)}
                  style={{ color: "var(--color-frost)", cursor: "pointer", padding: "4px" }}
                >
                  <X size={24} />
                </button>
              </div>

              <div style={{ borderRadius: "14px", overflow: "hidden", marginBottom: "24px", maxHeight: "320px" }}>
                <img
                  src={activeModalItem.image}
                  alt={activeModalItem.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h3 style={{ fontSize: "1.6rem", color: "var(--color-ivory)", marginBottom: "12px" }}>
                {activeModalItem.title}
              </h3>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "18px", color: "var(--color-frost)", fontSize: "0.88rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <Calendar size={15} color="#6386AC" /> {activeModalItem.date}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <MapPin size={15} color="#6386AC" /> {activeModalItem.location}
                </div>
              </div>

              <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.95rem", marginBottom: "28px" }}>
                {activeModalItem.description}
              </p>

              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => setActiveModalItem(null)}
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: "12px" }}
                >
                  Tutup
                </button>
                <button
                  onClick={() => {
                    setActiveModalItem(null);
                    window.location.href = "#elearning";
                  }}
                  className="btn btn-primary"
                  style={{ flex: 1, padding: "12px" }}
                >
                  Lihat Modul Terkait
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
