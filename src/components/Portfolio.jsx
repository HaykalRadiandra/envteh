import { motion } from "framer-motion";

const Portfolio = ({ isDarkMode }) => {
  const projects = [
    {
      title: "Fintech App",
      category: "Mobile Dev",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "E-commerce Platform",
      category: "Web App",
      img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "AI Dashboard",
      category: "Data Science",
      img: "https://images.unsplash.com/photo-1551288049-bbbda5366391?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "SaaS CRM",
      category: "Cloud Dev",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="portfolio" className={`py-18 md:py-24 transition-colors duration-300 ${isDarkMode ? "bg-brand-charcoal text-white" : "bg-white text-brand-charcoal"}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Kisah Sukses <span className="text-brand-magenta">Kami</span>.
            </h2>
            <p className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-xl`}>
              Kami bangga dapat menghadirkan produk digital yang luar biasa bagi klien kami.
            </p>
          </div>
          <button className="text-brand-magenta font-bold flex items-center gap-2 hover:translate-x-2 transition-transform cursor-pointer">
            Lihat Semua Projek <span>→</span>
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-charcoal/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-10">
                <p className="text-brand-orange font-bold mb-2 uppercase tracking-widest text-sm">
                  {project.category}
                </p>
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
