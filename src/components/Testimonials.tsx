import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO at TechFlow',
    content: "Working with Elite was a game-changer for our platform. Their attention to detail and technical expertise is unmatched. The final product exceeded all our expectations.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager at Innovate',
    content: "The level of professionalism and creativity brought to our project was incredible. They didn't just build what we asked for, they made it better.",
    avatar: 'https://i.pravatar.cc/150?u=michael',
  },
  {
    id: 3,
    name: 'Emma Williams',
    role: 'Founder of CreativeCo',
    content: "A truly talented developer who understands the balance between design and performance. Our site speed improved by 200% after the redesign.",
    avatar: 'https://i.pravatar.cc/150?u=emma',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-24 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4"
        >
          Testimonials
        </motion.h2>
        
        <div className="relative mt-12">
          <Quote className="absolute -top-12 -left-12 text-white/5 w-32 h-32 -z-10" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6 }}
              className="px-8"
            >
              <p className="text-2xl md:text-4xl font-display italic mb-12 leading-relaxed tracking-tight text-white/80">
                "{testimonials[index].content}"
              </p>
              
              <div className="flex flex-col items-center">
                <img
                  src={testimonials[index].avatar}
                  alt={testimonials[index].name}
                  className="w-12 h-12 rounded-full mb-4 grayscale border border-white/10 p-1"
                />
                <h4 className="font-bold text-sm uppercase tracking-widest">{testimonials[index].name}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/20">{testimonials[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-6 mt-16">
            <button
              onClick={prev}
              className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={next}
              className="p-4 rounded-full border border-white/10 hover:bg-white/5 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
