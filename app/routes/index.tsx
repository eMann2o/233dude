import { useRef } from "react";
import { Link } from "react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  TrendingUp,
} from "lucide-react";
import { ReactLenis } from "lenis/react";
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import {
  getPersonal,
  getHero,
  getHomeSections,
  getSkills,
  getFeaturedProjects,
  resolveIcon,
} from "~/data/data";

// --- DATA FROM CENTRAL SOURCE ---
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
    <ReactLenis root>
      <div ref={containerRef} className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden">
        
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6">
          {/* Mockup-style Background Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none opacity-40">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-bell opacity-20 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-lavender opacity-30 blur-[100px] rounded-full" />
            <div className="absolute top-1/3 right-1/2 w-[500px] h-[500px] bg-dusty-mauve opacity-10 blur-[150px] rounded-full" />
          </div>

          <motion.div 
            style={{ y: heroY, opacity }}
            className="relative z-10 max-w-5xl mx-auto text-center space-y-10"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-iron-grey/5 shadow-xl shadow-iron-grey/5 text-iron-grey text-[13px] font-bold tracking-tight"
            >
              <div className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" /> 
              {personal.statusBadge}
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h1 className="font-plus text-6xl md:text-[5.5rem] text-iron-grey leading-[0.9] tracking-[-0.04em] font-extrabold text-balance">
                {hero.headline} <br />
                <span className="gradient-text italic">{hero.headlineAccent}</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-iron-grey/60 max-w-2xl mx-auto leading-relaxed font-medium"
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
              <Link to="/projects" className="bg-iron-grey text-white px-8 py-4 rounded-full font-bold hover:bg-blue-bell hover:shadow-2xl hover:shadow-blue-bell/30 transition-all flex items-center gap-2">
                View Engineering Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="bg-white border border-iron-grey/5 px-8 py-4 rounded-full font-bold text-iron-grey hover:bg-card-bg transition-all">
                The Persona
              </Link>
            </motion.div>

            {/* Social Signal / Logos */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-20 flex flex-wrap justify-center items-center gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700"
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

        {/* --- TECHNICAL FOCUS SECTION (Bento) --- */}
        <section className="py-24 px-6 max-w-7xl mx-auto">
          <div className="mb-16 text-center space-y-4">
            <span className="text-blue-bell font-bold text-xs uppercase tracking-widest">Engineering DNA</span>
            <h2 className="text-4xl md:text-5xl font-plus font-bold text-iron-grey tracking-tight">The Systems Mindset</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {home.bentoCards.map((card) => {
              const Icon = resolveIcon(card.icon);
              return (
                <div
                  key={card.title}
                  className={`bento-card col-span-1 md:col-span-1 flex flex-col justify-between ${
                    card.highlight
                      ? "border-blue-bell/20 bg-white shadow-2xl shadow-blue-bell/5"
                      : card.color === "lavender"
                      ? "hover:border-lavender/20"
                      : "hover:border-blue-bell/10 transition-all"
                  }`}
                >
                  <div>
                    <span className={`text-5xl font-plus font-extrabold ${card.highlight ? "text-blue-bell/5" : "text-iron-grey/5"} mb-8 block`}>{card.number}</span>
                    <div className={`${card.highlight ? "w-14 h-14 bg-blue-bell rounded-2xl flex items-center justify-center text-white mb-6 animate-pulse-slow shadow-lg shadow-blue-bell/30" : `w-12 h-12 ${card.color === "lavender" ? "bg-lavender/40" : "bg-blue-bell/10"} rounded-2xl flex items-center justify-center ${card.color === "lavender" ? "text-iron-grey" : "text-blue-bell"} mb-6`}`}>
                      <Icon size={card.highlight ? 28 : 24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{card.title}</h3>
                    <p className="text-iron-grey/60 text-sm leading-relaxed font-medium">
                      {card.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* --- RADAR / CAPABILITIES --- */}
        <section className="py-24 bg-card-bg relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[450px] bg-white rounded-[3rem] p-8 flex items-center justify-center shadow-2xl shadow-iron-grey/5 border border-iron-grey/5"
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                  <PolarGrid stroke="#444545" strokeOpacity={0.1} />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: '#444545', fontSize: 11, fontWeight: 700, fontFamily: 'Plus Jakarta Sans' }} />
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
              
              {/* Floating Metric */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-iron-grey/5 rounded-2xl p-6 shadow-xl flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-bell text-white rounded-xl flex items-center justify-center">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-iron-grey/30 uppercase tracking-widest">Efficiency</p>
                    <p className="text-xl font-bold text-iron-grey">Scalable Systems</p>
                 </div>
              </div>
            </motion.div>

            <div className="space-y-10">
              <span className="text-blue-bell font-bold text-xs uppercase tracking-widest bg-blue-bell/5 px-4 py-2 rounded-full border border-blue-bell/10">{home.radarSection.badge}</span>
              <h2 className="text-4xl md:text-6xl font-plus font-bold text-iron-grey leading-[0.9] tracking-tight">
                {home.radarSection.headline} <br />
                <span className="gradient-text italic">{home.radarSection.headlineAccent}</span>
              </h2>
              <p className="text-iron-grey/60 text-xl leading-relaxed font-medium">
                {home.radarSection.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-iron-grey/5">
                {home.radarSection.stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <h4 className={`text-2xl font-bold text-${stat.color} font-plus`}>{stat.value}</h4>
                    <p className="text-[10px] text-iron-grey/40 uppercase font-bold tracking-[0.2em]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Decorative Backdrops */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-bell/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-lavender/5 rounded-full blur-3xl" />
        </section>

        {/* --- FEATURED PROJECTS --- */}
        <section className="py-32 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div className="space-y-4">
              <span className="text-dusty-mauve font-bold text-xs uppercase tracking-widest">Technical Deep-Dives</span>
              <h2 className="text-4xl md:text-5xl font-plus font-bold text-iron-grey tracking-tight">Selected Engineering Works</h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-3 text-iron-grey font-bold hover:text-blue-bell transition-all duration-300">
              Explore All Systems
              <div className="p-3 border border-iron-grey/10 rounded-full group-hover:bg-blue-bell group-hover:text-white group-hover:border-blue-bell transition-all">
                <ArrowRight size={18} />
              </div>
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {PROJECTS.map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <Link to={project.link} className="block bento-card h-full transition-all duration-500 hover:shadow-2xl hover:shadow-blue-bell/5">
                  <div className={`p-4 w-fit rounded-xl bg-white shadow-sm text-iron-grey mb-12 opacity-40 group-hover:opacity-100 group-hover:text-blue-bell transition-all`}>
                     <Code2 size={24} />
                  </div>
                  
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-iron-grey/30">{project.role}</span>
                    <h3 className="text-3xl font-plus font-bold text-iron-grey tracking-tight group-hover:text-blue-bell transition-colors">{project.title}</h3>
                    <p className="text-iron-grey/60 text-sm leading-relaxed font-medium line-clamp-3">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-6 opacity-40 group-hover:opacity-100 transition-opacity">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-card-bg rounded-lg text-[9px] font-bold uppercase tracking-widest text-iron-grey/60 border border-iron-grey/5">
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

        {/* --- CALL TO ACTION --- */}
        <section className="py-24 px-6 max-w-5xl mx-auto text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-iron-grey rounded-[3rem] p-12 md:p-24 relative overflow-hidden"
            >
               <div className="absolute inset-0 bg-gradient-to-br from-blue-bell/20 to-transparent opacity-50" />
               <div className="relative z-10 space-y-10">
                  <h2 className="text-4xl md:text-6xl font-plus font-extrabold text-white leading-tight">{home.cta.headline.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</h2>
                  <div className="flex flex-wrap justify-center gap-6">
                     <Link to="/contact" className="bg-white text-iron-grey px-10 py-5 rounded-full font-bold hover:bg-blue-bell hover:text-white transition-all text-lg shadow-xl shadow-white/5">
                        Initiate Connection
                     </Link>
                     <a href={personal.resumePath} className="px-10 py-5 border border-white/20 rounded-full font-bold text-white hover:bg-white/10 transition-all text-lg">
                        Download CV
                     </a>
                  </div>
               </div>
            </motion.div>
        </section>

      </div>
    </ReactLenis>
  );
}