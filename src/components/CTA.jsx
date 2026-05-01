import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section
      id="cta"
      className=" relative p-6 md:p-10 bg-linear-to-r from-brand-orange to-brand-magenta"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="container mx-auto md:px-6 w-full overflow-hidden flex flex-col md:flex-row items-center justify-between"
      >
        <div className="absolute top-0 left-0 h-ful w-48 pointer-events-none opacity-30">
          <div className="absolute top-4 left-4 w-8 h-8 bg-orange-200/50"></div>
          <div className="absolute top-12 left-12 w-8 h-8 bg-orange-300"></div>
          <div className="absolute top-20 left-4 w-6 h-6 bg-orange-100"></div>
          <div className="absolute top-4 right-20 w-8 h-8 bg-orange-400"></div>
          <div className="absolute top-28 left-14 w-8 h-8 bg-orange-400"></div>
          <div className="absolute top-20 left-20 w-7 h-7 bg-orange-300"></div>
        </div>

        <div className="absolute top-0 right-0 h-full w-48 pointer-events-none opacity-30">
          <div className="absolute bottom-20 right-20 w-8 h-8 bg-pink-300"></div>
          <div className="absolute bottom-12 right-12 w-8 h-8 bg-pink-300/50"></div>
          <div className="absolute bottom-4 right-20 w-8 h-8 bg-pink-400"></div>
          <div className="absolute bottom-20 right-2 w-8 h-8 bg-pink-400/50"></div>
          <div className="absolute bottom-4 right-4 w-8 h-8 bg-pink-300"></div>
        </div>

        {/* ========================================= */}
        {/* 4. KONTEN TEKS (z-10 agar di atas kotak)  */}
        {/* ========================================= */}
        <div className="relative z-10 text-white mb-6 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Siap punya website untuk bisnis Anda?
          </h2>
          <p className="text-white/90">
            Yuk konsultasikan kebutuhan website Anda sekarang juga!
          </p>
        </div>

        <div className="relative z-10 flex flex-col sm:flex-row gap-4">
          <a
            href="https://wa.link/gw6rq9"
            className="active:scale-95 transition-all duration-300 ease-in-out group px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg shadow hover:bg-gray-50 flex items-center justify-center gap-2"
          >
            Konsultasi Gratis{" "}
            <span className="text-xl group-hover:translate-x-2 group-hover:transform duration-300">
              →
            </span>
          </a>

          <a
            href="https://wa.link/gw6rq9"
            className="active:scale-95 transition-all duration-300 ease-in-out px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10"
          >
            Mulai Sekarang
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
