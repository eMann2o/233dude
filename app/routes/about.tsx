import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, User, Quote } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { getPersonal, getAbout, resolveIcon } from "~/data/data";

const personal = getPersonal();
const about = getAbout();

export default function About() {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden pt-32 pb-20">

        <div className="container mx-auto px-6 max-w-6xl">

          {/* --- HEADER --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Persona & Perspective</span>
            <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              Building the invisible <br />
              <span className="gradient-text italic">logic of the future.</span>
            </h1>
          </motion.div>

          {/* --- MAIN CONTENT BENTO --- */}
          <div className="grid md:grid-cols-12 gap-8 mb-32">

            {/* LEFT: Major Narrative (Bento 8) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bento-card p-10 md:p-14 space-y-10"
            >
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-bell" />
                  <h2 className="text-sm font-bold text-iron-grey/40 uppercase tracking-[0.2em]">The Mission</h2>
                </div>
                <p className="text-2xl md:text-3xl font-plus font-bold text-iron-grey leading-tight mb-8">
                  Undergraduate IT student at <span className="text-blue-bell">{about.mission.university}</span> ({about.mission.universityYear}), obsessed with the bridge between raw data and system intelligence.
                </p>
                <p className="text-iron-grey/60 text-lg leading-relaxed">
                  {about.mission.description}
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-iron-grey/5">
                {about.focuses.map((focus) => {
                  const Icon = resolveIcon(focus.icon);
                  return (
                    <div key={focus.title}>
                      <h3 className="text-iron-grey font-bold flex items-center gap-2 mb-4">
                        <Icon size={18} className={`text-${focus.color}`} /> {focus.title}
                      </h3>
                      <p className="text-iron-grey/60 text-sm leading-relaxed">
                        {focus.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT: Profile & DNA (Bento 4) */}
            <div className="md:col-span-4 space-y-8">
              {/* Profile Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bento-card !p-0 aspect-[4/5] relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-blue-bell/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img
                  src={personal.profileImage}
                  alt={personal.name}
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    if (target.nextElementSibling) (target.nextElementSibling as HTMLElement).style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 bg-iron-grey flex hidden items-center justify-center flex-col gap-3 z-0">
                  <User className="text-white/20" size={48} />
                  <span className="text-white/20 text-[10px] font-bold uppercase tracking-[0.3em]">Photo Coming Soon</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-iron-grey to-transparent z-20">
                  <h3 className="text-white font-plus font-bold text-xl">{personal.name}</h3>
                  <p className="text-white/60 text-xs font-bold uppercase tracking-widest mt-1">{personal.title}</p>
                </div>
              </motion.div>

              {/* DNA Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card-bg border border-iron-grey/5 rounded-[2.5rem] p-8"
              >
                <div className="space-y-6">
                  {about.dnaCards.map((item, i) => {
                    const Icon = resolveIcon(item.icon);
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`p-3 bg-white rounded-xl shadow-sm text-${item.color}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-iron-grey">{item.text}</p>
                          <p className="text-[10px] text-iron-grey/40 uppercase tracking-widest font-bold">{item.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- REAL-WORLD EXPOSURE --- */}
          <section className="mb-32">
            <div className="max-w-4xl">
              <h2 className="font-plus text-4xl font-extrabold text-iron-grey mb-12">Real-World <span className="gradient-text">Exposure.</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {about.exposure.map((item, i) => (
                  <div key={i} className="p-8 rounded-[2rem] bg-card-bg border border-iron-grey/5 hover:border-blue-bell/10 transition-all hover:bg-white">
                    <span className="text-3xl font-plus font-bold text-blue-bell/20 block mb-6">0{i + 1}</span>
                    <h4 className="text-iron-grey font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-[10px] text-blue-bell font-bold uppercase tracking-widest mb-4">{item.org}</p>
                    <p className="text-iron-grey/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* --- CORE PRINCIPLES --- */}
          <section>
            <div className="grid md:grid-cols-4 gap-6">
              {about.principles.map((card, i) => {
                const CardIcon = resolveIcon(card.icon);
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="bento-card hover:border-blue-bell/20"
                  >
                    <div className="bg-white p-3 rounded-xl shadow-sm text-blue-bell mb-6 w-fit">
                      <CardIcon size={20} />
                    </div>
                    <h3 className="font-bold text-iron-grey mb-3 text-lg leading-tight">{card.title}</h3>
                    <p className="text-xs text-iron-grey/50 leading-relaxed font-medium">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mt-24 text-center space-y-8"
            >
              <div className="flex justify-center text-blue-bell/20">
                <Quote size={60} />
              </div>
              <p className="text-2xl md:text-3xl font-plus font-bold text-iron-grey italic max-w-2xl mx-auto">
                "{about.quote}"
              </p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-blue-bell font-bold hover:gap-4 transition-all group">
                See these principles in action <ArrowRight size={20} className="group-hover:text-iron-grey" />
              </Link>
            </motion.div>
          </section>

        </div>
      </div>
    </ReactLenis>
  );
}