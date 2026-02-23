import { motion } from 'motion/react';

const languages = [
  { name: 'English', level: 'Professional', percentage: 90 },
  { name: 'Urdu', level: 'Native', percentage: 100 },
  { name: 'Arabic', level: 'Elementary', percentage: 40 },
  { name: 'German', level: 'Learning', percentage: 20 },
];

export default function Languages() {
  return (
    <section id="languages" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4"
          >
            Communication
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Languages.
          </motion.h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-white/[0.01] rounded-lg group hover:border-white/20 transition-all"
            >
              <h4 className="text-lg font-bold mb-1">{lang.name}</h4>
              <p className="text-[10px] uppercase tracking-widest text-white/20 mb-6">{lang.level}</p>
              
              <div className="relative h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "circOut" }}
                  className="absolute top-0 left-0 h-full bg-white/40 group-hover:bg-white transition-colors"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
