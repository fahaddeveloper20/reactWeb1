import { motion } from 'motion/react';

const skills = [
  { name: 'React / Next.js', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Tailwind CSS', level: 98 },
  { name: 'Node.js / Express', level: 85 },
  { name: 'Framer Motion', level: 92 },
  { name: 'UI/UX Design', level: 88 },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl group-hover:bg-accent/30 transition-colors" />
              <img
                src="https://picsum.photos/seed/profile/800/1000"
                alt="Profile"
                className="relative rounded-2xl w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">About</h2>
            <h3 className="text-4xl font-display font-bold mb-6">
              Minimalism in code, <br />
              excellence in design.
            </h3>
            <p className="text-sm text-white/40 mb-8 leading-relaxed tracking-wide">
              I am Muhammad Fahad, a dedicated developer focused on creating 
              seamless digital experiences. I believe in the power of simplicity 
              and the impact of well-crafted code.
            </p>

            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-white/60">{skill.name}</span>
                    <span className="text-[10px] text-white/20">{skill.level}%</span>
                  </div>
                  <div className="h-[1px] bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="h-full bg-white/40"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
