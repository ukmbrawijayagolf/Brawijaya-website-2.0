import React, { useState, useEffect } from "react";
import { Menu, X, Shield, ChevronRight, UserCheck, Sparkles } from "lucide-react";

export default function Navbar({ onOpenLogin, onOpenRegister, activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Prestasi", href: "#prestasi" },
    { label: "Kegiatan", href: "#kegiatan" },
    { label: "E-Learning", href: "#elearning" }
  ];

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.35s ease",
        padding: isScrolled ? "14px 0" : "24px 0",
        backgroundColor: isScrolled ? "rgba(17, 29, 73, 0.88)" : "rgba(7, 11, 24, 0.45)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        borderBottom: isScrolled
          ? "1px solid rgba(216, 223, 229, 0.18)"
          : "1px solid rgba(216, 223, 229, 0.06)",
        boxShadow: isScrolled ? "0 10px 30px rgba(0, 0, 0, 0.45)" : "none"
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Brand Logo & Name */}
        <a
          href="#home"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none"
          }}
        >
          {/* Custom Winged Golf Emblem */}
          <div
            style={{
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <img src="/assets/logo/logo_ubg.png" alt="" style={{ width: "50px", height: "50px" }} />
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                color: "var(--color-ivory)",
                display: "flex",
                alignItems: "center",
                gap: "6px"
              }}
            >
              BRAWIJAYA GOLF
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          style={{
            display: "none",
            alignItems: "center",
            gap: "36px"
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                color: "var(--color-frost)",
                transition: "all 0.25s ease",
                position: "relative",
                padding: "6px 0"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-ivory)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--color-frost)";
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Login & Gabung) */}
        <div
          style={{
            display: "none",
            alignItems: "center",
            gap: "14px"
          }}
          className="desktop-actions"
        >
          <button
            onClick={onOpenLogin}
            style={{
              padding: "10px 20px",
              borderRadius: "999px",
              fontSize: "0.9rem",
              fontWeight: 600,
              color: "var(--color-ivory)",
              background: "rgba(99, 134, 172, 0.15)",
              border: "1px solid rgba(216, 223, 229, 0.25)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(99, 134, 172, 0.35)";
              e.currentTarget.style.borderColor = "var(--color-ivory)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(99, 134, 172, 0.15)";
              e.currentTarget.style.borderColor = "rgba(216, 223, 229, 0.25)";
            }}
          >
            <UserCheck size={16} />
            Login
          </button>

          {/* <button
            onClick={onOpenRegister}
            className="btn btn-primary"
            style={{
              padding: "10px 22px",
              fontSize: "0.88rem",
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}
          >
            <Sparkles size={16} />
            Gabung UBG
          </button> */}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "42px",
            height: "42px",
            borderRadius: "10px",
            background: "rgba(17, 29, 73, 0.6)",
            border: "1px solid rgba(216, 223, 229, 0.2)",
            color: "var(--color-ivory)",
            cursor: "pointer"
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            backgroundColor: "rgba(17, 29, 73, 0.98)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderBottom: "1px solid rgba(216, 223, 229, 0.2)",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            boxShadow: "0 20px 40px rgba(0, 0, 0, 0.6)"
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                fontSize: "1.05rem",
                fontWeight: 600,
                color: "var(--color-ivory)",
                padding: "8px 0",
                borderBottom: "1px solid rgba(216, 223, 229, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              {link.label}
              <ChevronRight size={16} color="#6386AC" />
            </a>
          ))}
          <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenLogin();
              }}
              style={{
                flex: 1,
                padding: "12px",
                borderRadius: "999px",
                color: "var(--color-ivory)",
                border: "1px solid var(--color-slate)",
                background: "rgba(99, 134, 172, 0.2)",
                fontWeight: 600
              }}
            >
              Login
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn btn-primary"
              style={{ flex: 1, padding: "12px" }}
            >
              Gabung UBG
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 860px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </header>
  );
}
