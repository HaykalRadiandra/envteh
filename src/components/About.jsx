import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useEffect, useRef } from "react";

const Counter = ({ target, className }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView, count, target]);

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  );
};

const About = ({ isDarkMode }) => {
  return (
    <section id="about" className="py-18 md:py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center mt-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-3/2 bg-brand-light-gray rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-2 sm:-right-4 md:-right-8 w-48 h-48 bg-brand-magenta rounded-3xl -z-10" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Bersemangat tentang{" "}
            <span className="bg-linear-to-r from-brand-orange to-brand-magenta bg-clip-text text-transparent">
              Inovasi Digital
            </span>
            .
          </h2>
          <p
            className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 leading-relaxed`}
          >
            Didirikan pada tahun 2024, Envteh dengan cepat menjadi pemimpin
            dalam pengembangan perangkat lunak kustom. Kami adalah tim yang
            terdiri dari para insinyur, desainer, dan ahli strategi visioner
            yang berdedikasi untuk mendorong batas-batas kemungkinan di dunia
            digital.
          </p>
          <p
            className={`text-lg ${isDarkMode ? "text-gray-300" : "text-gray-600"} mb-8 leading-relaxed`}
          >
            Misi kami sederhana: memberdayakan bisnis dengan menyediakan
            alat-alat teknologi yang mereka butuhkan untuk sukses di pasar yang
            berkembang pesat.
          </p>
          <div className="grid grid-cols-2 gap-8">
            {/* Box 1: Projects */}
            <div>
              <p className="text-4xl font-bold text-brand-orange mb-2">
                <Counter target={10} />+
              </p>
              <p className="text-gray-500 font-medium">Projects Delivered</p>
            </div>

            {/* Box 2: Expert */}
            <div>
              <p className="text-4xl font-bold text-brand-magenta mb-2">
                <Counter target={1} />+
              </p>
              <p className="text-gray-500 font-medium">Expert Developers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
