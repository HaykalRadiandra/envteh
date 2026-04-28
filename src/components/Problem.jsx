import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';

const Problem = () => {
  const problems = [
    "Slow and outdated legacy systems slowing down your growth.",
    "Inefficient workflows causing unnecessary overhead costs.",
    "Lack of skilled developers to scale your technical vision.",
    "Security vulnerabilities putting your business at risk."
  ];

  return (
    <section id="problem" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Software Challenges are <span className="text-brand-magenta">Growth Killers</span>.</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Most businesses fail to scale because of technical debt and inefficient software architecture.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {problems.map((prob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20"
              >
                <AlertCircle className="text-red-500 shrink-0" size={24} />
                <p className="text-lg font-medium">{prob}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
