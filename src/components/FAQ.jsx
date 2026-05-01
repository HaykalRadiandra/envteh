import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = ({ isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Berapa lama biasanya sebuah proyek diselesaikan?",
      a: "Waktu pengerjaan proyek bervariasi tergantung pada tingkat kerumitannya. Sebuah landing page sederhana bisa memakan waktu 2-4 minggu, sementara platform perusahaan yang kompleks bisa memakan waktu 3-6 bulan.",
    },
    {
      q: "Teknologi apa saja yang menjadi keahlian Anda?",
      a: "Kami berspesialisasi dalam teknologi web dan mobile modern, termasuk React, Next.js, Node.js, Flutter, dan infrastruktur Cloud (AWS/GCP).",
    },
    {
      q: "Apakah Anda menyediakan layanan dukungan pasca-peluncuran?",
      a: "Ya, kami menyediakan berbagai paket pemeliharaan (maintenance) dan dukungan untuk memastikan perangkat lunak Anda tetap mutakhir dan aman.",
    },
    {
      q: "Dapatkah Anda bekerja sama dengan tim kami yang sudah ada?",
      a: "Tentu saja. Kami sering kali bergabung dengan tim yang sudah ada untuk memberikan keahlian khusus atau mempercepat siklus pengembangan.",
    },
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Pertanyaan Sering <span className="text-brand-magenta">Diajukan</span>
          .
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="border-b border-gray-100 dark:border-gray-800 pb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left hover:text-brand-orange transition-colors"
              >
                <span className="text-xl font-bold">{faq.q}</span>
                {openIndex === i ? <Minus /> : <Plus />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p
                      className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} py-4 text-lg leading-relaxed`}
                    >
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
