import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Clock,
  CircleDollarSign,
  Layers,
  Smartphone,
  Bell,
  Quote,
} from "lucide-react";

const Process = ({ isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const processSteps = [
    { id: 1, title: "Konsultasi", desc: "Diskusi kebutuhan website Anda" },
    { id: 2, title: "Pilih Paket", desc: "Tentukan paket yang sesuai" },
    { id: 3, title: "Pengerjaan", desc: "Kami mulai membuat website" },
    { id: 4, title: "Revisi", desc: "Revisi sesuai paket yang dipilih" },
    { id: 5, title: "Website Siap", desc: "Website siap digunakan" },
  ];

  const advantages = [
    {
      icon: <Clock className="w-6 h-6 text-red-500" />,
      title: "Pengerjaan Cepat",
      desc: "2 - 7 hari jadi",
    },
    {
      icon: <CircleDollarSign className="w-6 h-6 text-red-500" />,
      title: "Harga Terjangkau",
      desc: "Kualitas terbaik, harga bersahabat",
    },
    {
      icon: <Layers className="w-6 h-6 text-red-500" />,
      title: "Desain Modern",
      desc: "Tampilan elegan & profesional",
    },
    {
      icon: <Smartphone className="w-6 h-6 text-red-500" />,
      title: "Mobile Friendly",
      desc: "Tampil sempurna di semua device",
    },
    {
      icon: <Bell className="w-6 h-6 text-red-500" />,
      title: "Support Responsif",
      desc: "Kami siap membantu Anda",
    },
  ];

  const testimonials = [
    {
      text: "Website dari ENVTEH membuat bisnis kami terlihat lebih profesional. Prosesnya cepat dan hasilnya memuaskan!",
      author: "Resto Nusantara",
    },
    {
      text: "Sangat puas dengan layanan ENVTEH. Timnya sangat responsif dan desainnya benar-benar modern.",
      author: "UMKM Maju Jaya",
    },
    {
      text: "Harga yang ditawarkan sangat kompetitif dengan kualitas yang luar biasa. Sangat direkomendasikan!",
      author: "Digital Creative Lab",
    },
    {
      text: "Mobile friendly banget! Website saya lancar dibuka di hp maupun laptop tanpa kendala.",
      author: "Toko Sembako Barokah",
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      nextSlide();
    } else if (info.offset.x > 50) {
      prevSlide();
    }
  };

  return (
    <section
      id="process"
      className={`py-16 ${isDarkMode ? "bg-brand-charcoal text-white" : "bg-white text-gray-900"} transition-colors duration-300`}
    >
      <div className="container mx-auto px-6">
        <div
          className="text-center my-10 md:mb-20
        "
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Proses Pengembangan <span className="text-brand-orange">Kami</span>.
          </motion.h2>
          <p
            className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}
          >
            Pendekatan yang transparan dan efisien untuk membangun perangkat
            lunak yang hebat.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Proses Pengerjaan */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`p-10 rounded-[2rem] ${isDarkMode ? "bg-white/5 border border-white/10" : "bg-gray-50/50 border border-gray-100"}`}
          >
            <h3 className="text-2xl font-bold mb-10 text-center lg:text-left">
              Proses Pengerjaan
            </h3>
            <div className="space-y-8">
              {processSteps.map((step) => (
                <div key={step.id} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center font-bold text-sm">
                    {step.id}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">
                      {step.title}
                    </h4>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Keunggulan ENVTEH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className={`p-10 rounded-[2rem] ${isDarkMode ? "bg-white/5 border border-white/10" : "bg-gray-50/50 border border-gray-100"}`}
          >
            <h3 className="text-2xl font-bold mb-10 text-center lg:text-left">
              Keunggulan ENVTEH
            </h3>
            <div className="space-y-8">
              {advantages.map((item, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg leading-none mb-1">
                      {item.title}
                    </h4>
                    <p
                      className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimoni Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className={`p-10 rounded-[2rem] ${isDarkMode ? "bg-white/5 border border-white/10" : "bg-gray-50/50 border border-gray-100"} flex flex-col`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
          >
            <h3 className="text-2xl font-bold mb-10 text-center lg:text-left">
              Testimoni
            </h3>

            <div className="relative flex-grow flex flex-col justify-center overflow-hidden min-h-[250px]">
              <div className="absolute top-0 left-0">
                <Quote className="w-12 h-12 text-red-500 opacity-20 transform scale-x-[-1]" />
              </div>

              <div className="relative z-10 py-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={handleDragEnd}
                    className="cursor-grab active:cursor-grabbing"
                  >
                    <p
                      className={`text-xl font-medium leading-relaxed mb-8 ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                    >
                      {testimonials[currentIndex].text}
                    </p>
                    <p className="text-lg font-bold">
                      <span
                        className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} font-normal`}
                      >
                        -{" "}
                      </span>
                      {testimonials[currentIndex].author}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? `w-6 ${isDarkMode ? "bg-white" : "bg-gray-900"}`
                      : `w-2 ${isDarkMode ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}`
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
