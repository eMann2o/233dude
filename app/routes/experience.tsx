import { Link } from "react-router";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { getExperience, resolveIcon } from "~/data/data";
import { getTextColor } from "~/src/lib/utils";

export function meta() {
  return [
    { title: "Experience | Emmanuel Opoku" },
    { name: "description", content: "Professional experience of Emmanuel Opoku" },
  ];
}

const experienceData = getExperience();
const EXPERIENCE = experienceData.jobs;
const LESSONS = experienceData.lessons;

export default function Experience() {
  return (
      <div className="min-h-screen overflow-hidden pt-32 pb-20 relative noise-overlay">
        <div className="container mx-auto px-6 max-w-5xl relative z-10">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Professional Journey</span>
            <h1 className="font-plus text-5xl md:text-7xl text-white leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              From internships to <br />
              <span className="gradient-text italic">engineered impact.</span>
            </h1>
            <p className="text-white/40 max-w-2xl text-lg leading-relaxed">
              My path has been shaped by diverse environments — from high-stakes corporate mining to large-scale national infrastructure — resulting in a deeply pragmatic approach to system design.
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-12 mb-32">
            {/* Glowing timeline line */}
            <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(180deg, rgba(57,160,237,0.3) 0%, rgba(154,122,160,0.2) 50%, transparent 100%)' }} />
            
            {EXPERIENCE.map((job, index) => {
              const JobIcon = resolveIcon(job.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col md:flex-row gap-8 items-start 
                    ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Glowing timeline dot */}
                  <div className="absolute left-[14px] md:left-[50%] md:ml-[-6px] top-6 w-3 h-3 rounded-full bg-blue-bell z-20 shadow-lg shadow-blue-bell/50" />

                  <div className="flex-1 w-full pl-12 md:pl-0">
                    <div className="bento-card group">
                      <div className="flex items-center justify-between mb-8">
                         <div className={`p-4 rounded-2xl bg-white/[0.05] ${getTextColor(job.color)}`}>
                          <JobIcon size={24} />
                        </div>
                        <span className="text-[10px] font-bold text-white/15 uppercase tracking-[0.2em]">{job.type}</span>
                      </div>

                      <h2 className="text-2xl font-plus font-bold text-white mb-1 group-hover:text-blue-bell transition-colors">{job.role}</h2>
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-blue-bell/50 font-bold text-xs uppercase tracking-widest">{job.company}</span>
                        <span className="text-white/20 text-xs font-medium flex items-center gap-1">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>

                      <div className="mb-8 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] inline-flex items-center gap-2">
                         <ShieldCheck size={14} className="text-blue-bell" />
                         <span className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Key Takeaway: {job.takeaway}</span>
                      </div>

                      <ul className="space-y-4">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-bell/30 shrink-0" />
                            <p className="text-sm text-white/40 leading-relaxed font-medium">{point}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>

          {/* Lessons */}
          <section className="mb-32">
             <h2 className="text-4xl font-plus font-extrabold text-white mb-12">Universal <span className="gradient-text">Lessons.</span></h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {LESSONS.map((lesson, i) => (
                 <div key={i} className="bento-card">
                    <CheckCircle2 size={24} className="text-blue-bell/20 mb-6" />
                    <p className="text-white/60 font-bold leading-tight">{lesson}</p>
                 </div>
               ))}
             </div>
          </section>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/[0.06]"
            style={{ background: 'linear-gradient(135deg, rgba(57,160,237,0.06) 0%, rgba(20,20,22,1) 50%, rgba(154,122,160,0.06) 100%)' }}
          >
             <div className="absolute top-0 right-0 p-12 opacity-[0.02] text-white">
                <Building2 size={300} strokeWidth={1} />
              </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Ready to Build</span>
              <h2 className="text-4xl md:text-5xl font-plus font-extrabold text-white leading-tight">Focusing on high-stakes <br />backend challenges.</h2>
              <p className="text-white/40 text-lg leading-relaxed">
                I am looking for roles where I can contribute to core infrastructure, distributed systems, and the data foundations of high-growth engineering teams.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 glow-btn px-10 py-5 rounded-full font-bold group">
                Discuss Opportunities <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
  );
}