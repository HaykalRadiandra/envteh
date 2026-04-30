import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = ({ isDarkMode }) => {
  const reviews = [
    { 
      name: "Alex Rivera", 
      role: "CEO, TechFlow", 
      text: "Envteh transformed our legacy system into a modern powerhouse. Their team is top-notch and highly professional.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    { 
      name: "Sarah Chen", 
      role: "Product Manager, Innovate", 
      text: "The attention to detail and performance optimization they provided was exactly what we needed for our scale.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100"
    },
    { 
      name: "John Smith", 
      role: "Founder, GreenScale", 
      text: "Responsive, skilled, and highly professional. Best development partner we've ever worked with in years.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    }
  ];

  return (
    <section id="testimonials" className={`py-24 transition-colors duration-300 ${isDarkMode ? "bg-brand-charcoal/50 text-white" : "bg-brand-light-gray/30 text-brand-charcoal"}`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Apa Kata <span className="bg-linear-to-r from-brand-orange to-brand-magenta bg-clip-text text-transparent">Klien Kami</span>.
          </motion.h2>
          <p className={`text-xl ${isDarkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
            Kepercayaan Anda adalah prioritas kami. Berikut adalah beberapa testimoni dari klien yang telah bekerja sama dengan kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                isDarkMode 
                  ? "bg-white/5 border border-white/10 hover:border-brand-orange/50 shadow-2xl" 
                  : "bg-white border border-gray-100 hover:border-brand-orange/50 shadow-xl"
              }`}
            >
              <div className="flex gap-1 mb-6 text-brand-orange">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-10 h-10 text-brand-orange/10" />
                <p className={`text-lg italic leading-relaxed mb-8 relative z-10 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
                  "{rev.text}"
                </p>
              </div>

              <div className="flex items-center gap-4">
                <img 
                  src={rev.image} 
                  alt={rev.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-brand-orange"
                />
                <div>
                  <p className="font-bold text-lg">{rev.name}</p>
                  <p className={`text-sm ${isDarkMode ? "text-gray-500" : "text-gray-500"}`}>{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
