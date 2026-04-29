import { motion } from 'framer-motion';

const Trust = () => {
  const partners = ['Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify', 'Adobe'];

  return (
    <section className="py-20 bg-brand-light-gray/50 dark:bg-brand-charcoal/50">
      <div className="container mx-auto px-6 text-center">
        <p className="text-gray-500 dark:text-gray-400 font-semibold mb-12 tracking-widest uppercase">Trusted by Global Industry Leaders</p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 dark:invert">
          {partners.map((partner, index) => (
            <motion.div
              key={partner}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-3xl font-black text-gray-400"
            >
              {partner}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
