import { Link } from "react-router";
import { motion } from "framer-motion";
import { CheckCircle2, Cpu, Zap } from "lucide-react";
import { getSkills, resolveIcon } from "~/data/data";
import { getTextColor, getBgColor } from "~/src/lib/utils";

export function meta() {
  return [
    { title: "Skills | Emmanuel Opoku" },
    { name: "description", content: "Engineering capability matrix of Emmanuel Opoku" },
  ];
}

const skillsData = getSkills();

export default function Skills() {
  return (
      <div className="min-h-screen overflow-hidden pt-32 pb-20 relative noise-overlay">
        <div className="container mx-auto px-6 max-w-6xl relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Technical Depth</span>
            <h1 className="font-plus text-5xl md:text-7xl text-white leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              The Engineering <br />
              <span className="gradient-text italic">Capability Matrix.</span>
            </h1>
            <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
              Weighted toward core disciplines of data engineering and backend systems, with a focus on where data is produced and how it serves the enterprise.
            </p>
          </motion.div>

          {/* Primary Skills */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-2 h-2 rounded-full bg-blue-bell animate-pulse shadow-lg shadow-blue-bell/50" />
              <h2 className="text-2xl font-plus font-bold text-white">Core Specializations</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {skillsData.primary.map((skill, idx) => {
                const SkillIcon = resolveIcon(skill.icon);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bento-card group flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-8">
                      <div className={`p-4 rounded-2xl bg-white/[0.05] ${getTextColor(skill.color)}`}>
                        <SkillIcon size={28} />
                      </div>
                      <span className="text-[10px] font-bold text-white/15 uppercase tracking-[0.2em]">Primary 0{idx + 1}</span>
                    </div>

                    <h3 className="text-3xl font-plus font-bold text-white mb-4 group-hover:text-blue-bell transition-colors">{skill.category}</h3>
                    <p className="text-white/35 text-base mb-8 leading-relaxed">
                      {skill.desc}
                    </p>

                    <div className="grid grid-cols-2 gap-4 mt-auto">
                      {skill.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-blue-bell/30" />
                          <span className="text-sm font-bold text-white/60 tracking-tight">{item}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Supporting Skills */}
          <div className="mb-24">
            <h2 className="text-2xl font-plus font-bold text-white/50 mb-12">Supporting Domains</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {skillsData.supporting.map((skill, idx) => {
                const SkillIcon = resolveIcon(skill.icon);
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="bento-card"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 bg-white/[0.05] rounded-xl text-white/50">
                        <SkillIcon size={20} />
                      </div>
                      <h3 className="font-bold text-white text-xl">{skill.category}</h3>
                    </div>
                    <p className="text-white/30 text-sm mb-6 leading-relaxed">{skill.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span key={i} className="px-4 py-2 bg-white/[0.03] border border-white/[0.06] rounded-xl text-xs font-bold text-white/50">
                          {item}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Actively Learning */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden border border-white/[0.06]"
            style={{ background: 'linear-gradient(135deg, rgba(57,160,237,0.06) 0%, rgba(20,20,22,1) 50%, rgba(154,122,160,0.06) 100%)' }}
          >
             <div className="absolute top-0 right-0 p-12 opacity-[0.03] text-white">
                <Cpu size={200} strokeWidth={1} />
              </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-blue-bell animate-pulse shadow-lg shadow-blue-bell/50" />
                <h2 className="text-3xl font-plus font-bold text-white">Actively Building Toward</h2>
              </div>
              <p className="text-white/40 text-lg mb-12 max-w-xl leading-relaxed">
                The modern engineering ecosystem. Currently deepening proficiency in distributed high-frequency data processing and transformation layers.
              </p>
              <div className="flex flex-wrap gap-4">
                {skillsData.learning.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-6 py-3 bg-white/[0.04] border border-white/[0.08] rounded-full text-white/70 text-sm font-bold hover:bg-blue-bell/10 hover:border-blue-bell/20 transition-colors">
                    <Zap size={14} className="text-blue-bell" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
  );
}