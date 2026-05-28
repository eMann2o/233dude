import { Link } from "react-router";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, CheckCircle2, ArrowRight, Building2 } from "lucide-react";
import { ReactLenis } from "lenis/react";
import { getExperience, resolveIcon } from "~/data/data";

const experienceData = getExperience();
const EXPERIENCE = experienceData.jobs;
const LESSONS = experienceData.lessons;

export default function Experience() {
  return (
    <ReactLenis root>
      <div className="bg-white min-h-screen font-sans selection:bg-blue-bell/20 selection:text-iron-grey overflow-hidden pt-32 pb-20">

        <div className="container mx-auto px-6 max-w-5xl">

          {/* --- HEADER --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-24 space-y-6"
          >
            <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Professional Journey</span>
            <h1 className="font-plus text-5xl md:text-7xl text-iron-grey leading-[0.9] tracking-tight font-extrabold max-w-4xl">
              From internships to <br />
              <span className="gradient-text italic">engineered impact.</span>
            </h1>
            <p className="text-iron-grey/60 max-w-2xl text-lg leading-relaxed">
              My path has been shaped by diverse environments — from high-stakes corporate mining to large-scale national infrastructure — resulting in a deeply pragmatic approach to system design.
            </p>
          </motion.div>

          {/* --- TIMELINE --- */}
          <div className="relative space-y-12 mb-32">
            <div className="absolute left-[20px] md:left-[50%] top-0 bottom-0 w-px bg-iron-grey/5 hidden md:block" />
            
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
                  {/* Timeline dot */}
                  <div className="absolute left-[14px] md:left-[50%] md:ml-[-6px] top-6 w-3 h-3 rounded-full bg-white border-2 border-blue-bell z-20" />

                  <div className="flex-1 w-full pl-12 md:pl-0">
                    <div className="bento-card group hover:border-blue-bell/10">
                      <div className="flex items-center justify-between mb-8">
                         <div className={`p-4 rounded-2xl bg-white shadow-sm text-${job.color}`}>
                          <JobIcon size={24} />
                        </div>
                        <span className="text-[10px] font-bold text-iron-grey/20 uppercase tracking-[0.2em]">{job.type}</span>
                      </div>

                      <h2 className="text-2xl font-plus font-bold text-iron-grey mb-1 group-hover:text-blue-bell transition-colors">{job.role}</h2>
                      <div className="flex flex-wrap items-center gap-4 mb-6">
                        <span className="text-blue-bell/60 font-bold text-xs uppercase tracking-widest">{job.company}</span>
                        <span className="text-iron-grey/30 text-xs font-medium flex items-center gap-1">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>

                      <div className="mb-8 p-3 rounded-xl bg-card-bg border border-iron-grey/5 inline-flex items-center gap-2">
                         <ShieldCheck size={14} className="text-blue-bell" />
                         <span className="text-[10px] font-bold text-iron-grey/60 uppercase tracking-widest">Key Takeaway: {job.takeaway}</span>
                      </div>

                      <ul className="space-y-4">
                        {job.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-4">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-bell/20 shrink-0" />
                            <p className="text-sm text-iron-grey/60 leading-relaxed font-medium">{point}</p>
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

          {/* --- LESSONS --- */}
          <section className="mb-32">
             <h2 className="text-4xl font-plus font-extrabold text-iron-grey mb-12">Universal <span className="gradient-text">Lessons.</span></h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {LESSONS.map((lesson, i) => (
                 <div key={i} className="bg-card-bg border border-iron-grey/5 p-8 rounded-[2rem] hover:bg-white hover:border-blue-bell/10 transition-all">
                    <CheckCircle2 size={24} className="text-blue-bell mb-6 opacity-30" />
                    <p className="text-iron-grey/70 font-bold leading-tight">{lesson}</p>
                 </div>
               ))}
             </div>
          </section>

          {/* --- CTA --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-iron-grey text-white rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-12 opacity-5 text-white">
                <Building2 size={300} strokeWidth={1} />
              </div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <span className="text-blue-bell font-bold tracking-widest uppercase text-xs block">Ready to Build</span>
              <h2 className="text-4xl md:text-5xl font-plus font-extrabold leading-tight">Focusing on high-stakes <br />backend challenges.</h2>
              <p className="text-white/60 text-lg leading-relaxed">
                I am looking for roles where I can contribute to core infrastructure, distributed systems, and the data foundations of high-growth engineering teams.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-3 bg-white text-iron-grey px-10 py-5 rounded-full font-bold hover:bg-blue-bell hover:text-white transition-all group">
                Discuss Opportunities <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </ReactLenis>
  );
}