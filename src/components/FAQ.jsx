import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { q: "How long does a typical project take?", a: "Project timelines vary depending on complexity. A simple landing page can take 2-4 weeks, while complex enterprise platforms can take 3-6 months." },
    { q: "What technologies do you specialize in?", a: "We specialize in modern web and mobile stacks, including React, Next.js, Node.js, Flutter, and Cloud infrastructure (AWS/GCP)." },
    { q: "Do you offer post-launch support?", a: "Yes, we provide various maintenance and support packages to ensure your software stays up-to-date and secure." },
    { q: "Can you work with our existing team?", a: "Absolutely. We often augment existing teams to provide specialized expertise or accelerate development cycles." }
  ];

  return (
    <section id="faq" className="py-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Frequently Asked <span className="text-brand-magenta">Questions</span>.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-100 dark:border-gray-800 pb-4">
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
                    <p className="py-4 text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
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
