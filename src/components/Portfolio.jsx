import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Layers, CheckCircle, Code } from "lucide-react";

const Portfolio = ({ isDarkMode }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  const projects = [
    {
      title: "Rekaloka",
      category: "Mobile & Web",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      briefOverview:
        "Platform eksplorasi budaya dengan GenAI (Text-to-3D) & Computer Vision.",
      overview:
        "Rekaloka adalah platform inovatif yang menggabungkan kecerdasan buatan dengan pelestarian budaya. Memungkinkan pengguna untuk mengubah teks menjadi model 3D artefak budaya secara interaktif.",
      keyFeatures: [
        "GenAI Text-to-3D Generation untuk artefak budaya",
        "Computer Vision untuk analisis gambar",
        "Interactive 3D viewer di dalam aplikasi web dan mobile",
        "Sistem manajemen konten untuk kurator budaya",
      ],
      techStack: [
        "Node.js",
        "Express",
        "Prisma",
        "React Native",
        "Three.js",
        "Python",
        "TensorFlow",
      ],
      fullStackText:
        "Full Stack: Node.js, Express, Prisma, React Native, Three.js, Python, TensorFlow",
    },
    {
      title: "Supplier System",
      category: "Web",
      img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop",
      briefOverview:
        "Sistem manajemen stok & produksi dengan RBAC ketat untuk separasi akses dapur & admin.",
      overview:
        "Supplier Management System adalah platform web full-stack untuk mendigitalisasi alur kerja bisnis supplier. Sistem ini menciptakan batasan kerja yang jelas (separation of concerns) antara tim produksi dan manajemen keuangan.",
      keyFeatures: [
        "Multi-Role Authentication (RBAC): Super Admin (God Mode) vs Staff Produksi (Limited Access)",
        "Dashboard User-Specific: Tampilan berbeda untuk Admin & Dapur",
        "Smart Seeder: Generate akun otomatis tanpa duplikat",
      ],
      techStack: ["Laravel", "Filament", "MySQL", "Tailwind", "Alpine.js"],
      fullStackText: "Full Stack: Laravel, FilamentPHP, MySQL, Tailwind CSS",
    },
    {
      title: "Fintech App",
      category: "Mobile Dev",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
      briefOverview: "Aplikasi keuangan personal dengan analitik cerdas.",
      overview:
        "Platform keuangan komprehensif yang membantu pengguna melacak pengeluaran, mengatur anggaran, dan berinvestasi dengan panduan analitik cerdas berbasis AI.",
      keyFeatures: [
        "Tracking pengeluaran otomatis",
        "Sistem budgeting pintar",
        "Integrasi dengan berbagai bank",
        "Laporan analitik bulanan",
      ],
      techStack: ["Flutter", "Go", "PostgreSQL", "Redis", "Docker"],
      fullStackText: "Full Stack: Flutter, Golang, PostgreSQL, Redis, Docker",
    },
    {
      title: "SaaS CRM",
      category: "Cloud Dev",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      briefOverview: "Platform CRM berbasis cloud untuk enterprise.",
      overview:
        "Solusi CRM modern yang dirancang untuk meningkatkan produktivitas tim sales dengan otomatisasi alur kerja dan analitik real-time yang dapat diakses di mana saja.",
      keyFeatures: [
        "Manajemen pipeline sales",
        "Otomatisasi email marketing",
        "Analitik & reporting real-time",
        "Integrasi API pihak ketiga",
      ],
      techStack: ["React", "Node.js", "MongoDB", "AWS", "Docker", "GraphQL"],
      fullStackText:
        "Full Stack: React, Node.js, MongoDB, AWS, Docker, GraphQL",
    },
  ];

  return (
    <section
      id="portfolio"
      className={`py-18 md:py-24 transition-colors duration-300 ${isDarkMode ? "bg-brand-charcoal text-white" : "bg-gray-50 text-brand-charcoal"}`}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kisah Sukses <span className="text-brand-magenta">Kami</span>.
            </h2>
            <p
              className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-xl`}
            >
              Berikut adalah deretan karya dan solusi digital terbaik yang telah
              kami ciptakan di dalam portofolio kami.
            </p>
          </div>
          <button className="text-brand-magenta font-bold flex items-center gap-2 active:translate-x-2 hover:translate-x-2 transition-transform cursor-pointer">
            Lihat Semua Projek <span>→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              onClick={() => setSelectedProject(project)}
              className={`group relative h-105 rounded-3xl overflow-hidden cursor-pointer transition-all
                ${
                  isDarkMode
                    ? "bg-[#18181b] border border-gray-800 hover:shadow-[0_0_40px_rgba(255,255,255,0.08)]"
                    : "bg-black border border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                }`}
            >
              {/* Image Background */}
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-70"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

              {/* Category Badge - Top Left */}
              <div className="absolute top-6 left-6 z-10">
                <span
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-gray-200 rounded-full border border-white/20 backdrop-blur-md ${isDarkMode ? "bg-black/30" : "bg-white/10"} transition-colors duration-300`}
                >
                  {project.category}
                </span>
              </div>

              {/* Action Button - Top Right */}
              <div className="absolute top-6 right-6 z-10 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-10 h-10 rounded-full bg-linear-to-b from-brand-orange to-brand-magenta text-white flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                  <ArrowUpRight size={20} />
                </div>
              </div>

              {/* Card Content - Bottom */}
              <div className="absolute bottom-8 left-0 w-full p-8 transition-transform duration-500 transform translate-y-8 group-hover:translate-y-0 flex flex-col justify-end h-full">
                <div className="relative">
                  <h3 className="text-3xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  {/* Brief Overview - slightly fades in/up on hover */}
                  <p className="text-gray-300 text-sm mb-5 line-clamp-2 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {project.briefOverview}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 text-xs font-medium text-gray-200 bg-white/10 rounded-md backdrop-blur-md border border-white/10`}
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium text-gray-200 bg-white/10 rounded-md backdrop-blur-md border border-white/10">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Pop up */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className={`relative w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col
                ${isDarkMode ? "bg-[#18181b] text-white border border-white/10" : "bg-white text-gray-900 border border-black/10"}`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className={`absolute top-6 right-6 z-30 p-2 rounded-full backdrop-blur-md transition-colors
                  ${isDarkMode ? "bg-black/50 text-white hover:bg-black/70" : "bg-black/40 text-white hover:bg-black/60"}`}
              >
                <X size={20} />
              </button>

              {/* Modal Content - Scrollable */}
              <div
                className={`w-full overflow-y-auto max-md:scrollbar-hide
                ${isDarkMode ? "md:scrollbar-thin md:scrollbar-thumb-brand-orange md:scrollbar-track-brand-charcoal" : "md:scrollbar-thin md:scrollbar-thumb-brand-orange md:scrollbar-track-brand-light-gray"}`}
              >
                {/* Modal Header Image */}
                <div className="relative h-70 w-full">
                  <img
                    src={selectedProject.img}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-linear-to-t ${isDarkMode ? "from-[#18181b] via-[#18181b]/60 to-transparent/20" : "from-white via-white/60 to-transparent/20"}`}
                  />

                  <div className="absolute bottom-6 left-8 right-8">
                    <span
                      className={`inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider rounded-full border mb-4 backdrop-blur-md
                    ${isDarkMode ? "border-white/20 text-white bg-white/10" : "border-black/20 text-gray-800 bg-white/50"}`}
                    >
                      {selectedProject.category}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-8">
                  <div className="grid md:grid-cols-2 gap-10">
                    {/* Left Column */}
                    <div className="space-y-8">
                      {/* Overview */}
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <Layers className="text-brand-orange" size={24} />
                          <h3 className="text-2xl font-bold">Overview</h3>
                        </div>
                        <p
                          className={`leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                        >
                          {selectedProject.overview}
                        </p>
                      </section>

                      {/* Key Features */}
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <CheckCircle
                            className="text-brand-orange"
                            size={24}
                          />
                          <h3 className="text-2xl font-bold">Key Features</h3>
                        </div>
                        <ul className="space-y-3">
                          {selectedProject.keyFeatures.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                              <span
                                className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                              >
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-8">
                      {/* Tech Stack */}
                      <section>
                        <div className="flex items-center gap-3 mb-4">
                          <Code className="text-brand-orange" size={24} />
                          <h3 className="text-2xl font-bold">Tech Stack</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {selectedProject.techStack.map((tech, idx) => (
                            <span
                              key={idx}
                              className={`px-4 py-2 text-sm font-medium rounded-xl border
                            ${isDarkMode ? "bg-[#222225] border-white/10 text-gray-200" : "bg-gray-50 border-gray-200 text-gray-700 shadow-sm"}`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <p
                          className={`text-sm font-medium ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {selectedProject.fullStackText}
                        </p>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
