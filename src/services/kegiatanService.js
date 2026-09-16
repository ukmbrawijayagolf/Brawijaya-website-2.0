import { db, isFirebaseConfigured } from "./firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

// High-end Curated Imagery for Golf & College Tournaments
export const INITIAL_KEGIATAN = [
  {
    id: "keg-1",
    title: "ICGC Series 1 — National Championship",
    category: "Turnamen",
    date: "14 - 16 Juni 2024",
    location: "Araya Golf & Family Club, Malang",
    description: "Partisipasi atlet UKM Brawijaya Golf dalam Indonesian College Golf Championship Series 1 dengan raihan podium Best Gross Overall mahasiswa.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=85",
    highlight: "Juara 2 Gross Divisi Mahasiswa",
    participants: "18 Atlet UBG"
  },
  {
    id: "keg-2",
    title: "Golf Course Management & Rule Etiquette",
    category: "Pelatihan",
    date: "28 Juli 2024",
    location: "Finna Golf & Country Club Resort",
    description: "Workshop komprehensif mengenai strategi manajemen hole, penentuan club selection terhadap kontur green, serta penerapan etika resmi R&A Golf Rules.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=1200&q=85",
    highlight: "Sertifikasi Etika Lapangan",
    participants: "32 Peserta"
  },
  {
    id: "keg-3",
    title: "Internal Tournament — Albatros Cup II",
    category: "Turnamen",
    date: "25 Agustus 2024",
    location: "Taman Dayu Golf Club & Resort",
    description: "Ajang tahunan bergengsi mempertemukan anggota aktif dan alumni Brawijaya Golf dalam sistem 18-hole stroke play dengan sistem handicap 36.",
    image: "https://images.unsplash.com/photo-1593111774642-a16223a54b41?auto=format&fit=crop&w=1200&q=85",
    highlight: "Annual Trophy & Networking",
    participants: "45 Pegolf Mahasiswa"
  },
  {
    id: "keg-4",
    title: "ICGC Series 2 — Java Regional Qualifier",
    category: "Turnamen",
    date: "12 Oktober 2024",
    location: "Royale Jakarta Golf Club",
    description: "Babak kualifikasi regional Jawa untuk penentuan tiket turnamen antar perguruan tinggi se-Asia Tenggara, mencatatkan best score 74 stroke.",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=1200&q=85",
    highlight: "Top 5 Regional Leaderboard",
    participants: "12 Atlet Terpilih"
  },
  {
    id: "keg-5",
    title: "Albatros Routine Driving Range & Swing Clinic",
    category: "Latihan",
    date: "Setiap Sabtu & Minggu",
    location: "Driving Range Dirgantara & Araya",
    description: "Program latihan rutin terstruktur mencakup analisis video swing launch monitor, short game chipping, putting consistency, serta penguatan fisik.",
    image: "https://images.unsplash.com/photo-1530099486328-e021101a494a?auto=format&fit=crop&w=1200&q=85",
    highlight: "Pelatih Berlisensi PGA",
    participants: "Seluruh Member Aktif"
  },
  {
    id: "keg-6",
    title: "UB Golf Executive Sharing & Industry Network",
    category: "Seminar",
    date: "05 November 2024",
    location: "Gedung Rektorat UB, Malang",
    description: "Sesi diskusi eksklusif bersama tokoh bisnis dan alumni Universitas Brawijaya mengenai nilai sportivitas golf dalam relasi karir profesional.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85",
    highlight: "Alumni & Corporate Networking",
    participants: "70 Peserta"
  }
];

