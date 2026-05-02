import { motion } from "framer-motion";
import { AlarmClock, BadgeCheck, ThumbsUp } from "lucide-react";
import { LinkButton } from "./Elements/Button";

const Hero = ({ isDarkMode }) => {
  const trust = [
    { icon: AlarmClock, title: "Cepat", desc: "2 - 7 hari jadi" },
    { icon: BadgeCheck, title: "Bergaransi", desc: "Revisi sesuai paket" },
    { icon: ThumbsUp, title: "Terjangkau", desc: "Harga bersahabat" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-10 overflow-hidden">
      <div className="-z-10 absolute top-1/4 -left-20 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl animate-pulse" />
      <div className="-z-10 absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 mb-7 lg:mb-0 lg:items-start">
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
          <p
            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 max-w-lg`}
          >
            ENVTEH membantu bisnis Anda tampil online dengan cepat, rapi, dan
            meningkatkan kepercayaan pelanggan.
          </p>
          <div className="flex flex-wrap gap-4 text-center">
            <LinkButton
              href="https://wa.link/p4y2sp"
              classtwo="gap-2 font-bold text-lg group"
              padding="py-3 px-10 text-white"
            >
              Konsultasi Gratis{" "}
              <span className="group-hover:translate-x-2 transition-transform duration-300 ease-out">
                →
              </span>
            </LinkButton>
            <LinkButton
              href="#solution"
              classone={`bg-transparent border-2 ${isDarkMode ? "text-white border-white" : "text-brand-charcoal border-brand-charcoal"} hover:scale-105 active:scale-95`}
              classtwo="gap-2 font-bold text-lg bg-transparent"
              padding="py-3 px-10"
            >
              Lihat Layanan{" "}
            </LinkButton>
          </div>
          <div className="grid grid-cols-3 mt-16 mb-10">
            {trust.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="flex items-center lg:items-center gap-3 lg:gap-5 flex-col lg:flex-row lg:text-left text-center"
                >
                  <Icon className="w-8 h-8 text-brand-orange" />
                  <div className="flex flex-col">
                    <p className="font-bold">{item.title}</p>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} text-balance`}
                    >
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
          <div className="bg-linear-to-br from-brand-orange to-brand-magenta p-1 rounded-3xl rotate-3 shadow-2xl lg:mt-4">
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
            className={`absolute -bottom-8 left-1 sm:-bottom-6 sm:-left-6 p-4 rounded-2xl shadow-xl border ${isDarkMode ? "dark:bg-brand-charcoal border-gray-800" : "bg-brand-light-gray border-gray-100"}`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`w-12 h-12 ${isDarkMode ? "dark:bg-green-800/50" : "bg-green-200"} rounded-full flex items-center justify-center text-green-500`}
              >
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
                <p className="text-xs text-gray-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
