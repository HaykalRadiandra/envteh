import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, BarChart3, Database, Layers } from 'lucide-react';

const Services = () => {
  const services = [
    { title: "Web Development", desc: "Custom web applications built with speed, security, and scalability in mind.", icon: <Globe /> },
    { title: "Mobile Apps", desc: "Native and cross-platform mobile experiences for iOS and Android.", icon: <Smartphone /> },
    { title: "Custom Software", desc: "Tailored software solutions designed to solve your specific business challenges.", icon: <Code2 /> },
    { title: "Data Analytics", desc: "Turn your raw data into actionable insights with our business intelligence tools.", icon: <BarChart3 /> },
    { title: "Cloud Solutions", desc: "Robust cloud infrastructure and migration services for modern businesses.", icon: <Layers /> },
    { title: "Backend Systems", desc: "High-performance API and database architectures to power your products.", icon: <Database /> }
  ];

  return (
    <section id="services" className="py-24 bg-brand-light-gray/30 dark:bg-brand-charcoal/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our Core <span className="text-brand-orange">Expertise</span>.
          </motion.h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">From concept to deployment, we offer a full suite of software development services.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-white dark:bg-brand-charcoal border border-gray-100 dark:border-gray-800 shadow-xl shadow-gray-200/20 dark:shadow-none hover:shadow-2xl transition-all group"
            >
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center text-brand-magenta mb-8 group-hover:bg-brand-magenta group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
