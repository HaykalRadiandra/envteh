import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square bg-brand-light-gray rounded-3xl overflow-hidden shadow-xl">
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
            Passionate About{" "}
            <span className="text-brand-magenta">Digital Innovation</span>.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
            Founded in 2024, Envteh has quickly become a leader in custom
            software development. We are a team of visionary engineers,
            designers, and strategists dedicated to pushing the boundaries of
            what's possible in the digital world.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
            Our mission is simple: to empower businesses by providing them with
            the technological tools they need to succeed in a rapidly evolving
            market.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <p className="text-4xl font-bold text-brand-orange mb-2">50+</p>
              <p className="text-gray-500 font-medium">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-magenta mb-2">15+</p>
              <p className="text-gray-500 font-medium">Expert Developers</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
