import { motion } from 'motion/react';
import { Code2, Palette, Globe, Zap, Shield, Smartphone } from 'lucide-react';

const services = [
  {
    icon: <Code2 className="text-white/40" size={24} />,
    title: 'Development',
    description: 'Bespoke web solutions built with modern frameworks.',
  },
  {
    icon: <Palette className="text-white/40" size={24} />,
    title: 'Design',
    description: 'Minimalist and functional UI/UX design systems.',
  },
  {
    icon: <Smartphone className="text-white/40" size={24} />,
    title: 'Responsive',
    description: 'Perfectly adapted interfaces for every screen size.',
  },
  {
    icon: <Zap className="text-white/40" size={24} />,
    title: 'Optimization',
    description: 'High-performance code for lightning-fast loading.',
  },
  {
    icon: <Globe className="text-white/40" size={24} />,
    title: 'Strategy',
    description: 'Digital roadmaps tailored to your business goals.',
  },
  {
    icon: <Shield className="text-white/40" size={24} />,
    title: 'Security',
    description: 'Robust protection for your digital assets.',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4"
          >
            Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Services provided.
          </motion.h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 bg-[#050505] hover:bg-white/[0.02] transition-colors group"
            >
              <div className="mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {service.icon}
              </div>
              <h4 className="text-sm font-bold uppercase tracking-widest mb-4">{service.title}</h4>
              <p className="text-xs text-white/40 leading-relaxed tracking-wide">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
