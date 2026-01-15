import { useRef } from "react";
import { Link } from "react-router"; 
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Database, Server, Shield, Terminal, Github, Layers, Lock, FileText, Zap, Activity, TrendingUp, FileCode } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

// --- DATA ---
const PROJECTS = [
  {
    title: "Travel With KB",
    role: "API-First Backend",
    desc: "An API-first backend system built with Express.js, featuring decoupled architecture and secure JWT authentication.",
    tech: ["Node.js", "Express", "MongoDB", "React"],
    link: "/projects/travel-with-kb"
  },
  {
    title: "Scholarship Platform",
    role: "Institutional Workflow",
    desc: "A scholarship application and review platform with multi-role access, document validation, and automated status transitions.",
    tech: ["PHP", "MySQL", "RBAC Architecture"],
    link: "/projects/scholarship-platform"
  },
  {
    title: "Learning Management System",
    role: "Educational System",
    desc: "A learning management system designed around structured educational workflows, module architecture, and chat tracking.",
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
  const heroY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: 0.2 }
  };

  return (
    <ReactLenis root>
      <div ref={containerRef} className="bg-parchment min-h-screen font-sans selection:bg-almond-silk selection:text-camel-dark overflow-hidden">

        {/* --- HERO SECTION --- */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <motion.div 
            animate={{ 
              rotate: 360,
              scale: [1, 1.1, 1],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#DEEEF7] rounded-full blur-[120px] opacity-50"
          />
          <motion.div 
            animate={{ 
              rotate: -360,
              scale: [1, 1.2, 1],
              x: [0, -30, 0],
              y: [0, 30, 0]
            }}
            transition={{ 
              duration: 30, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#E6BEAE] rounded-full blur-[140px] opacity-30"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute top-[40%] left-[30%] w-[30vw] h-[30vw] bg-[#F5E6D3] rounded-full blur-[100px]"
          />
        </div>

        <motion.div 
          style={{ y: heroY, opacity }}
          className="relative z-10 container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            <motion.div {...fadeInUp}>
              {/* Status Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring" }}
                className="inline-flex items-center gap-2 bg-[#DEEEF7] border border-[#B2967D]/20 rounded-full px-4 py-2 mb-6"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B2967D] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B2967D]"></span>
                </span>
                <span className="text-[#6D5442] text-xs font-semibold">Available for Backend Opportunities</span>
              </motion.div>

              <h2 className="text-[#B2967D] font-bold tracking-[0.3em] uppercase text-xs mb-3 flex items-center gap-2">
                <Terminal size={14} /> Emmanuel Opoku
              </h2>
              
              <h3 className="text-[#6D5442]/70 font-semibold mb-8 flex items-center gap-2 text-base">
                Backend Engineer • API Architecture • Data Analysis
              </h3>

              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#6D5442] leading-[1.1] mb-8">
                I build secure, 
                <span className="text-[#B2967D] italic block mt-2">data-driven</span>
                backend systems
                <span className="text-[#6D5442]/50 text-4xl md:text-5xl block mt-3">
                  that scale.
                </span>
              </h1>

              {/* Value Proposition */}
              <div className="bg-white/50 backdrop-blur-sm border-l-4 border-[#B2967D] rounded-r-xl px-6 py-5 space-y-3 shadow-sm">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#B2967D] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[#6D5442] font-semibold text-lg">Node.js • Express • Relational Design</p>
                    <p className="text-[#6D5442]/70 text-sm mt-1">
                      Backend architecture with data integrity, access control, and analytics built-in from day one.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a 
                href="#projects" 
                className="group flex items-center gap-3 bg-[#6D5442] text-[#F5F1ED] px-10 py-4 rounded-xl hover:bg-[#B2967D] transition-all font-semibold shadow-lg shadow-[#6D5442]/20 hover:shadow-xl hover:shadow-[#B2967D]/30 hover:scale-105 transform"
              >
                View Projects 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer" 
                className="group flex items-center gap-3 px-8 py-4 border-2 border-[#B2967D]/30 rounded-xl text-[#6D5442] hover:bg-[#B2967D]/10 hover:border-[#B2967D] transition-all font-semibold"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" /> 
                GitHub Profile
              </a>
            </motion.div>

            {/* Anti-positioning */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex items-start gap-3 pt-4"
            >
              <Zap className="w-4 h-4 text-[#B2967D] mt-0.5 shrink-0" />
              <p className="text-xs text-[#6D5442]/50 font-mono max-w-md leading-relaxed">
                Focus: Backend integrity, secure APIs, workflow logic, and structured data.
                <span className="block mt-1">Not interested in: UI-heavy prototypes or design-first roles.</span>
              </p>
            </motion.div>
          </div>

          {/* Visual - Enhanced Code Editor */}
          <motion.div 
            style={{ y: heroY }}
            initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-2xl overflow-hidden rotate-1 hover:rotate-0 transition-all duration-700 shadow-2xl shadow-[#B2967D]/20">
              {/* Window Controls */}
              <div className="flex items-center justify-between bg-[#6D5442]/5 backdrop-blur-sm px-6 py-4 border-b border-[#B2967D]/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 text-[#6D5442]/50 text-xs font-mono">
                  <FileCode size={14} />
                  <span>api/auth/middleware.js</span>
                </div>
              </div>

              <div className="p-8 space-y-6">
                {/* Code Block 1 */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-[#6D5442]/40 text-xs">// Secure Authentication Middleware</div>
                  <div className="text-[#6D5442]">
                    <span className="text-[#B2967D] font-bold">const</span> <span className="text-[#6D5442]">verifyToken</span> = <span className="text-[#B2967D]">async</span> (req, res, next) {'=>'} {'{'}
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    <span className="text-[#B2967D]">const</span> token = req.headers.authorization;
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    <span className="text-[#B2967D]">if</span> (!token) <span className="text-[#B2967D]">return</span> res.status(<span className="text-green-700">401</span>);
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    <span className="text-[#B2967D]">const</span> user = <span className="text-[#B2967D]">await</span> <span className="text-[#6D5442]">jwt.verify</span>(token);
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    req.user = user; <span className="text-[#6D5442]/40">// Attach to request</span>
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    <span className="text-[#B2967D]">await</span> <span className="text-[#6D5442]">auditLog.create</span>({'{'}user, action{'}'});
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    next();
                  </div>
                  <div className="text-[#6D5442]">{'}'}</div>
                </div>

                {/* Divider */}
                <div className="border-t border-[#B2967D]/10"></div>

                {/* Code Block 2 */}
                <div className="space-y-2 font-mono text-sm">
                  <div className="text-[#6D5442]/40 text-xs">// Data Analysis Query</div>
                  <div className="text-[#6D5442]">
                    <span className="text-[#B2967D] font-bold">SELECT</span>
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    endpoint, <span className="text-[#B2967D]">AVG</span>(latency) <span className="text-[#B2967D]">as</span> avg_latency,
                  </div>
                  <div className="pl-6 text-[#6D5442]">
                    <span className="text-[#B2967D]">COUNT</span>(*) <span className="text-[#B2967D]">as</span> total_requests
                  </div>
                  <div className="text-[#6D5442]">
                    <span className="text-[#B2967D] font-bold">FROM</span> api_performance_logs
                  </div>
                  <div className="text-[#6D5442]">
                    <span className="text-[#B2967D] font-bold">WHERE</span> timestamp {'>'} <span className="text-green-700">NOW()</span> - <span className="text-[#B2967D]">INTERVAL</span> <span className="text-green-700">'7 days'</span>
                  </div>
                  <div className="text-[#6D5442]">
                    <span className="text-[#B2967D] font-bold">GROUP BY</span> endpoint;
                  </div>
                </div>

                {/* Result Badge */}
                <motion.div 
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1, type: "spring" }}
                  className="absolute -bottom-4 -right-4 bg-[#F5F1ED] border-2 border-[#B2967D]/20 rounded-2xl px-6 py-4 shadow-xl flex items-center gap-4"
                >
                  <div className="bg-[#DEEEF7] p-3 rounded-xl">
                    <TrendingUp size={24} className="text-[#B2967D]" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#6D5442]/60 uppercase tracking-wider font-bold">System Output</div>
                    <div className="font-bold text-[#6D5442] text-lg">Trusted Data</div>
                    <div className="text-xs text-[#6D5442]/50 font-mono">99.8% reliability</div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Floating Metrics */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-8 top-1/4 bg-white/90 backdrop-blur-sm border border-[#B2967D]/20 rounded-xl px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-green-600" />
                <div>
                  <div className="text-[10px] text-[#6D5442]/60 uppercase font-bold">Uptime</div>
                  <div className="text-lg font-bold text-[#6D5442]">99.8%</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-8 bottom-1/4 bg-white/90 backdrop-blur-sm border border-[#B2967D]/20 rounded-xl px-4 py-3 shadow-lg"
            >
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-[#B2967D]" />
                <div>
                  <div className="text-[10px] text-[#6D5442]/60 uppercase font-bold">Avg Response</div>
                  <div className="text-lg font-bold text-[#6D5442]">120ms</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6D5442]/40"
        >
          <span className="text-xs font-mono">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowRight size={20} className="rotate-90" />
          </motion.div>
        </motion.div>
      </header>

        {/* --- TECHNICAL FOCUS SECTION (70/30 SIGNAL) --- */}
        <section className="py-24 bg-azure-mist relative border-t border-camel/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              
              {/* Left: Radar Chart */}
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

              {/* Right: Technical Focus Text */}
              <div className="order-1 md:order-2">
                <span className="text-camel font-bold tracking-widest uppercase text-xs mb-3 block">Technical Focus</span>
                <h2 className="font-serif text-4xl text-camel-dark mb-6">Backend Architecture & System Design</h2>
                
                <p className="text-camel-dark/80 mb-6 leading-relaxed text-lg">
                  My current development work is centered on <strong className="text-camel-dark">Express.js</strong>, designing RESTful APIs with structured authentication, middleware-level authorization, and predictable error handling.
                </p>
                <p className="text-camel-dark/70 mb-8 leading-relaxed text-sm border-l-2 border-camel/20 pl-4">
                  Earlier large-scale systems built with <strong className="text-camel-dark">PHP</strong> strengthened my understanding of long-form backend design, relational workflows, and institutional software needs. That experience now informs how I architect modern Node.js systems.
                </p>

                {/* HOW YOU THINK List */}
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: Database, title: "Database design before endpoints" },
                    { icon: Lock, title: "Authorization before features" },
                    { icon: Terminal, title: "Maintainability over clever shortcuts" },
                    { icon: FileText, title: "Documentation as a core deliverable" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="text-camel"><item.icon size={18} /></div>
                      <h3 className="font-medium text-camel-dark">{item.title}</h3>
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
            <span className="text-camel text-sm font-bold tracking-widest uppercase mb-2">Project Signal</span>
            <h2 className="font-serif text-4xl text-camel-dark">Workflow-Driven Platforms.</h2>
            <p className="mt-4 text-camel-dark/60 max-w-lg">
              Each project is documented as a case study, focusing on architecture, decisions, and tradeoffs rather than surface-level features.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -8 }}
                className="group relative bg-white rounded-2xl overflow-hidden border border-parchment shadow-sm hover:shadow-xl hover:shadow-camel/10 transition-all duration-300"
              >
                <div className="h-48 bg-almond-cream/50 relative overflow-hidden group-hover:bg-almond-silk/30 transition-colors">
                  <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B2967D_1px,transparent_1px)] [background-size:16px_16px]"></div>
                  <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-camel-dark border border-camel/10">
                    {project.role}
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="font-serif text-2xl text-camel-dark mb-3 group-hover:text-camel transition-colors">{project.title}</h3>
                  <p className="text-camel-dark/70 text-sm mb-6 line-clamp-3 leading-relaxed">
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

      </div>
    </ReactLenis>
  );
}