import { motion } from 'motion/react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      onAnimationComplete={() => document.body.style.overflow = 'auto'}
      className="fixed inset-0 z-[200] bg-black flex items-center justify-center pointer-events-none"
    >
      <div className="relative">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[2px] bg-accent w-64"
        />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-white font-display font-bold tracking-[1em] text-center uppercase text-[10px]"
        >
          Fahad
        </motion.div>
      </div>
    </motion.div>
  );
}
