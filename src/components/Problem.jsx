import { motion } from "framer-motion";
import { AlertCircle, CircleCheckBig } from "lucide-react";

const Problem = ({ isDarkMode }) => {
  const problems = [
    {
      title: "Masalah",
      desc: "Kehadiran digital yang lemah tanpa website profesional membuat banyak bisnis sulit bersaing saat ini.",
      icon: <AlertCircle className="text-brand-orange shrink-0 " size={48} />,
    },
    {
      title: "Solusi",
      desc: "ENVTEH menyediakan jasa pembuatan website modern dan interaktif secara efisien untuk meningkatkan kredibilitas bisnis Anda.",
      icon: (
        <CircleCheckBig className="text-brand-orange shrink-0 " size={48} />
      ),
    },
  ];

  return (
    <section id="problem" className="pt-10 md:pt-24 lg:pt-0">
      <div className="container mx-auto px-6 py-6">
        <div className="lg:max-w-7xl max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 4 % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-4 md:gap-6 p-6 rounded-2xl  ${isDarkMode ? "bg-red-900/20 border border-red-900/20" : " bg-red-100/20 border border-red-100"}`}
              >
                <span
                  className={`${isDarkMode ? " bg-red-200/20" : " bg-red-200/20"} inline-block p-4 rounded-full`}
                >
                  {prob.icon}
                </span>
                <div className="text-center md:text-left">
                  <p className="text-xl font-medium mb-2">{prob.title}</p>
                  <p
                    className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}  font-normal`}
                  >
                    {prob.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
