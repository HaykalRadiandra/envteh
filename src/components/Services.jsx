import { motion } from "framer-motion";
import { Rocket, Zap, BarChart3, Crown, Check } from "lucide-react";
import { LinkButton } from "./Elements/Button";

const Services = ({ isDarkMode }) => {
  const pricingPlans = [
    {
      name: "BASIC",
      subtitle: "Web Statis Template",
      price: "300rb - 500rb",
      icon: <Rocket cl assName="w-12 h-12" />,
      features: [
        "1 Halaman",
        "Berbasis Template",
        "Desain Simple & Modern",
        "Tanpa Transisi & Animasi",
        "Mobile Friendly",
        "Belum termasuk harga domain",
        "Revisi 2x",
      ],
      recommended: false,
    },
    {
      name: "STANDARD",
      subtitle: "Web Statis Custom Template",
      price: "600rb - 1jt",
      icon: <Zap className="w-12 h-12" />,
      features: [
        "1 - 3 Halaman",
        "Design Custom Template",
        "Transisi & Animasi",
        "Mobile Friendly",
        "Belum termasuk harga domain",
        "Revisi 3x",
      ],
      recommended: true,
    },
    {
      name: "PRO",
      subtitle: " Web Static Full Custom",
      price: "1.5jt - 3jt",
      icon: <BarChart3 className="w-12 h-12" />,
      features: [
        "3 - 5 Halaman",
        "Desain Eksklusif 100% Request",
        "Transisi & Animasi",
        "Mobile Friendly",
        "Belum termasuk harga domain",
        "Revisi 4x",
      ],
      recommended: false,
    },
    {
      name: "ADVANCED",
      subtitle: " Web Dinamis Full Custom",
      price: "4jt+",
      icon: <Crown className="w-12 h-12" />,
      features: [
        "5+ Halaman",
        "Mobile Friendly",
        "Dashboard Admin",
        "Integrasi & Fitur Bisnis Sesuai Request",
        "Belum termasuk harga domain",
        "Revisi 5x",
      ],
      recommended: false,
    },
  ];

  function textMessage(paket) {
    const adminName = "EnvTeh";
    const phoneNumber = "62895363616395";
    const message = `Halo kak ${adminName}\n\nSaya izin menanyakan lebih jauh tentang paket ${paket}`;
    const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return waLink;
  }

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
                <span className="text-xl md:text-2xl font-extrabold ml-1">
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

              <LinkButton
                href={textMessage(plan.name)}
                target={"_blank"}
                rel={"noopener noreferrer"}
                classone="mt-auto w-full bg-transparent bg-linear-to-r from-brand-orange to-brand-magenta hover:opacity-70"
                classtwo={`${plan.recommended ? "bg-linear-to-r from-brand-orange to-brand-magenta text-white" : ""} ${isDarkMode ? "bg-brand-charcoal/50" : "bg-brand-light-gray"} transition-all duration-300 ease-out`}
                padding="py-3 px-6"
              >
                Pilih Paket
              </LinkButton>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className={`text-center mt-6 md:mt-14 md:text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"} font-medium animate-pulse`}
        >
          <span className="text-red-500">*</span>Harga bisa berubah sesuai
          kebutuhan.{" "}
          <a
            href="https://wa.link/gw6rq9"
            className="text-brand-magenta underline"
          >
            Hubungi kami untuk informasi lebih lanjut.
          </a>
        </motion.p>
      </div>
    </section>
  );
};

export default Services;
