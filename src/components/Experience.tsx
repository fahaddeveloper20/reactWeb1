import { motion } from 'motion/react';

const experiences = [
  {
    year: '2025 — Present',
    role: 'Senior Web Architect',
    company: 'Global Tech Solutions',
    description: 'Leading the development of high-scale enterprise applications and mentoring junior developers.',
  },
  {
    year: '2023 — 2025',
    role: 'Full Stack Developer',
    company: 'Creative Digital Agency',
    description: 'Developed custom e-commerce solutions and interactive marketing platforms for global brands.',
  },
  {
    year: '2022 — 2023',
    role: 'Frontend Engineer',
    company: 'Startup Hub',
    description: 'Focused on building responsive and accessible user interfaces using React and modern CSS.',
  },
  {
    year: '2020 — 2022',
    role: 'Junior Web Developer',
    company: 'Local Web Studio',
    description: 'Started my journey by building landing pages and simple web applications for small businesses.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4"
          >
            Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Experience.
          </motion.h3>
        </div>

        <div className="space-y-px bg-white/5 border border-white/5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role + exp.year}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid md:grid-cols-[200px_1fr] p-10 bg-[#050505] hover:bg-white/[0.02] transition-colors group"
            >
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4 md:mb-0">
                {exp.year}
              </div>
              <div>
                <h4 className="text-xl font-bold mb-1 group-hover:text-white transition-colors">{exp.role}</h4>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-4">{exp.company}</p>
                <p className="text-sm text-white/40 leading-relaxed tracking-wide max-w-2xl">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
