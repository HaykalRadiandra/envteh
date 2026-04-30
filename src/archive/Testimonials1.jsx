import { motion } from 'framer-motion';

const Testimonials = () => {
  const reviews = [
    { name: "Alex Rivera", role: "CEO, TechFlow", text: "Envteh transformed our legacy system into a modern powerhouse. Their team is top-notch." },
    { name: "Sarah Chen", role: "Product Manager, Innovate", text: "The attention to detail and performance optimization they provided was exactly what we needed." },
    { name: "John Smith", role: "Founder, GreenScale", text: "Responsive, skilled, and highly professional. Best development partner we've ever worked with." }
  ];

  return (
    <section className="py-24 bg-brand-light-gray/30 dark:bg-brand-charcoal/30">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Client <span className="text-brand-magenta">Testimonials</span>.</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl bg-white dark:bg-brand-charcoal border border-gray-100 dark:border-gray-800 shadow-xl"
            >
              <div className="text-brand-orange mb-4">
                {"★".repeat(5)}
              </div>
              <p className="text-lg italic text-gray-600 dark:text-gray-400 mb-6">"{rev.text}"</p>
              <div>
                <p className="font-bold">{rev.name}</p>
                <p className="text-sm text-gray-500">{rev.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
