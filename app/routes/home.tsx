import { useEffect, useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Database, 
  Server, 
  Shield, 
  Terminal, 
  Cpu, 
  Workflow, 
  Layers, 
  Code2, 
  Globe, 
  Zap,
  CheckCircle2,
  ExternalLink,
  Github,
  Linkedin
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";

// --- DATA ---
const PROJECTS = [
  {
    title: "CareerFlow",
    category: "AI & System Design",
    desc: "AI-powered hiring platform using Computer Vision & NLP pipelines.",
    tech: ["Node.js", "Express", "MediaPipe"],
    color: "blue-bell",
    link: "/projects"
  },
  {
    title: "Scholarship MIS",
    category: "Backend Architecture",
    desc: "Multi-role institutional engine with complex relational data modeling.",
    tech: ["PostgreSQL", "RBAC", "TypeScript"],
    color: "dusty-mauve",
    link: "/projects"
  },
  {
    title: "Real-Time Systems",
    category: "Low Latency Logic",
    desc: "High-frequency messaging engine with optimized persistence layers.",
    tech: ["WebSockets", "MySQL", "Redis"],
    color: "lavender",
    link: "/projects"
  }
];

const SKILL_DATA = [
  { subject: 'Architecture', A: 95, fullMark: 100 },
  { subject: 'Data Engineering', A: 90, fullMark: 100 },
  { subject: 'Security', A: 85, fullMark: 100 },
  { subject: 'Performance', A: 80, fullMark: 100 },
  { subject: 'Algorithms', A: 95, fullMark: 100 },
  { subject: 'API Design', A: 92, fullMark: 100 },
];

export default function Home() {
  const containerRef = useRef(null);
  
  return (
    <ReactLenis root>
      <div ref={containerRef} className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6">
          {/* Mockup-style Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-40">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-bell opacity-20 blur-[120px] rounded-full animate-pulse-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-lavender opacity-30 blur-[100px] rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }} />
            <div className="absolute top-1/3 right-1/2 w-[500px] h-[500px] bg-dusty-mauve opacity-10 blur-[150px] rounded-full animate-float" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-iron-grey/5 shadow-xl shadow-iron-grey/5 text-iron-grey text-[13px] font-modern-bold tracking-tight"
            >
              <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" /> {/* Lime green accent for "Available" */}
              Available for new opportunities
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h1 className="font-plus text-6xl md:text-[5.5rem] text-iron-grey leading-[0.9] tracking-[-0.04em] font-extrabold">
                Backend Systems <br />
                <span className="gradient-text italic">Designed to Scale.</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-iron-grey/60 max-w-2xl mx-auto leading-relaxed"
            >
              Passionate about building intuitive data infrastructure and scalable backends that connect users with high-integrity systems.
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 pt-6"
            >
              <Link to="/contact" className="bg-iron-grey text-white px-8 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-blue-bell/30 transition-all flex items-center gap-2">
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link to="/projects" className="bg-white border border-iron-grey/5 px-8 py-4 rounded-full font-bold text-iron-grey hover:bg-card-bg transition-all">
                View Selected Works
              </Link>
            </motion.div>

            {/* Social Socials & Logos */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
            >
              <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                <Cpu size={24} /> ADAPTABLE
              </div>
              <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                <Shield size={24} /> SECURE
              </div>
              <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                <Workflow size={24} /> EFFICIENT
              </div>
              <div className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                <Database size={24} /> INTEGRITY
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- "HOW IT WORKS" / CAPABILITIES SECTION (Bento Style) --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <span className="text-blue-bell font-bold text-xs uppercase tracking-widest">Our Engineering DNA</span>
            <h2 className="text-4xl md:text-5xl font-plus font-bold text-iron-grey tracking-tight">Here's how it works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Bento Card 1: Discover */}
            <div className="bento-card col-span-1 md:col-span-1 flex flex-col justify-between">
              <div>
                <span className="text-5xl font-plus font-extrabold text-iron-grey/10 mb-8 block">01</span>
                <div className="w-12 h-12 bg-blue-bell/10 rounded-2xl flex items-center justify-center text-blue-bell mb-6">
                  <Globe size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Discover</h3>
                <p className="text-iron-grey/60 text-sm leading-relaxed">
                  Understanding user goals, system constraints, and data flows through thorough research and strategy.
                </p>
              </div>
            </div>

            {/* Bento Card 2: Design (Center focus) */}
            <div className="bento-card col-span-1 md:col-span-1 border-blue-bell/20 bg-white shadow-2xl shadow-blue-bell/5">
              <span className="text-5xl font-plus font-extrabold text-blue-bell/10 mb-8 block">02</span>
              <div className="w-14 h-14 bg-blue-bell rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse-slow">
                <Layers size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Design</h3>
              <p className="text-iron-grey/60 text-sm leading-relaxed">
                Transforming insights into intuitive, beautiful, and functional product architectures with precision.
              </p>
            </div>

            {/* Bento Card 3: Deliver */}
            <div className="bento-card col-span-1 md:col-span-1">
              <span className="text-5xl font-plus font-extrabold text-iron-grey/10 mb-8 block">03</span>
              <div className="w-12 h-12 bg-lavender/40 rounded-2xl flex items-center justify-center text-iron-grey mb-6">
                <Zap size={24} />
              </div>
              <h3 className="text-2xl font-bold mb-4">Deliver</h3>
              <p className="text-iron-grey/60 text-sm leading-relaxed">
                Testing, refining, and launching the final system with clarity and high-performance engineering.
              </p>
            </div>
          </div>
        </section>

        {/* --- SELECTED WORKS (Mockup style cards) --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="space-y-4">
              <span className="text-dusty-mauve font-bold text-xs uppercase tracking-widest">Case Studies</span>
              <h2 className="text-4xl md:text-5xl font-plus font-bold text-iron-grey tracking-tight">Selected Works</h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-2 text-iron-grey font-bold hover:text-blue-bell transition-colors">
              View all projects
              <div className="p-2 border border-iron-grey/10 rounded-full group-hover:bg-blue-bell group-hover:text-white transition-all">
                <ArrowRight size={16} />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
              >
                <div className={`relative h-[400px] rounded-[2.5rem] p-10 flex flex-col justify-end overflow-hidden transition-all duration-500 shadow-xl shadow-iron-grey/5 group-hover:shadow-3xl
                    ${project.color === 'blue-bell' ? 'bg-blue-bell/5 hover:bg-blue-bell/10' : 
                      project.color === 'dusty-mauve' ? 'bg-dusty-mauve/5 hover:bg-dusty-mauve/10' : 'bg-lavender/10 hover:bg-lavender/20'}`}
                >
                  {/* Decorative Background Pattern */}
                  <div className="absolute top-0 right-0 p-12 opacity-5 text-iron-grey group-hover:scale-110 transition-transform duration-700">
                    <Code2 size={240} strokeWidth={1} />
                  </div>
                  
                  <div className="relative z-10 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-widest opacity-40">{project.category}</span>
                    <h3 className="text-4xl font-plus font-bold text-iron-grey tracking-tight">{project.title}</h3>
                    <p className="text-iron-grey/60 text-lg max-w-sm line-clamp-2">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/50 backdrop-blur-sm rounded-lg text-xs font-bold text-iron-grey/70">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- PERSPECTIVE / RADAR SECTION --- */}
        <section className="py-24 bg-card-bg relative">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <div className="relative h-[400px] glass-card rounded-[3rem] p-8 flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                  <PolarGrid stroke="#444545" strokeOpacity={0.1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#444545', fontSize: 12, fontWeight: 700, fontFamily: 'var(--font-plus)' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#39A0ED"
                    strokeWidth={3}
                    fill="#39A0ED"
                    fillOpacity={0.1}
                  />
                </RadarChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-bell/5 via-transparent to-lavender/5 pointer-events-none rounded-[3rem]" />
            </div>

            <div className="space-y-8">
              <span className="text-lavender font-bold text-sm uppercase tracking-widest bg-iron-grey/5 px-4 py-2 rounded-full">Architecture First</span>
              <h2 className="text-4xl md:text-5xl font-plus font-bold text-iron-grey leading-[1.1] tracking-tight">
                Focus on blending strategy, thoughtful logic, and systemic empathy.
              </h2>
              <p className="text-iron-grey/60 text-lg leading-relaxed">
                I solve real problems by engineering infrastructures that are not only high-performing but also deeply aligned with product vision.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-bold text-blue-bell">99.9% Uptime</h4>
                  <p className="text-xs text-iron-grey/40 uppercase font-bold tracking-widest">Reliability Target</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-bold text-dusty-mauve">30+ Systems</h4>
                  <p className="text-xs text-iron-grey/40 uppercase font-bold tracking-widest">Architected & Deployed</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </ReactLenis>
  );
}