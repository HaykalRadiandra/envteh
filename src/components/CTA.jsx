import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section id="cta" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-linear-to-r from-brand-orange to-brand-magenta rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black mb-8">Ready to Build Your <span className="underline decoration-wavy decoration-white/30">Next Big Thing</span>?</h2>
            <p className="text-xl text-white/80 mb-12">Join 100+ businesses that trust Envteh to deliver high-performance software solutions.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <button className="bg-white text-brand-orange hover:bg-brand-light-gray px-10 py-5 rounded-full font-black text-xl transition-all shadow-xl">
                Let's Talk
              </button>
              <button className="bg-transparent border-2 border-white/50 hover:bg-white/10 px-10 py-5 rounded-full font-black text-xl transition-all">
                Schedule a Call
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
