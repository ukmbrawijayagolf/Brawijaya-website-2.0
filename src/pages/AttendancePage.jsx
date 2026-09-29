import React, { useCallback, useEffect, useRef, useState } from "react";
import { Camera, CalendarDays, Check, Download, ScanLine, ShieldAlert, Trash2, UserRound } from "lucide-react";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  runTransaction,
  serverTimestamp,
  where
} from "firebase/firestore";
import { Html5Qrcode } from "html5-qrcode";
import { auth, db, isFirebaseConfigured } from "../services/firebase";

const localDateString = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const formatTime = (timestamp) => {
  const date = timestamp?.toDate?.();
  return date ? date.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }) : "-";
};

export default function AttendancePage({ onOpenLogin }) {
  const [accessState, setAccessState] = useState("loading");
  const [admin, setAdmin] = useState(null);
  const [selectedDate, setSelectedDate] = useState(localDateString);
  const [records, setRecords] = useState([]);
  const [isLoadingRecords, setIsLoadingRecords] = useState(false);
  const [isScannerActive, setIsScannerActive] = useState(false);
  const [scanMessage, setScanMessage] = useState("");
  const [scanError, setScanError] = useState("");
  const [pageError, setPageError] = useState("");
  const handleDecodedRef = useRef(null);
  const handledScanRef = useRef(false);

  const loadRecords = useCallback(async () => {
    if (!db) return;
    setIsLoadingRecords(true);
    setPageError("");
    try {
      const attendanceQuery = query(
        collection(db, "attendance_records"),
        where("date", "==", selectedDate)
      );
      const snapshot = await getDocs(attendanceQuery);
      const nextRecords = snapshot.docs
        .map((record) => ({ id: record.id, ...record.data() }))
        .sort((first, second) => (second.scannedAt?.seconds || 0) - (first.scannedAt?.seconds || 0));
      setRecords(nextRecords);
    } catch (error) {
      console.error("Gagal memuat rekap presensi:", error);
      setPageError("Rekap gagal dimuat. Periksa koneksi atau aturan akses Firestore.");
    } finally {
      setIsLoadingRecords(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    if (!isFirebaseConfigured || !auth || !db) {
      setAccessState("unconfigured");
      return undefined;
    }

    let isActive = true;
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setAdmin(null);
        setAccessState("signed-out");
        return;
      }

      try {
        const userDocumentId = (user.email || "").replace(/[^a-zA-Z0-9]/g, "_");
        const userSnapshot = await getDoc(doc(db, "users", userDocumentId));
        if (!isActive) return;
        if (!userSnapshot.exists() || String(userSnapshot.data().role).trim().toLowerCase() !== "admin") {
          setAdmin(null);
          setAccessState("forbidden");
          return;
        }

        const adminSnapshot = await getDoc(doc(db, "admin_users", user.uid));
        if (!isActive) return;
        if (!adminSnapshot.exists()) {
          setAdmin(null);
          setAccessState("setup-required");
          return;
        }

        setAdmin({ uid: user.uid, email: user.email || "" });
        setAccessState("ready");
      } catch (error) {
        console.error("Gagal memverifikasi akses admin:", error);
        if (isActive) setAccessState("error");
      }
    });

    return () => {
      isActive = false;
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (accessState === "ready") loadRecords();
  }, [accessState, loadRecords]);

  const handleDecoded = useCallback(async (decodedValue) => {
    setIsScannerActive(false);
    setScanError("");
    setScanMessage("");
    const nim = decodedValue.trim();

    if (!nim) {
      setScanError("QR tidak berisi NIM yang valid.");
      return;
    }

    try {
      const memberQuery = query(
        collection(db, "users"),
        where("nim", "==", nim),
        limit(1)
      );
      const memberSnapshot = await getDocs(memberQuery);
      if (memberSnapshot.empty) {
        setScanError("Anggota dengan NIM tersebut tidak ditemukan.");
        return;
      }

      const memberDocument = memberSnapshot.docs[0];
      const member = memberDocument.data();
      const attendanceId = `${selectedDate}_${memberDocument.id}`;
      const attendanceRef = doc(db, "attendance_records", attendanceId);
      const wasRecorded = await runTransaction(db, async (transaction) => {
        const existingRecord = await transaction.get(attendanceRef);
        if (existingRecord.exists()) return false;

        transaction.set(attendanceRef, {
          date: selectedDate,
          nim: member.nim || nim,
          name: member.nama || member.name || "Nama belum tersedia",
          faculty: member.fakultas || member.faculty || "",
          email: member.email || "",
          scannedAt: serverTimestamp(),
          scannedBy: admin.uid,
          scannedByEmail: admin.email
        });
        return true;
      });

      if (wasRecorded) {
        setScanMessage(`${member.nama || member.name || nim} berhasil dicatat hadir.`);
        await loadRecords();
      } else {
        setScanError(`${member.nama || member.name || nim} sudah tercatat hadir hari ini.`);
      }
    } catch (error) {
      console.error("Gagal mencatat presensi:", error);
      setScanError("Presensi gagal disimpan. Periksa koneksi dan aturan akses Firestore.");
    }
  }, [admin, loadRecords, selectedDate]);

  handleDecodedRef.current = handleDecoded;

  useEffect(() => {
    if (!isScannerActive || accessState !== "ready") return undefined;

    let scanner;
    let isCancelled = false;
    const startScanner = async () => {
      scanner = new Html5Qrcode("attendance-qr-reader");
      try {
        await scanner.start(
          { facingMode: "environment" },
          { fps: 10, qrbox: { width: 240, height: 240 }, aspectRatio: 1 },
          (decodedValue) => {
            if (handledScanRef.current) return;
            handledScanRef.current = true;
            handleDecodedRef.current?.(decodedValue);
          },
          () => {}
        );
        if (isCancelled && scanner.isScanning) await scanner.stop();
      } catch (error) {
        console.error("Kamera presensi tidak dapat dijalankan:", error);
        if (!isCancelled) {
          setScanError("Kamera tidak dapat dibuka. Izinkan akses kamera dan gunakan HTTPS atau localhost.");
          setIsScannerActive(false);
        }
      }
    };

    startScanner();
    return () => {
      isCancelled = true;
      if (scanner?.isScanning) {
        scanner.stop().then(() => scanner.clear()).catch(() => {});
      } else if (scanner) {
        scanner.clear();
      }
    };
  }, [accessState, isScannerActive]);

  const removeRecord = async (record) => {
    if (!window.confirm(`Hapus presensi ${record.name} untuk ${selectedDate}?`)) return;
    try {
      await deleteDoc(doc(db, "attendance_records", record.id));
      await loadRecords();
    } catch (error) {
      console.error("Gagal menghapus presensi:", error);
      setPageError("Presensi tidak dapat dihapus. Periksa aturan akses Firestore.");
    }
  };

  const downloadCsv = () => {
    const csvRows = [
      ["Tanggal", "Nama", "NIM", "Fakultas", "Waktu"],
      ...records.map((record) => [record.date, record.name, record.nim, record.faculty, formatTime(record.scannedAt)])
    ];
    const csvContent = csvRows
      .map((row) => row.map((value) => `"${String(value || "").replaceAll('"', '""')}"`).join(","))
      .join("\r\n");
    const url = URL.createObjectURL(new Blob([`\uFEFF${csvContent}`], { type: "text/csv;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `presensi-${selectedDate}.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const panelStyle = {
    padding: "24px",
    border: "1px solid rgba(216, 223, 229, 0.16)",
    borderRadius: "10px",
    background: "rgba(17, 29, 73, 0.42)"
  };
  const actionButtonStyle = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    minHeight: "42px",
    padding: "10px 14px",
    border: "1px solid rgba(216, 223, 229, 0.22)",
    borderRadius: "8px",
    background: "rgba(99, 134, 172, 0.2)",
    color: "var(--color-ivory)",
    font: "inherit",
    fontWeight: 600,
    cursor: "pointer"
  };

  if (accessState !== "ready") {
    const accessMessages = {
      loading: "Memverifikasi akses admin...",
      unconfigured: "Konfigurasi Firebase belum tersedia.",
      "signed-out": "Masuk dengan akun admin untuk mengelola presensi.",
      forbidden: "Halaman ini hanya dapat diakses oleh admin presensi.",
      "setup-required": "Role admin terdeteksi, tetapi akses scan belum disinkronkan. Jalankan npm run sync:attendance-admins lalu deploy Firestore Rules.",
      error: "Akses admin gagal diverifikasi. Periksa koneksi atau aturan Firestore."
    };
    return (
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "140px 24px 88px" }}>
        <section style={panelStyle}>
          <ShieldAlert size={24} color="var(--color-slate)" />
          <h1 style={{ margin: "14px 0 8px", fontSize: "1.5rem" }}>Presensi Anggota</h1>
          <p role={accessState === "loading" ? "status" : "alert"} style={{ color: "var(--color-frost)", lineHeight: 1.6 }}>
            {accessMessages[accessState]}
          </p>
          {accessState === "signed-out" && (
            <button type="button" className="btn btn-primary" onClick={onOpenLogin} style={{ marginTop: "14px", padding: "12px 18px" }}>
              Masuk sebagai admin
            </button>
          )}
        </section>
      </main>
    );
  }

  return (
    <main style={{ padding: "128px 24px 88px" }}>
      <section style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <header style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: "20px", flexWrap: "wrap", marginBottom: "28px" }}>
          <div>
            <p style={{ color: "var(--color-slate)", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", marginBottom: "8px" }}>
              Panel Admin
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", lineHeight: 1.2, marginBottom: "8px" }}>Presensi Anggota</h1>
            <p style={{ color: "var(--color-frost)", lineHeight: 1.6 }}>Pindai QR anggota dan kelola rekap kehadiran harian.</p>
          </div>
          <label style={{ display: "grid", gap: "7px", color: "var(--color-frost)", fontSize: "0.85rem", fontWeight: 600 }}>
            Tanggal presensi
            <span style={{ display: "flex", alignItems: "center", gap: "9px", minHeight: "42px", padding: "0 10px", border: "1px solid rgba(216, 223, 229, 0.22)", borderRadius: "8px", background: "rgba(7, 11, 24, 0.72)" }}>
              <CalendarDays size={17} />
              <input
                aria-label="Tanggal presensi"
                type="date"
                value={selectedDate}
                onChange={(event) => {
                  setSelectedDate(event.target.value);
                  setScanMessage("");
                  setScanError("");
                }}
                style={{ border: 0, background: "transparent", color: "var(--color-ivory)", font: "inherit" }}
              />
            </span>
          </label>
        </header>

        <div className="attendance-layout" style={{ display: "grid", gridTemplateColumns: "minmax(300px, 0.8fr) minmax(0, 1.5fr)", gap: "22px", alignItems: "start" }}>
          <section style={panelStyle} aria-labelledby="scanner-title">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <ScanLine size={20} color="var(--color-slate)" />
              <h2 id="scanner-title" style={{ margin: 0, fontSize: "1.1rem" }}>Scan QR anggota</h2>
            </div>
            <p style={{ color: "var(--color-frost)", fontSize: "0.88rem", lineHeight: 1.6, marginBottom: "18px" }}>
              Satu anggota hanya dapat tercatat sekali pada tanggal yang dipilih.
            </p>

            {isScannerActive ? (
              <div id="attendance-qr-reader" style={{ width: "100%", overflow: "hidden", borderRadius: "8px" }} />
            ) : (
              <div style={{ display: "grid", placeItems: "center", minHeight: "220px", border: "1px dashed rgba(216, 223, 229, 0.25)", borderRadius: "8px", color: "var(--color-slate)" }}>
                <Camera size={34} />
              </div>
            )}

            {!isScannerActive && (
              <button
                type="button"
                onClick={() => {
                  handledScanRef.current = false;
                  setScanMessage("");
                  setScanError("");
                  setIsScannerActive(true);
                }}
                style={{ ...actionButtonStyle, width: "100%", marginTop: "16px" }}
              >
                <Camera size={17} /> Buka kamera
              </button>
            )}
            {scanMessage && <p role="status" style={{ display: "flex", gap: "8px", color: "#9bd6a4", lineHeight: 1.5, margin: "16px 0 0" }}><Check size={18} />{scanMessage}</p>}
            {scanError && <p role="alert" style={{ color: "#ffb4aa", lineHeight: 1.5, margin: "16px 0 0" }}>{scanError}</p>}
          </section>

          <section style={panelStyle} aria-labelledby="attendance-list-title">
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "14px", flexWrap: "wrap", marginBottom: "18px" }}>
              <div>
                <h2 id="attendance-list-title" style={{ margin: "0 0 5px", fontSize: "1.1rem" }}>Rekap harian</h2>
                <p style={{ color: "var(--color-frost)", fontSize: "0.84rem", margin: 0 }}>
                  {records.length} anggota hadir · {selectedDate}
                </p>
              </div>
              <button type="button" onClick={downloadCsv} disabled={!records.length} style={{ ...actionButtonStyle, opacity: records.length ? 1 : 0.5 }}>
                <Download size={16} /> Unduh CSV
              </button>
            </div>

            {pageError && <p role="alert" style={{ color: "#ffb4aa", lineHeight: 1.5 }}>{pageError}</p>}
            {isLoadingRecords ? (
              <p role="status" style={{ color: "var(--color-frost)" }}>Memuat rekap...</p>
            ) : records.length === 0 ? (
              <div style={{ display: "grid", placeItems: "center", minHeight: "180px", borderTop: "1px solid rgba(216, 223, 229, 0.12)", color: "var(--color-frost)", textAlign: "center" }}>
                <div><UserRound size={25} /><p style={{ margin: "10px 0 0" }}>Belum ada presensi pada tanggal ini.</p></div>
              </div>
            ) : (
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "620px", textAlign: "left" }}>
                  <thead>
                    <tr style={{ color: "var(--color-slate)", fontSize: "0.78rem", textTransform: "uppercase" }}>
                      <th style={{ padding: "12px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.16)" }}>Anggota</th>
                      <th style={{ padding: "12px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.16)" }}>NIM</th>
                      <th style={{ padding: "12px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.16)" }}>Waktu</th>
                      <th aria-label="Tindakan" style={{ padding: "12px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.16)" }} />
                    </tr>
                  </thead>
                  <tbody>
                    {records.map((record) => (
                      <tr key={record.id}>
                        <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.1)" }}>
                          <strong style={{ display: "block", color: "var(--color-ivory)", fontSize: "0.9rem" }}>{record.name}</strong>
                          <span style={{ color: "var(--color-frost)", fontSize: "0.8rem" }}>{record.faculty || "Fakultas belum tersedia"}</span>
                        </td>
                        <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.1)", color: "var(--color-frost)", fontSize: "0.88rem" }}>{record.nim}</td>
                        <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.1)", color: "var(--color-frost)", fontSize: "0.88rem" }}>{formatTime(record.scannedAt)}</td>
                        <td style={{ padding: "13px 10px", borderBottom: "1px solid rgba(216, 223, 229, 0.1)", textAlign: "right" }}>
                          <button type="button" onClick={() => removeRecord(record)} aria-label={`Hapus presensi ${record.name}`} title="Hapus presensi" style={{ display: "inline-grid", placeItems: "center", width: "34px", height: "34px", border: "1px solid rgba(229, 115, 115, 0.4)", borderRadius: "7px", background: "rgba(198, 40, 40, 0.12)", color: "#ffb4aa", cursor: "pointer" }}>
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </div>
      </section>

      <style>{`
        @media (max-width: 850px) {
          .attendance-layout { grid-template-columns: 1fr !important; }
        }
        #attendance-qr-reader video { border-radius: 8px; }
        #attendance-qr-reader button { padding: 8px 12px; border-radius: 6px; }
        #attendance-qr-reader select { max-width: 100%; }
      `}</style>
    </main>
  );
}