import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Rocket } from "lucide-react";

const Solution = ({ isDarkMode }) => {
  const solutions = [
    {
      title: "Web Development",
      desc: "We use the latest technologies like React, Node.js, and Cloud-native architectures.",
      icon: <Zap />,
    },
    {
      title: "Mobile Applications",
      desc: "Systems built to handle millions of users without breaking a sweat.",
      icon: <Rocket />,
    },
    {
      title: "UI/UX Design",
      desc: "Built-in security at every layer of the application development lifecycle.",
      icon: <Shield />,
    },
    {
      title: "Maintenace and Support",
      desc: "Rapid deployment cycles to get your features to market faster.",
      icon: <CheckCircle2 />,
    },
  ];

  return (
    <section
      id="solution"
      className={`py-18 md:py-24 ${isDarkMode ? "bg-brand-charcoal text-white" : "bg-white text-brand-charcoal"} transition-colors duration-300 overflow-hidden relative`}
    >
      {/* Decorative gradient */}
      <div className="absolute top-16 right-0 w-1/2 h-1/2 bg-brand-orange/5 blur-3xl rounded-full" />
      <div className="absolute bottom-16 left-0 w-1/2 h-1/2 bg-brand-orange/5 blur-3xl rounded-full" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Layanan Lengkap untuk
            <span className="text-brand-orange"> Bisnis Anda</span>.
          </motion.h2>
          <p
            className={`text-xl ${isDarkMode ? "text-gray-300" : "text-gray-600"} max-w-2xl mx-auto`}
          >
            Menyediakan pengembangan perangkat lunak kustom berkinerja tinggi
            yang disesuaikan dengan kebutuhan.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {solutions.map((sol, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl ${isDarkMode ? "bg-white/5 border-white/10" : "bg-gray-50 border-gray-100"} border hover:border-brand-orange/50 transition-all group shadow-sm hover:shadow-md flex
              flex-col items-center justify-center text-center`}
            >
              <div className="w-14 h-14 bg-brand-orange/20 rounded-2xl flex items-center justify-center text-brand-orange mb-6 group-hover:scale-110 transition-transform">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
              <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                {sol.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
