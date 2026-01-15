import { Link } from "react-router";
import { motion } from "framer-motion";
import { Database, Layers, Server, GraduationCap, Briefcase, ArrowRight, LineChart, FileText, User, Lock } from "lucide-react";
import { ReactLenis } from "lenis/react";

export default function About() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">

        <div className="container mx-auto px-6 max-w-5xl">
          
          {/* --- HEADER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24"
          >
            <span className="text-camel font-bold tracking-widest uppercase text-xs mb-3 block">Identity & Context</span>
            <h1 className="font-serif text-5xl md:text-6xl text-camel-dark leading-tight">
              Backend architecture.<br />
              <span className="text-camel italic">Trustworthy data.</span>
            </h1>
          </motion.div>

          {/* --- MAIN CONTENT GRID --- */}
          <div className="grid md:grid-cols-12 gap-12 mb-32">
            
            {/* LEFT COL: The Narrative */}
            <div className="md:col-span-7 space-y-12">
              
              {/* Professional Summary */}
              <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl text-camel-dark mb-4">Professional Summary</h2>
                <p className="text-camel-dark/80 text-lg leading-relaxed">
                  I am an undergraduate Information Technology student at <strong className="text-camel-dark font-semibold">Takoradi Technical University</strong>, graduating in 2026.
                </p>
                <p className="text-camel-dark/80 text-lg leading-relaxed mt-4">
                  My primary interest lies in building backend systems that are secure, structured, and reliable, and in ensuring that the <span className="underline decoration-camel/40 underline-offset-4">data produced by those systems is accurate, analyzable, and useful</span> for decision-making.
                </p>
              </motion.section>

              {/* Technical Direction (Hybrid Focus) */}
              <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-camel via-almond-silk to-transparent hidden md:block" />
                
                <h2 className="font-serif text-2xl text-camel-dark mb-4">Technical Direction</h2>
                <div className="bg-white/50 border border-camel/10 p-6 rounded-xl backdrop-blur-sm space-y-6">
                  <div>
                    <strong className="text-camel-dark block mb-2 flex items-center gap-2"><Server size={16}/> Node.js & Express</strong>
                    <p className="text-camel-dark/80 text-base leading-relaxed">
                      I design API-first backend systems built around clearly defined roles, controlled access, and predictable behavior. I place strong emphasis on middleware-based authorization and structured validation.
                    </p>
                  </div>
                  
                  <div className="h-px w-full bg-camel/10" />

                  <div>
                    <strong className="text-camel-dark block mb-2 flex items-center gap-2"><LineChart size={16}/> Data Analysis</strong>
                    <p className="text-camel-dark/80 text-base leading-relaxed">
                      In parallel, I focus on extracting meaningful insights from application datasets. Because I understand how data is generated and stored, I can bridge the gap between engineering and analysis effectively.
                    </p>
                  </div>

                  <p className="text-camel-dark/60 text-sm italic pt-2">
                    * My foundation in PHP continues to influence my understanding of relational database design and institutional workflows.
                  </p>
                </div>
              </motion.section>

            </div>

            {/* RIGHT COL: The Visual / Context */}
            <div className="md:col-span-5 relative">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="sticky top-32 space-y-8"
              >
                
                {/* 📸 PROFILE PHOTO SLOT */}
                {/* INSTRUCTIONS: 
                   1. Place your photo in the public folder (e.g., /profile.jpg).
                   2. Ensure it is high-res, neutral background, head & shoulders.
                */}
                <div className="relative group w-full aspect-[4/5] max-w-sm mx-auto md:max-w-none">
                  {/* Decorative offset border */}
                  <div className="absolute inset-0 bg-camel/10 rounded-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0" />
                  
                  {/* Image Container */}
                  <div className="relative h-full w-full rounded-2xl overflow-hidden border border-camel/20 shadow-lg shadow-camel/5 bg-parchment">
                    <img 
                      src="/profile.jpg" 
                      alt="Emmanuel Opoku" 
                      className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                    />
                    
                    {/* Subtle Overlay (removes on hover) */}
                    <div className="absolute inset-0 bg-camel/10 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Abstract 'System' Visual */}
                <div className="bg-azure-mist rounded-2xl p-8 border border-camel/10 shadow-lg shadow-camel/5">
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="text-camel" size={20} />
                    <span className="text-xs font-bold text-camel-dark uppercase tracking-widest">System DNA</span>
                  </div>
                  
                  {/* Timeline / Growth List */}
                  <div className="space-y-8 relative">
                    {/* Line connecting dots */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-camel/20" />

                    {[
                      { icon: GraduationCap, title: "2026 (Expected)", desc: "Graduating Takoradi Technical University" },
                      { icon: Server, title: "Backend Engineering", desc: "Express.js, Security, RBAC" },
                      { icon: LineChart, title: "Data Analysis", desc: "Relational Datasets & Reporting" },
                      { icon: Layers, title: "Foundation", desc: "PHP & Institutional Workflows" }
                    ].map((item, i) => (
                      <div key={i} className="relative pl-8">
                        <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-parchment border-2 border-camel z-10" />
                        <h4 className="text-camel-dark font-bold text-sm">{item.title}</h4>
                        <p className="text-camel-dark/60 text-xs mt-1">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- BACKGROUND & EXPOSURE --- */}
          <section className="mb-32">
            <div className="max-w-4xl">
              <h2 className="font-serif text-3xl text-camel-dark mb-8">Real-World Exposure</h2>
              <p className="text-camel-dark/80 text-lg leading-relaxed mb-8">
                My internships in software engineering and institutional IT environments exposed me to the realities of live systems. These experiences shaped my understanding of how software must support people, processes, and accountability.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Collaboration & Quality", desc: "AmaliTech: Reinforced the importance of version control, code quality, and structured development practices." },
                  { title: "Reliability & Support", desc: "Adamus Resources: Taught me that in corporate environments, system reliability often outweighs feature count." },
                  { title: "Data & Documentation", desc: "STCCI: Highlighted the critical need for accurate data handling and systems usable by non-technical staff." }
                ].map((item, i) => (
                  <div key={i} className="bg-almond-cream/30 p-6 rounded-xl border border-camel/10">
                    <span className="text-4xl text-almond-silk font-serif leading-none block mb-4">0{i + 1}</span>
                    <h4 className="text-camel-dark font-bold text-sm mb-2">{item.title}</h4>
                    <p className="text-camel-dark/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- CORE PRINCIPLES (Grid) --- */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-camel/20" />
              <h2 className="font-serif text-3xl text-camel-dark">Core Principles</h2>
              <div className="h-px flex-1 bg-camel/20" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Database Before APIs", icon: Database, desc: "I begin with a clear understanding of data, roles, and workflows before any endpoints are implemented." },
                { title: "Security First", icon: Lock, desc: "Enforcing authorization and access control before adding features or convenience." },
                { title: "Data Integrity", icon: LineChart, desc: "Prioritizing clean, consistent data production to support reliable analysis downstream." },
                { title: "Clarity Over Cleverness", icon: FileText, desc: "Favoring maintainability and documentation over complex, 'clever' solutions." }
              ].map((card, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl border border-parchment shadow-sm hover:shadow-md hover:shadow-camel/10 transition-all"
                >
                  <div className="bg-azure-mist w-10 h-10 rounded-lg flex items-center justify-center text-camel mb-4">
                    <card.icon size={20} />
                  </div>
                  <h3 className="font-bold text-camel-dark mb-3">{card.title}</h3>
                  <p className="text-sm text-camel-dark/70 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-16 text-center">
              <p className="text-camel-dark/60 italic mb-6">"Systems meant to be operated, analyzed, and trusted."</p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-camel font-bold hover:gap-4 transition-all">
                See these principles in action <ArrowRight size={16} />
              </Link>
            </div>
          </section>

        </div>
      </div>
    </ReactLenis>
  );
}