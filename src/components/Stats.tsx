import { motion } from 'motion/react';

const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Projects Completed', value: '120+' },
  { label: 'Happy Clients', value: '50+' },
  { label: 'Coffee Cups', value: '1.2k' },
];

export default function Stats() {
  return (
    <section className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tighter">
                {stat.value}
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