// Prestasi Showcase (Section "Dari UBG untuk Brawijaya")
export const PRESTASI_LIST = [
  {
    id: "pres-1",
    title: "Podium 2nd Gross Overall",
    event: "Indonesian College Golf Championship (ICGC)",
    year: "2024",
    athlete: "Muhammad Raihan (Fakultas Ekonomi & Bisnis)",
    description: "Raihan skor 73 (+1) pada babak final 18-hole menorehkan nama Universitas Brawijaya di jajaran 3 besar kampus terkuat nasional.",
    image: "https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=800&q=80",
    badge: "Kejuaraan Nasional"
  },
  {
    id: "pres-2",
    title: "Best Nett Champion Division A",
    event: "Rektor Cup Golf Invitational Championship",
    year: "2024",
    athlete: "Tim Putra UBG Albatros",
    description: "Dominasi penuh pada divisi mahasiswa dengan handicap stabil 8.2 dan konsistensi fairway hit 78%.",
    image: "https://images.unsplash.com/photo-1592919505780-303950717480?auto=format&fit=crop&w=800&q=80",
    badge: "Piala Rektor"
  },
  {
    id: "pres-3",
    title: "Longest Drive Award (292 Yards)",
    event: "East Java Collegiate Golf Tournament",
    year: "2023",
    athlete: "Dimas Arya (Fakultas Teknik)",
    description: "Pukulan tee-shot spektakuler menembus 292 yards lurus di fairway Hole 7 Finna Golf Club.",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
    badge: "Spesial Rekor"
  },
  {
    id: "pres-4",
    title: "1st Place Best Team Gross",
    event: "Inter-University Golf League (IUGL)",
    year: "2023",
    athlete: "Delegasi UKM Brawijaya Golf",
    description: "Koleksi skor tim terendah mengalahkan 14 perwakilan perguruan tinggi negeri dan swasta se-Indonesia.",
    image: "https://images.unsplash.com/photo-1593111774642-a16223a54b41?auto=format&fit=crop&w=800&q=80",
    badge: "Juara Umum Tim"
  }
];

// E-Learning Modules Preview
export const ELEARNING_MODULES = [
  {
    id: "mod-1",
    level: "Dasar (Beginner)",
    title: "Golf Etiquette & Spirit of The Game",
    duration: "4 Modul • 45 Menit",
    description: "Pelajari tata tertib golf, dress code, urutan bermain (honour), perbaikan pitch mark, dan integritas di green.",
    icon: "ShieldCheck"
  },
  {
    id: "mod-2",
    level: "Fundamental",
    title: "Grip, Stance & Swing Mechanics",
    duration: "6 Video Tutorial • 1.5 Jam",
    description: "Penguasaan interlocking / overlapping grip, posture atletis, backswing plane, dan follow-through seimbang.",
    icon: "Compass"
  },
  {
    id: "mod-3",
    level: "Intermediate",
    title: "Course Management & Club Selection",
    duration: "5 Studi Kasus • 1 Jam",
    description: "Kalkulasi jarak angin, pemilihan driver vs 3-wood, strategi bunker sand save, dan pembacaan kontur putting.",
    icon: "Target"
  },
  {
    id: "mod-4",
    level: "Aturan Resmi",
    title: "R&A & USGA Rules 2024 Breakdown",
    duration: "8 Materi Interaktif",
    description: "Panduan praktis aturan penalti, free drop, out of bounds, unplayable lie, dan sistem perhitungan World Handicap System (WHS).",
    icon: "BookOpen"
  }
];

// Fetch Kegiatan (Firestore with automatic fallback)
export async function getKegiatanList() {
  if (isFirebaseConfigured && db) {
    try {
      const kegiatanRef = collection(db, "kegiatan");
      const snapshot = await getDocs(kegiatanRef);
      if (!snapshot.empty) {
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      }
    } catch (err) {
      console.warn("Firestore fetch error, falling back to initial data:", err);
    }
  }
  return INITIAL_KEGIATAN;
}

// Submit Join/Member Registration to Firebase
export async function submitRegistration(registrationData) {
  if (isFirebaseConfigured && db) {
    try {
      const docRef = await addDoc(collection(db, "registrasi_anggota"), {
        ...registrationData,
        createdAt: serverTimestamp()
      });
      return { success: true, id: docRef.id, isLive: true };
    } catch (error) {
      console.error("Firestore submission failed:", error);
    }
  }

  // Local storage simulated persistence if Firebase credentials aren't set
  try {
    const existing = JSON.parse(localStorage.getItem("ubg_registrasi") || "[]");
    existing.push({ ...registrationData, id: "local-" + Date.now(), createdAt: new Date().toISOString() });
    localStorage.setItem("ubg_registrasi", JSON.stringify(existing));
  } catch (e) {
    console.warn("Local storage fallback:", e);
  }

  return { success: true, id: "mock-" + Date.now(), isLive: false };
}
