import { motion } from 'motion/react';
import { Github, Linkedin, Twitter, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 border-t border-black/5 dark:border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#" className="text-2xl font-display font-bold tracking-tighter mb-4">
              FAHAD<span className="text-white/20">.</span>
            </a>
            <p className="text-white/20 text-[10px] uppercase tracking-widest">
              © 2026 Muhammad Fahad. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#" className="text-white/20 hover:text-white transition-colors"><Github size={18} /></a>
            <a href="#" className="text-white/20 hover:text-white transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="text-white/20 hover:text-white transition-colors"><Twitter size={18} /></a>
          </div>

          <motion.button
            whileHover={{ y: -5 }}
            onClick={scrollToTop}
            className="p-4 border border-white/10 rounded-full text-white/40 hover:text-white hover:border-white transition-all"
          >
            <ArrowUp size={18} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
