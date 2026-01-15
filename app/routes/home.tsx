import { useEffect, useRef } from "react";
import { Link } from "react-router"; // React Router v7
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Database, Server, Shield, Code, Terminal, ExternalLink, Github } from "lucide-react";
import { ReactLenis } from "lenis/react"; // Smooth scroll wrapper
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { cn } from "~/src/lib/utils"; // Adjust path to your utils

// --- DATA ---
const PROJECTS = [
  {
    title: "Travel With KB",
    role: "Full-Stack System",
    desc: "A decoupled REST API booking engine with strict JWT security and normalized data modeling.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "#"
  },
  {
    title: "Scholarship Platform",
    role: "Institutional Backend",
    desc: "Multi-role application workflow system handling document validation and automated status transitions.",
    tech: ["PHP", "MySQL", "RBAC Architecture"],
    link: "#"
  },
  {
    title: "WESCCU MIS",
    role: "Legacy Integration",
    desc: "Financial management interface integrated with existing legacy databases for credit union operations.",
    tech: ["System Architecture", "Data Migration"],
    link: "#"
  }
];

// Backend-focused stats for Recharts
const SKILL_DATA = [
  { subject: 'Backend Arch', A: 95, fullMark: 100 },
  { subject: 'Database Design', A: 90, fullMark: 100 },
  { subject: 'API Security', A: 85, fullMark: 100 },
  { subject: 'Frontend UI', A: 60, fullMark: 100 }, // Shows honesty/focus
  { subject: 'DevOps', A: 75, fullMark: 100 },
  { subject: 'System Logic', A: 95, fullMark: 100 },
];

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <ReactLenis root>
      <div ref={containerRef} className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden">
        
        {/* --- NAVIGATION --- */}
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
          <div className="bg-azure-mist/80 backdrop-blur-md border border-camel/20 rounded-full px-6 py-3 flex items-center gap-8 shadow-sm shadow-camel/5">
            <span className="font-serif font-bold text-camel text-lg">EO.</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-camel-dark">
              {['Work', 'Approach', 'About'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="hover:text-camel transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-camel transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <a 
              href="mailto:papa16annan@gmail.com" 
              className="bg-camel text-azure-mist px-4 py-1.5 rounded-full text-sm font-medium hover:bg-camel-dark transition-colors"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-azure-mist rounded-full blur-[100px] opacity-60"
            />
            <motion.div 
              animate={{ rotate: -360, scale: [1, 1.2, 1] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-almond-silk rounded-full blur-[120px] opacity-40"
            />
          </div>

          <div className="relative z-10 container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/40 border border-camel/20 text-camel-dark text-xs font-semibold tracking-wider mb-6">
                  <div className="w-2 h-2 rounded-full bg-camel animate-pulse" />
                  SYSTEMS & BACKEND ARCHITECTURE
                </div>
                <h1 className="font-serif text-5xl md:text-7xl text-camel-dark leading-[1.1]">
                  Building logic <br />
                  <span className="text-camel italic">behind the pixels.</span>
                </h1>
                <p className="mt-6 text-lg text-camel-dark/80 max-w-md leading-relaxed">
                  I design secure, data-driven backends that prioritize integrity, roles, and workflows over flashy demos.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <Link to="/projects" className="group flex items-center gap-2 bg-camel-dark text-parchment px-6 py-3 rounded-lg hover:bg-camel transition-all">
                  View Architecture
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="https://github.com" className="p-3 border border-camel/30 rounded-lg text-camel-dark hover:bg-camel/10 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </motion.div>
            </div>

            {/* Visual / Abstract Representation */}
            <motion.div style={{ y }} className="hidden md:flex justify-center relative">
              <div className="relative w-80 h-96 bg-almond-cream/30 backdrop-blur-sm border border-white/50 rounded-2xl p-6 rotate-3 hover:rotate-0 transition-transform duration-500 shadow-xl shadow-camel/10">
                {/* Code Snippet visual */}
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-almond-silk" />
                  <div className="w-3 h-3 rounded-full bg-camel/40" />
                </div>
                <div className="space-y-3 font-mono text-xs text-camel-dark opacity-80">
                  <div className="flex gap-2"><span className="text-camel">const</span> <span>system</span> = <span className="text-camel">require</span>('reliability');</div>
                  <div className="pl-4 text-camel-dark/60">// Enforcing data integrity</div>
                  <div className="flex gap-2"><span className="text-camel">await</span> <span>database.connect</span>();</div>
                  <div className="flex gap-2"><span className="text-camel">if</span> (!secure) <span className="text-camel">throw</span> Error;</div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-parchment border border-camel/10 p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float">
                  <div className="bg-azure-mist p-2 rounded-lg text-camel">
                    <Database size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-camel-dark/60 uppercase tracking-wider">Uptime</div>
                    <div className="font-bold text-camel-dark">99.9%</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* --- APPROACH / DATA VIZ SECTION --- */}
        <section className="py-24 bg-azure-mist relative">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* Radar Chart (Recharts) */}
              <div className="h-[400px] w-full flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                    <PolarGrid stroke="#B2967D" strokeOpacity={0.2} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6D5442', fontSize: 12, fontFamily: 'var(--font-sans)' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar
                      name="Skills"
                      dataKey="A"
                      stroke="#B2967D"
                      strokeWidth={2}
                      fill="#E6BEAE"
                      fillOpacity={0.6}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              {/* Approach Text */}
              <div>
                <h2 className="font-serif text-4xl text-camel-dark mb-6">Focused Depth Over <br/>Broad Chaos.</h2>
                <p className="text-camel-dark/70 mb-8 leading-relaxed">
                  While many focus on making pixels move, I focus on how data flows. 
                  My capability profile leans heavily into <strong>backend architecture, schema design, and system security</strong>.
                </p>
                
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: Server, title: "API First", desc: "Decoupled architectures ready for any frontend." },
                    { icon: Shield, title: "Security by Default", desc: "RBAC, JWT, and input validation baked in." },
                    { icon: Terminal, title: "Maintainability", desc: "Clean code that survives team rotation." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 text-camel">
                        <item.icon size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-camel-dark">{item.title}</h3>
                        <p className="text-sm text-camel-dark/60">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- PROJECTS SECTION --- */}
        <section id="work" className="py-32 container mx-auto px-6">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-camel text-sm font-bold tracking-widest uppercase mb-2">Selected Works</span>
            <h2 className="font-serif text-4xl text-camel-dark">Systems built for production.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-parchment shadow-sm hover:shadow-xl hover:shadow-camel/10 transition-all duration-300"
              >
                <div className="h-48 bg-almond-cream/50 relative overflow-hidden group-hover:bg-almond-silk/30 transition-colors">
                  {/* Decorative Project Pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B2967D_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-camel-dark border border-camel/10">
                    {project.role}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-camel-dark mb-3 group-hover:text-camel transition-colors">{project.title}</h3>
                  <p className="text-camel-dark/70 text-sm mb-6 line-clamp-3">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map(t => (
                      <span key={t} className="text-[10px] uppercase tracking-wider font-semibold text-camel-dark/50 bg-parchment px-2 py-1 rounded">
                        {t}
                      </span>
                    ))}
                  </div>

                  <Link 
                    to={project.link} 
                    className="inline-flex items-center gap-2 text-sm font-bold text-camel hover:gap-3 transition-all"
                  >
                    View Case Study <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="bg-camel text-parchment py-24 relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h2 className="font-serif text-5xl md:text-6xl mb-8">Ready to build logic?</h2>
            <p className="mb-12 opacity-80 max-w-lg mx-auto">
              Currently available for backend engineering roles. <br/>Let's discuss your system requirements.
            </p>
            <a 
              href="mailto:papa16annan@gmail.com" 
              className="inline-block bg-parchment text-camel-dark px-8 py-4 rounded-full font-bold hover:bg-white transition-colors"
            >
              Get in Touch
            </a>
            
            <div className="mt-24 pt-8 border-t border-parchment/20 flex justify-between items-center text-sm opacity-60">
              <span>© 2026 Emmanuel Opoku</span>
              <div className="flex gap-6">
                <a href="#" className="hover:opacity-100">GitHub</a>
                <a href="#" className="hover:opacity-100">LinkedIn</a>
              </div>
            </div>
          </div>
          
          {/* Subtle watermark logo */}
          <div className="absolute -bottom-24 -right-24 text-[20rem] font-serif font-bold text-white opacity-5 select-none pointer-events-none">
            EO.
          </div>
        </footer>

      </div>
    </ReactLenis>
  );
}