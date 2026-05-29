export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  link: string;
  tags: string[];
  imgSrc: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "project-1",
    title: "Liora",
    category: "Social Media",
    description:
      "High-performance desktop communication suite utilizing a Go-based backend and a hardware-accelerated frontend. The system architecture enforces local cryptographic operations to ensure digital autonomy and data sovereignty.",
    link: "https://github.com/TheFueki/Liora",
    tags: ["Golang", "React", "TypeScript", "Wails", "SCSS"],
    imgSrc:
      "https://raw.githubusercontent.com/TheFueki/Liora/main/liora/frontend/src/assets/liora.png",
  },

  {
    id: "project-2",
    title: "ChessView",
    category: "Strategic Game Platform",
    description:
      "Full-stack chess platform focused on live multiplayer play, replay analysis, puzzles, tournaments, ratings, matchmaking, and browser-local Stockfish study tooling with a server-authoritative architecture.",
    link: "https://github.com/TheFueki/ChessView",
    tags: [
      "Python",
      "FastAPI",
      "React",
      "TypeScript",
      "SCSS",
      "PostgreSQL",
      "Docker",
      "WebSocket",
      "FramerMotion",
      "Tailwind",
    ],
    imgSrc:
      "https://raw.githubusercontent.com/TheFueki/ChessView/main/frontend/src/assets/logo.jpeg",
  },

  {
    id: "project-3",
    title: "MarsGo",
    category: "Chess Engine Library",
    description:
      "Advanced Go library implementing Marseille Chess rules with double-move logic, geometric attack scanning, custom state reconstruction, and high-performance engine architecture for competitive variant gameplay.",
    link: "https://github.com/TheFueki/MarsGo",
    tags: [
      "Golang",
      "React",
      "NextJS",
      "gRPC",
      "ProtocolBuffers",
      "Engine",
      "Chess",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: "project-4",
    title: "SINT",
    category: "System Search Engine",
    description:
      "High-performance Windows search engine written in modern C++ with DirectX 11 rendering and ImGui-based UI. Focused on ultra-fast indexing, low-level memory operations, and scalable search architecture.",
    link: "https://github.com/TheFueki/Sint",
    tags: ["Cpp", "CMake", "DirectX", "ImGui", "Windows", "Systems"],
    imgSrc:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: "project-5",
    title: "zk-pqc",
    category: "Post-Quantum Cryptography",
    description:
      "Experimental cryptographic platform combining lattice-based post-quantum cryptography with zero-knowledge proofs. Built using a multi-layer stack with Go, Rust, Circom, AVX-512 optimized C, and gRPC transport services.",
    link: "https://github.com/itsVentie/zk-pqc",
    tags: [
      "Rust",
      "Golang",
      "Cpp",
      "Docker",
      "PostgreSQL",
      "gRPC",
      "ProtocolBuffers",
      "Linux",
    ],
    imgSrc:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: "project-6",
    title: "TrustMe",
    category: "Red Team Research",
    description:
      "Low-level Windows security research PoC exploring indirect syscalls, API hashing, polymorphic junk code, sandbox checks, and modern anti-analysis techniques used in advanced red teaming workflows.",
    link: "https://github.com/itsVentie/TrustMe",
    tags: ["Cpp", "C", "Assembly", "Windows", "CMake", "Systems"],
    imgSrc:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: "project-7",
    title: "Akirae",
    category: "Discord Management",
    description:
      "High-performance modular Discord management system featuring moderation automation, Supabase integration, interactive dashboards, persistent logging, and scalable cloud-native architecture.",
    link: "https://github.com/itsVentie/akiraedc",
    tags: ["Python", "Supabase", "PostgreSQL", "Docker", "Flask"],
    imgSrc:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?q=80&w=1600&auto=format&fit=crop",
  },

  {
    id: "project-8",
    title: "Inkspire",
    category: "OSINT Toolkit",
    description:
      "Multi-threaded Go reconnaissance toolkit combining high-speed TCP/UDP port scanning, WHOIS collection, reverse DNS resolution, vulnerability enrichment, and automated infrastructure reporting.",
    link: "https://github.com/itsVentie/Inkspire",
    tags: ["Golang", "Linux", "Docker", "Security", "Systems"],
    imgSrc: "https://inkspire.ventie.dev/assets/inkspire.jpg",
  },
];
