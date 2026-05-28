import { Link } from "react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Fingerprint,
  GitMerge,
  Layers,
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import { getProcess, resolveIcon } from "~/data/data";

const PRINCIPLES = getProcess();

export default function Process() {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden pt-32 pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          {/* --- HERO SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 max-w-4xl mx-auto space-y-8"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Engineering Philosophy</span>
            <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold">
              Reliable systems scale. <br />
              <span className="gradient-text italic">Brittle logic compounds.</span>
            </h1>
            <p className="text-iron-grey/60 text-xl leading-relaxed max-w-2xl mx-auto">
              Design before code. Architecture before implementation. I believe that structural decisions are the most impactful part of the engineering lifecycle.
            </p>
          </motion.div>

          {/* --- PRINCIPLES GRID --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PRINCIPLES.map((item, idx) => {
              const ItemIcon = resolveIcon(item.icon);
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bento-card group flex flex-col hover:border-blue-bell/10"
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className={`p-4 rounded-2xl bg-white shadow-sm text-${item.color}`}>
                      <ItemIcon size={26} />
                    </div>
                    <span className="text-[10px] font-bold text-iron-grey/20 uppercase tracking-[0.2em]">Principle 0{idx + 1}</span>
                  </div>

                  <div className="flex-1">
                    <h2 className="text-2xl font-plus font-bold text-iron-grey mb-2 group-hover:text-blue-bell transition-colors">
                      {item.title}
                    </h2>
                    <p className="text-[10px] font-bold text-blue-bell/60 uppercase tracking-widest mb-6 leading-relaxed">
                      "{item.statement}"
                    </p>
                    <p className="text-sm text-iron-grey/60 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* --- ARCHITECTURAL DNA --- */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 bg-iron-grey text-white rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 text-white">
                <Fingerprint size={400} strokeWidth={1} />
              </div>

            <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Engineering DNA</span>
                <h2 className="text-4xl md:text-5xl font-plus font-extrabold leading-tight">Architecture is the <br />first deliverable.</h2>
                <p className="text-white/60 text-lg leading-relaxed">
                  I don't just write and run scripts; I design systems that handle data flows efficiently and survive the complexities of production environments.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 bg-white text-iron-grey px-10 py-5 rounded-full font-bold hover:bg-blue-bell hover:text-white transition-all group"
                >
                  Start a Conversation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 backdrop-blur-sm space-y-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-blue-bell">
                    <Cpu size={24} />
                  </div>
                  <p className="text-sm font-bold text-white/80">Systems designed for scale.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-dusty-mauve">
                    <GitMerge size={24} />
                  </div>
                  <p className="text-sm font-bold text-white/80">Traceable data lineage and documentation.</p>
                </div>
                <div className="flex items-center gap-4">
                   <div className="p-3 bg-white/10 rounded-xl text-lavender">
                    <Layers size={24} />
                  </div>
                  <p className="text-sm font-bold text-white/80">LayeredConcerns & separation of logic.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </ReactLenis>
  );
}
