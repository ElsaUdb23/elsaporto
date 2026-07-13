export const DEFAULT_PROFILE = {
  name: "Elsa Oktawiyani",
  title: "Fullstack Developer",
  username: "@elsa oktaw",
  footerName: "Elsa",
  footerYear: "2026",
  profileImage: "/assets/profile-elsa.png",
};

export const DEFAULT_ABOUT = {
  bio:
    "Saya adalah mahasiswa angkatan 2023. Sebagai seorang pengembang perangkat lunak yang antusias, saya memiliki fokus utama pada pengembangan frontend dengan pengalaman menggunakan React serta pemahaman berbagai teknologi web. Selain itu, saya juga memiliki ketertarikan dan pengalaman dalam desain UI/UX, dengan tujuan menciptakan antarmuka yang fungsional sekaligus menarik secara visual.",
  education: [
    {
      institution: "Universitas Duta Bangsa",
      degree: "Fakultas Komputer",
      period: "2023 - Present",
      location: "Surakarta, Indonesia",
      logo: "",
      responsibilities: [
        "Mempelajari dasar pengembangan perangkat lunak dan web modern.",
        "Mengerjakan proyek frontend dengan fokus pada antarmuka yang rapi dan responsif.",
      ],
      achievements: [
        "Aktif mengikuti praktik pengembangan web dan UI/UX.",
      ],
    },
  ],
  careers: [
    {
      title: "Frontend Developer",
      company: "Freelance / Personal Projects",
      period: "2024 - Present",
      location: "Indonesia",
      type: "Freelance",
      mode: "Remote",
      logo: "",
      description:
        "Fokus membangun website portfolio, landing page, dan dashboard yang responsif.",
      responsibilities: [
        "Membuat komponen reusable untuk mempercepat pengembangan.",
        "Menjaga konsistensi visual pada seluruh halaman.",
      ],
    },
  ],
};

export const DEFAULT_SKILLS_PAGE = {
  skills: [
    {
      id: "frontend",
      category: "Frontend",
      iconKey: "monitor",
      items: [
        { id: "s1", name: "HTML", dot: "#F97316", description: "Struktur halaman web semantik dan rapi." },
        { id: "s2", name: "CSS", dot: "#3B82F6", description: "Styling responsif dan layout modern." },
        { id: "s3", name: "JavaScript", dot: "#FACC15", description: "Logika interaktif untuk pengalaman pengguna." },
        { id: "s4", name: "React", dot: "#22D3EE", description: "Membangun antarmuka berbasis komponen." },
      ],
    },
    {
      id: "backend",
      category: "Backend",
      iconKey: "server",
      items: [
        { id: "s5", name: "Firebase", dot: "#F97316", description: "Auth, database, dan storage untuk aplikasi." },
        { id: "s6", name: "PHP", dot: "#818CF8", description: "Dasar backend untuk integrasi data." },
      ],
    },
    {
      id: "tools",
      category: "Tools",
      iconKey: "wrench",
      items: [
        { id: "s7", name: "Vite", dot: "#A855F7", description: "Build tool cepat untuk workflow modern." },
        { id: "s8", name: "GitHub", dot: "#2C2C2A", description: "Version control dan kolaborasi kode." },
        { id: "s9", name: "Vercel", dot: "#94A3B8", description: "Deploy cepat untuk project frontend." },
      ],
    },
    {
      id: "design",
      category: "Design",
      iconKey: "palette",
      items: [
        { id: "s10", name: "Figma", dot: "#F472B6", description: "Perancangan UI dan prototyping." },
        { id: "s11", name: "Tailwind CSS", dot: "#38BDF8", description: "Utility-first styling yang efisien." },
      ],
    },
  ],
  additional: [
    "Responsive Design",
    "UI/UX",
    "API Integration",
    "Debugging",
    "Performance Optimization",
  ],
  timeline: [
    {
      id: "t1",
      period: "2023",
      role: "Mahasiswa Fakultas Komputer",
      company: "Universitas Duta Bangsa",
      description: "Mulai fokus pada pengembangan web dan logika pemrograman dasar.",
    },
    {
      id: "t2",
      period: "2024",
      role: "Frontend Developer",
      company: "Personal Projects",
      description: "Membangun website portfolio dan beberapa tampilan admin berbasis React.",
    },
  ],
};

export const DEFAULT_SKILLS = DEFAULT_SKILLS_PAGE.skills;

