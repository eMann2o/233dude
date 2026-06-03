import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import {
  getPersonal,
  getHero,
  getHomeSections,
  getFeaturedProjects,
  resolveIcon,
} from "~/data/data";
import DotMatrix from "~/components/DotMatrix";

export function meta() {
  return [
    { title: "Emmanuel Opoku — Engineering" },
    { name: "description", content: "Portfolio of Emmanuel Opoku" },
  ];
}

const personal = getPersonal();
const hero = getHero();
const home = getHomeSections();
const PROJECTS = getFeaturedProjects();

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0px", "200px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  return (
      <div ref={containerRef} className="min-h-screen bg-page-bg">
        
        {/* === HERO SECTION === */}
        <section className="relative h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
          <DotMatrix />

          <motion.div 
            style={{ y: heroY, opacity }}
            className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center text-center mt-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <h1 className="text-massive text-white text-balance">
                Building the logic <br />
                <span className="text-gray-400">of tomorrow.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="mt-10 text-xl md:text-2xl text-gray-500 max-w-2xl font-medium tracking-tight"
            >
              Backend & Data Engineering. Turning complex constraints into elegant systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-12 flex items-center gap-6"
            >
              <Link to="/projects" className="btn-primary">
                View Work <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 1.2, duration: 1 }}
             className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400"
          >
             Scroll to explore
          </motion.div>
        </section>

        {/* === CAPABILITIES (Typography Focus) === */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
             <motion.div 
               initial={{ opacity: 0, x: -40 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
             >
                <h2 className="text-huge text-white mb-8">
                  Core <br />
                  <span className="text-gray-700">Capabilities</span>
                </h2>
                <p className="text-2xl text-gray-500 font-medium leading-relaxed max-w-lg">
                  {home.radarSection.description}
                </p>
             </motion.div>
             
             <div className="space-y-12 border-l border-white/[0.06] pl-8 md:pl-16">
               {[
                 { title: "Backend Architecture", desc: "Building scalable APIs, microservices, and secure access systems." },
                 { title: "Data Pipelines", desc: "Extracting, transforming, and loading high-volume data streams." },
                 { title: "System Reliability", desc: "Ensuring uptime, monitoring, and fault-tolerant infrastructure." }
               ].map((cap, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.8 }}
                    className="group cursor-default"
                  >
                     <h3 className="text-3xl md:text-4xl font-plus font-bold text-gray-700 group-hover:text-white transition-colors duration-500 tracking-tight mb-3">
                        {cap.title}
                     </h3>
                     <p className="text-lg text-gray-500 font-medium h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mt-4 transition-all duration-500">
                        {cap.desc}
                     </p>
                  </motion.div>
               ))}
             </div>
          </div>
        </section>

        <div className="divider-clean max-w-7xl mx-auto" />

        {/* === TECHNICAL FOCUS === */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="mb-24"
          >
             <h2 className="text-jumbo text-white max-w-4xl">
               Engineering is not just about writing code. It's about designing <span className="text-gray-400">resilient systems.</span>
             </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16 md:gap-8">
            {home.bentoCards.map((card, i) => {
              const Icon = resolveIcon(card.icon);
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="space-y-6"
                >
                  <Icon size={32} className="text-gray-700 mb-8" />
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <p className="text-gray-500 text-lg leading-relaxed">
                    {card.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <div className="divider-clean max-w-7xl mx-auto" />

        {/* === FEATURED PROJECTS (List View) === */}
        <section className="py-40 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-32 gap-8">
            <h2 className="text-huge text-white">
              Selected <br />
              <span className="text-gray-700">Works</span>
            </h2>
            <Link to="/projects" className="btn-outline">
              View All Projects
            </Link>
          </div>

          <div className="space-y-0">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group border-b border-white/[0.06] py-12 first:border-t"
              >
                <Link to={project.link} className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 w-full">
                  <div className="flex-1">
                    <h3 className="text-4xl md:text-5xl font-plus font-bold text-white tracking-tight group-hover:text-blue-500 transition-colors duration-500">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="flex-1 lg:max-w-md">
                     <p className="text-gray-500 text-lg mb-6">{project.desc}</p>
                     <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs font-bold uppercase tracking-widest text-gray-400">
                            {t}
                          </span>
                        ))}
                      </div>
                  </div>
                  
                  <div className="shrink-0 hidden lg:block opacity-0 group-hover:opacity-100 group-hover:translate-x-4 transition-all duration-500 text-white">
                     <ArrowRight size={40} strokeWidth={1} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="py-40 px-6 max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
               <h2 className="text-huge text-white">
                 Ready to build <br />
                 <span className="text-gray-700">something robust?</span>
               </h2>
               <div className="flex flex-wrap justify-center gap-6">
                  <Link to="/contact" className="btn-primary text-lg px-12 py-5">
                     Get in Touch
                  </Link>
               </div>
            </motion.div>
        </section>

      </div>
  );
}