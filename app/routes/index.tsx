import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  TrendingUp,
} from "lucide-react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import {
  getPersonal,
  getHero,
  getHomeSections,
  getSkills,
  getFeaturedProjects,
  resolveIcon,
} from "~/data/data";
import { getTextColor } from "~/src/lib/utils";

export function meta() {
  return [
    { title: "Emmanuel Opoku — Backend & Data Engineer" },
    { name: "description", content: "Portfolio of Emmanuel Opoku — Backend & Data Engineering" },
  ];
}

const personal = getPersonal();
const hero = getHero();
const home = getHomeSections();
const skills = getSkills();
const PROJECTS = getFeaturedProjects();
const SKILL_DATA = skills.radarChart;

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ["0px", "100px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  return (
      <div ref={containerRef} className="min-h-screen overflow-hidden relative noise-overlay">
        
        {/* === HERO SECTION === */}
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-6">
          {/* Animated gradient mesh background */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="gradient-orb w-[700px] h-[700px] bg-blue-bell/15 top-[-10%] left-[10%]" style={{ animationDelay: '0s' }} />
            <div className="gradient-orb w-[500px] h-[500px] bg-dusty-mauve/10 bottom-[10%] right-[5%]" style={{ animationDelay: '-7s' }} />
            <div className="gradient-orb w-[600px] h-[600px] bg-lavender/8 top-[30%] right-[30%]" style={{ animationDelay: '-14s' }} />
          </div>

          <motion.div 
            style={{ y: heroY, opacity }}
            className="relative z-10 max-w-5xl mx-auto text-center space-y-10"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md text-white/70 text-[13px] font-bold tracking-tight shadow-lg shadow-black/20"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-lg shadow-emerald-400/50" /> 
              {personal.statusBadge}
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h1 className="font-plus text-6xl md:text-[5.5rem] text-white leading-[0.9] tracking-[-0.04em] font-extrabold text-balance">
                {hero.headline} <br />
                <span className="gradient-text italic">{hero.headlineAccent}</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-white/40 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 pt-6"
            >
              <Link to="/projects" className="glow-btn px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:bg-blue-bell/20">
                View Engineering Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-full font-bold text-white/60 border border-white/[0.08] hover:border-white/20 hover:text-white transition-all">
                The Persona
              </Link>
            </motion.div>

            {/* Signals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-20 flex flex-wrap justify-center items-center gap-12 text-white/20 hover:text-white/40 transition-all duration-700"
            >
              {hero.signals.map((signal) => {
                const Icon = resolveIcon(signal.icon);
                return (
                  <div key={signal.label} className="flex items-center gap-2 font-bold tracking-tighter text-xl">
                    <Icon size={24} /> {signal.label}
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
        </section>

        {/* Divider */}
        <div className="section-divider max-w-4xl mx-auto" />

        {/* === TECHNICAL FOCUS (Bento) === */}
        <section className="py-28 px-6 max-w-7xl mx-auto relative z-10">
          <div className="mb-16 text-center space-y-4">
            <span className="text-blue-bell font-bold text-xs uppercase tracking-widest">Engineering DNA</span>
            <h2 className="text-4xl md:text-5xl font-plus font-bold text-white tracking-tight">The Systems Mindset</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {home.bentoCards.map((card) => {
              const Icon = resolveIcon(card.icon);
              return (
                <div
                  key={card.title}
                  className={`bento-card col-span-1 flex flex-col justify-between ${
                    card.highlight
                      ? "border-blue-bell/20 shadow-lg shadow-blue-bell/5"
                      : ""
                  }`}
                >
                  <div>
                    <span className={`text-5xl font-plus font-extrabold ${card.highlight ? "text-blue-bell/[0.06]" : "text-white/[0.03]"} mb-8 block`}>{card.number}</span>
                    <div className={`${card.highlight 
                      ? "w-14 h-14 bg-blue-bell/20 rounded-2xl flex items-center justify-center text-blue-bell mb-6 animate-pulse-slow" 
                      : `w-12 h-12 bg-white/[0.05] rounded-2xl flex items-center justify-center ${card.color === "lavender" ? "text-lavender" : "text-blue-bell/60"} mb-6`}`}
                    >
                      <Icon size={card.highlight ? 28 : 24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* === RADAR / CAPABILITIES === */}
        <section className="py-28 relative overflow-hidden">
          {/* Ambient orbs */}
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-bell/5 rounded-full blur-[120px]" />
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-lavender/5 rounded-full blur-[120px]" />
          
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] rounded-[3rem] p-8 flex items-center justify-center border border-white/[0.06] bg-white/[0.02]"
              style={{ boxShadow: '0 0 80px -20px rgba(57, 160, 237, 0.08)' }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                  <PolarGrid stroke="rgba(255,255,255,0.06)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 11, fontWeight: 700, fontFamily: 'Plus Jakarta Sans' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#39A0ED"
                    strokeWidth={2}
                    fill="#39A0ED"
                    fillOpacity={0.15}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              {/* Floating Metric */}
              <div className="absolute -bottom-4 -right-4 border border-white/[0.08] bg-card-bg rounded-2xl p-6 shadow-xl shadow-black/30 flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-bell/20 text-blue-bell rounded-xl flex items-center justify-center">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Efficiency</p>
                    <p className="text-xl font-bold text-white">Scalable Systems</p>
                 </div>
              </div>
            </motion.div>

            <div className="space-y-10">
              <span className="text-blue-bell font-bold text-xs uppercase tracking-widest bg-blue-bell/[0.08] px-4 py-2 rounded-full border border-blue-bell/20">{home.radarSection.badge}</span>
              <h2 className="text-4xl md:text-6xl font-plus font-bold text-white leading-[0.9] tracking-tight">
                {home.radarSection.headline} <br />
                <span className="gradient-text italic">{home.radarSection.headlineAccent}</span>
              </h2>
              <p className="text-white/40 text-xl leading-relaxed font-medium">
                {home.radarSection.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-white/[0.06]">
                {home.radarSection.stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <h4 className={`text-2xl font-bold font-plus ${getTextColor(stat.color)}`}>{stat.value}</h4>
                    <p className="text-[10px] text-white/30 uppercase font-bold tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="section-divider max-w-4xl mx-auto" />

        {/* === FEATURED PROJECTS === */}
        <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-dusty-mauve font-bold text-xs uppercase tracking-widest">Technical Deep-Dives</span>
              <h2 className="text-4xl md:text-5xl font-plus font-bold text-white tracking-tight">Selected Engineering Works</h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-3 text-white/60 font-bold hover:text-blue-bell transition-all duration-300">
              View All Projects
              <div className="p-3 border border-white/[0.08] rounded-full group-hover:bg-blue-bell/20 group-hover:border-blue-bell/30 group-hover:text-blue-bell transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Link to={project.link} className="block bento-card h-full">
                  <div className="p-4 w-fit rounded-xl bg-white/[0.05] text-white/30 mb-12 group-hover:text-blue-bell group-hover:bg-blue-bell/10 transition-all">
                     <Code2 size={24} />
                  </div>
                  
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">{project.role}</span>
                    <h3 className="text-3xl font-plus font-bold text-white tracking-tight group-hover:text-blue-bell transition-colors">{project.title}</h3>
                    <p className="text-white/35 text-sm leading-relaxed font-medium line-clamp-3">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-6 opacity-30 group-hover:opacity-60 transition-opacity">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-white/[0.04] rounded-lg text-[9px] font-bold uppercase tracking-widest text-white/60 border border-white/[0.06]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* === CALL TO ACTION === */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-white/[0.06]"
              style={{ background: 'linear-gradient(135deg, rgba(57,160,237,0.08) 0%, rgba(20,20,22,1) 50%, rgba(154,122,160,0.08) 100%)' }}
            >
               {/* Ambient orb */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-bell/10 rounded-full blur-[120px]" />
               
               <div className="relative z-10 space-y-10">
                  <h2 className="text-4xl md:text-6xl font-plus font-extrabold text-white leading-tight">{home.cta.headline.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</h2>
                  <div className="flex flex-wrap justify-center gap-6">
                     <Link to="/contact" className="glow-btn px-10 py-5 rounded-full font-bold text-lg">
                        Get in Touch
                     </Link>
                     <a href={personal.resumePath} className="px-10 py-5 border border-white/[0.08] rounded-full font-bold text-white/60 hover:text-white hover:border-white/20 transition-all text-lg">
                        Download CV
                     </a>
                  </div>
               </div>
            </motion.div>
        </section>

      </div>
  );
}