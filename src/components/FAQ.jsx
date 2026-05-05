import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQ = ({ isDarkMode }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Berapa lama pengerjaan website?",
      a: "Tergantung paket dan kebutuhan, biasanya 2–7 hari untuk website sederhana.",
    },
    {
      q: "Berapa biaya pembuatan website?",
      a: "Menyesuaikan kebutuhan, tersedia beberapa paket mulai dari basic hingga custom.",
    },
    {
      q: "Apakah ada revisi?",
      a: "Tersedia revisi sesuai paket, dan kami memastikan hasil sesuai kebutuhan client.",
    },
    {
      q: "Apakah ada sistem pembayaran DP?",
      a: "Ya, pembayaran dilakukan dengan sistem DP di awal dan pelunasan setelah selesai.",
    },
    {
      q: "Apakah saya perlu paham teknis?",
      a: "Tidak, kami akan bantu dari awal hingga website siap digunakan.",
    },
    {
      q: "Apakah bisa bekerja sama dengan tim kami?",
      a: "Ya, kami dapat berkolaborasi dengan tim client seperti marketing, desain, atau IT untuk memastikan hasil sesuai kebutuhan dan tujuan bisnis.",
    },
    {
      q: "Apakah website dan aset menjadi milik client?",
      a: "Ya, website dan akses akan diserahkan sepenuhnya kepada client setelah project selesai.",
    },
    {
      q: "Apakah source code bisa diserahkan?",
      a: "Untuk project tertentu (custom), source code dapat diserahkan sesuai kesepakatan.",
    },
    {
      q: "Apakah termasuk domain & hosting?",
      a: "Tergantung paket, domain & hosting bisa disediakan atau menggunakan milik client.",
    },
    {
      q: "Apakah ada maintenance setelah selesai?",
      a: "Tersedia layanan maintenance opsional jika dibutuhkan.",
    },
    {
      q: "Apakah website bisa dikembangkan ke depan?",
      a: "Ya, website dapat dikembangkan sesuai kebutuhan. Untuk website berbasis template/web builder, pengembangan dapat dilakukan dengan batas tertentu, sedangkan untuk custom website lebih fleksibel untuk pengembangan jangka panjang.",
    },
    {
      q: "Apakah desain bisa custom?",
      a: "Tersedia opsi template maupun custom sesuai kebutuhan.",
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
