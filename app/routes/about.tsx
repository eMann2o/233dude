import { Link } from "react-router";
import { motion } from "framer-motion";
import { Database, GitCommit, Layers, Lock, Server, GraduationCap, Briefcase, ArrowRight } from "lucide-react";
import { ReactLenis } from "lenis/react";

export default function About() {
  return (
    <ReactLenis root>
      <div className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden pt-24 pb-20">
        
        {/* --- NAVIGATION (Simple Version for internal pages) --- */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 mix-blend-multiply">
          <div className="bg-parchment/80 backdrop-blur-md border border-camel/20 rounded-full px-6 py-3 flex items-center gap-6 shadow-sm shadow-camel/5">
            <Link to="/" className="font-serif font-bold text-camel text-lg hover:text-camel-dark transition-colors">EO.</Link>
            <div className="w-px h-4 bg-camel/30" />
            <div className="flex gap-6 text-sm font-medium text-camel-dark">
              <Link to="/projects" className="hover:text-camel transition-colors">Projects</Link>
              <span className="text-camel">About</span>
            </div>
          </div>
        </nav>

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
              Not just writing code.<br />
              <span className="text-camel italic">Architecting systems.</span>
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
                  I am an undergraduate Information Technology student at <strong className="text-camel-dark font-semibold">Takoradi Technical University</strong>, graduating in 2026, with a strong focus on backend development, system architecture, and data-driven applications.
                </p>
                <p className="text-camel-dark/80 text-lg leading-relaxed mt-4">
                  I design and build production-style web systems that prioritize <span className="underline decoration-camel/40 underline-offset-4">data integrity, role-based access control, security, and maintainability</span> over visual polish.
                </p>
              </motion.section>

              {/* Technical Direction (The 70:30 Lock) */}
              <motion.section 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="relative"
              >
                <div className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-camel via-almond-silk to-transparent hidden md:block" />
                
                <h2 className="font-serif text-2xl text-camel-dark mb-4">Technical Direction</h2>
                <div className="bg-white/50 border border-camel/10 p-6 rounded-xl backdrop-blur-sm">
                  <p className="text-camel-dark/80 text-lg leading-relaxed mb-6">
                    My current work is focused primarily on <strong className="text-camel-dark">Node.js and Express</strong>, building API-first backends with structured authentication, authorization, and workflow enforcement.
                  </p>
                  <p className="text-camel-dark/70 text-base leading-relaxed">
                    Earlier large-scale projects built with <strong className="text-camel-dark">PHP</strong> form a strong foundation in relational data modeling, long-form system design, and institutional workflows, which continues to influence how I design modern backend systems today.
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
                className="sticky top-32"
              >
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
                      { icon: Server, title: "Current Focus", desc: "API-First Architecture (Node/Express)" },
                      { icon: Layers, title: "Foundation", desc: "Institutional Workflows (PHP/SQL)" },
                      { icon: Briefcase, title: "Internships", desc: "Corp. Engineering & Infrastructure" }
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
            <div className="max-w-3xl">
              <h2 className="font-serif text-3xl text-camel-dark mb-8">Background & Growth</h2>
              <p className="text-camel-dark/80 text-lg leading-relaxed mb-8">
                My technical development has been shaped by experience in corporate and institutional IT environments, including internships in software engineering, IT systems support, and networked infrastructure.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "How systems fail in real environments",
                  "How non-technical users interact with software",
                  "Why maintainability matters more than cleverness"
                ].map((item, i) => (
                  <div key={i} className="bg-almond-cream/30 p-5 rounded-lg border border-camel/10">
                    <span className="text-4xl text-almond-silk font-serif leading-none block mb-2">0{i + 1}</span>
                    <p className="text-camel-dark font-medium text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- WHAT DEFINES MY WORK (Grid) --- */}
          <section>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-camel/20" />
              <h2 className="font-serif text-3xl text-camel-dark">What Defines My Work</h2>
              <div className="h-px flex-1 bg-camel/20" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Backend-First", icon: Server, desc: "Database-driven design that prioritizes data structure before UI code." },
                { title: "Separation of Concerns", icon: GitCommit, desc: "Decoupled logic allowing for independent scaling and cleaner maintenance." },
                { title: "Roles & Workflows", icon: Lock, desc: "Strong emphasis on granular permissions and enforcing business rules." },
                { title: "Depth > Quantity", icon: Layers, desc: "Preference for fewer systems built deeply rather than many shallow demos." }
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
              <p className="text-camel-dark/60 italic mb-6">"Design decisions documented and justified."</p>
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