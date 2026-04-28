import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: "01", title: "Discovery", desc: "We dive deep into your business requirements and project goals." },
    { num: "02", title: "Strategy", desc: "Creating a detailed roadmap and choosing the right technology stack." },
    { num: "03", title: "Development", desc: "Agile sprints focused on building clean, high-quality code." },
    { num: "04", title: "Deployment", desc: "Testing, optimization, and launching your product to the world." }
  ];

  return (
    <section id="process" className="py-24 bg-brand-charcoal text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Development <span className="text-brand-orange">Process</span>.</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">A transparent and efficient approach to building great software.</p>
        </div>

        <div className="relative">
          {/* Horizontal line (desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-brand-orange/20 z-0" />
          
          <div className="grid md:grid-cols-4 gap-12 relative z-10">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="w-24 h-24 bg-brand-orange text-white rounded-full flex items-center justify-center text-3xl font-black mb-8 mx-auto md:mx-0 shadow-xl shadow-brand-orange/20">
                  {step.num}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
