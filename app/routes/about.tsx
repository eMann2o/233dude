import { Link } from "react-router";
import { motion } from "framer-motion";
import { ArrowRight, User, Quote } from "lucide-react";
import { getPersonal, getAbout, resolveIcon } from "~/data/data";
import { getTextColor } from "~/src/lib/utils";

export function meta() {
  return [
    { title: "About | Emmanuel Opoku" },
    { name: "description", content: "About Emmanuel Opoku — Backend & Data Engineer" },
  ];
}

const personal = getPersonal();
const about = getAbout();

export default function About() {
  return (
      <div className="min-h-screen overflow-hidden pt-32 pb-20 relative">

        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Persona & Perspective</span>
            <h1 className="font-plus text-5xl md:text-7xl text-gray-900 leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              Building the invisible <br />
              <span className="gradient-text italic">logic of the future.</span>
            </h1>
          </motion.div>

          {/* Main Content Bento */}
          <div className="grid md:grid-cols-12 gap-8 mb-32">

            {/* Left: Narrative */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bento-card p-10 md:p-14 space-y-10"
            >
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-bell" />
                  <h2 className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em]">The Mission</h2>
                </div>
                <p className="text-2xl md:text-3xl font-plus font-bold text-gray-900 leading-tight mb-8">
                  Undergraduate IT student at <span className="text-blue-bell">{about.mission.university}</span> ({about.mission.universityYear}), obsessed with the bridge between raw data and system intelligence.
                </p>
                <p className="text-gray-500 text-lg leading-relaxed">
                  {about.mission.description}
                </p>
              </section>

              <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-black/[0.06]">
                {about.focuses.map((focus) => {
                  const Icon = resolveIcon(focus.icon);
                  return (
                    <div key={focus.title}>
                      <h3 className="text-gray-900 font-bold flex items-center gap-2 mb-4">
                        <Icon size={18} className={getTextColor(focus.color)} /> {focus.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {focus.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right: Profile & DNA */}
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
                <div className="absolute inset-0 bg-gray-50 flex hidden items-center justify-center flex-col gap-3 z-0">
                  <User className="text-gray-200" size={48} />
                  <span className="text-gray-300 text-[10px] font-bold uppercase tracking-[0.3em]">Photo Coming Soon</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-white to-transparent z-20">
                  <h3 className="text-gray-900 font-plus font-bold text-xl">{personal.name}</h3>
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mt-1">{personal.title}</p>
                </div>
              </motion.div>

              {/* DNA Card */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bento-card"
              >
                <div className="space-y-6">
                  {about.dnaCards.map((item, i) => {
                    const Icon = resolveIcon(item.icon);
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <div className={`p-3 bg-gray-100 rounded-xl ${getTextColor(item.color)}`}>
                          <Icon size={18} />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-gray-900">{item.text}</p>
                          <p className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">{item.sub}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Real-World Exposure */}
          <section className="mb-32">
            <div className="max-w-4xl">
              <h2 className="font-plus text-4xl font-extrabold text-gray-900 mb-12">Real-World <span className="gradient-text">Exposure.</span></h2>
              <div className="grid md:grid-cols-3 gap-6">
                {about.exposure.map((item, i) => (
                  <div key={i} className="bento-card">
                    <span className="text-3xl font-plus font-bold text-gray-100 block mb-6">0{i + 1}</span>
                    <h4 className="text-gray-900 font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-[10px] text-blue-bell/60 font-bold uppercase tracking-widest mb-4">{item.org}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Principles */}
          <section>
            <div className="grid md:grid-cols-4 gap-6">
              {about.principles.map((card, i) => {
                const CardIcon = resolveIcon(card.icon);
                return (
                  <motion.div
                    key={i}
                    whileHover={{ y: -8 }}
                    className="bento-card"
                  >
                    <div className="bg-gray-100 p-3 rounded-xl text-blue-bell mb-6 w-fit">
                      <CardIcon size={20} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg leading-tight">{card.title}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">{card.desc}</p>
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
              <div className="flex justify-center text-gray-200">
                <Quote size={60} />
              </div>
              <p className="text-2xl md:text-3xl font-plus font-bold text-gray-700 italic max-w-2xl mx-auto">
                "{about.quote}"
              </p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-blue-bell font-bold hover:gap-4 transition-all group">
                See these principles in action <ArrowRight size={20} className="group-hover:text-gray-900" />
              </Link>
            </motion.div>
          </section>

        </div>
      </div>
  );
}