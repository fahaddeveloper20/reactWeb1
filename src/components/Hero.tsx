import { motion } from 'motion/react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.3em] uppercase border border-white/10 text-white/40 rounded-full">
            Muhammad Fahad
          </span>
          <h1 className="text-6xl md:text-9xl font-display font-bold tracking-tighter mb-8 leading-[0.85]">
            DIGITAL <br />
            <span className="text-white/20 italic">ARCHITECT</span> <br />
            & DESIGNER.
          </h1>
          <p className="max-w-xl mx-auto text-sm md:text-base text-white/40 mb-10 tracking-wide leading-relaxed">
            Crafting high-end digital solutions with precision and purpose. 
            Focused on minimal aesthetics and superior performance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 bg-white text-black rounded-full font-bold text-sm tracking-widest uppercase flex items-center gap-2 group"
            >
              Portfolio
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-10 py-4 border border-white/10 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-colors"
            >
              Contact
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-24 flex items-center justify-center gap-10 text-white/20"
        >
          <a href="#" className="hover:text-white transition-colors"><Github size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 w-6 h-10 border-2 border-black/10 dark:border-white/10 rounded-full flex justify-center p-1"
      >
        <div className="w-1 h-2 bg-accent rounded-full" />
      </motion.div>
    </section>
  );
}
