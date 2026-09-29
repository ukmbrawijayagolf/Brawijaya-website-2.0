import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight, UserCheck, UserRound, BookOpen, LogOut, ScanLine } from "lucide-react";

export default function Navbar({ isLoggedIn, isAdmin, onLogout, onOpenLogin, onOpenRegister }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    if (!profileMenuOpen) return undefined;

    const closeOnOutsideClick = (event) => {
      if (!profileMenuRef.current?.contains(event.target)) setProfileMenuOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setProfileMenuOpen(false);
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [profileMenuOpen]);

  const navLinks = [
    { label: "Home", to: "/" },
    // { label: "Prestasi", to: "/prestasi" },
    // { label: "Kegiatan", to: "/kegiatan" },
    { label: "E-Learning", to: "/elearning" },
    { label: "About", to: "/tentang" },
    { label: "Profil", to: "/profil" },
    ...(isAdmin ? [{ label: "Presensi", to: "/presensi" }] : [])
  ]

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
        <Link
          to="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            textDecoration: "none"
          }}
        >
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
            <img src="/assets/logo/logo_ubg.png" alt="Logo UBG" style={{ width: "50px", height: "50px" }} />
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
        </Link>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px"
          }}
        >
          <div ref={profileMenuRef} style={{ position: "relative" }}>
            {isLoggedIn ? (
              <>
                <button
                  type="button"
                  onClick={() => setProfileMenuOpen((isOpen) => !isOpen)}
                  aria-expanded={profileMenuOpen}
                  aria-haspopup="menu"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 14px",
                    borderRadius: "999px",
                    color: "var(--color-ivory)",
                    background: "rgba(99, 134, 172, 0.2)",
                    border: "1px solid rgba(216, 223, 229, 0.25)",
                    fontSize: "0.9rem",
                    fontWeight: 600,
                    cursor: "pointer"
                  }}
                >
                  <UserRound size={17} />
                  Profil
                  <ChevronRight size={15} style={{ transform: profileMenuOpen ? "rotate(90deg)" : "none", transition: "transform 180ms ease" }} />
                </button>
                {profileMenuOpen && (
                  <div
                    role="menu"
                    style={{
                      position: "absolute",
                      top: "calc(100% + 10px)",
                      right: 0,
                      width: "210px",
                      padding: "8px",
                      border: "1px solid rgba(216, 223, 229, 0.2)",
                      borderRadius: "10px",
                      background: "rgba(17, 29, 73, 0.98)",
                      boxShadow: "0 16px 36px rgba(0, 0, 0, 0.4)"
                    }}
                  >
                    <Link to="/profil" role="menuitem" onClick={() => setProfileMenuOpen(false)} style={accountMenuItemStyle}>
                      <UserRound size={17} /> Profil Saya
                    </Link>
                    {isAdmin && (
                      <Link to="/presensi" role="menuitem" onClick={() => setProfileMenuOpen(false)} style={accountMenuItemStyle}>
                        <ScanLine size={17} /> Kelola Presensi
                      </Link>
                    )}
                    <Link to="/elearning" role="menuitem" onClick={() => setProfileMenuOpen(false)} style={accountMenuItemStyle}>
                      <BookOpen size={17} /> E-Learning
                    </Link>
                    <button
                      type="button"
                      role="menuitem"
                      onClick={() => {
                        setProfileMenuOpen(false);
                        onLogout();
                      }}
                      style={{ ...accountMenuItemStyle, width: "100%", color: "#f2b8b5", borderTop: "1px solid rgba(216, 223, 229, 0.12)", marginTop: "4px", paddingTop: "12px" }}
                    >
                      <LogOut size={17} /> Keluar
                    </button>
                  </div>
                )}
              </>
            ) : (
              <button
                onClick={onOpenLogin}
                style={{
                  padding: "10px 16px",
                  borderRadius: "999px",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--color-ivory)",
                  background: "rgba(99, 134, 172, 0.15)",
                  border: "1px solid rgba(216, 223, 229, 0.25)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px"
                }}
              >
                <UserCheck size={16} /> Masuk
              </button>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
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
            aria-label={mobileMenuOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-expanded={mobileMenuOpen}
            aria-controls="navigation-drawer"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="navigation-drawer"
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
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === "/"}
              onClick={() => setMobileMenuOpen(false)}
              style={({ isActive }) => ({
                fontSize: "1.05rem",
                fontWeight: 600,
                color: isActive ? "var(--color-ivory)" : "var(--color-frost)",
                padding: "8px 0",
                borderBottom: "1px solid rgba(216, 223, 229, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                textDecoration: "none"
              })}
            >
              {link.label}
              <ChevronRight size={16} color="#6386AC" />
            </NavLink>
          ))}
          {!isLoggedIn && (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="btn btn-primary"
              style={{ padding: "12px" }}
            >
              Gabung UBG
            </button>
          )}
        </div>
      )}
    </header>
  );
}

const accountMenuItemStyle = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  padding: "11px 10px",
  border: 0,
  borderRadius: "6px",
  background: "transparent",
  color: "var(--color-frost)",
  font: "inherit",
  fontSize: "0.9rem",
  textAlign: "left",
  textDecoration: "none",
  cursor: "pointer"
};
