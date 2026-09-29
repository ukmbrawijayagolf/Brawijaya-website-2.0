import React, { useState } from "react";
import { ChevronDown, PlayCircle } from "lucide-react";

const lessons = [
  {
    id: "club-basics",
    title: "Pengenalan Stik Golf",
    duration: "5 menit",
    presenter: "Daffa Putra H",
    summary: "Kenali jenis stik golf dan kegunaan dasar setiap club sebelum mulai bermain.",
    search: "pengenalan jenis stik golf untuk pemula"
  },
  {
    id: "swing-basics",
    title: "Pengenalan Swing Golf",
    duration: "10 menit",
    presenter: "Daffa Putra H",
    summary: "Pelajari posisi awal, grip, dan gerakan dasar swing golf untuk pemula.",
    search: "tutorial dasar swing golf untuk pemula"
  }
];

export default function ELearningPage() {
  const [openLesson, setOpenLesson] = useState(null);
  const progress = 0;

  return (
    <main style={{ padding: "120px 24px 88px" }}>
      <section
        aria-labelledby="elearning-title"
        style={{
          maxWidth: "1440px",
          margin: "0 auto",
          padding: "36px clamp(24px, 5vw, 64px) 40px",
          border: "1px solid rgba(99, 134, 172, 0.34)",
          borderRadius: "18px",
          background: "linear-gradient(135deg, rgba(17, 29, 73, 0.9), rgba(7, 11, 24, 0.96))",
          boxShadow: "0 24px 70px rgba(0, 0, 0, 0.26)"
        }}
      >
        <header style={{ marginBottom: "38px" }}>
          <p style={{ color: "var(--color-slate)", fontSize: "0.78rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "8px" }}>
            UKM Brawijaya Golf
          </p>
          <h1 id="elearning-title" style={{ fontSize: "clamp(2rem, 4vw, 2.6rem)", lineHeight: 1.2, marginBottom: "10px" }}>
            UBG Tutorial
          </h1>
          <p style={{ maxWidth: "900px", color: "var(--color-frost)", fontSize: "1rem", lineHeight: 1.65 }}>
            Kami menyediakan E-Learning agar anggota dapat mempelajari permainan golf dengan mudah.
          </p>
        </header>

        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px", marginBottom: "12px", color: "var(--color-frost)", fontWeight: 700 }}>
            <span>Progress Pembelajaran</span>
            <span style={{ color: "var(--color-ivory)" }}>{progress}%</span>
          </div>
          <div
            role="progressbar"
            aria-label="Progress pembelajaran"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            style={{ height: "7px", borderRadius: "99px", background: "rgba(7, 11, 24, 0.8)", marginBottom: "30px", overflow: "hidden" }}
          >
            <div style={{ width: `${progress}%`, height: "100%", background: "var(--color-slate)" }} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            {lessons.map((lesson, index) => {
              const isOpen = openLesson === lesson.id;
              const youtubeUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(lesson.search)}`;

              return (
                <article
                  key={lesson.id}
                  style={{ border: "1px solid rgba(216, 223, 229, 0.16)", borderRadius: "12px", background: "rgba(17, 29, 73, 0.5)", overflow: "hidden" }}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`lesson-content-${lesson.id}`}
                    onClick={() => setOpenLesson(isOpen ? null : lesson.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "20px",
                      width: "100%",
                      minHeight: "104px",
                      padding: "20px",
                      color: "var(--color-ivory)",
                      textAlign: "left"
                    }}
                  >
                    <span style={{ display: "grid", placeItems: "center", width: "50px", height: "50px", flexShrink: 0, borderRadius: "50%", background: "rgba(99, 134, 172, 0.28)", color: "var(--color-ivory)", fontWeight: 800 }}>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span style={{ display: "block", flex: 1, minWidth: 0 }}>
                      <strong style={{ display: "block", fontSize: "1.15rem", lineHeight: 1.35, marginBottom: "6px" }}>{lesson.title}</strong>
                      <span style={{ color: "var(--color-frost)", fontSize: "0.92rem" }}>{lesson.duration}<span aria-hidden="true">　•　</span>{lesson.presenter}</span>
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "7px", padding: "4px 12px", borderRadius: "999px", background: "rgba(253, 246, 229, 0.12)", color: "var(--color-ivory)", fontSize: "0.8rem", fontWeight: 700 }}>
                        <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--color-ivory)" }} />
                        Baru
                      </span>
                      <ChevronDown size={20} color="var(--color-slate)" style={{ transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 180ms ease" }} />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`lesson-content-${lesson.id}`}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "20px", flexWrap: "wrap", padding: "0 22px 22px 90px" }}
                    >
                      <p style={{ color: "var(--color-frost)", fontSize: "0.92rem", lineHeight: 1.65, flex: "1 1 320px" }}>{lesson.summary}</p>
                      <a
                        href={youtubeUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "9px", padding: "10px 16px", border: "1px solid rgba(216, 223, 229, 0.2)", borderRadius: "8px", background: "rgba(99, 134, 172, 0.18)", color: "var(--color-ivory)", fontSize: "0.9rem", fontWeight: 700, whiteSpace: "nowrap" }}
                      >
                        <PlayCircle size={17} />
                        Cari video di YouTube
                      </a>
                    </div>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
