import { motion } from "framer-motion";
import { Rocket, Zap, BarChart3, Crown, Check } from "lucide-react";

const Services = ({ isDarkMode }) => {
  const pricingPlans = [
    {
      name: "BASIC LITE",
      subtitle: "Cocok untuk pemula",
      price: "400.000",
      icon: <Rocket className="w-12 h-12" />,
      features: [
        "1 Halaman",
        "Desain Simple & Modern",
        "Mobile Friendly",
        "Revisi 1x",
      ],
      recommended: false,
    },
    {
      name: "BASIC PRO",
      subtitle: "Paling banyak dipilih",
      price: "600.000",
      icon: <Zap className="w-12 h-12" />,
      features: [
        "1 - 3 Halaman",
        "Desain Custom",
        "Mobile Friendly",
        "Revisi 2x",
      ],
      recommended: true,
    },
    {
      name: "STANDARD",
      subtitle: "Untuk bisnis berkembang",
      price: "1.200.000",
      icon: <BarChart3 className="w-12 h-12" />,
      features: [
        "3 - 5 Halaman",
        "Desain Custom Premium",
        "Mobile Friendly",
        "Revisi 3x",
      ],
      recommended: false,
    },
    {
      name: "PRO",
      subtitle: "Untuk bisnis profesional",
      price: "2.000.000+",
      icon: <Crown className="w-12 h-12" />,
      features: [
        "5+ Halaman",
        "Desain Custom Premium",
        "Mobile Friendly",
        "Revisi 3x+",
        "Integrasi & Fitur Lengkap",
      ],
      recommended: false,
    },
  ];

  return (
    <section
      id="services"
      className={`py-18 md:py-24 ${isDarkMode ? "bg-brand-charcoal text-white" : "bg-white text-brand-charcoal"} transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Paket yang Sudah{" "}
            <span className="bg-linear-to-r from-brand-orange to-brand-magenta bg-clip-text text-transparent">
              Tersedia
            </span>
            .
          </motion.h2>
        </div>

        {/* <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          className="w-24 h-1 bg-linear-to-r from-brand-orange to-brand-magenta mx-auto rounded-full"
        /> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative p-8 rounded-3xl flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2.5 hover:shadow-2xl ${
                plan.recommended
                  ? `${isDarkMode ? "bg-brand-charcoal/50 border-brand-orange" : "bg-white border-brand-orange"} border-2 z-10 shadow-xl`
                  : `${isDarkMode ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-100"} border shadow-xl`
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-linear-to-r from-brand-orange to-brand-magenta text-white text-xs font-bold rounded-full uppercase tracking-wider">
                  Recommended
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-1 uppercase ${plan.recommended ? "text-brand-orange" : "text-brand-orange/80"}`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-6 font-medium`}
              >
                {plan.subtitle}
              </p>

              <div
                className={`mb-6 ${plan.recommended ? "text-brand-orange" : isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                {plan.icon}
              </div>

              <div className="mb-8">
                <span className="text-lg font-bold">Rp</span>
                <span className="text-3xl font-extrabold ml-1">
                  {plan.price}
                </span>
              </div>

              <ul className="w-full space-y-4 mb-10 text-left">
                {plan.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`flex items-start gap-3 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                  >
                    <Check className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 shadow-md hover:shadow-lg ${
                  plan.recommended
                    ? "bg-linear-to-r from-brand-orange to-brand-magenta text-white hover:opacity-90 active:scale-95"
                    : "border border-brand-magenta text-brand-magenta hover:bg-brand-magenta hover:text-white active:scale-95"
                }`}
              >
                Pilih Paket
              </button>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center mt-6 md:mt-14 text-sm md:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-medium animate-pulse underline`}
        >
          <span className="text-red-500">*</span>Harga bisa berubah sesuai
          kebutuhan.{" "}
          <a href="https://wa.link/gw6rq9" className="text-brand-magenta">
            Hubungi kami untuk informasi lebih lanjut.
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
