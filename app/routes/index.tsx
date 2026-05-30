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
import DotMatrix from "~/components/DotMatrix";

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
      <div ref={containerRef} className="min-h-screen overflow-hidden relative">
        
        {/* === HERO SECTION === */}
        <section className="relative min-h-[95vh] flex flex-col items-center justify-center pt-32 pb-20 px-6">
          {/* Animated dot matrix background */}
          <div className="absolute inset-0 overflow-hidden">
            <DotMatrix />
          </div>

          <motion.div 
            style={{ y: heroY, opacity }}
            className="relative z-10 max-w-5xl mx-auto text-center space-y-10"
          >
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-black/[0.08] bg-white/70 backdrop-blur-md text-gray-500 text-[13px] font-bold tracking-tight shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-lg shadow-emerald-400/50" /> 
              {personal.statusBadge}
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
            >
              <h1 className="font-plus text-6xl md:text-[5.5rem] text-gray-900 leading-[0.9] tracking-[-0.04em] font-extrabold text-balance">
                {hero.headline} <br />
                <span className="gradient-text italic">{hero.headlineAccent}</span>
              </h1>
            </motion.div>

            {/* Sub-headline */}
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium"
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
              <Link to="/projects" className="glow-btn px-8 py-4 rounded-full font-bold flex items-center gap-2">
                View Engineering Projects
                <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="px-8 py-4 rounded-full font-bold text-gray-500 border border-black/[0.1] hover:border-gray-400 hover:text-gray-900 transition-all bg-white">
                The Persona
              </Link>
            </motion.div>

            {/* Signals */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-20 flex flex-wrap justify-center items-center gap-12 text-gray-300 hover:text-gray-500 transition-all duration-700"
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
            <h2 className="text-4xl md:text-5xl font-plus font-bold text-gray-900 tracking-tight">The Systems Mindset</h2>
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
                    <span className={`text-5xl font-plus font-extrabold ${card.highlight ? "text-blue-bell/[0.08]" : "text-gray-100"} mb-8 block`}>{card.number}</span>
                    <div className={`${card.highlight 
                      ? "w-14 h-14 bg-blue-bell/10 rounded-2xl flex items-center justify-center text-blue-bell mb-6 animate-pulse-slow" 
                      : `w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center ${card.color === "lavender" ? "text-lavender" : "text-blue-bell/60"} mb-6`}`}
                    >
                      <Icon size={card.highlight ? 28 : 24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{card.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium">
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
              className="relative h-[450px] rounded-[3rem] p-8 flex items-center justify-center border border-black/[0.06] bg-white"
              style={{ boxShadow: '0 4px 40px -10px rgba(57, 160, 237, 0.08)' }}
            >
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={SKILL_DATA}>
                  <PolarGrid stroke="rgba(0,0,0,0.06)" />
                  <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(0,0,0,0.5)', fontSize: 11, fontWeight: 700, fontFamily: 'Plus Jakarta Sans' }} />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                  <Radar
                    name="Skills"
                    dataKey="A"
                    stroke="#39A0ED"
                    strokeWidth={2}
                    fill="#39A0ED"
                    fillOpacity={0.12}
                  />
                </RadarChart>
              </ResponsiveContainer>
              
              {/* Floating Metric */}
              <div className="absolute -bottom-4 -right-4 border border-black/[0.06] bg-white rounded-2xl p-6 shadow-lg flex items-center gap-4">
                 <div className="w-12 h-12 bg-blue-bell/10 text-blue-bell rounded-xl flex items-center justify-center">
                    <TrendingUp size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">Efficiency</p>
                    <p className="text-xl font-bold text-gray-900">Scalable Systems</p>
                 </div>
              </div>
            </motion.div>

            <div className="space-y-10">
              <span className="text-blue-bell font-bold text-xs uppercase tracking-widest bg-blue-bell/[0.06] px-4 py-2 rounded-full border border-blue-bell/15">{home.radarSection.badge}</span>
              <h2 className="text-4xl md:text-6xl font-plus font-bold text-gray-900 leading-[0.9] tracking-tight">
                {home.radarSection.headline} <br />
                <span className="gradient-text italic">{home.radarSection.headlineAccent}</span>
              </h2>
              <p className="text-gray-500 text-xl leading-relaxed font-medium">
                {home.radarSection.description}
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-6 border-t border-black/[0.06]">
                {home.radarSection.stats.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <h4 className={`text-2xl font-bold font-plus ${getTextColor(stat.color)}`}>{stat.value}</h4>
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-[0.2em]">{stat.label}</p>
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
              <h2 className="text-4xl md:text-5xl font-plus font-bold text-gray-900 tracking-tight">Selected Engineering Works</h2>
            </div>
            <Link to="/projects" className="group flex items-center gap-3 text-gray-400 font-bold hover:text-blue-bell transition-all duration-300">
              View All Projects
              <div className="p-3 border border-black/[0.08] rounded-full group-hover:bg-blue-bell/10 group-hover:border-blue-bell/30 group-hover:text-blue-bell transition-all">
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
                  <div className="p-4 w-fit rounded-xl bg-gray-100 text-gray-400 mb-12 group-hover:text-blue-bell group-hover:bg-blue-bell/10 transition-all">
                     <Code2 size={24} />
                  </div>
                  
                  <div className="space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-300">{project.role}</span>
                    <h3 className="text-3xl font-plus font-bold text-gray-900 tracking-tight group-hover:text-blue-bell transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed font-medium line-clamp-3">{project.desc}</p>
                    
                    <div className="flex flex-wrap gap-2 pt-6 opacity-50 group-hover:opacity-80 transition-opacity">
                      {project.tech.map(t => (
                        <span key={t} className="px-3 py-1 bg-gray-100 rounded-lg text-[9px] font-bold uppercase tracking-widest text-gray-500 border border-gray-200">
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
              className="rounded-[3rem] p-12 md:p-24 relative overflow-hidden border border-black/[0.06]"
              style={{ background: 'linear-gradient(135deg, rgba(57,160,237,0.04) 0%, #FFFFFF 50%, rgba(154,122,160,0.04) 100%)' }}
            >
               {/* Ambient orb */}
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-bell/5 rounded-full blur-[120px]" />
               
               <div className="relative z-10 space-y-10">
                  <h2 className="text-4xl md:text-6xl font-plus font-extrabold text-gray-900 leading-tight">{home.cta.headline.split('\n').map((line, i) => <span key={i}>{line}<br /></span>)}</h2>
                  <div className="flex flex-wrap justify-center gap-6">
                     <Link to="/contact" className="glow-btn px-10 py-5 rounded-full font-bold text-lg">
                        Get in Touch
                     </Link>
                     <a href={personal.resumePath} className="px-10 py-5 border border-black/[0.1] rounded-full font-bold text-gray-500 hover:text-gray-900 hover:border-gray-400 transition-all text-lg bg-white">
                        Download CV
                     </a>
                  </div>
               </div>
            </motion.div>
        </section>

      </div>
  );
}