export const DEFAULT_HOME_SKILLS = [
  { name: "HTML", color: "border-orange-500", logo: "/logos/html.svg" },
  { name: "JavaScript", color: "border-yellow-500", logo: "/logos/js.svg" },
  { name: "PHP", color: "border-indigo-500", logo: "/logos/php.svg" },
  { name: "Laravel", color: "border-red-500", logo: "/logos/laravel.svg" },
  { name: "SQLite", color: "border-blue-400", logo: "/logos/sqlite.svg" },
  { name: "Next.js", color: "border-gray-800", logo: "/logos/nextjs.svg" },
  { name: "Vite", color: "border-purple-500", logo: "/logos/vite.svg" },
  { name: "GitHub", color: "border-gray-800", logo: "/logos/github.svg" },
  { name: "Kotlin", color: "border-purple-700", logo: "/logos/kotlin.svg" },
  { name: "TailwindCSS", color: "border-blue-500", logo: "/logos/tailwind.svg" },
  { name: "CSS", color: "border-blue-500", logo: "/logos/css.svg" },
  { name: "Autoprefixer", color: "border-blue-500", logo: "/logos/autoprefixer.svg" },
  { name: "Mysql", color: "border-blue-500", logo: "/logos/mysql.svg" },
  { name: "Invinity", color: "border-purple-500", logo: "/logos/infinity.svg" },
  { name: "Eslint", color: "border-blue-500", logo: "/logos/eslint.svg" },
  { name: "Vercel", color: "border-purple-700", logo: "/logos/vercel.svg" },
];

export const DEFAULT_PROJECTS = [
  {
    id: "p1",
    title: "Project Showcase",
    description:
      "Galeri project dengan kartu interaktif, detail modal, dan dukungan tampilan mobile yang rapi.",
    category: "Web Development",
    tech: ["React", "Vite", "Tailwind CSS"],
    img: "/projects/projects-1.png",
    featured: true,
  },
  {
    id: "p2",
    title: "Admin Content Panel",
    description:
      "Panel admin untuk mengelola data profil, skills, proyek, dan informasi kontak secara terpusat.",
    category: "UI/UX Design",
    tech: ["React", "Firebase", "Figma"],
    img: "/projects/projects-2.png",
    featured: false,
  },
  {
    id: "p3",
    title: "Portfolio Website",
    description:
      "Website portofolio responsif dengan tampilan modern, navigasi bersih, dan halaman profil yang informatif.",
    category: "Web Development",
    tech: ["React", "JavaScript", "CSS"],
    img: "/projects/projects-3.png",
    featured: false,
  },
];

export const DEFAULT_ACHIEVEMENTS = [
  {
    id: "a1",
    title: "Responsive Web Design",
    org: "FreeCodeCamp",
    date: "2025-01-12",
    category: "achievement",
    link: "/certs/sertifikat-1.jpeg",
    img: "/certs/sertifikat-1.jpeg",
    description: "Sertifikat penyelesaian materi dasar desain web responsif.",
  },
  {
    id: "a2",
    title: "Frontend Development",
    org: "Online Course",
    date: "2025-02-03",
    category: "bootcamp",
    link: "/certs/sertifikat-2.jpeg",
    img: "/certs/sertifikat-2.jpeg",
    description: "Pembelajaran frontend modern dengan React dan komponen reusable.",
  },
  {
    id: "a3",
    title: "UI/UX Workshop",
    org: "Design Academy",
    date: "2025-03-18",
    category: "webinar and seminar",
    link: "/certs/sertifikat-3.jpeg",
    img: "/certs/sertifikat-3.jpeg",
    description: "Workshop singkat tentang alur desain dan user experience.",
  },
  {
    id: "a4",
    title: "Web Project Challenge",
    org: "Community Event",
    date: "2025-04-09",
    category: "competition",
    link: "/certs/sertifikat-4.jpeg",
    img: "/certs/sertifikat-4.jpeg",
    description: "Partisipasi dalam tantangan pembuatan website berbasis komponen.",
  },
  {
    id: "a5",
    title: "Student Activity Recognition",
    org: "Campus Organization",
    date: "2025-05-21",
    category: "organization",
    link: "/certs/sertifikat-5.jpeg",
    img: "/certs/sertifikat-5.jpeg",
    description: "Apresiasi atas kontribusi dalam kegiatan organisasi dan proyek kampus.",
  },
];

export const DEFAULT_CONTACT_LINKS = {
  email: "elsaoktaw@gmail.com",
  instagram: "https://www.instagram.com/ceesenie?igsh=Y3hocnBubG96NXRx",
  linkedin: "https://www.linkedin.com/in/elsa-oktawiyani-415596384?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  tiktok: "https://www.tiktok.com/@its.ellsa?_r=1&_t=ZS-97j614f9Yph",
  github: "https://github.com/",
};
