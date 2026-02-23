import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, X } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Fintech Dashboard',
    category: 'Web App',
    image: 'https://picsum.photos/seed/fintech/800/600',
    description: 'A comprehensive financial management dashboard with real-time data visualization and automated reporting.',
    tech: ['React', 'D3.js', 'Tailwind', 'Node.js'],
    link: '#',
    github: '#',
  },
  {
    id: 2,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    image: 'https://picsum.photos/seed/shop/800/600',
    description: 'A modern e-commerce solution with headless CMS integration, multi-currency support, and optimized checkout.',
    tech: ['Next.js', 'Shopify', 'TypeScript', 'Stripe'],
    link: '#',
    github: '#',
  },
  {
    id: 3,
    title: 'AI Content Generator',
    category: 'SaaS',
    image: 'https://picsum.photos/seed/ai/800/600',
    description: 'An AI-powered platform for generating high-quality marketing content and social media posts.',
    tech: ['React', 'Gemini API', 'Express', 'PostgreSQL'],
    link: '#',
    github: '#',
  },
  {
    id: 4,
    title: 'Travel Booking App',
    category: 'Mobile App',
    image: 'https://picsum.photos/seed/travel/800/600',
    description: 'A seamless travel booking experience with interactive maps, personalized itineraries, and offline support.',
    tech: ['React Native', 'Firebase', 'Google Maps'],
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">Selected Works</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold">Portfolio.</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[16/10] mb-6 bg-white/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-2 block">{project.category}</span>
                  <h4 className="text-xl font-bold tracking-tight">{project.title}</h4>
                </div>
                <div className="p-2 border border-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ExternalLink size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/95 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative w-full max-w-5xl bg-[#050505] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors z-10"
              >
                <X size={20} />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-full bg-white/5">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover grayscale opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 md:p-16">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-4 block">{selectedProject.category}</span>
                  <h4 className="text-4xl font-display font-bold mb-8 tracking-tighter">{selectedProject.title}</h4>
                  <p className="text-sm text-white/40 mb-10 leading-relaxed tracking-wide">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-10">
                    <h5 className="text-[10px] font-bold mb-4 uppercase tracking-[0.2em] text-white/20">Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t) => (
                        <span key={t} className="px-4 py-1.5 border border-white/5 text-[10px] font-bold uppercase tracking-widest text-white/60">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.link}
                      className="flex-1 px-8 py-4 bg-white text-black rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
                    >
                      Launch <ExternalLink size={14} />
                    </a>
                    <a
                      href={selectedProject.github}
                      className="px-8 py-4 border border-white/10 rounded-full font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-white/5 transition-colors"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
