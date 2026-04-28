import { motion } from "framer-motion";
import { AlarmClock, BadgeCheck, ThumbsUp } from "lucide-react";

const Hero = () => {
  const trust = [
    { icon: AlarmClock, title: "Cepat", desc: "2 - 7 hari jadi" },
    { icon: BadgeCheck, title: "Bergaransi", desc: "Revisi sesuai paket" },
    { icon: ThumbsUp, title: "Terjangkau", desc: "Harga bersahabat" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            Website Simple,{" "}
            <span className="text-brand-orange">Profesional</span> Bikin Bisnis
            <span className="text-brand-magenta"> Naik Level</span>.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            ENVTEH membantu bisnis Anda tampil online dengan cepat, rapi, dan
            meningkatkan kepercayaan pelanggan.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-linear-to-r from-brand-orange via-brand-magenta to-brand-orange bg-size-[200%_100%] bg-left hover:bg-right transition-all duration-300 hover:scale-105 active:scale-95 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-brand-orange/20 cursor-pointer ">
              Konsultasi Gratis
            </button>
            <button className="cursor-pointer border-2 dark:border-brand-charcoal border-brand-light-gray px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-charcoal hover:text-white dark:hover:bg-brand-light-gray dark:hover:text-brand-charcoal transition-all hover:scale-105 active:scale-95">
              <a href="#services">Lihat Paket</a>
            </button>
          </div>
          <div className="grid grid-cols-3 mt-16 mb-10">
            {trust.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 flex-col text-center"
                >
                  <Icon className="w-8 h-8 text-brand-orange" />
                  <div className="flex flex-col">
                    <p className="font-bold">{item.title}</p>
                    <p className="text-gray-600 dark:text-gray-400 text-balance">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="bg-linear-to-br from-brand-orange to-brand-magenta p-1 rounded-3xl rotate-3 shadow-2xl">
            <div className="bg-white dark:bg-brand-charcoal rounded-[22px] p-4 -rotate-3 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
                alt="Software Development"
                className="rounded-xl w-full h-auto grayscale-0 hover:grayscale transition-all duration-700"
              />
            </div>
          </div>

          {/* Stats Badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute -bottom-8 left-1 sm:-bottom-6 sm:-left-6 bg-brand-charcoal  dark:bg-brand-charcoal p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-800"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-600">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold">99%</p>
                <p className="text-xs text-gray-500">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
