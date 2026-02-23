import { motion } from 'motion/react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/40 mb-4">Contact</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Let's build something <br />
              <span className="text-white/20 italic">extraordinary</span> together.
            </h3>
            <p className="text-sm text-white/40 mb-12 max-w-md leading-relaxed tracking-wide">
              I'm always open to discussing new opportunities and challenges. 
              Reach out if you're looking for a dedicated partner.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-8">
                <div className="text-white/20">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-1">Email</p>
                  <p className="text-sm font-bold tracking-widest">fahad.developer3122@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-white/20">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-1">Phone</p>
                  <p className="text-sm font-bold tracking-widest">+92 312 8548296</p>
                </div>
              </div>
              <div className="flex items-center gap-8">
                <div className="text-white/20">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20 mb-1">Location</p>
                  <p className="text-sm font-bold tracking-widest">Karachi Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-16 border border-white/5 bg-white/[0.01]"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Name</label>
                  <input
                    type="text"
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-white outline-none transition-colors text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Email</label>
                  <input
                    type="email"
                    className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-white outline-none transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b border-white/10 focus:border-white outline-none transition-colors resize-none text-sm"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button className="w-full py-5 bg-white text-black rounded-full font-bold text-xs uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white/90 transition-all group">
                Send
                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
