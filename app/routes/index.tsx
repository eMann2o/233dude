import { useEffect, useRef } from "react";
import { Link } from "react-router"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Database, Server, Shield, Terminal, Github } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

// --- DATA ---
const PROJECTS = [
  {
    title: "Travel With KB",
    role: "Full-Stack System",
    desc: "A decoupled REST API booking engine with strict JWT security and normalized data modeling.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "/projects/travel-with-kb"
  },
  {
    title: "Scholarship Platform",
    role: "Institutional Backend",
    desc: "Multi-role application workflow system handling document validation and automated status transitions.",
    tech: ["PHP", "MySQL", "RBAC Architecture"],
    link: "/projects/scholarship-platform"
  },
  {
    title: "Learning Management System",
    role: "Educational Workflow",
    desc: "Structured LMS with module architecture, group chat tracking, and auto-graded assessments.",
    tech: ["PHP", "MySQL", "System Design"],
    link: "/projects/lms"
  }
];

const SKILL_DATA = [
  { subject: 'Backend Arch', A: 95, fullMark: 100 },
  { subject: 'Database Design', A: 90, fullMark: 100 },
  { subject: 'API Security', A: 85, fullMark: 100 },
  { subject: 'Frontend UI', A: 60, fullMark: 100 },
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
              {['Projects', 'Case Studies', 'About'].map((item) => (
                <Link key={item} to={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-camel transition-colors relative group">
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-camel transition-all group-hover:w-full" />
                </Link>
              ))}
            </div>
            {/* No "Hire Me" button as requested - clean nav */}
          </div>
        </nav>

        {/* --- HERO SECTION --- */}
        <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
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
            <div className="space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Name & Role */}
                <h2 className="text-camel font-bold tracking-widest uppercase text-sm mb-2">Emmanuel Opoku</h2>
                <h3 className="text-camel-dark/60 font-medium mb-6">Backend-Focused Full-Stack Developer</h3>

                {/* CORE STATEMENT - Large & Impactful */}
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-camel-dark leading-[1.15] mb-6">
                  I build secure, <span className="text-camel italic">API-driven systems</span> with real-world workflows, role-based access, and long-term maintainability in mind.
                </h1>

                {/* Supporting Context */}
                <div className="border-l-2 border-camel/30 pl-4 py-1 mb-8">
                  <p className="text-camel-dark font-medium">Express.js • REST APIs • Relational Databases</p>
                  <p className="text-camel-dark/70 text-sm mt-1">Backend systems for institutions, platforms, and admin workflows</p>
                </div>
              </motion.div>

              {/* Call to Action */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
              >
                <Link to="/projects" className="group flex items-center gap-2 bg-camel-dark text-parchment px-8 py-3 rounded-lg hover:bg-camel transition-all font-medium">
                  View Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-6 py-3 border border-camel/30 rounded-lg text-camel-dark hover:bg-camel/10 transition-colors font-medium">
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
              </motion.div>

              {/* Secondary Signal */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xs text-camel-dark/40 font-mono mt-4 max-w-md"
              >
                Focused on backend architecture, security, and data integrity — not demo apps.
              </motion.p>
            </div>

            {/* Visual Representation - Code Logic */}
            <motion.div style={{ y }} className="hidden md:flex justify-center relative">
              <div className="relative w-full max-w-md bg-almond-cream/20 backdrop-blur-md border border-white/50 rounded-2xl p-8 rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-camel/10">
                
                {/* Header Dots */}
                <div className="flex gap-2 mb-6 opacity-60">
                  <div className="w-3 h-3 rounded-full bg-camel-dark" />
                  <div className="w-3 h-3 rounded-full bg-camel" />
                  <div className="w-3 h-3 rounded-full bg-almond-silk" />
                </div>

                {/* Code Snippet - Backend Logic */}
                <div className="space-y-4 font-mono text-sm text-camel-dark">
                  <div className="opacity-50">// Middleware: Protect Admin Route</div>
                  <div>
                    <span className="text-camel font-bold">const</span> <span className="text-camel-dark">restrictTo</span> = (...roles) ={'>'} {'{'}
                  </div>
                  <div className="pl-4">
                    <span className="text-camel font-bold">return</span> (req, res, next) ={'>'} {'{'}
                  </div>
                  <div className="pl-8 text-camel-dark/80">
                    <span className="text-camel">if</span> (!roles.includes(req.user.role)) {'{'}
                  </div>
                  <div className="pl-12 text-red-800/70">
                    <span className="text-camel">throw</span> <span className="font-bold">AppError</span>('Permission denied', 403);
                  </div>
                  <div className="pl-8">{'}'}</div>
                  <div className="pl-8 text-green-800/70">
                    next(); <span className="opacity-40">// Access Granted</span>
                  </div>
                  <div className="pl-4">{'}'};</div>
                  <div>{'}'};</div>
                </div>
                
                {/* Floating "Secure" Badge */}
                <div className="absolute -bottom-5 -right-5 bg-parchment border border-camel/10 p-4 rounded-xl shadow-lg flex items-center gap-3 animate-float">
                  <div className="bg-azure-mist p-2 rounded-lg text-camel">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-camel-dark/60 uppercase tracking-wider">Security</div>
                    <div className="font-bold text-camel-dark">RBAC Enforced</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* --- APPROACH / DATA VIZ SECTION --- */}
        {/* (Kept identical to previous version, ensuring consistency) */}
        <section className="py-24 bg-azure-mist relative border-t border-camel/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="h-[400px] w-full flex items-center justify-center order-2 md:order-1">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                    <PolarGrid stroke="#B2967D" strokeOpacity={0.2} />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6D5442', fontSize: 12, fontFamily: 'var(--font-sans)' }} />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                    <Radar name="Skills" dataKey="A" stroke="#B2967D" strokeWidth={2} fill="#E6BEAE" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="font-serif text-4xl text-camel-dark mb-6">Process & Principles</h2>
                <p className="text-camel-dark/80 mb-8 leading-relaxed text-lg">
                  I approach software development with a <strong>system-first mindset</strong>. 
                  My work prioritizes database integrity, clear separation of concerns, and security before convenience.
                </p>
                <div className="grid grid-cols-1 gap-6">
                  {[
                    { icon: Database, title: "Database-First Design", desc: "Normalization and integrity checks define the logic." },
                    { icon: Shield, title: "Security as a Feature", desc: "Failure handling and validation are never afterthoughts." },
                    { icon: Terminal, title: "Clean Systems Scale", desc: "Documentation and maintainability over clever hacks." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 text-camel"><item.icon size={24} /></div>
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

      </div>
    </ReactLenis>
  );
}